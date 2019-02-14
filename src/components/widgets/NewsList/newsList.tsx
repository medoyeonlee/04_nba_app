import React, { Component, ReactNode, DetailedHTMLProps } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { INews } from '../NewsSlider/slider';
import { URL } from '../../../config';
import styles from './newsList.css';
import Button from '../Buttons/buttons';

interface IProp {
  type: string;
  loadmore: boolean;
  start: number;
  amount: number;
}
interface IState {
  items: INews[];
  start: number;
  end: number;
  amount: number;
}

class NewsList extends Component<IProp, {}> {
  state: IState = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start: number, end: number) => {
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        items: [...this.state.items, ...response.data]
      });
    });
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };
  renderNews = (type: string) => {
    let template = null;

    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => {
          return (
            <CSSTransition
              classNames={{
                enter: styles.newsList_wrapper,
                enterActive: styles.newsList_wrapper_enter
              }}
              timeout={500}
              key={i}
            >
              <div>
                <div className={styles.newsList_item}>
                  <Link to={`/articles/${item.id}`}>
                    teams
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
          );
        });
        break;

      default:
        template = null;
    }

    return template;
  };
  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }
}

export default NewsList;