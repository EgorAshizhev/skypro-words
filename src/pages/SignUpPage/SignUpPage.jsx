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
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !login.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }

    setIsLoading(true);
    try {
      await register(login.trim(), name.trim(), password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Ошибка регистрации. Попробуйте другой логин.');
    } finally {
      setIsLoading(false);
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
                disabled={isLoading}
              />
              <SModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                disabled={isLoading}
              />
              <SModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              {error && (
                <p style={{ color: '#e53e3e', fontSize: '14px', marginBottom: '8px' }}>
                  {error}
                </p>
              )}
              <SModalBtnSignUp type="submit" disabled={isLoading}>
                {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
              </SModalBtnSignUp>
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