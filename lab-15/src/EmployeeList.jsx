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
    </tr>
  );
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => (
    <EmployeeRow key={employee.id} employee={employee} />
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
      employees: [
        {
          id: 1,
          name: 'Kedar Hegde',
          extension: 101,
          email: 'kedar.hegde@andpad.co.jp',
          title: 'Developer',
          dateHired: '2024-01-11',
          currentStatus: 'Active',
        },
        {
          id: 2,
          name: 'Brett Lee',
          extension: 102,
          email: 'brett.lee@example.com',
          title: 'Manager',
          dateHired: '2023-08-15',
          currentStatus: 'Active',
        },
      ],
    };

    this.createEmployee = this.createEmployee.bind(this);
  }

  createEmployee(employee) {
    employee.id = this.state.employees.length + 1;
    const newEmployeeList = this.state.employees.slice();
    newEmployeeList.push(employee);
    this.setState({ employees: newEmployeeList });
  }

  render() {
    return (
      <>
        <h1>Employee Management Application</h1>
        <EmployeeFilter />
        <hr />
        <EmployeeTable employees={this.state.employees} />
        <hr />
        <EmployeeAdd createEmployee={this.createEmployee} />
      </>
    );
  }
}