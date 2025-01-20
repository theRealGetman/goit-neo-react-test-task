import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

const limit = 10;
let hasNextPage = false;

const filterToRequestParams = (filter) => {
  if (!filter) {
    return {};
  }

  const equipment = {};
  filter.equipment.forEach((equipmentItem) => {
    if (equipmentItem === "automatic") {
      equipment["transmission"] = "automatic";
    } else {
      equipment[equipmentItem] = true;
    }
  });

  const form = filter.type;
  const location = filter.location;

  return {
    location,
    form,
    ...equipment,
  };
};

export const fetchCampers = createAsyncThunk(
  "contacts/fetch",
  async (filter, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: { ...filterToRequestParams(filter), limit: limit, page: 1 },
      });
      hasNextPage = response.data.total > limit;
      return { items: response.data.items, hasNextPage };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchMoreCampers = createAsyncThunk(
  "contacts/fetchMore",
  async (filter, thunkAPI) => {
    try {
      if (!hasNextPage) {
        return [];
      }

      const nextPage = filter.page + 1;
      const response = await axios.get("/campers", {
        params: {
          ...filterToRequestParams(filter),
          limit: limit,
          page: nextPage,
        },
      });

      hasNextPage = response.data.total > nextPage * limit;
      return { items: response.data.items, hasNextPage };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
