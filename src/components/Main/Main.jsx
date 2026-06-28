import React from 'react';
import { Column } from '../Column/Column';
import { SMain, SMConteiner, SMainBlock, SMainContent } from './Main.styled';

export const Main = ({ loading, error, groupedCards, onRetry }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Данные загружаются</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-container">
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#e53e3e', marginBottom: '16px', fontSize: '16px' }}>
            {error}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              style={{
                padding: '8px 24px',
                backgroundColor: '#3D41C4',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Повторить
            </button>
          )}
        </div>
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