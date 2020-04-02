import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { requestApiData } from '../actions/action';

const App = (props) => {

    // ComponentDidMount in react hooks
    useEffect(() => props.requestApiData(), []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            S.No
                        </th>
                        <th>
                            Employee Name
                        </th>
                        <th>
                            Employee Salary
                        </th>
                        <th>
                            Employee Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.apiData.map( data =>
                    <tr key={data.id}>
                        <td>
                            {data.id}
                        </td>
                        <td>
                            {data.employee_name}
                        </td>
                        <td>
                            {data.employee_salary}
                        </td>
                        <td>
                            {data.employee_age}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({ 
    apiData: _.get(state, 'allData.data', [])
});

const mapDispatchToProps = dispatch => ({
    requestApiData: () => {
        dispatch(requestApiData())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
