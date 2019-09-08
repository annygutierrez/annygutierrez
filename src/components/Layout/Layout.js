import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  /**
   * Bind the function in the constructor to create just one instance of the function.
   */
  constructor() {
    super();
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if (window.innerWidth > 500) {
      this.setState({ showSideDrawer: false });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar
          fixed={this.state.showSideDrawer}
          drawerToggleClicked={this.sideDrawerToggleHandler}
          drawerToggleActive={this.state.showSideDrawer}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
        />
        <main>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default Layout;