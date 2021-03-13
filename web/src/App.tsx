import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';

export const App: React.FC = () => {
  return (
    <Router>
      {/* <nav>
          <Link to='/'>Home</Link>

          <Link to='/about'>About</Link>

          <Link to='/users'>Users</Link>
        </nav> */}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/about'>
          <h1>ABOUT</h1>
        </Route>
        <Route path='/users'>
          <h1>USERS</h1>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
