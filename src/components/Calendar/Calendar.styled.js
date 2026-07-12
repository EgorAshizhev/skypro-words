import styled from 'styled-components';

export const SCalendar = styled.div`
  max-width: 210px;
  width: 100%;
  user-select: none;
`;

export const SCalendarTtl = styled.div`
  margin-bottom: 10px;
`;

export const SCalendarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCalendarNavBtn = styled.button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dropZoneBg};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SCalendarPeriod = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const SCalendarDayNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 4px;
`;

export const SCalendarDayName = styled.div`
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  padding: 4px 0;
`;

export const SCalendarCells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 2px;
`;

export const SCalendarCell = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 30px;
  border: none;
  background: transparent;
  border-radius: 50%;
  font-size: 12px;
  font-family: inherit;
  color: ${({ theme, $muted }) => ($muted ? theme.colors.textMuted : theme.colors.text)};
  opacity: ${({ $muted }) => ($muted ? 0.4 : 1)};
  cursor: ${({ $readOnly }) => ($readOnly ? 'default' : 'pointer')};
  transition: background-color 0.15s, color 0.15s;

  ${({ $today, theme }) =>
    $today &&
    `
      border: 1px solid ${theme.colors.accent};
    `}

  ${({ $selected, theme }) =>
    $selected &&
    `
      background-color: ${theme.colors.accent};
      color: #ffffff;
      font-weight: 600;
    `}

  &:hover {
    background-color: ${({ $readOnly, $selected, theme }) =>
      $readOnly || $selected ? undefined : theme.colors.dropZoneBg};
  }

  &:disabled {
    cursor: default;
  }
`;

export const SCalendarDateCreate = styled.p`
  margin-top: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};

  span {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;
