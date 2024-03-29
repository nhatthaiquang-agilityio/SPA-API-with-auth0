# Single Page Application and API with Auth0
    This repository contains a Angular SPA supported by an ASP.NET Core backend to implement authentication and authorization with Auth0(SPA API)
    + Create Frontend App: using Angular, create SPA application in Auth0
    + Create Backend WebAPI: using NET 8, setting with Auth0
    + Add Authentication with JWT

## Run example
+ Create a Single Page Application in Auth0
+ Create an API in Auth0 and turn on authorize with the Single Page Application(Auth0 Audience)
+ Add Auth0Domain, Auth0ClientId and Auth0Audience into environments/environment.ts in ClientApp
+ Add Auth0Domain and Auth0Audience into appsettings.json in WebAPI
+ Start API:
    ```
    cd WebAPI
    dotnet run
    ```

+ Start Angular App
    ```
    cd ClientAPP
    npm start
    ```

## Result
+ ![Get Weather Forecast](./images/weatherforecast.png)

## References
+ [Solution Overview (SPAs + API)](https://auth0.com/docs/get-started/architecture-scenarios/spa-api/part-1)
+ [OAuth2 Implicit Grant and SPA](https://auth0.com/blog/oauth2-implicit-grant-and-spa/)