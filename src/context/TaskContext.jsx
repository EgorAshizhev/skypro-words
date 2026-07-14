import React, { createContext, useContext, useState, useCallback } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/tasksService';

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Получить все задачи
  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchTasks();
      // Normalise: API uses _id, components expect id
      setTasks(data.tasks.map((t) => ({ ...t, id: t._id })));
    } catch (err) {
      setError(err.message || 'Не удалось загрузить задачи');
    } finally {
      setLoading(false);
    }
  }, []);

  // Создать новую задачу
  const createCard = async (newCard) => {
    const data = await createTask(newCard);
    setTasks(data.tasks.map((t) => ({ ...t, id: t._id })));
    return data;
  };

  // Обновить существующую задачу
  const saveCard = async (updatedCard) => {
    const { id, _id, userId, ...taskData } = updatedCard;
    const data = await updateTask(id, taskData);
    setTasks(data.tasks.map((t) => ({ ...t, id: t._id })));
    return data;
  };

  // Удалить задачу
  const deleteCard = async (cardId) => {
    const data = await deleteTask(cardId);
    setTasks(data.tasks.map((t) => ({ ...t, id: t._id })));
    return data;
  };

  // Переместить задачу между колонками (drag-and-drop).
  // Обновляем локальное состояние сразу (оптимистично),
  // а запрос на сервер уходит в фоне. При ошибке — откатываем.
  const moveCard = async (cardId, newStatus) => {
    const prevTasks = tasks;
    const card = tasks.find((t) => String(t.id) === String(cardId));
    if (!card || card.status === newStatus) return;

    setTasks((prev) =>
      prev.map((t) => (String(t.id) === String(cardId) ? { ...t, status: newStatus } : t))
    );

    try {
      const { id, _id, userId, ...taskData } = card;
      const data = await updateTask(cardId, { ...taskData, status: newStatus });
      setTasks(data.tasks.map((t) => ({ ...t, id: t._id })));
    } catch (err) {
      // откат при ошибке сети/сервера
      setTasks(prevTasks);
      setError(err.message || 'Не удалось переместить задачу');
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        loadTasks,
        createCard,
        saveCard,
        deleteCard,
        moveCard,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);