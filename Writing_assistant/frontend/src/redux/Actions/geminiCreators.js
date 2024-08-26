import { SET_INPUT_VALUE, SET_PROMPT_RESPONSES, SET_LOADING } from "./geminiActionTypes";

export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});

export const setPromptResponses = (responses) => ({
  type: SET_PROMPT_RESPONSES,
  payload: responses,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});