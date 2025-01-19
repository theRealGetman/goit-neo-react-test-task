import { createSelector } from "@reduxjs/toolkit";
import { selectFavorites } from "../favorites/selectors";

export const selectDetails = (state) => state.details.item;

export const selectFavoredDetails = createSelector(
  [selectFavorites, selectDetails],
  (favorites, camper) => {
    camper.favored = favorites.some((favorite) => favorite.id === camper.id);
    return camper;
  },
);

export const selectDetailsLoading = (state) => state.contacts.loading;

export const selectDetailsError = (state) => state.contacts.error;
