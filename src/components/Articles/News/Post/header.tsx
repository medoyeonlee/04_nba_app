import React from 'react';
import TeamInfo from '../../Elements/teamInfo';
import { ITeams, IArticle } from '../../../../Interface/interfaces';

import PostData from '../../Elements/postData';

interface IProps {
  teamData: ITeams;
  date: string;
  author: string;
}
const header = (props: IProps) => {
  const teamInfo = (team: ITeams) => {
    return team ? <TeamInfo team={team} /> : null;
  };

  const postData = (date: string, author: string) => {
    return <PostData data={{ date, author }} />;
  };

  return (
    <div>
      {teamInfo(props.teamData)}
      {postData(props.date, props.author)}
    </div>
  );
};

export default header;
