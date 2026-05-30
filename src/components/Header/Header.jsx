import React, { useState } from 'react';

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
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="/" target="_self"><img src="./public/images/logo.png" alt="logo"/></a>
          </div>
          <div className="header__logo _dark">
            <a href="/" target="_self"><img src="./public/images/logo_dark.png" alt="logo"/></a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a href="#" className="header__user _hover02" onClick={toggleUserPop}>
              Ivan Ivanov
            </a>
            {isUserPopOpen && (
              <div className="header__pop-user-set pop-user-set" id="user-set-target">
                <a href="#" className="pop-user-set__close" onClick={closeUserPop}>✕</a>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox"/>
                </div>
                <button type="button" className="_hover03" onClick={() => {
  					closeUserPop();  
  					window.location.hash = 'popExit';
							}}>
  							Выйти
							</button>
              </div>
            )}
          </nav>					
        </div>
      </div>			
    </header>
  );
};
