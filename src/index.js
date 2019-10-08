import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Counter from './components/counter'
import Like from './components/like'

const element = (
    <div class="container-fluid">
    <div class="row">
        <Counter />
        <Like />
    </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);