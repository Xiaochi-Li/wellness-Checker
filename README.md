### installation
1. run `yarn` to install packages.
2. run `yarn start` to run Wellness-Checker on Local server

### packages
1. tslint and editerconfig for syntax and coding style consistency.

### system design idea
completely separate business logic and UI using connector pattern, all logic is in reduxCore. all react components are Stateless functional components.
doing so enhance the maintains when the application grow larger and state shape getting more complicate.

### testing
if test can't the run in watch mode, try `brew install watchman`
