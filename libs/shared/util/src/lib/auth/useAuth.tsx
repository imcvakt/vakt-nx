import React, { createContext, useMemo, useCallback, useState, useContext, useEffect } from 'react';
import keycloak from 'keycloak-js';

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
  const [authData, setAuthData] = useState<AuthState>({ user: {subject: 'fake_token'}} as AuthState);
  // const kc = useMemo(
  //   () => keycloak({ clientId: process.env.NX_KEYCLOAK_CLIENT_ID, realm: process.env.NX_KEYCLOAK_REALM, url: process.env.NX_KEYCLOAK_URL })
  // , []);

  // useEffect(() => {
  //   if(process.env.NODE_ENV){
  //     kc.init({
  //       onLoad: 'login-required',
  //       flow: 'standard',
  //       checkLoginIframe: false
  //     }).then(async authenticated => {
  //       if (authenticated) {
  //         setAuthData({ user: { subject: kc.subject }, token: kc.token});
  //       }
  //     }).catch(async error => {
  //       alert(`Error to login ${JSON.stringify(error)}`);
  //     });
  //   }
  //   setAuthData({user: { subject: 'fake_token' }} as AuthState);
  // }, [kc]);

  const signIn = useCallback(
    async ({ email, password }) => {
      console.log('signIn');
    }, [],
  );

  const signOut = useCallback(async () => {
    console.log('signOut');
    // kc.logout();
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
