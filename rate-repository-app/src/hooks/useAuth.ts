import { useContext } from 'react';

import AuthStorageContext from '../contexts/AuthStorageContext';
import AuthStorage from '../utils/authStorage';

const useAuth = (): AuthStorage => {
  const context = useContext(AuthStorageContext);

  if(!context) {
    throw new Error('hook must be implemented by a descendant component of AuthStorageContext provider');
  }

  return context;
};

export default useAuth;