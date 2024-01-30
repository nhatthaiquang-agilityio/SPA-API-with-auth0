// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// TODO: Update ClientId, Domain and Audience of Auth0
export const environment = {
  production: false,
  auth: {
    domain: 'dev-i5eh5nau.us.auth0.com',
    clientId: '<ClientId>',
    redirectUri: 'http://localhost:4200/',
    audience: 'https://dev-i5eh5nau.us.auth0.com/api/v2/'
  },
  baseAPI: 'https://localhost:44367'
};
