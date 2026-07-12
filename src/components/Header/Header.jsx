import React, { useState, useRef, useEffect } from 'react';
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
  SPopUserSetMail,
  SPopUserSetTheme,
  PopUserCheckbox,
  PopUserButton,
} from './Header.styled';
import { useAuth } from '../../context/AuthContext';
import { useThemeMode } from '../../context/ThemeContext';

export const Header = () => {
  const [isUserPopOpen, setIsUserPopOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isDark, toggleTheme } = useThemeMode();
  const userPopRef = useRef(null);

  const toggleUserPop = (e) => {
    e.preventDefault();
    setIsUserPopOpen(!isUserPopOpen);
  };

  useEffect(() => {
    if (!isUserPopOpen) return;

    const handleClickOutside = (e) => {
      if (userPopRef.current && !userPopRef.current.contains(e.target)) {
        setIsUserPopOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserPopOpen]);

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
          <div className="header__logo">
            <a href="/" target="_self">
              <img
                src={isDark ? './public/images/logo_dark.png' : './public/images/logo.png'}
                alt="logo"
              />
            </a>
          </div>
          <SHeaderNav className="header__nav">
            <BtnMainNew className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="/task/new" onClick={handleNewCardClick}>Создать новую задачу</a>
            </BtnMainNew>
            <SHeaderUser href="#" className="_hover02" onClick={toggleUserPop}>
              {user?.name || 'Пользователь'}
            </SHeaderUser>
            {isUserPopOpen && (
              <SHeaderPopUserSet className="pop-user-set" id="user-set-target" ref={userPopRef}>
                <SPopUserSetName className="pop-user-set__name">
                  {user?.name || '—'}
                </SPopUserSetName>
                {user?.login && (
                  <SPopUserSetMail className="pop-user-set__mail">
                    {user.login}
                  </SPopUserSetMail>
                )}
                <SPopUserSetTheme className="pop-user-set__theme">
                  <p>Тёмная тема</p>
                  <PopUserCheckbox
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                  />
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