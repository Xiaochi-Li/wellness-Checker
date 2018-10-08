import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../../components/App';


/**
 * test if the root App react element is generated.
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
