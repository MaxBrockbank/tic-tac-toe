import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('tic-tac-toe actions', () => {
  it('manageHistory should create MANAGE_HISTORY action', () => {
      expect(actions.manageHistory({
        squares: [
          null,null,null,
          null,null,null,
          null,null,null
        ],
        id: 0
      })).toEqual(
        {
          type: c.MANAGE_HISTORY,
          squares: [
            null,null,null,
            null,null,null,
            null,null,null
          ],
          id: 0
        }
    );
  });

  it('turnToggle should create TURN_TOGGLE action', () => {
    expect(actions.turnToggle()).toEqual(
      {
        type: c.TURN_TOGGLE
      }
    )
  });

  it('manageStep should create action MANAGE_STEP', () => {
    expect(actions.manageStep(0)).toEqual(
      {
      type: c.MANAGE_STEP,
      step: 0
      }
    )
  });
});