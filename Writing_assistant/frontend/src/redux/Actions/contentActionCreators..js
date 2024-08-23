import { ContentActionTypes} from './contentActionTypes'

export const fetchContent = () => async (dispatch) => {
  dispatch ({ type: ContentActionTypes.FETCH_CONTENT_REQUEST });
  try {
    const response = await fetch('api/content');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch ({ type: ContentActionTypes.FETCH_CONTENT_SUCCESS, payload: data });
  } catch (error){
    dispatch ({ type: ContentActionTypes.FETCH_CONTENT_FAILURE, payload: error.message });
  }
};

export const postContent = (content) => async (dispatch) => {
  dispatch ({ type: ContentActionTypes.POST_CONTENT_REQUEST });
  try {
    const response = await fetch('api/generate_content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch ({ type: ContentActionTypes.POST_CONTENT_SUCCESS, payload: data });
    return data;
  } catch (error){
    dispatch ({ type: ContentActionTypes.POST_CONTENT_FAILURE, payload: error.message });
  }
};

export const clearContent = () => (dispatch) => {
  dispatch ({ type: ContentActionTypes.CLEAR_CONTENT });
};

export const refreshContent = () => async (dispatch) => {
  dispatch ({ type: ContentActionTypes.REFRESH_CONTENT });
  try {
    const response = await fetch('api/generate_content');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch ({ type: ContentActionTypes.FETCH_CONTENT_SUCCESS, payload: data });
    return data;
  } catch (error){
    dispatch ({ type: ContentActionTypes.FETCH_CONTENT_FAILURE, payload: error.message });
  }
};