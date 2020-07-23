const duckName = 'error';

export const HANDLE = `${duckName}/HANDLE`;

const decodeError = (e) => {
  return {
    name: e.name,
    message: e.message,
  };
};

export const handleError = (e) => async (dispatch) => {
  dispatch({
    type: HANDLE,
    error: decodeError(e),
  });
};