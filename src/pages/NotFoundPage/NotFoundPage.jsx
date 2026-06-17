import React from 'react';
import { Link } from 'react-router-dom';
import {
  SNotFoundWrapper,
  SNotFoundBlock,
  SNotFoundCode,
  SNotFoundTitle,
  SNotFoundText,
  SNotFoundBtn,
} from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <SNotFoundWrapper>
      <SNotFoundBlock>
        <SNotFoundCode>404</SNotFoundCode>
        <SNotFoundTitle>Страница не найдена</SNotFoundTitle>
        <SNotFoundText>
          Запрашиваемая страница не существует или была удалена.
        </SNotFoundText>
        <SNotFoundBtn as={Link} to="/">
          Вернуться на главную
        </SNotFoundBtn>
      </SNotFoundBlock>
    </SNotFoundWrapper>
  );
};
