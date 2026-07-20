import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component - Phase 3 (onClick handlers)', () => {
  test('renders initial value passed as prop', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });

  test('defaults to 0 when initialValue is not provided', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count when + button is clicked', () => {
    render(<Counter initialValue={0} />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count when - button is clicked', () => {
    render(<Counter initialValue={5} />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });

  test('multiple clicks increment/decrement correctly', () => {
    render(<Counter initialValue={0} />);
    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 3')).toBeInTheDocument();
    
    fireEvent.click(decrementButton);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });
});