import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import { IArticle, ITeams, IVideos } from '../../../../Interface/interfaces';

import Header from './header';

import styles from '../../articles.css';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';
interface IProps {
  team: ITeams[];
  article: IArticle[];
  match: IMatch;
}

interface IMatch {
  params: IParams;
  isExact: boolean;
  path: string;
  url: string;
}
interface IParams {
  id: string;
  path: string;
  url: string;
}
interface IState {
  article: IArticle[];
  team: ITeams[];
  teams: ITeams[];
  related: IVideos[];
}
class VideoArticle extends Component<IProps, IState> {
  state: IState = {
    article: [],
    team: [],
    teams: [],
    related: []
  };

  componentWillMount() {
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data;
        axios.get(`${URL}/teams?id=${article[0].team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
          this.getRelated();
        });
      });
  }

  getRelated = () => {
    axios.get(`${URL}/teams`).then(response => {
      let teams = response.data;

      axios.get(`${URL}/videos?q=new york&_limit=3`).then(response => {
        this.setState({
          teams,
          related: response.data
        });
      });
    });
  };
  render() {
    const article = this.state.article;
    const team = this.state.team;
    console.log(this.state.related);
    return article.length > 0 && team.length > 0 ? (
      <div>
        <Header teamData={team[0]} article={article[0]} />
        <div className={styles.videoWrapper}>
          <h1>{article[0].title}</h1>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${article[0].url}`}
          />
        </div>
        <VideosRelated data={this.state.related} teams={this.state.teams} />
      </div>
    ) : null;
  }
}

export default VideoArticle;
