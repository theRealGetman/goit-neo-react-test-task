import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { location: null, equipment: [], type: null },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    toggleEquipment(state, action) {
      if (state.equipment.includes(action.payload)) {
        state.equipment = state.equipment.filter(
          (equipment) => equipment !== action.payload,
        );
      } else {
        state.equipment.push(action.payload);
      }
    },
    toggleType(state, action) {
      if (state.type == action.payload) {
        state.type = null;
      } else {
        state.type = action.payload;
      }
    },
  },
});

export const { changeLocation, toggleEquipment, toggleType } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
