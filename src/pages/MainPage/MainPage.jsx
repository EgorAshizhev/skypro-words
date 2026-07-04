import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { useTasks } from '../../context/TaskContext';

export const MainPage = () => {
  const { tasks, loading, error, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const groupedCards = tasks.reduce((acc, card) => {
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

      <Outlet />
    </div>
  );
};