import { ADD_TO_FAVOURITES, FETCH_JOBS_ERROR, FETCH_JOBS_SUCCESS, REMOVE_FROM_FAVOURITES, SELECT_FAVOURITE } from "../actions";

const initialState = {
  //fetch globale
  favourites: {
    content: [],
  },
  searchResults: {
    content: [],
    error: null,
  },

  selectFavourite: {
    content: null,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch globale
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        searchResults: {
          content: action.payload,
          error: null,
        },
      };

    case FETCH_JOBS_ERROR:
      return {
        ...state,
        searchResults: {
          content: [],
          error: action.payload,
        },
      };

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
