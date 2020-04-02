import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_API_DATA, REQUEST_API_DATA_BY_ID, REQUEST_CREATE_EMPLOYEE } from '../action-types/action-type';
import { receiveApiData, recieveDataById, recieveEmployeeCreate } from '../actions/action';
import { fetchData, fetchDataById, createEmployee } from '../api/api';

function* getAllData() {
    try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (error) {
        console.log(error);
    }
}

function* getDataById(id) {
    try {
        const data = yield call(fetchDataById, id.id);
        yield put(recieveDataById(data));
    } catch (error) {
        console.log(error);
    }
}

function* createEmployees(userData) {
    try {
        const data = yield call(createEmployee, userData);
        yield put(recieveEmployeeCreate(data));
    } catch (error) {
        console.log(error);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getAllData);
    yield takeLatest(REQUEST_API_DATA_BY_ID, getDataById);
    yield takeLatest(REQUEST_CREATE_EMPLOYEE, createEmployees);
}
