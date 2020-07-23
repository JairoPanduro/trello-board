const baseUrl = "http://localhost:3009";

export const getBoard = async (token) => {
  const response = await fetch(`${baseUrl}/board`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token,
    },
  });

  const data = await response.json();
  return data;
};

export const updateBoard = async (token, board) => {
  const response = await fetch(`${baseUrl}/board`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token,
    },
    body: JSON.stringify(board)
  });

  const data = await response.json();
  return data;
};

export const getUserList = async (token) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token,
    },
  });

  const data = await response.json();
  return data;
};