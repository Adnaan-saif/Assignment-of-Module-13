import { useEffect, useState } from 'react';

const Home1 = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setMessage('Welcome to the Home Page');
        }, 2000);
        return () => {
            clearTimeout(timeoutId);
          };
        }, []);
    return (
        <div>
            <h1>Home Page</h1>
            <p>{message}</p>
        </div>
    );
};

export default Home1;