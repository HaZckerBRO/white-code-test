import {NewsItem} from '../news-item';
import React from 'react';

export function findItem(id, list) {
  return list.find(item => item.id === Number(id))
}

export function getNewsItem(item) {
  if (item) {
    return <NewsItem data={item} linkHidden />
  }
  return null;
}
