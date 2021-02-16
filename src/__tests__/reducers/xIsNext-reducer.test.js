import xIsNextReducer from "../../Reducers/xIsNext-reducer";
import xIsNext from "../../Reducers/xIsNext-reducer";

describe('xIsNext', () => {

  let action;
  
  test('Should check the xIsNext reducer reverses boolean', () => {
    action = {
      type: "TURN_TOGGLE"
    }
    expect(xIsNextReducer(true, action )).toEqual(false)
  });
})