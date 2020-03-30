import { RECEIVE_API_DATA, REQUEST_API_DATA } from '../action-types/action-type';

// action for request api
export const requestApiData = () => ({ type: REQUEST_API_DATA });

// action for recieve api data 
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
