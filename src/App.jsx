import React, { useState } from 'react';


import { Header } from './components/Header/Header';
import { PopUser } from './components/PopUser/PopUser';
import { Main } from './components/Main/Main';
import { PopNewCard } from './components/PopNewCard/PopNewCard';
import { PopBrowse } from './components/PopBrowse/PopBrowse';
import { PopExit } from './components/PopExit/PopExit';

import './App.css';

export const App = () => {
  return (
    <>
      <div className='wrapper'>
      <Header />
      <PopUser />
      <Main/>
      <PopBrowse />
      <PopNewCard />
      <PopExit />
      </div>
    </>
  );
};

export default App;