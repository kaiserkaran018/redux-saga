import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas/saga';
import reducer from '../reducers/reducer'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// export store
export default store;

// then run the saga
sagaMiddleware.run(mySaga);
