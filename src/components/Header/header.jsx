import styled from "styled-components";
import React, { useState } from 'react';
import  { SHeader, 
  SHeaderBlock, 
  BtnMainNew, 
  SHeaderNav, 
  SHeaderUser, 
  SHeaderPopUserSet, 
  SHConteiner,
  SPopUserSetName,
  SPopUserSetMail,
  SPopUserSetTheme,
  PopUserCheckbox,
  PopUserButton }  from './Header.styled';

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
  <SHeader className="header">
    <SHConteiner className="container">
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
        <SHeaderNav className="header__nav">
          <BtnMainNew className="_hover01" id="btnMainNew">
            <a href="#popNewCard">Создать новую задачу</a>
          </BtnMainNew>
          <SHeaderUser href="#" className="_hover02" onClick={toggleUserPop}>
            Ivan Ivanov
          </SHeaderUser>
          {isUserPopOpen && (
            <SHeaderPopUserSet className="pop-user-set" id="user-set-target">
              <a href="#" className="pop-user-set__close" onClick={closeUserPop}>✕</a>
              <SPopUserSetName className="pop-user-set__name">Ivan Ivanov</SPopUserSetName>
              <SPopUserSetMail className="pop-user-set__mail">ivan.ivanov@gmail.com</SPopUserSetMail>
              <SPopUserSetTheme className="pop-user-set__theme">
                <p>Темная тема</p>
                <PopUserCheckbox type="checkbox" className="checkbox" name="checkbox" />
              </SPopUserSetTheme>
              <PopUserButton className="_hover03" type="button"
                  onClick={() => {
                  closeUserPop();
                  window.location.hash = 'popExit';
                }}
              >
                Выйти
              </PopUserButton>
            </SHeaderPopUserSet>
          )}
        </SHeaderNav>
      </SHeaderBlock>
    </SHConteiner>
  </SHeader>
);
};