import React from 'react';

import s from './Bar.module';

const Bar = ({ width, height }) => {
  const barStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={s.bar} style={barStyle}>
      Bar
    </div>
  );
};

export default Bar;
