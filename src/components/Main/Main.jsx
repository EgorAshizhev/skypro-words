import React from 'react';
import { Column } from '../Column/Column';
import { SMain, SMConteiner, SMainBlock, SMainContent } from './Main.styled';

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
    <SMain>
      <SMConteiner>
        <SMainBlock>
          <SMainContent>
            {columnTitles.map((title) => (
              <Column
                key={title}
                title={title}
                cards={groupedCards[title] || []}
              />
            ))}
          </SMainContent>
        </SMainBlock>
      </SMConteiner>
    </SMain>
  );
};