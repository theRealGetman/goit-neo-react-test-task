import { createSelector } from "@reduxjs/toolkit";
import { selectFavorites } from "../favorites/selectors";

export const selectCatalog = (state) => state.catalog.items;

export const selectFavoredCatalog = createSelector(
  [selectFavorites, selectCatalog],
  (favorites, campers) => {
    return campers.map((camp) => {
      return {
        ...camp,
        favored: favorites.some((favorite) => favorite.id === camp.id),
      };
    });
  },
);

export const selectCatalogLoading = (state) => state.catalog.loading;

export const selectCatalogError = (state) => state.catalog.error;

export const selectCatalogPage = (state) => state.catalog.page;

export const selectCatalogHasMore = (state) => state.catalog.hasMore;
