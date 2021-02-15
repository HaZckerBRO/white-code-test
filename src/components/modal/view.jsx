import React from 'react';

import css from './style.module.scss';

const View = (props) => {
  return (
    <div className={css['modal-container']}>
      {
        props.children
      }
    </div>
  )
};

export { View }