export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];

    default:
      // redux has only on store, but recommended multiple reducers
      // if the reducer received an action that it doestn't care about
      // it should return the unchanged state
      return state;
  }
}
