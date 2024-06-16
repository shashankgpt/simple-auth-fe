import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import store from "../..";

const backendURL = "http://localhost:3000";

export const getUser = createAsyncThunk(
  "profile/getUserProfile",
  async (_data = undefined, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendURL}/profile/me`, {
        headers: {
          Authorization: `Bearer ${store.getState().auth.userToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);

