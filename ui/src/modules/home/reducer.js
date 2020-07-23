import * as actions from './actions';

const initialState = {
  email: null,
  token: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
