import React from 'react'
import ReactDOM from 'react-dom'
import App from './Component/App'
import './index.css'


//Internal Styling using Object Notation
var decoration1 = {fontFamily: "sans-serif", color : "rgb(120,120,120)", fontSize: "25px"}


const comprehension = 'I started learning react on 4-2-21 at 18:01 P.M.'
ReactDOM.render(
  
  <React.Fragment>
    <h1 style = {decoration1}>{comprehension}</h1>
    <App/>
  </React.Fragment>,

  document.getElementById('root')
);


//Adding New Elements Using Javascript 

var h3 = document.createElement('h3')
h3.innerHTML = "This Tag is created using Javascript"
h3.style.fontFamily = "sans-serif"
document.getElementById('root').appendChild(h3)


