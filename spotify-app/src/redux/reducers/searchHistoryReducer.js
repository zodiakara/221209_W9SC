import { SEARCH_SONGS } from "../actions/actions";

const initialState = {
  search: [],
};

const searchHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SONGS:
      return {
        ...state,
        search: [...state.search, action.payload],
      };

    default:
      return state;
  }
};

export default searchHistoryReducer;
