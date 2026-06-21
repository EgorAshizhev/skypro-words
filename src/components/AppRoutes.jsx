import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { PopNewCard } from './PopNewCard/PopNewCard';
import { PopBrowse } from './PopBrowse/PopBrowse';
import { PopExit } from './PopExit/PopExit';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      >
        <Route path="task/new" element={<PopNewCard />} />
        <Route path="task/:cardId" element={<PopBrowse />} />
        <Route path="/exit" element={<PopExit />} />
      </Route>

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};