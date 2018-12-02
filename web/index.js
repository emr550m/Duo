import ReactDOM from 'react-dom';
import React from 'react';
import App from './app'

import { Provider } from 'react-redux';
import store from '../app/state/store';



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("container") );

if (module.hot) {
   module.hot.accept('react-redux', function() {
      console.log('Accepting the updated printMe module!');
      ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("container") );

   })
  }