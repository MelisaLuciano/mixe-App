import React from 'react';
import {AuthProviders} from './AuthProviders';
import {Routes} from './Routes';

interface ProviderProps {}

export const Provider: React.FC<ProviderProps> = ({}) => {
  return (
    <AuthProviders>
      <Routes />
    </AuthProviders>
  );
};
