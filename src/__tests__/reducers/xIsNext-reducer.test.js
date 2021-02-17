import xIsNextReducer from "../../Reducers/xIsNext-reducer";
import * as a from "../../actions/ActionTypes";

describe('xIsNext', () => {

  let action;
  
  test('Should check the xIsNext reducer reverses boolean', () => {
    action = {
      type: a.TURN_TOGGLE
    }
    expect(xIsNextReducer(true, action )).toEqual(false)
  });
})