import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates';

import { URL } from '../../../config';

export interface INews {
  id: string;
  team: number;
  title: string;
  image: string;
  body: string;
  date: string;
  author: string;
  tages: string[];
}
export interface IState {
  news: INews[];
  type?: string;
  settings?: ISetting;
}
interface IProps {
  type: string;
  start: number;
  amount: number;
  settings: ISetting;
}

export interface ISetting {
  dots?: boolean;
  infinite?: boolean;
  arrows?: boolean;
  speed?: number;
  slideToShow?: number;
  slidesToScroll?: 1;
}

class NewsSlider extends Component<IProps, {}> {
  state: IState = {
    news: []
  };

  componentWillMount() {
    axios
      .get(
        `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
      )
      .then(response => {
        this.setState({
          news: response.data
        });
      });
  }
  render() {
    return (
      <SliderTemplates
        news={this.state.news}
        type={this.props.type}
        settings={this.props.settings}
      />
    );
  }
}

export default NewsSlider;
