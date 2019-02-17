import React from 'react';
import styles from './videoList.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';
import { IVideos, IState } from './videoList';
import { ITeams } from '../NewsList/newsList';
interface IProps {
  videos: IVideos[];
  teams: ITeams[];
}
const VideosListTemplate = (props: IProps): JSX.Element => {
  console.log(props);

  return (
    <div>
      {props.videos.map((item, i) => {
        return (
          <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videoListItem_wrapper}>
              <div
                className={styles.left}
                style={{ background: `url(/images/videos/${item.image})` }}
              >
                <div />
              </div>
              <div className={styles.right}>
                <CardInfo
                  teams={props.teams}
                  team={item.team}
                  date={item.date}
                />
                <h2>{item.title}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideosListTemplate;
