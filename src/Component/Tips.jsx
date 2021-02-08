import React from 'react'
import * as math from './Calc'


//Some Constant Declaration
const curly = '{}', Temporal = 'Temporal', Literal = 'Literal',date = new Date()

//Internal CSS 
// const textdeco = {textDecoration : 'none'}

function Tips(){
    return (
        <>
        <h1 className = "heading">Tips and Tricks in React </h1>
        <ol style={{fontSize: "17px"}}>
            <p>{`Date:${date.toLocaleDateString()}, `}
            {` Time: ${date.toLocaleTimeString()}`}</p>

            <li><p>To export a Functional component from another File
                we use <b>export default <i>{`FunctionName`}
                </i></b><br></br>(no parenthesis required after function name)</p>
            </li>


            <li><p>To export multiple Functional component from another File
                we use&nbsp;
                 <a href = "https://flaviocopes.com/how-to-export-multiple-functions-javascript/" 
                 target = "#">
                    <b>export <i>{`Function1, Function2`}</i></b></a>
                <br></br>(no parenthesis required after function name)
                </p>
            </li>


            <li>
            <p>In React v16 it's possible for render()
                 to return multiple element in array []</p>
            </li>

            <li><p>React.Fragment{`(<> </>)`} is used because it is faster than array
             and uses less memory than div.</p></li>


            <li><p>React.Fragment is used because it is faster than array
             and uses less memory than div</p></li>


            <li><p>Sum of 2 + 3 is {2 + 3} and multiplication is {2 * 3} (Using Javascript Expression)</p></li>


            <li><p>Trick to show Math.random() 
            using Javascript element is {Math.random()}</p></li>


            <li><b>You can only use expression inside{curly}
            and not statement(like if, for, while)</b></li>


            <li><p>{`This the technique to use 
            ${Temporal} ${Literal}`}</p></li>

            <li><p>To get the Date and Time in Javascript, this is the following Syntax:<br></br>
            const date = new Date();<br></br>const curDate = date.toLocaleDateString();
            <br></br>const curTime = date.toLocaleTimeString();</p></li>

            <li><p>Contenteditable is global attribute.
                It is used to change the content inside h1,h2, ... Tags<br></br>
                <h3 contentEditable = "true">Select me to change my content</h3>
                </p></li>

            <li><p> {'<img/>'} is a Self Closing Tag.<br></br>
            In ReactJS it is necessary to write alt while using img tag
            else it will give some warning <br></br>
            {'<img src = "https://picsum.photos" alt = "Random Image"/>'}
                </p></li>

            
            <li><p>Adding Text Shadow makes Your code Looks Awesome.<br></br>
            text-shadow: x-direction y-direction blur-radius color; (x, y can be negative also)<br></br>
            text-shadow: -3px 0px yellow;
                </p></li>
            
            <li><p>Class is reserved keyword in React. So we use className in css for React.
                </p></li>
            
            <li><h3 style = {{fontFamily: "Sriracha"}}>Syntax to write Internal CSS:</h3><p>
                {`<h1 style = {{`}<br></br>
                {`color: crimson;`}<br></br>
                {`font-size: 32px;`} <br></br>
                {`font-family: sans-serif;`}<br></br>
            {`}}>`}</p></li>

            <li><h3 style = {{fontFamily: "Sriracha"}}>Syntax to write Inline CSS:</h3><p>
            {`const heading  = {`}<br></br>
                {`color: 'crimson',`}<br></br>
                {`font-size: '32px',`} <br></br>
                {`font-family: 'sans-serif'`}{`}`}</p></li>
            <li><p>To add Css property dynamically<br></br>
                    const cssStyle = {`{}`} <br></br>
                    cssStyle.color = 'green'
            </p></li>


            <li><p>To Store jsx element in separate 
                file/component we use fileName.jsx</p></li>
            
            <li><p>When we export a function from a jsx file, 
                show it using paranthesis using {`{funcName()}`}
                else it will show empty.
                </p></li>

            <li><p ><span style = {{fontFamily: "Sriracha"}}>Really intersiting thing to show dont know what to write.</span><br></br>
            You can import everything as an object using import * as {`<obj>`}.<br></br>
            E.g. import * as ques from "./App"<br></br>
            {`<p> {ques.default}    </p>`}<br></br>
            {`<p> {ques.favprog()}  </p>`}<br></br>
            {`<p> {ques.myName()}   </p>`}<br></br>
            {`<p> {ques.myNames()}  </p>`}<br></br>
            <a href="https://www.youtube.com/embed/b7JJCGXlACM?controls=0&amp;start=890" target = '#'>Wacth this for more info</a>
            </p></li>

            <li><p><span style = {{fontFamily: "Sriracha"}}>Calculation with using Import and Export</span>
            <ol>
                <li>Addition of 10 and 20 is {math.default(20,10)}</li>
                <li>Substraction of 10 and 20 is {math.sub(20,10)}</li>
                <li>Multiplication of 10 and 20 is {math.mul(20,10)}</li>
                <li>Division of 7 and 82 is {math.div(7,82)}</li>
            </ol>
                </p></li>

            
        </ol>
        </>
    )
}

export default Tips


