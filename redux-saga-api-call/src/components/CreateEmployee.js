import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { requestEmployeeCreate } from '../actions/action'
import { bindActionCreators } from 'redux';

const CreateEmployee = (props) => {

    const {
        requestEmployeeCreate
    } = props

    let [value, setValue] = useState('');

    const handleOnClick = () => {
        setValue(value = {name: document.getElementById('name').value, salary: document.getElementById('salary').value, age: document.getElementById('age').value});
        requestEmployeeCreate(value);
    }

    useEffect(() => {
        console.log(props.dataSuccess.id, 'id');
        if(props.dataSuccess.id){
            const route = true;
            alert(`Employee Created id is ${props.dataSuccess.id}`);
            console.log('rout', route)
        }
    })

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="name">Name:</label>
                        </td>
                        <td>
                            <input type='text' id='name' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="salary">Salary:</label>
                        </td>
                        <td>
                            <input type='number' id='salary' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="age">Age:</label>
                        </td>
                        <td>
                            <input type='number' id='age' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => handleOnClick()}>Click</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    dataSuccess:  _.get(state, 'userSuccess.data', [])
});

function mapDispatchToProps(dispatch) {
    return {
        requestEmployeeCreate: bindActionCreators(requestEmployeeCreate, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee)
