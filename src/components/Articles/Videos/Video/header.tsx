import React from 'react';

import TeamInfo from '../../Elements/teamInfo';
import { IArticle, ITeams } from '../../../../Interface/interfaces';

interface IProps {
  teamData: ITeams;
  article: IArticle;
}
const header = (props: IProps) => {
  const teamInfo = (team: ITeams) => {
    return team ? <TeamInfo team={team} /> : null;
  };
  return <div>{teamInfo(props.teamData)}</div>;
};

export default header;
