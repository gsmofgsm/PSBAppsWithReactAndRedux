import * as types from "../actions/actionTypes";

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      // redux has only on store, but recommended multiple reducers
      // if the reducer received an action that it doestn't care about
      // it should return the unchanged state
      return state;
  }
}
