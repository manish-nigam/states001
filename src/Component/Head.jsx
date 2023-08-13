import React, { useState } from 'react'
import "./Head.css"
const Head = () => {
    const[darkTheme,setDarkTheme]  = useState({
        backgroundColor : 'white',
        color : "black"
    })
    const Theme = () =>{
        if(darkTheme.color==="white"){
            setDarkTheme({backgroundColor: "white", color:"black"})
        }
        else{
            setDarkTheme({backgroundColor: "black", color:"white"}) 
        }
    }
  return (
     <div className='header' style={darkTheme}>
        <div className='head'>
            <h1>Overreacted</h1>
        </div>
        <div className='one'>
            <h2>Goodby,Clean Code</h2>
            <p>Let Clean Code guide you. Then let it go</p>
        </div>
        <div className='three'>
            <h2>My Decade in Review</h2>
            <p>A Personal reflection</p>
        </div>
        <div className='button'>
            <button onClick={Theme}>Toggle</button>
        </div>

     </div>
  )
}

export default Head