import { ContentActionTypes} from './contentActionTypes'
import { generateContent } from '../../services/api';

// this function fetchs from the API
export const fetchContent = () => async (dispatch) => {
  dispatch ({ type: ContentActionTypes.FETCH_CONTENT_REQUEST });
  try {
    const response = await generateContent(title, prompt);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch ({ type: ContentActionTypes.FETCH_CONTENT_SUCCESS, payload: data });
  } catch (error){
    dispatch ({ type: ContentActionTypes.FETCH_CONTENT_FAILURE, payload: error.message });
  }
};

// this should be a button that submits the final request
export const postContent = () => async (dispatch) => {
  dispatch ({ type: ContentActionTypes.POST_CONTENT_REQUEST });
};

// This function clears the request alredayd made
export const clearContent = () => (dispatch) => {
  dispatch ({ type: ContentActionTypes.CLEAR_CONTENT });
};

// This refreshes the page
export const refreshContent = () => async (dispatch) => {
  dispatch ({ type: ContentActionTypes.REFRESH_CONTENT });
};