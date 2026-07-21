import React from 'react';
import Counter from './Counter';

const Parent = () => {
  return (
    <div>
      <Counter initialValue={0} />
    </div>
  );
};

export default Parent;