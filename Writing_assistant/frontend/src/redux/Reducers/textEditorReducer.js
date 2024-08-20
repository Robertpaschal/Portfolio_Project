import { ADD_SESSION } from "../Actions/textEditorActiontypes";

const initialState = {
  sessions: [],
};

export default function textEditorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SESSION:
      return {
        ...state,
        sessions: [ action.payload, ...state.sessions],
      };
    default:
      return state;
  }
}