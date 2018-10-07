import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {handleFetchAthletes} from "./reduxCore/actions/athleteActions";
import middleware from './reduxCore/middleware'
import reducers from './reduxCore/reducers';

const store = createStore(reducers, middleware);
store.dispatch(handleFetchAthletes);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
