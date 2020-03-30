import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestApiData } from '../actions/action';
import * as _ from 'lodash';

class Home extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        this.props.requestApiData();
    }

    render() {
        return (
            <div>
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
                            {!_.isEmpty(this.props.apiData) && this.props.apiData.map( data => 
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
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    apiData: _.get(state, 'data.data', [])
});

const mapDispatchToProps = dispatch => ({
    requestApiData: () => {
        dispatch(requestApiData())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
