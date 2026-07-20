import React, { useState } from 'react';

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  return <div>
    <p>Count: {count}</p>
  </div>;
};

export default Counter;