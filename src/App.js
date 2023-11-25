import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router';
import Home from './pages/Home';
import Notes from './pages/Notes';
import PrivacyPolicy from './pages/PrivacyPolicy';
import history from './utils/history';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-241150928-1";

ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
          <Router history={history} >
            <Switch>
              <Route exact path="/" component={Notes} />
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/potato-calendar/privacy-policy" component={PrivacyPolicy} />
              <Route path="/potato-calendar" component={PrivacyPolicy} />
            </Switch>
          </Router>
  );
}

export default App;