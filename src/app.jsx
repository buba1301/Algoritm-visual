import React from 'react';

import Array from './components/Array';
import createArray from './utils';

const App = () => {
  console.log('createArray', createArray(10));
  return <Array />;
};

export default App;
