import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" +text)
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        let newTextt=text.toLowerCase();
        setText(newTextt);

    }
    const handleremoveextraspace =()=>{
        let newTexttt=text.split(/[ ]+/).join(" ");
        setText(newTexttt)
    }
    const handleCopyText =()=>{
        var text =document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleClearClick =()=>{
        let newTexttt='';
        setText(newTexttt)
    }
    
    const handleOnChange =(event)=>{
        // console.log(" On change")git
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text= "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
    <>
        <div className="Container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-success mx-1" onClick={handleremoveextraspace}>Remove Extra Spaces</button>
            <button className="btn btn-success mx-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-outline-success bg-black mx-5 text-white" onClick={handleClearClick}>Clear Text</button>


        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.trim()===""?0:text.trim().split(/\s+/).length}words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length -0.08} minutes reading time </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    ) 
} 

