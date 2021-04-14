import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { ThemeProvider } from 'styled-components';
import { Header } from './atomic/org/header/header';
import { AppWrapper } from './App-styles';
import { Discover } from './components/discover/discover';
import { History } from './components/historic/history';
import { MyCourses } from './components/my-courses/my-courses';
import { CreateCourse } from './components/create-course/create-course';
import { UserContext } from './userContext';

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
  const user = useContext(UserContext);
  const logged = !!user?.name && !!user?.email;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header logged={logged} user={user} />
        <AppWrapper logged={logged}>
          <Switch>
            <Route path='/discover'>
              <Discover />
            </Route>
            <Route path='/history'>
              <History user={user} />
            </Route>
            <Route path='/my-courses'>
              <MyCourses user={user} />
            </Route>
            <Route path='/create-course'>
              <CreateCourse user={user} />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};
