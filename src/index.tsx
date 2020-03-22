import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles/global';
import './styles.scss';

ReactDOM.render(
  <>
    <GlobalStyle />
    <div>{process.env.NODE_ENV}</div>
  </>,
  document.getElementById('app')
);

declare const module: any
if (module.hot) {
  module.hot.accept();
}