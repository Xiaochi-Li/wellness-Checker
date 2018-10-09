### Notice
This project is a little big over-engendered for showcase the skills and experiences
 the developer have.
Details are shown as follow.

1. For small project like this, strict type is not necessary, thus Typescript is not a must have. Using Typescript is just for showing the developer has the experience to work with strict typed dev environment.
2. Normally, the way to style component should be consist among the whole project. However, for showing the developer has the ability to work with existing UI 
 framework as well as creating a react component from scratch, the athlete table is build using styled-component and the rest of components are using Ant-design framework.
3. For small amount and simple data set like provided, redux can be a over-kill but still applied just for showing I have the ability to use it.
4. A api simulator is build to provide data from the JSON file. Fetching initial data has 1s delay just to simulate what happens in real world.
5. Several test cases are also prepared.

### System design idea
Completely separate business logic and UI, all logic is in reduxCore, so other 
developers know where to fix logic and UI related bugs. Doing so enhances the 
maintains when the application grow larger and state shape getting more complicate.

Because all business logic is handled by redux, only in very rare case a UI component will have state, thus all react components are Stateless functional components. Doing so increases performance, 
because SFC rendering is less costly than React.Component rendering.

### Installation
1. down load the package, or run `git clone https://github.com/Xiaochi-Li/wellness-Checker.git`
1. run `yarn` to install packages.
2. run `yarn start` to run Wellness-Checker on Local server

### Build
run `yarn build` to build the product.

### Packages
1. tslint and editerconfig for syntax and coding style consistency.
2. jest for testing.
3. antd and styled-components for styling UI.
4. redux-devtools-extension for monitoring redux core.

### Testing
run `yarn test` to run all test case in watch mode.
If test can't the run in watch mode, one main reason might be something with watchman package.
 Try `brew install watchman`.
