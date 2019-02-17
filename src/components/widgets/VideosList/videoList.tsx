import React, { Component } from 'react';
import styles from './videoList.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/buttons';
import { ITeams } from '../NewsList/newsList';
import VideosListTemplate from './videosListTemplate';

interface IProps {
  type: string;
  title: boolean;
  loadmore: boolean;
  start: number;

  amount: number;
}
export interface IVideos {
  id: number;
  team: number;
  title: string;
  image: string;
  url: string;
  date: string;
  tags: string[];
}
export interface IState {
  teams: ITeams[];
  videos: IVideos[];
  start: number;
  end: number;
  amount: number;
}
class videosList extends Component<IProps, IState> {
  state: IState = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };
  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }
  request = (start: number, end: number) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end
      });
    });
  };
  renderVideos = () => {
    let template = null;

    switch (this.props.type) {
      case 'card':
        return (
          <VideosListTemplate
            videos={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;

      default:
        template = null;

        return template;
    }
  };
  loadMore = () => {
    let end = this.state.end + this.state.amount;
    console.log(this.state.end, end);
    this.request(this.state.end, end);
  };
  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <Button
        type="linkTo"
        cta="More Videos"
        linkTo="/videos"
        loadMore={() => this.loadMore()}
      />
    );
  };
  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };
  render() {
    return (
      <div className={styles.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}
export default videosList;
