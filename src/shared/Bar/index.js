import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import s from './Bar.module';

const Bar = ({ width, height, index }) => {
  const activeElements = useSelector((state) => state.UIState.activeElement);
  const sortedElements = useSelector((state) => state.UIState.sortedElement);
  const helperElements = useSelector((state) => state.UIState.helperElement);

  const barStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const classNames = cn(s.bar, {
    [s.active]: activeElements.includes(index),
    [s.sorted]: sortedElements.includes(index),
    [s.helper]: helperElements.includes(index),
  });

  return (
    <div className={classNames} style={barStyle}>
      <span>{height}</span>
    </div>
  );
};

export default Bar;
