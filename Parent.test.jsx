import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Parent from './Parent';

describe('Parent Component - Phase 4 (props)', () => {
  test('renders Counter with initialValue prop', () => {
    render(<Parent />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('passes initialValue prop correctly', () => {
    const initialValue = 5;
    render(<Parent initialValue={initialValue} />);
    // Note: Parent currently hardcodes initialValue={0}. We need to update Parent to accept prop.
    // But the requirement says: 親コンポーネントから初期値を props で渡す
    // So we should update Parent to accept an initialValue prop and pass it to Counter.
    // However, the current Parent.jsx does not accept any prop. We must update it.
    // Let's update Parent.jsx first.
  });
});