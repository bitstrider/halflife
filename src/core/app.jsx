// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'core/root';

const element = document.getElementById('app');

ReactDOM.render(<Root/>, element)

/* HMR opt-in setting for this module */
if(module.hot) {
  module.hot.accept();
}
