import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default class EmployeeAdd extends React.Component {
  constructor() {
    super();
    this.state = { modalVisible: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.employeeAdd;

    const employee = {
      name: form.name.value,
      extension: form.extension.value,
      email: form.email.value,
      title: form.title.value,
      dateHired: new Date().toISOString().split('T')[0],
      currentStatus: 'Active',
    };

    this.props.createEmployee(employee);
    form.reset();
    this.toggleModal();
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.toggleModal}>New Employee</Button>
        <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>New Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="employeeAdd" onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Extension</Form.Label>
                <Form.Control type="text" name="extension" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" required />
              </Form.Group>
              <Button variant="success" type="submit">Add Employee</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}