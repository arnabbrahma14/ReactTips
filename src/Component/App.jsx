import React from 'react'
import {Netflix,Counter} from './Counter'
import Tips from './Tips'
import Pictures from './Pictures'


function App(){
    return(
        <React.Fragment>
        <Netflix />    
        <Tips/>
        <h2><Counter /></h2>
        <Pictures/>
        </React.Fragment>
    )
}

export default App

