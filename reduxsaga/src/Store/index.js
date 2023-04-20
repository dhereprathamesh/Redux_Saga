import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects";

import counterReducer from "./Counter/counter.reducer"
import { counterSaga } from "./Counter/counter.saga";

const combinedReducer = combineReducers({ counterReducer });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([counterSaga()]);

}
sagaMiddleware.run(rootSaga)

export default store;