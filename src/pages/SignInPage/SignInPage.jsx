import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  SWrapper,
  SContainerSignIn,
  SModal,
  SModalBlock,
  SModalTtl,
  SModalFormLogin,
  SModalInput,
  SModalBtnEnter,
  SModalFormGroup,
} from './SignInPage.styled';

export const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock auth — replace with real API call
    if (email && password) {
      login();
      navigate('/');
    }
  };

  return (
    <SWrapper>
      <SContainerSignIn>
        <SModal>
          <SModalBlock>
            <SModalTtl>
              <h2>Вход</h2>
            </SModalTtl>
            <SModalFormLogin onSubmit={handleSubmit}>
              <SModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <SModalBtnEnter type="submit">Войти</SModalBtnEnter>
              <SModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/signup">Регистрируйтесь здесь</Link>
              </SModalFormGroup>
            </SModalFormLogin>
          </SModalBlock>
        </SModal>
      </SContainerSignIn>
    </SWrapper>
  );
};
