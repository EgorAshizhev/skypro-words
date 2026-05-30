// src/components/Column/Column.jsx
import React from 'react';

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

export const Column = ({ title, cards = [] }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div key={card.id} className="cards__item">
            <div className="cards__card">
              <div className="card__group">
                <div className={`card__theme ${getThemeClass(card.topic)}`}>
                  <p>{card.topic}</p>
                </div>
                <div className="card__btn">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="card__title">{card.title}</div>
              <div className="card__content">
                <div className="card__date">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.75 2.125H9.5V0.75H8.25V2.125H4.75V0.75H3.5V2.125H2.25C1.7 2.125 1.25 2.575 1.25 3.125V10.875C1.25 11.425 1.7 11.875 2.25 11.875H10.75C11.3 11.875 11.75 11.425 11.75 10.875V3.125C11.75 2.575 11.3 2.125 10.75 2.125ZM10.75 10.875H2.25V5.5H10.75V10.875Z" fill="#94A6BE"/>
                  </svg>
                  <p>{card.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};