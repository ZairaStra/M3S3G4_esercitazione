import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SELECT_FAVOURITE } from "../actions";

const initialState = {
  favourites: {
    content: [],
  },
  selectFavourite: {
    content: null,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((job) => job.company_name !== action.payload.company_name),
        },
      };

    case SELECT_FAVOURITE:
      return {
        ...state,
        selectFavourite: {
          ...state.selectFavourite,
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
