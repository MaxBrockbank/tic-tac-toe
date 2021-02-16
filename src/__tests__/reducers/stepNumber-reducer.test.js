import stepNumberReducer from "../../Reducers/step-number-reducer";


describe('stepNumberReducer', () => {
let action;
  test('Should return default state', () => {
    expect(stepNumberReducer( 0 , { type:null } )).toEqual(0);
  })
});