import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.scss';


const View = ({data, linkHidden}) => {
  const { first_name, last_name, email, id, avatar } = data;
  const linkToDetail = 'news/' + id;

  return (
    <div className={`${css['card-news-item']} card mb-3`}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={avatar} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{id}. {first_name}</h5>
            <p className="card-text">{first_name} {last_name}</p>
            <p className="card-text">{email}</p>
            {linkHidden
              ? <Link to={'/'} type="button" className="btn btn-primary">Back</Link>
              : <Link to={linkToDetail} type="button" className="btn btn-primary">Read</Link>
            }

          </div>
        </div>
      </div>
    </div>
  )
};

export { View }