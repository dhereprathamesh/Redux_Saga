import {put , takeLatest} from "redux-saga/effects";
import {INCREMENT_ASYNC, DECREMENT_ASYNC, increment, decrement} from "./counter.action";

function* incrementAyncSaga() {
    console.log("increment saga called")
    yield put (increment());
}

function* decrementAyncSaga() {
    console.log("increment saga called")
    yield put (decrement());
}

export function* counterSaga(){
    yield takeLatest(INCREMENT_ASYNC, incrementAyncSaga);
    yield takeLatest(DECREMENT_ASYNC, decrementAyncSaga);
}

