import { RECEIVE_API_DATA } from '../action-types/action-type'

const intialState = {data: []};

export default (state = intialState, { type, data }) => {
    switch (type) {
    case RECEIVE_API_DATA:
        return {
            ...state,
            data: data
        };
    default:
        return state;
    }
};
