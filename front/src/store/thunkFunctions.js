import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../utils/axios";

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (body) => {
        try {
            const res = await axiosInstance.post("/user/login", body);
            console.log(res.data)
            return res.data;
        }catch(err) {
            console.log(err)
        }

    }
)