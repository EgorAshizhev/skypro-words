import { request } from './api';

/**
 * Авторизация.
 * POST /api/user/login
 * @returns {{ user: { id, login, name, token } }}
 */
export const loginUser = (login, password) =>
  request('/user/login', {
    method: 'POST',
    body: JSON.stringify({ login, password }),
  });

/**
 * Регистрация нового пользователя.
 * POST /api/user
 * @returns {{ user: { id, login, name, token } }}
 */
export const registerUser = (login, name, password) =>
  request('/user', {
    method: 'POST',
    body: JSON.stringify({ login, name, password }),
  });
