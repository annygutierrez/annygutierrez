import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;