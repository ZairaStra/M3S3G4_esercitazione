export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SELECT_FAVOURITE = "SELECT_FAVOURITE";

export const addToFavourites = (job) => ({
  type: ADD_TO_FAVOURITES,
  payload: job,
});

export const removeFromFavourites = (companyName) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: { company_name: companyName },
});

export const selectFavourite = (job) => ({
  type: SELECT_FAVOURITE,
  payload: job,
});
