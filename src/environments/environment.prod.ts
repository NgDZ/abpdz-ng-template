import { Config } from '@abpdz/ng.core';

const baseUrl = '';

export const environment = {
  production: true,
  idleTime: 10 * 60 * 1000, // 10 minute
  application: {
    baseUrl,
    name: 'S2I',
    logoUrl: '',
  },
  oAuthConfig: {
    skipIssuerCheck: true,
    issuer: window.location.origin,
    redirectUri: window.location.origin,
    clientId: 'S2I_App',
    clientSecret: '1q2w3e*',
    scope: 'offline_access S2I',
    tokenUrl: '/connect/token',
    loginUrl: '/auth/login',
  },
  apis: {
    default: {
      url: '',
    },
  },
} as Config.Environment;
