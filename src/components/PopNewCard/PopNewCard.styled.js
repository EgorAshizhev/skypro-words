import styled from "styled-components";

export const SPopNewCard = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const SNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.overlay};

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
    padding-top: 70px;
  }
`;

export const SNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.modalBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderStrong};
  position: relative;
  max-height: 90vh;
  overflow-y: auto;

  @media screen and (max-width: 660px) {
    border-radius: 0;
    max-height: 100vh;
    min-height: 100vh;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 100px;
  }
`;

export const SNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const SNewCardTtl = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const SNewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const SNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const SNewCardCalendarWrap = styled.div`
  min-width: 180px;
  padding-top: 4px;

  @media screen and (max-width: 660px) {
    min-width: 0;
    width: 100%;
    margin-top: 10px;
  }
`;

export const SNewCardFormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SFormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.colors.inputBg};
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    letter-spacing: -0.14px;
  }
`;

export const SFormNewArea = styled(SFormNewInput).attrs({ as: 'textarea' })`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  resize: none;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 140px;
  }
`;

export const SFormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  transition: background-color 0.2s;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    float: none;
  }
`;

export const SFormSubTttl = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const SFormSubTttlP = styled(SFormSubTttl).attrs({ as: 'p' })``;

export const SPopCategories = styled.div`
  margin-bottom: 20px;
`;

export const SPopCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px 0;
`;

export const SPopCategoriesThemE = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;