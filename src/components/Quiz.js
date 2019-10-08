import React, { Component, useState, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';



function Quiz({ numRows, rowHeight }) {


    const totalHeight = rowHeight * numRows;
    const scrollAreaRef = useRef();
    const [availableHeight, setAvailableHeight] = useState(document.documentElement.scrollHeight);
    const [scrollTop, setScrollTop] = useState(window.scrollY);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);
    const [rendered, setRendered] = useState(endIndex - startIndex)
    const items = [];
    var index = startIndex;
        
    
    function renderRowAtIndex(index) {
        return (
          <div style={{height: rowHeight, padding: "5px 10px", fontSize: 24}}>
            This is #{(index + 1)}.
          </div>
        );
      }


    useLayoutEffect(() => {
        const onScrollHandle = () => {
            setScrollTop(window.scrollY);
            setRendered(endIndex - startIndex);
          };
        setStartIndex(Math.floor(Math.max(scrollTop-(rowHeight*12), 0) / rowHeight));
        index = startIndex;
        setEndIndex(Math.min(Math.min(
            startIndex + Math.ceil(availableHeight/rowHeight) + 12 ,
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
        index++;  
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
        <div style={{height: totalHeight, paddingTop: startIndex * rowHeight}}>
            {items}
        </div>
        </div>
        </div>
    );
}

export default Quiz;