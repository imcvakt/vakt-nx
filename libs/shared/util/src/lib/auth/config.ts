import Keycloak from 'keycloak-js';

export const keycloak = Keycloak({
  clientId: 'login-app',
  realm: 'shellRealm',
  // realm: 'shellRealm',
  // url: 'https://shell.vakt.com:9443/auth'
  url: 'https://shell.vakt.com:9443/auth'
});
