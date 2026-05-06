import React from 'react';
import { Form } from 'react-bootstrap';

export default class EmployeeFilter extends React.Component {
  render() {
    return (
      <div>
        <h5>Filter</h5>
        <Form.Group className="mt-3">
          <Form.Label>Currently Employed:</Form.Label>
          <Form.Select 
            value={this.props.filter} 
            onChange={(e) => this.props.onFilterChange(e.target.value)}
            style={{ width: '150px' }}
          >
            <option value="All">All</option>
            <option value="Active">Yes</option>
            <option value="Retired">No</option>
          </Form.Select>
        </Form.Group>
      </div>
    );
  }
}
