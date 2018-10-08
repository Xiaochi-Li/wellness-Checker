### Notice
This project is a little big over-engendered for showcase the skills and experiences I have.
1. For small project like this, strict type is not necessary, thus Typescript is not a must have.
2. Normally, the way to style component should be consist among the whole project. However, for showing I have the ability to work with existing UI framework as well as creating a react component from scratch,
the athlete table is build using styled-component and the rest of components are using Ant-design framework.
3. For small amount and simple data set like provided, redux can be a over-kill but still applied just for showing I have the ability to use it.
4. A api simulator is build to provide data from the JSON file. Fetching initial data has 1s delay just to simulate what happens in real world.
5. Several test cases are also prepared.

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
