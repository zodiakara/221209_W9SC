export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_ERROR = "GET_SONGS_ERROR";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const SEARCH_SONGS = "SEARCH_SONGS";

const searchEndpoint =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const getSongsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(searchEndpoint + query);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_SONGS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_SONGS_ERROR,
        payload: true,
      });
    }
  };
};

export const addToPlaylistAction = (song) => ({
  type: ADD_TO_PLAYLIST,
  payload: song,
});

export const removeFromPlaylistAction = (song) => ({
  type: REMOVE_FROM_PLAYLIST,
  payload: song,
});

export const searchSongsHistoryAction = (query) => ({
  type: SEARCH_SONGS,
  payload: query,
});
