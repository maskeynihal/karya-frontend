import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from 'Redux/reducers';
import appMiddleware from './middleware/appMiddleware';
import apiMiddleware from './middleware/apiMiddleware';

const createStoreWithMiddleware = applyMiddleware(appMiddleware, apiMiddleware, thunk)(createStore);
const store = createStoreWithMiddleware(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
