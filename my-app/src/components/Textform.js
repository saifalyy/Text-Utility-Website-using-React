import React, {useState} from 'react';


export default function Textform(props){

    const changeHandler = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here") 
    return (
  <>
  <div className="mb-3 container">
  <h1><label htmlFor="myTextbox" class="form-label">{props.prompt}</label></h1>
  <textarea className="form-control mb-3" id="myTextbox" rows="8" value={text} onChange={changeHandler}></textarea>
  <button className="btn btn-success" onClick={()=>{setText(text.toUpperCase())}}>Convert to Uppercase</button>
  <button className="btn btn-success mx-1" onClick={()=>{setText(text.toLowerCase()
    )}}>Convert to Lowercase</button>
</div>
<div className="container my-3">
    <h2>Your text analytics: </h2>
    <p>Number of words: {text.split(" ").length}</p>
    <p>Number of characters: {text.length}</p>
    <h2>Preview:</h2>
    <p className="border border-dark p-3">
        {text}
    </p>
</div>
  </>
    )}
