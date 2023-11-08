import { useState } from 'react';

const Service1 = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
      };    
    return (
        <div>
            <h1>Service Page</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
};

export default Service1;