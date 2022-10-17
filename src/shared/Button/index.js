import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices';

import s from './Button.module';

const Button = ({ name }) => {
  const dispatch = useDispatch();

  console.log(actions);

  const handleClick = ({ target }) => {
    // dispatch(actions.createArray(30));
    dispatch(actions.setActiveElement([0, 1]));
    dispatch(actions.bubbleSort());
  };

  return (
    <button
      type='button'
      name={name}
      className={s.button}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
