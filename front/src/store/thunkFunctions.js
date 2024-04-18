import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../utils/axios';

export const loginUser = createAsyncThunk('user/loginUser', async (body) => {
  try {
    const res = await axiosInstance.post('/user/login', body);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const authUser = createAsyncThunk('user/authUser', async (_) => {
  try {
    const res = await axiosInstance.get('/user/auth');
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
