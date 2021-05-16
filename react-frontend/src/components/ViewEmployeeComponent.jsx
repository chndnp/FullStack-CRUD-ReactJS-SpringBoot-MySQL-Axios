import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            employee:{}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee:res.data});
        })
    }
    render() {
        return (
            <div>
                <br/>
                <div class="card col-md-6 offset-md-3">
                    <h3 className="text-center">Employee details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee ID: {this.state.employee.id}</label>
                            <label>Employee First Name: {this.state.employee.firstName}</label>
                            <label>Employee Last Name: {this.state.employee.lastName}</label>
                            <label>Employee Email ID: {this.state.employee.emailId}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;