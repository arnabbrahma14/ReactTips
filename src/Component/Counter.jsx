import React, { useState } from 'react'

function Netflix(){
    return <>
        <h1 className = "heading">Arnab Brahma Netflix Pick</h1>
        <p className = "paragraph">List of 5 Best Series.</p>
        <ol style = {{fontSize: "20px", fontFamily: "sans-serif"}}>
            <li>Dark</li>
            <li>Extra circular</li>
            <li>My Holo Love</li>
            <li>My first-2 love</li>
            <li>Mr Robot</li>
        </ol>
    </>
}

function Counter(){
    const [count,setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        if(count > 0)
        setCount(count - 1)
    }

    return <>
    <p> Value : {count} </p>
    
    <button onClick = {increment}>Increase</button>
    <button onClick = {decrement}>Decrease</button>

    </>
}

export {Netflix, Counter}