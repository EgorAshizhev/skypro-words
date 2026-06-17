import styled from 'styled-components';

export const SNotFoundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
`;

export const SNotFoundBlock = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

export const SNotFoundCode = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: #565eef;
  line-height: 1;
  margin-bottom: 16px;
  letter-spacing: -4px;

  @media screen and (max-width: 495px) {
    font-size: 80px;
  }
`;

export const SNotFoundTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
`;

export const SNotFoundText = styled.p`
  font-size: 16px;
  color: #94a6be;
  margin-bottom: 32px;
  line-height: 1.5;
`;

export const SNotFoundBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 32px;
  background-color: #565eef;
  color: #ffffff;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.2px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #33399b;
  }
`;
