import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { cardList as initialCardList } from '../../data';

export const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(initialCardList);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Сохранение изменений карточки
  const handleSaveCard = (updatedCard) => {
    setCards((prev) =>
      prev.map((c) => (c.id === updatedCard.id ? updatedCard : c))
    );
  };

  // Удаление карточки
  const handleDeleteCard = (cardId) => {
    setCards((prev) => prev.filter((c) => c.id !== cardId));
  };

  // Создание новой карточки
  const handleCreateCard = (newCard) => {
    setCards((prev) => [
      ...prev,
      { ...newCard, id: Date.now() },
    ]);
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
        groupedCards={groupedCards}
      />

      {/* Сюда react-router подставит PopNewCard / PopBrowse / PopExit
          в зависимости от текущего URL (см. AppRoutes.jsx) */}
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