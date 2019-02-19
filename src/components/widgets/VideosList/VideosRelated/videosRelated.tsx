import React from 'react';
import styles from '../videoList.css';
import { ITeams } from '../../../../Interface/interfaces';
import VideosListTemplate from '../videosListTemplate';

interface IProps {
  data: any;
  teams: ITeams[];
}
const videosRelated = (props: IProps) => {
  console.log(props.data);
  return (
    <div className={styles.relatedWrapper}>
      <VideosListTemplate videos={props.data} teams={props.teams} />
    </div>
  );
};

export default videosRelated;
