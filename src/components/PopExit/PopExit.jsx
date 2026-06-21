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
  SPopExNo
} from './PopExit.styled';

export const PopExit = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onClose = () => navigate('/');

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleExit = (e) => {
    e.preventDefault();
    logout();
    navigate('/signin');
  };

  return (
    <SPopExite>
      <SPopExContainer onClick={handleBackdropClick}>
        <SPopExBlock>
          <SPopExTtl>
            <h2>Выйти из аккаунта?</h2>
          </SPopExTtl>
          <SPopExFormGroup>
            <SPopExBtnYes onClick={handleExit}>Да, выйти</SPopExBtnYes>
            <SPopExNo onClick={onClose}>Нет, остаться</SPopExNo>
          </SPopExFormGroup>
        </SPopExBlock>
      </SPopExContainer>
    </SPopExite>
  );
};