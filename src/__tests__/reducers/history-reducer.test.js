import historyReducer from "../../reducers/history-reducer";

describe('historyReducer', () => {


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(historyReducer({}, { type: null})).toEqual({});
  });
});