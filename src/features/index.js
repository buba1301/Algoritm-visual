import { createListenerMiddleware } from '@reduxjs/toolkit';

import bubbleSort from './bubbleSort';
import selectedSort from './selectedSort';

const listenerMiddleware = createListenerMiddleware();

export { bubbleSort, selectedSort };

export default listenerMiddleware;
