import { createStore, combineReducers, applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './../Login/Reducer';
import rootSagas from './Sagas';

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas);
export default store;