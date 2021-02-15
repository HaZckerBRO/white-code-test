import React from 'react';
import {  Link } from 'react-router-dom';
import { NewsItem } from '../news-item';

import css from './style.module.scss';



const View = (props) => {

  return (
    <div className={css['news-container']}>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
};

export { View }