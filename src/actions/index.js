import * as c from './ActionTypes';

export const manageHistory = (save) => {
const { squares, id } = save;
  return {
    type: c.MANAGE_HISTORY,
    squares: squares,
    id: id
  };
}

export const turnToggle = () => ({
  type: c.TURN_TOGGLE
});

export const manageStep = (id) => {
  return {
    type: c.MANAGE_STEP,
    step: Object.keys(history).length,
  }
}