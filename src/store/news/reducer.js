import { SET_NEWS_LIST } from './types';

const initState = {
  list: []
};

export const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NEWS_LIST:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};