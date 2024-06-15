import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://127.0.0.1:5000";

interface IFormInputSignUp {
  name: string;
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: IFormInputSignUp, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendURL}/register`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);
