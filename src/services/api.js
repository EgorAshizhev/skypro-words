const BASE_URL = 'https://wedev-api.sky.pro/api';

export const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');

  const headers = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMessage = `Ошибка: ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch {
      // сервер вернул не JSON
    }
    throw new Error(errorMessage);
  }

  return response.json();
};