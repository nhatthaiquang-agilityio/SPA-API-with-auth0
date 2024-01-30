# Angular App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Requirements
+ Install Node 20
+ Install NPM 6.14.12
+ Using Auth0 for login


## Code scaffolding
Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Development server
    Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`.
    The app will automatically reload if you change any of the source files.

+ Add API in `src/environments/environment.ts`
    - `baseAPI: 'https://localhost:44367'`


+ Run Development
    - Run command: ` ng serve` or `npm start`

+ Browser:
    - `http://localhost:4200/`


## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

+ Build with virtual app(Items) on IIS
    - `ng build --base-href /`


## Running unit tests

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.
To use this command, you need to first add a package that implements end-to-end testing capabilities.
