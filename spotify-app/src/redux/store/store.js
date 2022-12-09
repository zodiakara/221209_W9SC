import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getSongsReducer from "../reducers/getSongsReducer";
import addToPlaylistReducer from "../reducers/addToPlaylistReducer";
import searchHistoryReducer from "../reducers/searchHistoryReducer";

const mainReducer = combineReducers({
  getSongs: getSongsReducer,
  addToPlaylist: addToPlaylistReducer,
  searchHistory: searchHistoryReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
