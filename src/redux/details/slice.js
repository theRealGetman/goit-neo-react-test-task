import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperDetails } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    item: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperDetails.pending, handlePending)
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, handleRejected);
  },
});

export const detailsReducer = detailsSlice.reducer;
