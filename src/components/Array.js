import React from 'react';
import Bar from '../shared/Bar';
import createArray from '../utils';

import s from './Array.module';

const windowWidth = window.screen.width;
const newArray = createArray(20);
const barWidth = windowWidth / newArray.length;

const Array = () => (
  <div className={s.array}>
    {newArray.map((item, index) => (
      <Bar key={item} width={barWidth} height={item} />
    ))}
  </div>
);

export default Array;
