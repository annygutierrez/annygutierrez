import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import menuIcon from './assets/menu-icon.svg';
import labelIcon from './assets/label-icon.svg';
import user from './assets/user.svg';
import arrow from './assets/arrow.svg';
import kaytrust from './assets/kaytrust.svg';
import kayweb1 from './assets/kayweb1.svg';
import wallet1 from './assets/wallet1.svg';
import people from './assets/people.svg';
import world from './assets/world.svg';
import kaytrustweb from './assets/kaytrustweb.svg';
import Notification from './components/Notification';
import { useInput } from '../src/hooks/input-hook';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Router, Route, Switch, Redirect } from 'react-router';
import Home from './components/Home';
import history from './utils/history';
import { play, exit } from './timelines';

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