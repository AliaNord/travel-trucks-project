import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import formMapping from "../../data/forms.json";

export const fetchCampersThunk = createAsyncThunk(
  "fetchCampers",
  async (
    filters = {
      query: "",
      page: 1,
      limit: 4,
    },
    thunkApi
  ) => {
    try {
      const params = {
        query: "",
        page: filters.page || 1,
        limit: filters.limit || 4,
      };

      if (filters.location) {
        const location = filters.location.split(", ").reverse().join(", ");
        params.location = location;
      }
      if (filters.form) {
        const normalizedForm = filters.form.toLowerCase();
        params.form = formMapping[normalizedForm] || normalizedForm;
      }

      if (filters.equipment && filters.equipment.length > 0) {
        filters.equipment.forEach((equip) => {
          if (equip.length > 2) {
            params[equip.toLowerCase()] = true;
          } else {
            params[equip.toUpperCase()] = true;
          }
        });
      }
      const res = await api.get("campers", { params });
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
