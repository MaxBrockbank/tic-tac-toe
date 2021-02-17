import historyReducer from "../../Reducers/history-reducer";
import * as a from '../../actions/ActionTypes';

describe('historyReducer', () => {
let action;
let save = {
  squares: [
    null,null,null,
    null,null,null,
    null,null,null
  ],
  id: 0
};

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(historyReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new save to history', () => {
    const { squares, id } = save;
    action = {
      type: a.MANAGE_HISTORY,
      squares: squares,
      id: id
    };
  expect(historyReducer({}, action)).toEqual({
    [id] : {
      squares: squares,
      id: id
    }
  });
    
  });
});