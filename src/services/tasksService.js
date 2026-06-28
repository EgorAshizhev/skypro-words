import { request } from './api';

/**
 * Получить все задачи.
 * GET /api/kanban
 * @returns {{ tasks: Array }}
 */
export const fetchTasks = () => request('/kanban');

/**
 * Получить задачу по id.
 * GET /api/kanban/:id
 * @returns {{ task: object }}
 */
export const fetchTaskById = (id) => request(`/kanban/${id}`);

/**
 * Создать задачу.
 * POST /api/kanban
 * @returns {{ tasks: Array }} — обновлённый список задач
 */
export const createTask = (taskData) =>
  request('/kanban', {
    method: 'POST',
    body: JSON.stringify(taskData),
  });

/**
 * Обновить задачу.
 * PUT /api/kanban/:id
 * @returns {{ tasks: Array }} — обновлённый список задач
 */
export const updateTask = (id, taskData) =>
  request(`/kanban/${id}`, {
    method: 'PUT',
    body: JSON.stringify(taskData),
  });

/**
 * Удалить задачу.
 * DELETE /api/kanban/:id
 * @returns {{ tasks: Array }} — обновлённый список задач
 */
export const deleteTask = (id) =>
  request(`/kanban/${id}`, {
    method: 'DELETE',
  });
