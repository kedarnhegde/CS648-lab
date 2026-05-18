import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeList from '../EmployeeList';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe('EmployeeList', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders Employee Management Application title', () => {
    render(<EmployeeList />);
    expect(screen.getByText(/Employee Management Application/i)).toBeInTheDocument();
  });

  test('renders All Employees navigation link', () => {
    render(<EmployeeList />);
    expect(screen.getByText('All Employees')).toBeInTheDocument();
  });

  test('renders Reports navigation link', () => {
    render(<EmployeeList />);
    expect(screen.getByText('Reports')).toBeInTheDocument();
  });

  test('fetches employees on mount', () => {
    render(<EmployeeList />);
    expect(fetch).toHaveBeenCalledWith('/api/employees');
  });

  test('renders New Employee button', () => {
    render(<EmployeeList />);
    expect(screen.getByText('New Employee')).toBeInTheDocument();
  });
});
