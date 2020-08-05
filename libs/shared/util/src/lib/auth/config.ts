import Keycloak from 'keycloak-js';

export const keycloak = Keycloak({
  clientId: 'login-app',
  realm: 'shell',
  // realm: 'shellRealm',
  // url: 'https://shell.vakt.com:9443/auth'
  url: 'https://shell.qa03.login.dev02.vtest.info/auth'
});
