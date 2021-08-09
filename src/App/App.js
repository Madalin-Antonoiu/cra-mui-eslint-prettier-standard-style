import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import MainView from '../Views/MainView';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
  );
};

export default App;
