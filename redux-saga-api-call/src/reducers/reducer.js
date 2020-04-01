import { RECEIVE_API_DATA, RECEIVE_API_DATA_BY_ID, RECIEVE_CREATE_EMPLOYEE, RECIEVE_UPDATE_USER_DATA } from '../action-types/action-type'

const intialState = {data: []};

export default (state = intialState, { type, data }) => {
    switch (type) {
    case RECEIVE_API_DATA:
        return {
            ...state,
            allData: data
        };
    case RECEIVE_API_DATA_BY_ID:
        return {
            ...state,
            dataById: data
        };
    case RECIEVE_CREATE_EMPLOYEE:
        return {
            ...state,
            userSuccess: data
        };
    case RECIEVE_UPDATE_USER_DATA:
        return {
            ...state,
            updatedData: data
        };
    default:
        return state;
    }
};
