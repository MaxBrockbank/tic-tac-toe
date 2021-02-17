import stepNumberReducer from "../../Reducers/step-number-reducer";
import * as a from "../../actions/ActionTypes";


describe('stepNumberReducer', () => {
let action;
let history = {
  key: 1,
  key2: 2
}

  test('Should return default state', () => {
    expect(stepNumberReducer( 0 , { type:null } )).toEqual(0);
  });

  test('Should set step number equal to object length', () => {
    const action = { 
      type: a.MANAGE_STEP,
      step: Object.keys(history).length,
    }  
    expect(stepNumberReducer(0 , action)).toEqual(2)
  });
});