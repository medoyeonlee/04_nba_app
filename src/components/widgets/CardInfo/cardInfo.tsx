import React from 'react';
import FontAwesome from 'react-fontawesome';
import { ITeams } from '../NewsList/newsList';

import styles from './cardInfo.css';

const CardInfo = (props: any) => {
  const teamName: any = (teams: ITeams[], team: number) => {
    let data = teams.find(item => {
      return item.id === team;
    });
    if (data) {
      return data.name;
    }
  };
  return (
    <div className={styles.cardInfo}>
      <span className={styles.teamName}>
        {teamName(props.teams, props.team)}
      </span>
      <span className={styles.date}>
        <FontAwesome name="clock-o" />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
