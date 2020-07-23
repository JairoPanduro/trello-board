const baseUrl = "http://localhost:3009/users";

export const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  return data;
};


export const register = async (email, password) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  return data;
};