import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './App';
import Search from './Search';
import Create from './CreateEmployee';
import Update from './UpdateEmployee';
import '../style/style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <table className='menu-direction'>
                            <tbody>
                                <tr>
                                    <th>
                                        <Link to="/home">Home</Link>
                                    </th>
                                    <th>
                                        <Link to="/selectById">Id</Link>
                                    </th>
                                    <th>
                                        <Link to="/createEmployee">Create</Link>
                                    </th>
                                    <th>
                                        <Link to="/updateEmployee">Update</Link>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <hr /> <br />
                        <Switch>
                            <Route exact path="/home">
                                <Home />
                            </Route>
                            <Route exact path="/selectById">
                                <Search />
                            </Route>
                            <Route exact path="/createEmployee">
                                <Create />
                            </Route>
                            <Route exact path="/updateEmployee">
                                <Update />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
