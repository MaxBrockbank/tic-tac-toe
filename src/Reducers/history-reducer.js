import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { squares, id } = action;
  switch (action.type) {
    case c.MANAGE_HISTORY:
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

// const myObject = {
//   0: 'zero',
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four'
//  };
 
//  const sliced = Object.keys(myObject).slice(0, 5).reduce((result, key) => {
//                      result[key] = myObject[key];
 
//                      return result;
//                  }, {});
 
// //  console.log(sliced);
