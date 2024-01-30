export const environment = {
  production: true,
  auth: {
    clientId: '#{{Auth0ClientId}}#',
    domain: '#{{Auth0Domain}}#',
    redirectUri: '#{{Auth0RedirectUri}}#',
    audience: '#{{Auth0Audience}}#'
  },
  baseAPI: '#{{BaseAPI}}#'
};
