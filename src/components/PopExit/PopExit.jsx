import React from 'react';

function PopExit({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" onClick={onConfirm}>Да, выйти</button>
              <button className="pop-exit__exit-no _hover03" onClick={onClose}>Нет, остаться</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopExit;