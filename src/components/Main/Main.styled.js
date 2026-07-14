import styled from 'styled-components';

export const SMain = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.pageBg};
  transition: background-color 0.2s ease;
`;

export const SMainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 768px) {
    padding: 20px 0 100px;
  }
`;

export const SMainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 0;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const SMConteiner = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;

export const SLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pageBg};
`;

export const SLoadingText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 1rem 2rem;
  border-radius: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const SEmptyContainer = styled(SLoadingContainer)``;

export const SEmptyText = styled(SLoadingText)`
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const SErrorText = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  margin-bottom: 16px;
  font-size: 16px;
`;

export const SRetryBtn = styled.button`
  padding: 8px 24px;
  background-color: #565eef;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #33399b;
  }
`;