import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onChange" });
  // const onSubmit = (data) => console.log(data);
  async function onSubmit({ email, name, password }) {
    const body = {
      email,
      name,
      password,
    };
    try {
      const response = await axios.post("/user/register", body);
      console.log("요청 성공");

      toast.info("🦄 회원가입을 성공하였습니다!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("요청실패 :", error);
      toast.info("😢😢 회원가입을 실패하였습니다", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    console.log(body);

    reset();
  }
  const userEmail = {
    required: { value: true, message: "이메일 필수" },
    pattern: { value: /^\S+@\S+$/i, message: "이메일을 입력" },
    minLength: {
      value: 6,
      message: "최소 6자입니다",
    },
  };
  const userName = {
    required: { value: true, message: "이름은 필수" },
    minLength: {
      value: 2,
      message: "최소 2자입니다",
    },
  };

  const userPassword = {
    required: { value: true, message: "비밀번호는 필수" },
    minLength: {
      value: 4,
      message: "최소 4자입니다",
    },
  };
  return (
    <>
      <section className="flex max-w-[400px] rounded-md shadow-md m-auto mt-20 bg-white ">
        <div className="p-6  w-full  ">
          <h2 className="text-center text-2xl font-semibold mb-4">회원가입</h2>
          <hr className="mb-4"></hr>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500 mb-3 flex"
              >
                이메일
              </label>
              <input
                className="border w-full rounded-md p-2 text-xs"
                type="text"
                id="email"
                placeholder="이메일을 입력하세요"
                {...register("email", userEmail)}
              />
              {errors.email && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-500 mb-3 flex"
                >
                  이름
                </label>
                <input
                  className="border w-full rounded-md p-2 text-xs"
                  type="text"
                  id="name"
                  placeholder="이름을 입력하세요"
                  {...register("name", userName)}
                />
                {errors.name && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className="mb-1">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500 mb-3 flex"
                >
                  비밀번호
                </label>
                <input
                  className="border w-full rounded-md p-2 text-xs"
                  type="password"
                  id="name"
                  placeholder="비밀번호를 입력하세요"
                  {...register("password", userPassword)}
                />
                {errors.password && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <input
                  className="border w-full rounded-md p-2 text-xs"
                  type="password"
                  id="passwordConfirm"
                  placeholder="비밀번호를 확인입니다"
                  {...register("passwordConfirm", {
                    validate: (value) => {
                      return value === watch("password") || "비밀번호 일치안함";
                    },
                  })}
                />
                {errors.passwordConfirm && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.passwordConfirm.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <button className="w-full bg-gray-800 rounded-md text-white py-2 hover:bg-slate-400">
                  회원가입
                </button>
              </div>
              <div className="text-center text-xs">
                아이디가 있다면 <a href="./login">로그인</a>하세요
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
