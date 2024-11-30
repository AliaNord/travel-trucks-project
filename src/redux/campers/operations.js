import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const fetchCampersThunk = createAsyncThunk(
  "fetchCampers",
  async (_, thunkApi) => {
    try {
      const res = await api.get("campers");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperByIdThunk = createAsyncThunk(
  "fetchCamperById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`campers/${id}`);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
