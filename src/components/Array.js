import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bar from '../shared/Bar';
import { actions } from '../slices';

import s from './Array.module';

// const newArray = createArray(20);

const Array = () => {
  const [arrayLength, setArrayLength] = useState(30);

  const newArray = useSelector((state) => state.valueList);

  const windowWidth = window.screen.width;
  const barWidth = windowWidth / newArray.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.createArray(arrayLength));
  }, [arrayLength]);

  return (
    <div className={s.array}>
      {newArray.map((item, index) => (
        <Bar key={item} width={barWidth} height={item} />
      ))}
    </div>
  );
};

export default Array;
