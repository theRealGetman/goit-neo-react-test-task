import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchMoreCampers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.page = 1;
        state.hasMore = true;
        state.items = [];
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.page = 1;
        state.hasMore = action.payload.hasNextPage;
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchMoreCampers.pending, handlePending)
      .addCase(fetchMoreCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.page = state.page + 1;
        state.hasMore = action.payload.hasNextPage;
        state.items = [...state.items, ...action.payload.items];
      })
      .addCase(fetchMoreCampers.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
