import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  SWrapper,
  SContainerSignUp,
  SModal,
  SModalBlock,
  SModalTtl,
  SModalFormLogin,
  SModalInput,
  SModalBtnSignUp,
  SModalFormGroup,
} from './SignUpPage.styled';

export const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock registration — replace with real API call
    if (name && email && password) {
      login();
      navigate('/');
    }
  };

  return (
    <SWrapper>
      <SContainerSignUp>
        <SModal>
          <SModalBlock>
            <SModalTtl>
              <h2>Регистрация</h2>
            </SModalTtl>
            <SModalFormLogin onSubmit={handleSubmit}>
              <SModalInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <SModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <SModalBtnSignUp type="submit">Зарегистрироваться</SModalBtnSignUp>
              <SModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/signin">Войдите здесь</Link>
                </p>
              </SModalFormGroup>
            </SModalFormLogin>
          </SModalBlock>
        </SModal>
      </SContainerSignUp>
    </SWrapper>
  );
};
