export default (state = 0 , action) => {
  const { step } = action;
  switch (action.type) {
    case 'ADD_STEP':
      const newState = step;
      return newState;
    default:
        return state;
    }
  }
