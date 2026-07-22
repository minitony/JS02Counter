import React from 'react';
import Counter from './Counter';

const Parent = ({ initialValue = 0 }) => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Counter initialValue={initialValue} />
    </div>
  );
};

export default Parent;