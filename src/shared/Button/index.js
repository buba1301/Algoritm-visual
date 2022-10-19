import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slices';

import s from './Button.module';

const Button = ({ name }) => {
  const valueList = useSelector((state) => state.valueList);

  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    // dispatch(actions.createArray(30));
    // dispatch(actions.setActiveElement([0, 1]));
    // dispatch(actions.bubbleSort(valueList));
    dispatch(actions.bubbleSort(valueList));
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
