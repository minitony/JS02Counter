import React from 'react';
import Counter from './Counter';

const Parent = ({ initialValue = 0 }) => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Counter initialValue={initialValue} />
      <Counter initialValue={initialValue+1} />
      {new Date().toISOString().slice(0, 19)
      .replace('T', ' ')} (Parent)
    </div>
  );
};

export default Parent;