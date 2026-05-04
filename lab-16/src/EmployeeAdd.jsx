import React from 'react';

export default class EmployeeAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.employeeAdd;

    const employee = {
      name: form.name.value,
      extension: form.extension.value,
      email: form.email.value,
      title: form.title.value,
      dateHired: form.dateHired.value,
      currentStatus: form.currentStatus.value,
    };

    this.props.createEmployee(employee);
    form.reset();
  }

  render() {
    return (
      <form name="employeeAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="extension" placeholder="Extension" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="dateHired" placeholder="Date Hired" />
        <input type="text" name="currentStatus" placeholder="Status" />
        <button>Add Employee</button>
      </form>
    );
  }
}