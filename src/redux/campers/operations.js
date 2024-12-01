import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import formMapping from "../../data/forms.json";
import toast from "react-hot-toast";

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
      const res = await api.get("campers", {
        params,
      }); // Can't fixed Error 404 :(
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("No results were found for your request.");
        return thunkApi.rejectWithValue({ items: [] });
      }
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
