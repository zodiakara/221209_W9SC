import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from "../actions/actions";

const initialState = {
  playlist: [],
};

const addToPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    case REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.filter((song) => song !== action.payload),
      };
    default:
      return state;
  }
};

export default addToPlaylistReducer;
