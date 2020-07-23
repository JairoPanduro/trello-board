import * as actions from './actions';

const initialState = {
  board: null,
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET:
    case actions.UPDATE:
      return {
        ...state,
        board: action.payload
      };
    case actions.GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
