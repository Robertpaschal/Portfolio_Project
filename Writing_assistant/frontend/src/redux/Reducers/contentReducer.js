import { ContentActionTypes } from "../Actions/contentActionTypes";

const initialState = {
    content: '',
    loading: false,
    error: null,
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ContentActionTypes.FETCH_CONTENT_REQUEST:
        case ContentActionTypes.POST_CONTENT_REQUEST:
        case ContentActionTypes.REFRESH_CONTENT_REQUEST:
            return { ...state, loading: true, error: null };

        case ContentActionTypes.FETCH_CONTENT_SUCCESS:
        case ContentActionTypes.POST_CONTENT_SUCCESS:
        case ContentActionTypes.REFRESH_CONTENT_SUCCESS:
            return { ...state, loading: false, content: action.payload };

        case ContentActionTypes.FETCH_CONTENT_FAILURE:
        case ContentActionTypes.POST_CONTENT_FAILURE:
        case ContentActionTypes.REFRESH_CONTENT_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case ContentActionTypes.CLEAR_CONTENT:
            return { ...state, content: '' };

        default:
            return state;
    }
};

export default contentReducer;
