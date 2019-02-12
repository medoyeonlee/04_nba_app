import React from 'react';
const { SideNav } = require('react-simple-sidenav');
import { IProp } from '../header';

//components
import SideNavItems from './sideNav_items';

const SideNavigation = (props: IProp) => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#242424',
          padding: '10px',
          maxWidth: '28%'
        }}
      >
        <SideNavItems />
      </SideNav>
    </div>
  );
};

export default SideNavigation;
