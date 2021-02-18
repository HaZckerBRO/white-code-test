import { FETCH_NEWS, SET_NEWS_LIST } from './types';


export const fetchNews = () => {
  return {
    type: FETCH_NEWS
  }
};

export const setNewsList = (list) => {
  return {
    type: SET_NEWS_LIST,
    payload: list
  }
};