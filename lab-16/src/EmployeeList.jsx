import React from 'react';
import { Button, Modal, Card, Table, Navbar, Nav, Container, Badge } from 'react-bootstrap';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const displayStatus = employee.currentStatus === 'Active' ? 'Yes' : 'No';
    return (
      <tr>
        <td><a href="#" style={{ textDecoration: 'none' }}>{employee.name}</a></td>
        <td>{employee.extension}</td>
        <td>{employee.email}</td>
        <td>{employee.title}</td>
        <td>{employee.dateHired}</td>
        <td>{displayStatus}</td>
        <td>
          <Button variant="danger" size="sm" onClick={this.toggleModal}>X</Button>
          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Employee?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.toggleModal}>Cancel</Button>
              <Button variant="danger" onClick={() => { deleteEmployee(employee._id); this.toggleModal(); }}>Delete</Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => (
    <EmployeeRow key={employee._id} employee={employee} deleteEmployee={props.deleteEmployee} />
  ));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Currently Employed?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </Table>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      filter: 'All',
    };

    this.createEmployee = this.createEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const response = await fetch('/api/employees');
    const employees = await response.json();
    this.setState({ employees });
  }

  async deleteEmployee(id) {
    await fetch(`/api/employees/${id}`, {
      method: 'DELETE',
    });
    this.loadData();
  }

  async createEmployee(employee) {
    await fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    });
    this.loadData();
  }

  handleFilterChange(filter) {
    this.setState({ filter });
  }

  render() {
    const filteredEmployees = this.state.filter === 'All' 
      ? this.state.employees 
      : this.state.employees.filter(emp => emp.currentStatus === this.state.filter);

    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Employee Management Application</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#" active>All Employees</Nav.Link>
              <Nav.Link href="#">Reports</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container fluid className="mt-4">
          <div className="d-flex justify-content-end mb-3">
            <EmployeeAdd createEmployee={this.createEmployee} />
          </div>
          
          <Card className="mb-3">
            <Card.Body>
              <EmployeeFilter filter={this.state.filter} onFilterChange={this.handleFilterChange} />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h5>All Employees <Badge bg="secondary">{filteredEmployees.length}</Badge></h5>
              <EmployeeTable employees={filteredEmployees} deleteEmployee={this.deleteEmployee} />
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}