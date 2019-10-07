import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter'
const element = <h1>Hello World</h1>
//ReactDOM.render(ClickCounter(), document.getElementById('root'));



ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);