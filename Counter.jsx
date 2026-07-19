import React from 'react';

const Counter = ({ initialValue = 0 }) => {
  return <div>
    <p>Count: {initialValue}</p>
  </div>;
};

export default Counter;