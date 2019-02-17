import React, { ReactPropTypes, SFC } from 'react';
import { Link } from 'react-router-dom';

import styles from './buttons.css';
import { Url } from 'url';
import { LocationDescriptor } from 'history';
interface IProps {
  type?: string;
  loadMore?: any;
  cta: string;
  linkTo?: any;
}
const buttons = (props: IProps) => {
  let template = null;

  switch (props.type) {
    case 'loadmore':
      template = (
        <div className={styles.blue_btn} onClick={props.loadMore}>
          {props.cta}
        </div>
      );
      break;
    case 'linkTo':
      template = (
        <Link to={props.linkTo} className={styles.blue_btn}>
          {props.cta}
        </Link>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default buttons;
