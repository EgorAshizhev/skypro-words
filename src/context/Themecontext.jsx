import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

const ThemeModeContext = createContext(null);

export const lightTheme = {
  mode: 'light',
  colors: {
    pageBg: '#F1F1F1',
    headerBg: '#FFFFFF',
    modalBg: '#FFFFFF',
    cardBg: '#FFFFFF',
    inputBg: 'transparent',
    inputBgActive: '#fafbff',
    text: '#000000',
    textMuted: '#94A6BE',
    border: 'rgba(148, 166, 190, 0.4)',
    borderStrong: '#D4DBE5',
    accent: '#565EEF',
    accentHover: '#33399B',
    danger: '#FF4D4F',
    overlay: 'rgba(0, 0, 0, 0.4)',
    shadow: '0px 4px 67px -12px rgba(0, 0, 0, 0.13)',
    dropZoneBorder: 'rgba(148, 166, 190, 0.5)',
    dropZoneBg: 'rgba(86, 94, 239, 0.05)',
  },
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    pageBg: '#121220',
    headerBg: '#1B1B2C',
    modalBg: '#1F1F30',
    cardBg: '#23233A',
    inputBg: 'transparent',
    inputBgActive: '#2A2A40',
    text: '#FFFFFF',
    textMuted: '#94A6BE',
    border: 'rgba(255, 255, 255, 0.12)',
    borderStrong: 'rgba(255, 255, 255, 0.12)',
    accent: '#565EEF',
    accentHover: '#7A81F5',
    danger: '#FF6B6D',
    overlay: 'rgba(0, 0, 0, 0.6)',
    shadow: '0px 4px 40px -8px rgba(0, 0, 0, 0.6)',
    dropZoneBorder: 'rgba(255, 255, 255, 0.2)',
    dropZoneBg: 'rgba(86, 94, 239, 0.12)',
  },
};

const STORAGE_KEY = 'theme';

const getInitialMode = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleTheme = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  const value = useMemo(
    () => ({ mode, isDark: mode === 'dark', toggleTheme }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);