import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { requestDataById } from '../actions/action';

const Search = (props) => {

    // use state had variable and a function, function action is stored to the variable
    let [value, setValue] = useState('');

    const handleOnClick = () => {
        setValue(value = document.getElementById('getId').value);
        console.log('value', value);
    }

    return (
        <div>
            <input type='number' id='getId' />
            <button onClick={() => handleOnClick()} >Click</button>
        </div>
    )
}

const mapStateToProps = state => ({
    seperateData: _.get(state, 'dataById.data', [])
});

const mapDispatchToProps = dispatch => ({
    requestDataById: () => {
        dispatch(requestDataById())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)
