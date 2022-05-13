import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import history from './utils/history';



const App = () => {
  return (
          <Router history={history} >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/potato-calendar/privacy-policy" component={PrivacyPolicy} />
              <Route path="/potato-calendar" component={PrivacyPolicy} />
            </Switch>
          </Router>
  );
}

export default App;