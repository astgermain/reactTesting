import React, { Component, useState, useEffect } from 'react';


const Like = () => {
    const [liked, setLiked] = React.useState(false);
    const handleClick = () => setLiked(!liked.valueOf());

    useEffect(() => {
        document.title = 'hii';
        console.log(liked);
    }, [liked]);
    
 
    return (
        <div class="col-6">
            <h1>My like button!!!</h1>
            <p>Value of liked: {liked ? 'True' : 'False'}.</p>
            <button class="btn btn-info" onClick={handleClick}>
            {liked ? 'Liked' : 'Like'}
            </button>
        </div>
    )    
    

    

   
     

    

  };


export default Like;