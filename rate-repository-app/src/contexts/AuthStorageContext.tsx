import React from 'react';

import { AuthProviderProps } from '../types';
import AuthStorage from '../utils/authStorage';

/* AuthStorage class is used as a type in this file */

const AuthStorageContext = React.createContext<AuthStorage | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ value, children }) => (
  <AuthStorageContext.Provider value={value}>
    {children}
  </AuthStorageContext.Provider>
);

export default AuthStorageContext;