import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import middleware from './reduxCore/middleware'
import reducers from './reduxCore/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
