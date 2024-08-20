import { SET_CARDS } from "./cardActiontypes";

export const setCards = (cards) => {
    return {
        type: SET_CARDS,
        payload: cards
    }
};