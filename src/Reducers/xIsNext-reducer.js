import * as c from "./../actions/ActionTypes";

export default (state = 0 , action) => {
  switch(action.type) {
    case c.TURN_TOGGLE:
      return !state;
    default:
      return state;
  }
}