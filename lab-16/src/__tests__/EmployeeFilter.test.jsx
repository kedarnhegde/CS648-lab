import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeFilter from '../EmployeeFilter';

describe('EmployeeFilter', () => {
  test('renders filter heading', () => {
    const mockOnFilterChange = jest.fn();
    render(<EmployeeFilter filter="All" onFilterChange={mockOnFilterChange} />);
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });

  test('renders Currently Employed label', () => {
    const mockOnFilterChange = jest.fn();
    render(<EmployeeFilter filter="All" onFilterChange={mockOnFilterChange} />);
    expect(screen.getByText('Currently Employed:')).toBeInTheDocument();
  });

  test('calls onFilterChange when selection changes', () => {
    const mockOnFilterChange = jest.fn();
    render(<EmployeeFilter filter="All" onFilterChange={mockOnFilterChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Active' } });
    
    expect(mockOnFilterChange).toHaveBeenCalledWith('Active');
  });

  test('displays correct filter value', () => {
    const mockOnFilterChange = jest.fn();
    render(<EmployeeFilter filter="Active" onFilterChange={mockOnFilterChange} />);
    
    const select = screen.getByRole('combobox');
    expect(select.value).toBe('Active');
  });
});
