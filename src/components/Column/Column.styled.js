import styled from 'styled-components';

export const SColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

export const SColumnTitleP = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const SMainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0 0 12px;
  }
`;

export const SCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  min-height: 12px;
  border-radius: 10px;
  transition: background-color 0.15s ease;
  background-color: ${({ $isDraggingOver, theme }) =>
    $isDraggingOver ? theme.colors.dropZoneBg : 'transparent'};

  @media screen and (max-width: 1024px) {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 8px;
    -webkit-overflow-scrolling: touch;
  }
`;

export const SCardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;

  @media screen and (max-width: 1024px) {
    flex: 0 0 auto;
  }
`;

export const SCardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  cursor: pointer;
  box-shadow: ${({ $isDragging }) =>
    $isDragging ? '0px 8px 24px rgba(0, 0, 0, 0.2)' : 'none'};
  transition: background-color 0.2s ease, box-shadow 0.15s ease;
`;

export const SCardsGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCardsTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const SCardsBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const SCardTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    width: 13px;
    flex-shrink: 0;
  }
  & svg path {
    fill: ${({ theme }) => theme.colors.textMuted};
  }
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
    letter-spacing: 0.2px;
  }
`;