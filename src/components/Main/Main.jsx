// src/components/Main/Main.jsx
import React from 'react';
import { Column } from '../Column/Column';

export const Main = ({ loading, groupedCards }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Данные загружаются</div>
      </div>
    );
  }

  const columnTitles = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnTitles.map((title) => (
              <Column
                key={title}
                title={title}
                cards={groupedCards[title] || []}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};