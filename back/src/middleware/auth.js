const jwt = require("jsonwebtoken");
const User = require("../models/User");

let auth = async (req, res, next) => {
  //토큰을 가져오기
  const authHeader = req.headers["authorization"];
  //Bearer 알고리즘.데이터.시크릿키
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.status(401);
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: decode.userId });
    if (!user) {
      return res.status(400).send("없는 유저입니다.");
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = auth;
