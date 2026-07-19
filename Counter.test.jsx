import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component - Phase 1', () => {
  test('renders initial value passed as prop', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });

  test('renders default initial value of 0 when not provided', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});