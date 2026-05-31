import styled from "styled-components";
import React, { useState } from 'react';
import  { SHeader, SHeaderBlock, BtnMainNew, SHeaderNav, SHeaderUser, SHeaderPopUserSet }  from './Header.styled';

export const Header = () => {
  const [isUserPopOpen, setIsUserPopOpen] = useState(false);

  const toggleUserPop = (e) => {
    e.preventDefault();
    setIsUserPopOpen(!isUserPopOpen);
  };

  const closeUserPop = (e) => {
    if (e) e.preventDefault();
    setIsUserPopOpen(false);
  };

return (
  <SHeader>
    <div className="container">
      <SHeaderBlock>
        <div className="header__logo _show _light">
          <a href="/" target="_self">
            <img src="./public/images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header__logo _dark">
          <a href="/" target="_self">
            <img src="./public/images/logo_dark.png" alt="logo" />
          </a>
        </div>
        <SHeaderNav>
          <BtnMainNew className="_hover01" id="btnMainNew">
            <a href="#popNewCard">Создать новую задачу</a>
          </BtnMainNew>
          <SHeaderUser href="#" className="_hover02" onClick={toggleUserPop}>
            Ivan Ivanov
          </SHeaderUser>
          {isUserPopOpen && (
            <SHeaderPopUserSet className="pop-user-set" id="user-set-target">
              <a href="#" className="pop-user-set__close" onClick={closeUserPop}>✕</a>
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button
                type="button"
                className="_hover03"
                onClick={() => {
                  closeUserPop();
                  window.location.hash = 'popExit';
                }}
              >
                Выйти
              </button>
            </SHeaderPopUserSet>
          )}
        </SHeaderNav>
      </SHeaderBlock>
    </div>
  </SHeader>
);
};