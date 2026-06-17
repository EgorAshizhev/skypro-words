import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  SPopExite,
  SPopExContainer,
  SPopExBlock,
  SPopExTtl,
  SPopExFormGroup,
  SPopExBtnYes,
  SPopExNo,
} from './PopExit.styled';

export const PopExit = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const closePopExit = (e) => {
    e.preventDefault();
    window.location.hash = '';
  };

  const handleExit = (e) => {
    e.preventDefault();
    logout();
    navigate('/signin');
  };

  return (
    <SPopExite className="pop-exit" id="popExit">
      <SPopExContainer>
        <SPopExBlock>
          <SPopExTtl>
            <h2>Выйти из аккаунта?</h2>
          </SPopExTtl>
          <SPopExFormGroup>
            <SPopExBtnYes className="_hover01" onClick={handleExit}>
              Да, выйти
            </SPopExBtnYes>
            <SPopExNo className="pop-exit__exit-no _hover03" onClick={closePopExit}>
              Нет, остаться
            </SPopExNo>
          </SPopExFormGroup>
        </SPopExBlock>
      </SPopExContainer>
    </SPopExite>
  );
};
