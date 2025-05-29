export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SELECT_FAVOURITE = "SELECT_FAVOURITE";

//Fetch MainSearch

export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR";

// Thunk
export const fetchJobs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (!response.ok) throw new Error("Error fetching jobs");

      const { data } = await response.json();
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_JOBS_ERROR, payload: error.message });
    }
  };
};

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
