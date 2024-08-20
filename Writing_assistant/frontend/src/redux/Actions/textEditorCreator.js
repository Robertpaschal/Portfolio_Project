import { ADD_SESSION } from "./textEditorActiontypes";

const addSession = (session) => ({
  type: ADD_SESSION,
  payload: session,
});

export default addSession;