import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
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
    background-color: #F1F1F1;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
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

  ._dark {
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

  @media screen and (max-width: 1200px) {
    .main__block {
      width: 100%;
      margin: 0 auto;
      padding: 40px 0 64px;
    }
    .main__content {
      display: block;
    }
    .main__column {
      width: 100%;
      margin: 0 auto;
      display: block;
    }
    .cards {
      width: 100%;
      display: flex;
      overflow-y: auto;
    }
    .cards__card {
      width: 220px;
      height: 130px;
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: stretch;
      padding: 15px 13px 19px;
    }
  }

  @media screen and (max-width: 660px) {
    .pop-new-card {
      top: 70px;
    }
    .pop-new-card__container {
      padding: 0;
      justify-content: flex-start;
    }
    .pop-new-card__block {
      border-radius: 0;
    }
    .pop-new-card__wrap {
      display: block;
    }
    .calendar {
      max-width: 340px;
      width: 100%;
    }
    .calendar__ttl,
    .calendar__nav,
    .calendar__period {
      padding: 0;
    }
    .calendar .date-create {
      display: none;
      margin-bottom: 7px;
    }
    .calendar__p {
      font-size: 14px;
    }
    .calendar__day-name {
      font-size: 14px;
    }
    .calendar__cells {
      width: 344px;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .calendar__cell {
      width: 42px;
      height: 42px;
      font-size: 14px;
    }
    .pop-browse {
      top: 70px;
    }
    .pop-browse__container {
      padding: 0;
      justify-content: flex-start;
    }
    .pop-browse__block {
      border-radius: 0;
    }
    .pop-browse__wrap {
      display: block;
    }
  }

  @media screen and (max-width: 495px) {
    .container {
      width: 100%;
      padding: 0 16px;
    }
    .header__btn-main-new {
      z-index: 3;
      position: fixed;
      left: 16px;
      bottom: 30px;
      top: auto;
      width: calc(100vw - 32px);
      height: 40px;
      border-radius: 4px;
      margin-right: 0;
    }
    .pop-new-card__container {
      padding: 0;
      justify-content: flex-start;
    }
    .pop-new-card__block {
      padding: 20px 16px 32px;
    }
    .pop-new-card__form {
      max-width: 100%;
      width: 100%;
      display: block;
    }
    .pop-new-card__calendar {
      width: 100%;
    }
    .form-new__area {
      max-width: 100%;
      height: 34px;
    }
    .form-new__create {
      width: 100%;
      height: 40px;
    }
    .pop-browse__block {
      padding: 20px 16px 32px;
    }
    .pop-browse__content .theme-down {
      display: block;
      margin-bottom: 20px;
    }
    .pop-browse__content .theme-top {
      display: none;
    }
    .pop-browse__form {
      max-width: 100%;
    }
    .pop-browse__calendar {
      width: 100%;
    }
    .pop-browse__btn-browse button,
    .pop-browse__btn-edit button {
      width: 100%;
      height: 40px;
    }
    .pop-browse__btn-browse .btn-group,
    .pop-browse__btn-edit .btn-group {
      width: 100%;
    }
    .pop-browse__btn-browse .btn-group button,
    .pop-browse__btn-edit .btn-group button {
      margin-right: 0px;
    }
    .form-browse__area {
      max-width: 100%;
    }
    .form-browse__area {
      height: 37px;
    }
  }

  @media only screen and (max-width: 375px) {
    .pop-exit__block {
      padding: 50px 20px;
    }
    .pop-exit__exit-yes {
      width: 100%;
      height: 40px;
      margin-right: 0;
      margin-bottom: 10px;
    }
    .pop-exit__exit-no {
      width: 100%;
      height: 40px;
    }
    .pop-exit__form-group {
      display: block;
    }
  }

  .loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);
    width: 100%;
    background-color: #f1f1f1;
  }

  .loading-text {
    font-size: 1.5rem;
    font-weight: 500;
    color: #2c3e50;
    background: white;
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
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
    </>
  );
};

export default App;