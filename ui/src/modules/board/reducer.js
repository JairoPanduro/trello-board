import * as actions from './actions';

const initialState = {
  
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
      };
    default:
      return state;
  }
}
