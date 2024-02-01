// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// TODO: Update ClientId, Domain and Audience of Auth0
export const environment = {
  production: false,
  auth: {
    domain: '<Auth0Domain>',
    clientId: '<Auth0ClientId>',
    redirectUri: 'http://localhost:4200/',
    audience: '<Auth0Audience>'
  },
  baseAPI: 'https://localhost:44367'
};
