import { ContentActionTypes } from './contentActionTypes';
import { generateContent } from '../../services/api';

// Fetches content
export const fetchContent = () => async (dispatch) => {
  dispatch({ type: ContentActionTypes.FETCH_CONTENT_REQUEST });
  try {
    const data = "Welcome, let's get writing!";
    dispatch({ type: ContentActionTypes.FETCH_CONTENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ContentActionTypes.FETCH_CONTENT_FAILURE, payload: error.message });
  }
};

// Posts content and fetches updated content
export const postContent = (prompt, title) => async (dispatch) => {
  dispatch({ type: ContentActionTypes.POST_CONTENT_REQUEST });
  try {
    const data = await generateContent(prompt, title);
    dispatch({ type: ContentActionTypes.POST_CONTENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ContentActionTypes.POST_CONTENT_FAILURE, payload: error.message });
  }
};

// Clears the content state
export const clearContent = () => (dispatch) => {
  dispatch({ type: ContentActionTypes.CLEAR_CONTENT });
};

// Refreshes content by fetching new content
export const refreshContent = (prompt, title) => async (dispatch) => {
  dispatch({ type: ContentActionTypes.REFRESH_CONTENT_REQUEST });
  try {
    const data = await generateContent(prompt, title);
    dispatch({ type: ContentActionTypes.REFRESH_CONTENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ContentActionTypes.REFRESH_CONTENT_FAILURE, payload: error.message });
  }
};
