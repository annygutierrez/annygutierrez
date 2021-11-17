import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from 'react-bootstrap';
import Notification from './components/Notification';
import { useInput } from '../src/hooks/input-hook';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Router, Route, Switch, Redirect } from 'react-router';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import history from './utils/history';
import { play, exit } from './timelines';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;  // here is the gotcha....


const App = () => {
  console.log(history);
  const { pathname, key } = history.location;
  return (
    <div>
      <TransitionGroup component={null}>
        <Transition
          key={key}
          appear={true}
          onEnter={(node, appears) => play(pathname, node, appears)}
          onExit={(node, appears) => exit(node, appears)}
          timeout={{ enter: 750, exit: 150 }}
        >
          <Router history={history} >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/potato-calendar/privacy-policy" component={PrivacyPolicy} />
              <Route path="/potato-calendar" component={PrivacyPolicy} />
            </Switch>
          </Router>
        </Transition>
      </TransitionGroup>
    </div>
  );
}

export default App;





{/* <div>
      <Router history={history} >
        <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
      </Router>
    </div> */}