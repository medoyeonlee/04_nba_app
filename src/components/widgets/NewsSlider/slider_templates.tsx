import React from 'react';
import { IState, ISetting } from './slider';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';

import styles from './slider.css';

const SliderTemplates = (props: IState) => {
  let template = null;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
  };

  switch (props.type) {
    case 'featured':
      template = props.news.map((item, i) => {
        console.log(item);
        return (
          <div key={i}>
            <div className={styles.featured_item}>
              <div
                className={styles.featured_image}
                style={{
                  background: `url(../images/articles/${item.image})`
                }}
              />
              <Link to={`/articles/${item.id}`}>
                <div className={styles.featured_caption}>{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;

    default:
      template = null;
  }
  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplates;
