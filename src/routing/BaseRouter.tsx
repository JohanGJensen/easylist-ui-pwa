import React from 'react';
import { Routes, Route } from "react-router-dom";

// components
import SpaceProvider from '../providers/SpaceProvider';
import HomePage from '../views/HomePage';
import SettingsPage from '../views/SettingsPage';

interface IProps { }

const BaseRouter: React.FC<IProps> = () => {

  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <SpaceProvider>
            <HomePage />
          </SpaceProvider>
        }
      />
      <Route
        path={'/settings'}
        element={<SettingsPage />}
      />
    </Routes>
  );
}

export default BaseRouter;