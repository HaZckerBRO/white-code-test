import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../store/news/actions';
import { findItem, getNewsItem } from './utils';
import { View } from './view';


let Modal = (props) => {
  const { target, params, news, getNews } = props;

  if (target === 'news' && !news.newsList.length) {
    getNews()
  }

  function getChildren(target) {
    if (target === 'news') {
      const newsItem = findItem(params, news.newsList);
      return getNewsItem(newsItem)
    }
    return null;
  }

  return (
    <View>
      { getChildren(target) }
    </View>
  )
};

const mapStateToProps = (state) => {
  return {
    news: {
      newsList: state.news.list
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => {
      dispatch(fetchNews());
    }
  }
};

Modal = connect(mapStateToProps, mapDispatchToProps)(Modal);



export { Modal }