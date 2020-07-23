import { createStore, applyMiddleware } from 'redux';
import { compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './modules/reducers';

export default function configureStore(initialState) {
  const middlewares = applyMiddleware(thunk);
  const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composedEnhancers(middlewares));

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./modules/reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}