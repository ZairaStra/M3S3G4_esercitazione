import { combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesReducer";
import selectFavouriteReducer from "./selectFavouritesReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  selectFavourite: selectFavouriteReducer,
});

export default rootReducer;
