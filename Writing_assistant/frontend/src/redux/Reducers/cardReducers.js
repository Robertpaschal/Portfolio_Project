import { SET_CARDS } from "../Actions/cardActiontypes";

const initialState = {
    cards: []
};

const cardReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,
                cards: action.payload
            }
        default:
            return state;
    }
};

export default cardReducers;