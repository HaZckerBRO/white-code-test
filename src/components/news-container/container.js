import { connect } from 'react-redux';
import { View } from './view';
import { fetchNews } from '../../store/news/actions';

const mapStateToProps = (state) => {
  return {
    newsList: state.news.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => {
      dispatch(fetchNews());
    }
  }
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export { NewsContainer }

