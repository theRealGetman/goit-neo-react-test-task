import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCamperDetails = createAsyncThunk(
  "details/fetch",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addBooking = createAsyncThunk(
  "details/addBooking",
  async (values, thunkAPI) => {
    try {
      // mock api request, wait for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return true;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
