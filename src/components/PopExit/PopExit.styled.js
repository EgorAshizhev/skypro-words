import styled from 'styled-components';

export const SPopExite = styled.div`
  /* Глобальный CSS задаёт display: none для .pop-exit */
  /* Переопределяем через !important чтобы inline style + fixed работали */
  display: none;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 10;

  &[style*="display: block"] {
    display: block !important;
  }
`;

export const SPopExContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const SPopExBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const SPopExTtl = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;

  h2 {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
`;

export const SPopExFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const SPopExBtnYes = styled.button`
  flex: 1;
  height: 40px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #33399b;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const SPopExNo = styled.button`
  flex: 1;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  border: 1.5px solid #565eef;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;