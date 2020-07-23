import { handleError } from '../errorActions';
import {
  getBoard as getBoardAPI,
  updateBoard as updateBoardAPI,
  getUserList as getUserListAPI
} from './api';

const duckName = 'board';
export const GET = `${duckName}/GET`;
export const UPDATE = `${duckName}/UPDATE`;
export const GET_USERS = `${duckName}/GET_USERS`;


export const getData = (token) => async (dispatch) => {
  try { 
    const [board, users] = await Promise.all([
      getBoardAPI(token),
      getUserListAPI(token)
    ]);
    dispatch({
      type: GET,
      payload: board
    });
    dispatch({
      type: GET_USERS,
      payload: users
    });
  } catch (e) {
    dispatch(handleError(e));
  }
}

export const updateBoard = (token, data) => async (dispatch) => {
  try { 
    await updateBoardAPI(token, data);
    dispatch({
      type: UPDATE,
      payload: data
    });
  } catch (e) {
    dispatch(handleError(e));
  }
}
