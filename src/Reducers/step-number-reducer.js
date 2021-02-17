import * as c from "./../actions/ActionTypes";

export default (state = 0 , action) => {
  const { step } = action;
  switch (action.type) {
    case c.MANAGE_STEP:
      const newState = step;
      return newState;
    default:
        return state;
  }
}
