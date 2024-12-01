import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.campers;
export const selectCamperById = (state) => state.campers.camperById;
export const selectIsLoading = (state) => state.campers.loading;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectHasMore = (state) => state.campers.hasMore;
export const selectPage = (state) => state.campers.page;

const selectFilters = (state) => state.campers;
export const selectSelectedFilters = createSelector(
  [selectFilters],
  (filters) => ({
    location: filters.location,
    form: filters.form,
    equipment: filters.equipment,
  })
);
