import { createGlobalStyle } from 'styled-components';
import { AppThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import { AppRoutes } from './components/AppRoutes';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    max-width: 100%;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors.pageBg};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  ul li {
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ._hide {
    display: none;
  }

  .header__logo img {
    width: 85px;
  }

  ._hover01:hover {
    background-color: #33399b;
  }

  ._hover02:hover,
  .header__user:hover {
    color: #33399b;
  }

  ._hover02:hover::after,
  .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }

  ._hover03:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  ._hover03:hover a {
    color: #ffffff;
  }

  ._orange {
    background-color: #ffe4c2;
    color: #ff6d00;
  }

  ._green {
    background-color: #b4fdd1;
    color: #06b16e;
  }

  ._purple {
    background-color: #e9d4ff;
    color: #9a48f1;
  }

  ._gray {
    background: #94a6be;
    color: #ffffff;
  }

  ._active-category {
    opacity: 1 !important;
  }

  .loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);
    width: 100%;
    background-color: ${({ theme }) => theme.colors.pageBg};
  }

  .loading-text {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.cardBg};
    padding: 1rem 2rem;
    border-radius: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    animation: loading-pulse 1.5s infinite ease-in-out;
  }

  @keyframes loading-pulse {
    0% { opacity: 0.6; transform: scale(0.98); }
    50% { opacity: 1; transform: scale(1); }
    100% { opacity: 0.6; transform: scale(0.98); }
  }

  /* ===== Mobile adaptive ===== */
  @media screen and (max-width: 768px) {
    .main__block {
      width: 100%;
      margin: 0 auto;
      padding: 24px 0 90px;
    }
  }

  @media screen and (max-width: 495px) {
    .container {
      width: 100%;
      padding: 0 16px;
    }
  }
`;

export const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <AuthProvider>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </AuthProvider>
    </AppThemeProvider>
  );
};

export default App;