import { GET_SONGS, GET_SONGS_ERROR } from "../actions/actions";

const initialState = {
  songList: [],
  error: false,
};

const getSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songList: action.payload,
      };
    case GET_SONGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getSongsReducer;
