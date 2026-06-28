import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SHeader,
  SHeaderBlock,
  BtnMainNew,
  SHeaderNav,
  SHeaderUser,
  SHeaderPopUserSet,
  SHConteiner,
  SPopUserSetName,
  SPopUserSetTheme,
  PopUserCheckbox,
  PopUserButton,
} from './Header.styled';
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
  const [isUserPopOpen, setIsUserPopOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const toggleUserPop = (e) => {
    e.preventDefault();
    setIsUserPopOpen(!isUserPopOpen);
  };

  const closeUserPop = (e) => {
    if (e) e.preventDefault();
    setIsUserPopOpen(false);
  };

  const handleNewCardClick = (e) => {
    e.preventDefault();
    navigate('/task/new');
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsUserPopOpen(false);
    navigate('/exit');
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
              <a href="/task/new" onClick={handleNewCardClick}>Создать новую задачу</a>
            </BtnMainNew>
            <SHeaderUser href="#" className="_hover02" onClick={toggleUserPop}>
              {user?.name || 'Пользователь'}
            </SHeaderUser>
            {isUserPopOpen && (
              <SHeaderPopUserSet className="pop-user-set" id="user-set-target">
                <a href="#" className="pop-user-set__close" onClick={closeUserPop}>
                  ✕
                </a>
                <SPopUserSetName className="pop-user-set__name">
                  {user?.name || '—'}
                </SPopUserSetName>
                <SPopUserSetTheme className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <PopUserCheckbox type="checkbox" className="checkbox" name="checkbox" />
                </SPopUserSetTheme>
                <PopUserButton
                  className="_hover03"
                  type="button"
                  onClick={handleLogoutClick}
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