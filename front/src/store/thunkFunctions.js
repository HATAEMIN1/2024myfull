import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../utils/axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (body, thunkAPI) => {
    try {
      const res = await axiosInstance.post('/user/login', body);
      return res.data;
    } catch (error) {
      // throw err; // 에러 재throw
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

export const authUser = createAsyncThunk(
  'user/authUser',
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get('/user/auth');
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data || err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.post('/user/logout');
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data || err.message);
    }
  }
);
