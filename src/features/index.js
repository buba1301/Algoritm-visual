/* eslint-disable import/no-cycle */
import { createListenerMiddleware } from '@reduxjs/toolkit';

import bubbleSort from './bubbleSort';
import selectedSort from './selectedSort';
import fastSort from './fastSort';

const listenerMiddleware = createListenerMiddleware();

export { bubbleSort, selectedSort, fastSort };

export default listenerMiddleware;
