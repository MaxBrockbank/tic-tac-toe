export default (state = {}, action) => {
  const { squares, id } = action;
  switch (action.type) {
    case 'ADD_SAVE':
      return Object.assign({}, state, {
        [id]: {
          squares: squares,
          id: id
        }
      });
      default:
        return state;
  }
}
