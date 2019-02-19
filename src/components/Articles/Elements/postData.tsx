import React from 'react';
import styles from '../articles.css';

interface IProps {
  data: {
    date: string;
    author: string;
  };
}
const PostData = (props: IProps) => {
  return (
    <div className={styles.articlePostData}>
      <div>
        Date:
        <span>{props.data.date}</span>
      </div>
      <div>
        Author:
        <span>{props.data.author}</span>
      </div>
    </div>
  );
};

export default PostData;
