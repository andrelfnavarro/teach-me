import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { ThemeProvider } from 'styled-components';

const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};
export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/about'>
            <h1>ABOUT</h1>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
