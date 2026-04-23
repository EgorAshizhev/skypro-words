import React from 'react';

function PopUser({ userName, userEmail, onThemeToggle, onClose, onLogout }) {
  return (
    <div className="header__pop-user-set pop-user-set" id="user-set-target">
      <p className="pop-user-set__name">{userName}</p>
      <p className="pop-user-set__mail">{userEmail}</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" onChange={onThemeToggle} />
      </div>
      <button type="button" className="_hover03" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
}

export default PopUser;