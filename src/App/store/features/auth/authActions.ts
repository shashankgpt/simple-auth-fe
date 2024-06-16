import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFormInputSignIn, IFormInputSignUp } from "../../../common/types";

const backendURL = "http://localhost:3000";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: IFormInputSignUp, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendURL}/auth/signup`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: IFormInputSignIn, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendURL}/auth/signin`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);

