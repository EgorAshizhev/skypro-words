import React, { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { fetchTasks, createTask, updateTask, deleteTask } from '../../services/tasksService';

export const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cards, setCards] = useState([]);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchTasks();
      // Normalise: API uses _id, components expect id
      setCards(data.tasks.map((t) => ({ ...t, id: t._id })));
    } catch (err) {
      setError(err.message || 'Не удалось загрузить задачи');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  // Сохранение изменений карточки через API
  const handleSaveCard = async (updatedCard) => {
    try {
      const { id, _id, userId, ...taskData } = updatedCard;
      const data = await updateTask(id, taskData);
      setCards(data.tasks.map((t) => ({ ...t, id: t._id })));
    } catch (err) {
      setError(err.message || 'Не удалось обновить задачу');
    }
  };

  // Удаление карточки через API
  const handleDeleteCard = async (cardId) => {
    try {
      const data = await deleteTask(cardId);
      setCards(data.tasks.map((t) => ({ ...t, id: t._id })));
    } catch (err) {
      setError(err.message || 'Не удалось удалить задачу');
    }
  };

  // Создание новой карточки через API
  const handleCreateCard = async (newCard) => {
    try {
      const data = await createTask(newCard);
      setCards(data.tasks.map((t) => ({ ...t, id: t._id })));
    } catch (err) {
      setError(err.message || 'Не удалось создать задачу');
    }
  };

  const groupedCards = cards.reduce((acc, card) => {
    if (!acc[card.status]) acc[card.status] = [];
    acc[card.status].push(card);
    return acc;
  }, {});

  return (
    <div className="wrapper">
      <Header />

      <Main
        loading={loading}
        error={error}
        groupedCards={groupedCards}
        onRetry={loadTasks}
      />

      <Outlet
        context={{
          cards,
          onSaveCard: handleSaveCard,
          onDeleteCard: handleDeleteCard,
          onCreateCard: handleCreateCard,
        }}
      />
    </div>
  );
};