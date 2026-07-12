import React from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { Column } from '../Column/Column';
import { useTasks } from '../../context/TaskContext';
import {
  SMain,
  SMConteiner,
  SMainBlock,
  SMainContent,
  SLoadingContainer,
  SLoadingText,
  SErrorText,
  SRetryBtn,
} from './Main.styled';

const COLUMN_TITLES = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово',
];

export const Main = ({ loading, error, groupedCards, onRetry }) => {
  const { moveCard } = useTasks();

  if (loading) {
    return (
      <SLoadingContainer className="loading-container">
        <SLoadingText className="loading-text">Данные загружаются</SLoadingText>
      </SLoadingContainer>
    );
  }

  if (error) {
    return (
      <SLoadingContainer className="loading-container">
        <div style={{ textAlign: 'center' }}>
          <SErrorText>{error}</SErrorText>
          {onRetry && <SRetryBtn onClick={onRetry}>Повторить</SRetryBtn>}
        </div>
      </SLoadingContainer>
    );
  }

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const newStatus = destination.droppableId;
    moveCard(draggableId, newStatus);
  };

  return (
    <SMain>
      <SMConteiner>
        <SMainBlock className="main__block">
          <DragDropContext onDragEnd={handleDragEnd}>
            <SMainContent className="main__content">
              {COLUMN_TITLES.map((title) => (
                <Column
                  key={title}
                  title={title}
                  cards={groupedCards[title] || []}
                />
              ))}
            </SMainContent>
          </DragDropContext>
        </SMainBlock>
      </SMConteiner>
    </SMain>
  );
};