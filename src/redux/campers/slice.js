import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperByIdThunk, fetchCampersThunk } from "./operations";

const initialState = {
  campers: [],
  camperById: null,
  loading: false,
  error: null,
  currentPage: 1,
  limit: 4,
  hasMore: true,
  location: "",
  form: "",
  equipment: [],
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.location = action.payload.location || "";
      state.form = action.payload.form || "";
      state.equipment = action.payload.equipment || [];
      state.currentPage = 1;
      state.campers = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const args = action.meta.arg || {};
        const isFilterApplied =
          args.query ||
          args.location ||
          args.form ||
          (args.equipment && args.equipment.length > 0);

        const { items } = action.payload;

        if (isFilterApplied) {
          if (state.currentPage === 1) {
            state.campers = items;
          } else {
            state.campers = [...state.campers, ...items];
          }
        } else {
          const existingIds = new Set(state.campers.map((item) => item.id));
          const newCampers = action.payload.items.filter(
            (item) => !existingIds.has(item.id)
          );
          state.campers = [...state.campers, ...newCampers];
        }

        if (items.length > 0) {
          state.hasMore = items.length === state.limit;
        } else {
          state.hasMore = false;
        }
      })
      .addCase(fetchCampersThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampersThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchCamperByIdThunk.fulfilled, (state, action) => {
        state.camperById = null;
        state.campers = state.campers.filter(
          (item) => item.id === action.payload.id
        );
        state.camperById = action.payload;
      })
      .addCase(fetchCamperByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCamperByIdThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setCurrentPage, setFilters } = slice.actions;
export const campersReducer = slice.reducer;
