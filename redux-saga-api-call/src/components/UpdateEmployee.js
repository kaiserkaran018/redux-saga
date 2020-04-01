import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { requestApiData } from '../actions/action';

const  UpdateEmployee = (props) => {

    useEffect(() => props.requestApiData(), []);

    console.log(props, 'props in update page');

    return (
        <div>
            In Update
        </div>
    )
}


const mapStateToProps = state => ({
    updatedData:  _.get(state, 'updatedData.data', []),
    apiData: _.get(state, 'allData.data', []),
    seperateData: _.get(state, 'dataById.data', [])
});

const mapDispatchToProps = dispatch => ({
    requestApiData: () => {
        dispatch(requestApiData())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee)
