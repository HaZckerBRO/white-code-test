import React, {useEffect, createRef} from 'react';
import css from './style.module.scss';

const View = ({children}) => {
  const ref = createRef();

 useEffect(() => {
    ref.current.classList.add(css.visible)
  }, []);

  return (
    <div ref={ref} className={css['modal-container']}>
      { children }
    </div>
  )
};

export { View }