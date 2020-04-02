import { RECEIVE_API_DATA, REQUEST_API_DATA, RECEIVE_API_DATA_BY_ID, REQUEST_API_DATA_BY_ID, REQUEST_CREATE_EMPLOYEE, RECIEVE_CREATE_EMPLOYEE, REQUEST_UPDATE_USER_DATA, RECIEVE_UPDATE_USER_DATA } from '../action-types/action-type';

// action for request api
export const requestApiData = () => ({ type: REQUEST_API_DATA });

// action for recieve api data 
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

// action for request api
export const requestDataById = (id) => ({ type: REQUEST_API_DATA_BY_ID, id });

// action for recieve api data 
export const recieveDataById = data => ({ type: RECEIVE_API_DATA_BY_ID, data });

// action for request create employee
export const requestEmployeeCreate = data => ({ type: REQUEST_CREATE_EMPLOYEE, data });

// action for recieve create employee
export const recieveEmployeeCreate = data => ({ type: RECIEVE_CREATE_EMPLOYEE, data });

// action for request update an user data
export const requestUserDataUpdate = id => ({ type: REQUEST_UPDATE_USER_DATA, id });

//action for recieve update an user data 
export const recieveUserDataUpdate = data => ({ type: RECIEVE_UPDATE_USER_DATA, data });

