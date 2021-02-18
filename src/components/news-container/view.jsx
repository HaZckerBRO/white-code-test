import React, { useEffect, Fragment } from 'react';
import { NewsItem } from '../news-item';
import css from './style.module.scss';



const View = ({newsList, getNews}) => {

  useEffect(() => {
    getNews()
  }, []);

  function renderNews() {
    if (!newsList.length) {
      return null
    }
    return newsList.map((newsItem) => (
      <Fragment key={newsItem.id}>
        <NewsItem data={newsItem}/>
      </Fragment>
    ))
  }

  return (
    <div className={css['news-container']}>
      { renderNews() }
    </div>
  )
};

export { View }


