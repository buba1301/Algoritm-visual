import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices';

import s from './Button.module';

const Button = ({ name }) => {
  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    dispatch(actions.createArray(30));
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
