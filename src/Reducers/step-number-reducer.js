export default (state = 0 , action) => {
  const { step } = action;
  switch (action.type) {
    case 'MANAGE_STEP':
      const newState = step;
      return newState;
    default:
        return state;
  }
}
