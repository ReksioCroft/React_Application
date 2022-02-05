import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from '@mui/material/styles'
import { theme_ui } from './material_ui/theme_ui'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme_ui }>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
