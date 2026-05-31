import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { PopExit } from './components/PopExit/PopExit';
import { Main } from './components/Main/Main';
import { PopNewCard } from './components/PopNewCard/PopNewCard';
import { PopBrowse } from './components/PopBrowse/PopBrowse';
import { cardList } from './data';


import './App.css';


export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const groupedCards = cardList.reduce((acc, card) => {
    if (!acc[card.status]) {
      acc[card.status] = [];
    }
    acc[card.status].push(card);
    return acc;
  }, {});

  return (
    <>
    <div className="wrapper">
      <Header />
      <PopExit />
      <Main loading={loading} groupedCards={groupedCards} />
      <PopBrowse />
      <PopNewCard />
    </div>
    </>
  );
};

export default App;