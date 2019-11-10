import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Experience from './containers/Experience/Experience';
import Skills from './containers/Skills/Skills';

class App extends Component {

  componentDidMount() {
    this.binaryToDecimal(10);
  }

  binaryToDecimal(n) {
    let exponents = [];
    Array.from(String(n), Number).forEach((num, i) => {
      if (num === 1) {
        exponents.push(i + 1);  
      }
    });
    // let power = exponents.map(num => Math.pow(2,num));
    console.log(exponents.reduce((a,b) => a + b, 0));
  }

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
