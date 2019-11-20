//Simple react button like increments count when clicked.
//Could be used for subscriber count, likes, etc

import React, { Component, useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const counterClick = () => setCount(count + 1);
   
    return (    
        <div className="col-6">
            <h1>My click counter!</h1>
            <p>You clicked {count} times.</p>
            <button className="btn btn-info" onClick={counterClick}>Click Counter</button>
        </div>              
    )
}

export default Counter;
