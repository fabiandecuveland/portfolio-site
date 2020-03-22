import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { colors } from 'styles/index';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${colors.licorice};
    color: ${colors.eggshell};
    text-align: center;
  }
`;