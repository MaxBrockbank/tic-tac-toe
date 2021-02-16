export default (state = 0 , action) => {
  switch(action.type) {
    case "TURN_TOGGLE":
      return !state;
    default:
      return state;
  }
}