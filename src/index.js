import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>
//ReactDOM.render(ClickCounter(), document.getElementById('root'));

function ClickCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'You clicked ${count} times';
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>clickCounter</button>
        </div>
    )
}

ReactDOM.render(
    <ClickCounter />,
    document.getElementById('root')
);