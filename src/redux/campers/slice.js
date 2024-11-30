import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperByIdThunk, fetchCampersThunk } from "./operations";

const initialState = {
  campers: [],
  camperById: null,
  loading: false,
  error: null,
  currentPage: 1,
  hasMore: true,
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage(state) {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.campers = [...state.campers, ...action.payload.items];
        state.hasMore = action.payload.items.length > 0;
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

export const campersReducer = slice.reducer;
