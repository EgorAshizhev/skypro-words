import React, { useState } from 'react';
import PopUser from '../PopUser/PopUser';
import logoLight from '../../public/images/logo.png';
import logoDark from '..\..public\images\logo_dark.png';

function Header({ onOpenNewCard, onOpenPopExit, userName, userEmail, onThemeToggle, isDarkTheme }) {
  const [isUserPopOpen, setIsUserPopOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className={`header__logo ${isDarkTheme ? '_dark' : '_show _light'}`}>
            <a href="/" target="_self">
              <img src={isDarkTheme ? logoDark : logoLight} alt="logo"/>
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" onClick={onOpenNewCard}>
              Создать новую задачу
            </button>
            <a href="#user-set-target" className="header__user _hover02" onClick={(e) => { e.preventDefault(); setIsUserPopOpen(!isUserPopOpen); }}>
              {userName}
            </a>
            {isUserPopOpen && <PopUser userName={userName} userEmail={userEmail} onThemeToggle={onThemeToggle} onClose={() => setIsUserPopOpen(false)} onLogout={onOpenPopExit} />}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;