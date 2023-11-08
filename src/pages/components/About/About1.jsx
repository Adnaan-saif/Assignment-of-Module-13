import { useRef } from 'react';

const About1 = () => {
    const innerHTMLRef = useRef(null);
    const changeInnerHTML = () => {
        innerHTMLRef.current.innerHTML = 'This is about using react hooks and practice building demo react project';
      };
    return (
        <div>
            <div ref={innerHTMLRef}>This is about page</div>
            <button onClick={changeInnerHTML}>Click to view</button>
        </div>
    );
};

export default About1;