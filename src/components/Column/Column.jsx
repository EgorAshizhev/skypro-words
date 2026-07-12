import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import {
  SColumnTitleP,
  SColumnTitle,
  SMainColumn,
  SCards,
  SCardsItem,
  SCardsCard,
  SCardsGroup,
  SCardsTheme,
  SCardsBtn,
  SCardTitle,
  SCardContent,
  SCardDate,
} from './Column.styled';

const getThemeClass = (topic) => {
  const map = {
    'Web Design': '_orange',
    'Research': '_green',
    'Copywriting': '_purple',
    'Backend': '_gray',
    'Frontend': '_orange',
  };
  return map[topic] || '_gray';
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('ru-RU');
  } catch {
    return dateStr;
  }
};

export const Column = ({ title, cards = [] }) => {
  const navigate = useNavigate();

  return (
    <SMainColumn className="main__column">
      <SColumnTitle className="column__title">
        <SColumnTitleP>{title}</SColumnTitleP>
      </SColumnTitle>

      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <SCards
            className="cards"
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
          >
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={String(card.id)} index={index}>
                {(dragProvided, dragSnapshot) => (
                  <SCardsItem
                    className="cards__item"
                    ref={dragProvided.innerRef}
                    {...dragProvided.draggableProps}
                    {...dragProvided.dragHandleProps}
                  >
                    <SCardsCard
                      className="cards__card"
                      onClick={() => navigate(`/task/${card.id}`)}
                      $isDragging={dragSnapshot.isDragging}
                    >
                      <SCardsGroup className="card__group">
                        <SCardsTheme className={`card__theme ${getThemeClass(card.topic)}`}>
                          <p>{card.topic}</p>
                        </SCardsTheme>
                        <SCardsBtn className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </SCardsBtn>
                      </SCardsGroup>
                      <SCardTitle className="card__title">{card.title}</SCardTitle>
                      <SCardContent className="card__content">
                        <SCardDate className="card__date">
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.75 2.125H9.5V0.75H8.25V2.125H4.75V0.75H3.5V2.125H2.25C1.7 2.125 1.25 2.575 1.25 3.125V10.875C1.25 11.425 1.7 11.875 2.25 11.875H10.75C11.3 11.875 11.75 11.425 11.75 10.875V3.125C11.75 2.575 11.3 2.125 10.75 2.125ZM10.75 10.875H2.25V5.5H10.75V10.875Z" fill="#94A6BE"/>
                          </svg>
                          <p>{formatDate(card.date)}</p>
                        </SCardDate>
                      </SCardContent>
                    </SCardsCard>
                  </SCardsItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </SCards>
        )}
      </Droppable>
    </SMainColumn>
  );
};