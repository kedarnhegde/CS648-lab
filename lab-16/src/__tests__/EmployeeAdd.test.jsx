import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeAdd from '../EmployeeAdd';

describe('EmployeeAdd', () => {
  test('renders New Employee button', () => {
    const mockCreateEmployee = jest.fn();
    render(<EmployeeAdd createEmployee={mockCreateEmployee} />);
    expect(screen.getByText('New Employee')).toBeInTheDocument();
  });

  test('opens modal when button is clicked', () => {
    const mockCreateEmployee = jest.fn();
    render(<EmployeeAdd createEmployee={mockCreateEmployee} />);
    
    const button = screen.getByText('New Employee');
    fireEvent.click(button);
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('modal contains all form fields', () => {
    const mockCreateEmployee = jest.fn();
    render(<EmployeeAdd createEmployee={mockCreateEmployee} />);
    
    fireEvent.click(screen.getByText('New Employee'));
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Extension')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
  });

  test('submits form with correct data', () => {
    const mockCreateEmployee = jest.fn();
    render(<EmployeeAdd createEmployee={mockCreateEmployee} />);
    
    fireEvent.click(screen.getByText('New Employee'));
    
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Extension'), { target: { value: '1234' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Developer' } });
    
    fireEvent.click(screen.getByText('Add Employee'));
    
    expect(mockCreateEmployee).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'John Doe',
        extension: '1234',
        email: 'john@example.com',
        title: 'Developer',
        currentStatus: 'Active'
      })
    );
  });
});
