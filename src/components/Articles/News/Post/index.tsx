import React, { Component, ReactNode, ReactChildren, ReactChild } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';

import styles from '../../articles.css';

import Header from '../Post/header';

import { ITeams, IArticle } from '../../../../Interface/interfaces';

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
}
class NewsArticles extends Component<IProps, IState> {
  state: IState = {
    article: [],
    team: []
  };

  componentWillMount() {
    console.log(this.props.match);
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data;
        axios.get(`${URL}/teams?id=${article[0].team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
        });
      });
  }
  render() {
    const article = this.state.article;
    const team = this.state.team;

    return article.length > 0 && team.length > 0 ? (
      <div className={styles.article}>
        <Header
          teamData={team[0]}
          date={article[0].date}
          author={article[0].author}
        />
        <div className={styles.articleBody}>
          <h1>{article[0].title}</h1>
          <div
            className={styles.articleImage}
            style={{
              background: `url('/images/articles/${article[0].image}')`
            }}
          />
          <div className={styles.articleText}>{article[0].body}</div>
        </div>
      </div>
    ) : null;
  }
}

export default NewsArticles;
