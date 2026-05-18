import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

function EmployeeRow(props) {
  const employee = props.employee;
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.extension}</td>
      <td>{employee.email}</td>
      <td>{employee.title}</td>
      <td>{employee.dateHired}</td>
      <td>{employee.currentStatus}</td>
      <td>
        <button onClick={() => props.deleteEmployee(employee._id)}>Delete</button>
      </td>
    </tr>
  );
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => (
    <EmployeeRow key={employee._id} employee={employee} deleteEmployee={props.deleteEmployee} />
  ));

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };

    this.createEmployee = this.createEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const response = await fetch('/api/employees');
    const employees = await response.json();
    this.setState({ employees });
  }

  async createEmployee(employee) {
    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    });
    this.loadData();
  }

  async deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
      await fetch(`/api/employees/${id}`, {
        method: 'DELETE',
      });
      this.loadData();
    }
  }

  render() {
    return (
      <>
        <h1>Employee Management Application</h1>
        <EmployeeFilter />
        <hr />
        <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
        <hr />
        <EmployeeAdd createEmployee={this.createEmployee} />
      </>
    );
  }
}