import React, { ReactPropTypes, SFC } from 'react';
import { Link } from 'react-router-dom';

import styles from './buttons.css';
interface IProps {
  type: string;
  loadMore: any;
  cta: string;
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
    default:
      template = null;
  }
  return template;
};

export default buttons;
