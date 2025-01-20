import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperDetails } from "./operations";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    item: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.item = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.item = null;
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
