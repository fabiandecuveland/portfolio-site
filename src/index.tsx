import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <>
    <GlobalStyle />
    
  </>,
  document.getElementById('app')
);

declare const module: any
if (module.hot) {
  module.hot.accept();
}