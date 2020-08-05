import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import {keycloak} from './config';

interface Credentials {
  subject: any
}

interface AuthContextData {
  user: object;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: Credentials
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('use Auth must be used within an AuthProvider.');
  }
  return context;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    keycloak.init({
      onLoad: 'login-required',
      flow: 'standard',
      checkLoginIframe: false
    }).then(async authenticated => {
      if (authenticated) {
        // window.sessionStorage.setItem('privilege', keycloak.token);
        setAuthData({ user: { subject: keycloak.subject }, token: keycloak.token});
      }
    }).catch(async error => {
      alert(`Error to login ${JSON.stringify(error)}`);
    });
    setAuthData({} as AuthState);
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      console.log('signIn');
    }, [],
  );

  const signOut = useCallback(async () => {
    console.log('signOut');
    keycloak.logout();
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
