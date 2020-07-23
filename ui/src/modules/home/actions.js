import { handleError } from '../errorActions';

import { login as loginAPI, register as registerAPI } from './api';

const duckName = 'home';
export const LOGIN = `${duckName}/LOGIN`;


export const login = (email, password) => async (dispatch) => {
  try { 
    const data = await loginAPI(email, password);
    dispatch({
      type: LOGIN,
      payload: data
    });
  } catch (e) {
    dispatch(handleError(e));
  }
}

export const register = (email, password) => async (dispatch) => {
  try { 
    await registerAPI(email, password);
  } catch (e) {
    dispatch(handleError(e));
  }
}