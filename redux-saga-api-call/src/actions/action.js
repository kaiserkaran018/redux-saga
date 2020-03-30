import { RECEIVE_API_DATA, REQUEST_API_DATA } from '../action-types/action-type';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });