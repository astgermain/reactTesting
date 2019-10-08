import React, { Component, useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const counterClick = () => setCount(count + 1);
   
    return (    
        <div class="col-6">
            <h1>My button!!!</h1>
            <p>You clicked {count} times.</p>
            <button class="btn btn-info" onClick={counterClick}>Click Counter</button>
        </div>              
    )
}

export default Counter;