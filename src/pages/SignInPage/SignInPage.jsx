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
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!login.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }

    setIsLoading(true);
    try {
      await authLogin(login.trim(), password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Неверный логин или пароль');
    } finally {
      setIsLoading(false);
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
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                disabled={isLoading}
              />
              <SModalInput
                type="password"
                name="password"
                id="formpassword"
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
              <SModalBtnEnter type="submit" disabled={isLoading}>
                {isLoading ? 'Вход...' : 'Войти'}
              </SModalBtnEnter>
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