import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.scss';


const View = (props) => {
  const newsTitle = 'News Title';
  const newsText = 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
  const newsImageUrl = 'https://reqres.in/img/faces/11-image.jpg';
  const newsId = props.newsId;

  return (
    <div className={`${css['card-news-item']} card mb-3`}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={newsImageUrl} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{newsTitle}</h5>
            <p className="card-text">{newsText}</p>
            {props.linkHidden
              ? null
              : <Link to={'news/5'} type="button" className="btn btn-primary">Read</Link>
            }

          </div>
        </div>
      </div>
    </div>
  )
};

export { View }