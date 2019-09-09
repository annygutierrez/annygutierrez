import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Experience from './containers/Experience/Experience';
import Skills from './containers/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
