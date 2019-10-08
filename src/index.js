import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Counter from './components/Counter'
import Like from './components/Like'
import Quiz from './components/Quiz'

import './main.css';

const element = (
    <div className="container-fluid">
    <div className="row">
        <Counter />
        <Like />
    </div>
    <div className="row">
        <div className="col-12"><br></br></div>
    </div>
    <div className="row">
        <Quiz
        numRows={15000}
        rowHeight={40}
        />
    </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
,
);

