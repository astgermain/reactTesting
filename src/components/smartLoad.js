import React, { Component, useState, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './cats.jpg';

function Quiz({ numRows, rowHeight }) {


    const totalHeight = rowHeight * numRows;
    const scrollAreaRef = useRef();
    const [availableHeight, setAvailableHeight] = useState(document.documentElement.scrollHeight);
    const [scrollTop, setScrollTop] = useState(window.scrollY);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);
    const [rendered, setRendered] = useState(endIndex - startIndex);
    const items = [];
    var index = startIndex;

    //Issues since I cannot grab photo's from data base in order since coming up with
    //100,000 photos is too difficult, when loaded from db will run better

    const url = "https://source.unsplash.com/collection/139386/150x150/?sig=";
    let tempurl = "https://source.unsplash.com/collection/139386/150x150/?sig=";
    const [att, setAttSrc] = useState(null);
    const randomNum = () => {
      return Math.floor(Math.random() * 1000);
    
    };
    
    
    function renderRowAtIndex(index) {
        return (
          <div style={{height: rowHeight, padding: "5px 10px", fontSize: 24}}>
            
            <img src={tempurl}></img>
            Cat image #{index +1}
          </div>
        );
      }


    useLayoutEffect(() => {
        const onScrollHandle = () => {
            setScrollTop(window.scrollY);
            setRendered(endIndex - startIndex);
            index = startIndex;
          };
        setStartIndex(Math.floor(Math.max(scrollTop-(rowHeight * 8), 0) / rowHeight));
        setEndIndex(Math.min(Math.min(
            startIndex + Math.ceil(availableHeight/rowHeight * 5) + 0 ,
            numRows
        ), numRows));
        
        window.addEventListener('scroll', onScrollHandle)

        return () => window.removeEventListener('scroll', onScrollHandle)
    
    }, [scrollTop] );

    //Can add conditional to stop rendering if over certain threshold 
    //for instance while using scrollbar on the side
    //to prevent overrendering and performance issues due to rapid scrolling

    

    while (index < endIndex) {
        items.push(<li key={index}>{renderRowAtIndex(index)}</li>);
        index = index + 1;
        tempurl = `${url}${index}`;
    }
    
    
    

    //Better solution for height: totalHeight, scrollbar on load better than 
    //scrollbar max height upfront
    
    return (

        <div className="col-12">
        <h1>Smart Rendering</h1>
        <p>This containers purpose is to smartly render only the items visible plus a few outside the viewport.</p>
        <p>There are currently {numRows} renderable elements and {rendered} rendered elements.</p>
        <div
        style={{ height: "100vh", width: "100vw"}}
        >
        <div style={{height: (rowHeight * rendered), paddingTop: startIndex * rowHeight}}>
            {items}
        </div>
        </div>
        </div>
    );
}

export default Quiz;
