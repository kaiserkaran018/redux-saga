import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_API_DATA } from '../action-types/action-type';
import { receiveApiData } from '../actions/action';
import { fetchData } from '../api/api';

function* getApiData() {
    try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
    } catch (e) {
    console.log(e);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}
