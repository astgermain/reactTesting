import React, { Component, useState, useEffect } from 'react'

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'You clicked ${count} times';
    }, [count]);

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <h1>My button!!!</h1>
                    <p>You clicked {count} times.</p>
                    <button class="btn btn-info" onClick={() => setCount(count + 1)}>clickCounter</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;