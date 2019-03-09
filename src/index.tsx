import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

ReactDOM.render(
  <div>{process.env.NODE_ENV}</div>,
  document.getElementById('app')
);

declare const module: any
if (module.hot) {
  module.hot.accept();
}