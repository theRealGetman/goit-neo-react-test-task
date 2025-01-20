export const selectDetails = (state) => state.details.item;

export const selectDetailsLoading = (state) => state.details.loading;

export const selectDetailsError = (state) => state.details.error;

export const selectReviews = (state) => state.details.item?.reviews;
