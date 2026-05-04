import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { employee, deleteEmployee } = this.props;
    return (
      <tr>
        <td style={{ padding: '10px 16px' }}>{employee.name}</td>
        <td style={{ padding: '10px 16px' }}>{employee.extension}</td>
        <td style={{ padding: '10px 16px' }}>{employee.email}</td>
        <td style={{ padding: '10px 16px' }}>{employee.title}</td>
        <td style={{ padding: '10px 16px' }}>{employee.dateHired}</td>
        <td style={{ padding: '10px 16px' }}>{employee.currentStatus}</td>
        <td style={{ padding: '10px 16px' }}>
          <Button variant="danger" onClick={this.toggleModal}>X</Button>
          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Employee?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.toggleModal}>Cancel</Button>
              <Button variant="success" onClick={() => { deleteEmployee(employee.id); this.toggleModal(); }}>Yes</Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => (
    <EmployeeRow key={employee.id} employee={employee} deleteEmployee={props.deleteEmployee} />
  ));

  return (
    <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ padding: '10px 16px' }}>Name</th>
          <th style={{ padding: '10px 16px' }}>Extension</th>
          <th style={{ padding: '10px 16px' }}>Email</th>
          <th style={{ padding: '10px 16px' }}>Title</th>
          <th style={{ padding: '10px 16px' }}>Date Hired</th>
          <th style={{ padding: '10px 16px' }}>Status</th>
          <th style={{ padding: '10px 16px' }}>Delete</th>
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
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    this.setState({ employees: this.state.employees.filter(e => e.id !== id) });
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
        <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
        <hr />
        <EmployeeAdd createEmployee={this.createEmployee} />
      </>
    );
  }
}