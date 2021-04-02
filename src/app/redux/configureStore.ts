import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

// const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  // const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    rootReducer,
    composeWithDevTools({})
    // composeEnhancers(/* applyMiddleware(sagaMiddleware) */)
  );

  // sagaMiddleware.run(rootSaga);

  return { store };
};
