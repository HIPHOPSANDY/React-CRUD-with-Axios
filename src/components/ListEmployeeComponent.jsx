import React, { Component } from 'react';
import EmployeeService from '../Service/EmployeeService';


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emloyees: []
        }

        this.addEmployee= this.addEmployee.bind(this);


    }


    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ emloyees: res.data })
        })
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary " onClick={this.addEmployee}>Add Employee</button>

                </div>
                <div className="row">


                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Employee First Name</th>
                                <th scope="col">Employee Last Name</th>
                                <th scope="col">Employee Email Id</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.emloyees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>
                                                {employee.firstName}
                                            </td>
                                            <td>
                                                {employee.lastName}
                                            </td>
                                            <td>
                                                {employee.emailId}
                                            </td>
                                        </tr>
                                )

                            }

                        </tbody>
                    </table>
                </div>

            </div>


        );
    }
}

export default ListEmployeeComponent;