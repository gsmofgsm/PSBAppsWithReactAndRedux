import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      // redux has only on store, but recommended multiple reducers
      // if the reducer received an action that it doestn't care about
      // it should return the unchanged state
      return state;
  }
}
