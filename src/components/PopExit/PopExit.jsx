
import React from 'react';

export const PopExit = () => {
  const closePopExit = (e) => {
    e.preventDefault();

    window.location.hash = '';
  };

  const handleExit = (e) => {
    e.preventDefault();

    console.log('Выход из аккаунта');
    window.location.hash = ''; 
  };

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <div className="pop-exit__form-group">
            <button className="pop-exit__exit-yes _hover01" onClick={handleExit}>
              Да, выйти
            </button>
            <button className="pop-exit__exit-no _hover03" onClick={closePopExit}>
              Нет, остаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};