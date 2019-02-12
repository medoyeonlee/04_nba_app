import React, { StatelessComponent, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import style from './header.css';
import FontAwesome from 'react-fontawesome';

//components
import SideNav from './SideNav/sideNav';

export interface IProp {
  showNav: boolean;
  onHideNav: any;
  onOpenNav: any;
}

const Header = (props: IProp) => {
  const logo = () => (
    <Link to="/" className={style.logo}>
      <img alt="nba logo" src="/images/nba_logo.png" />
    </Link>
  );

  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome
        name="bars"
        onClick={props.onOpenNav}
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer'
        }}
      />
    </div>
  );

  return (
    <header className={style.header}>
      <SideNav {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
