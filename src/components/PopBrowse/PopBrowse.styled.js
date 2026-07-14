import styled from 'styled-components';

export const SPopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const SPopBroContainer = styled.div`
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

export const SPopBroBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.modalBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
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
    padding: 20px 16px 32px;
  }
`;

export const SPopBroClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SPopBroContent = styled.div`
  display: block;
  text-align: left;
`;

export const SPopBroTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SPopBroTtl = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  flex: 1;
  margin-right: 12px;
`;

export const SPopBroCategoryBadge = styled.div`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  flex-shrink: 0;
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const SPopBroSubttl = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 10px;
`;

export const SPopBroStatusBlock = styled.div`
  margin-bottom: 20px;
`;

export const SPopBroStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SPopBroStatusTheme = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 16px;
  border-radius: 24px;
  cursor: ${({ $editable }) => ($editable ? 'pointer' : 'default')};
  opacity: ${({ $active }) => ($active ? 1 : 0.35)};
  transition: opacity 0.15s;
  border: ${({ $active, $editable }) =>
    $active && $editable ? '1.5px solid #565EEF' : '1.5px solid transparent'};
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
  }
  &:hover {
    opacity: ${({ $editable }) => ($editable ? 1 : undefined)};
  }
`;

export const SPopBroWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    display: block;
  }
`;

export const SPopBroFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SPopBroArea = styled.textarea`
  width: 100%;
  max-width: 340px;
  height: 160px;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.14px;
  margin-top: 10px;
  resize: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'text')};
  background-color: ${({ readOnly, theme }) =>
    readOnly ? 'transparent' : theme.colors.inputBgActive};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    letter-spacing: -0.14px;
  }

  @media (max-width: 495px) {
    max-width: 100%;
  }
`;

export const SPopBroCalendarWrap = styled.div`
  min-width: 160px;

  @media (max-width: 660px) {
    min-width: 0;
  }
`;

export const SPopBroDateLabel = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  & svg {
    flex-shrink: 0;
  }
  & svg path {
    fill: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const SPopBroBtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 495px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;

export const SBtnLeft = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 495px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SBtnBase = styled.button`
  height: 30px;
  padding: 0 18px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  transition: background-color 0.2s, color 0.2s;

  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const SBtnPrimary = styled(SBtnBase)`
  background-color: #565eef;
  border: none;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
  }
`;

export const SBtnOutline = styled(SBtnBase)`
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;
  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;

export const SBtnDanger = styled(SBtnBase)`
  background-color: transparent;
  border: 0.7px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.danger};
  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: #ffffff;
  }
`;