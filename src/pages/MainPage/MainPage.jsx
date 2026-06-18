import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { PopExit } from '../../components/PopExit/PopExit';
import { Main } from '../../components/Main/Main';
import { PopNewCard } from '../../components/PopNewCard/PopNewCard';
import { PopBrowse } from '../../components/PopBrowse/PopBrowse';
import { cardList as initialCardList } from '../../data';

export const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null); // null | 'newCard' | 'exit' | 'browse'
  const [cards, setCards] = useState(initialCardList);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (name) => setModal(name);
  const closeModal = () => {
    setModal(null);
    setSelectedCard(null);
  };

  // Клик по карточке — открыть просмотр
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModal('browse');
  };

  // Сохранение изменений карточки
  const handleSaveCard = (updatedCard) => {
    setCards((prev) =>
      prev.map((c) => (c.id === updatedCard.id ? updatedCard : c))
    );
    setSelectedCard(updatedCard);
  };

  // Удаление карточки
  const handleDeleteCard = (cardId) => {
    setCards((prev) => prev.filter((c) => c.id !== cardId));
    closeModal();
  };

  // Создание новой карточки
  const handleCreateCard = (newCard) => {
    setCards((prev) => [
      ...prev,
      { ...newCard, id: Date.now() },
    ]);
    closeModal();
  };

  const groupedCards = cards.reduce((acc, card) => {
    if (!acc[card.status]) acc[card.status] = [];
    acc[card.status].push(card);
    return acc;
  }, {});

  return (
    <div className="wrapper">
      <Header onOpenModal={openModal} />

      <PopExit
        isOpen={modal === 'exit'}
        onClose={closeModal}
      />

      <Main
        loading={loading}
        groupedCards={groupedCards}
        onCardClick={handleCardClick}
      />

      <PopNewCard
        isOpen={modal === 'newCard'}
        onClose={closeModal}
        onCreate={handleCreateCard}
      />

      <PopBrowse
        isOpen={modal === 'browse'}
        onClose={closeModal}
        card={selectedCard}
        onSave={handleSaveCard}
        onDelete={handleDeleteCard}
      />
    </div>
  );
};