import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');  //acts as a placeholder
    //text is a state variable and setText can be used always when you want to update that text,bcoz directly text can't be changed
    //default value which i have given to text is Enter text here
    const Uppercase = () => {
        // console.log("Upper case was clicked" + text);
        setText(text.toUpperCase());
        props.showAlert('Converted to Uppercase!','success');
    }
    const Lowercase = () => {
        // console.log("Lower case was clicked" + text);
        setText(text.toLowerCase());
        props.showAlert('Converted to Lowercase!','primary');
    }
    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const Cleartext = () => {
        setText('');
        props.showAlert('Cleared text!','danger');
    }
    const Copytext = () => {
        // let content = document.getElementById('para');
        // content.select();
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard !','success');
    }
    const Removespace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert('Removed all extra white spaces','warning')
    }
    return (
        <>
            <div className='container'>
                <h1 className='mt-5 text-center'>{props.heading}</h1>
                <div className="my-4">
                    <label htmlFor="Mybox" className="form-label"><h4>Enter text to analyze</h4></label>
                    <textarea class="form-control" onChange={handleOnchange} value={text} 
                    style={props.mode==='dark'?{backgroundColor:'black',color:'white'}:{backgroundColor:'#f0f2f5',color:'black'}} rows="8" id="para"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={Uppercase}>Convert to UPPERCASE</button>
                <button disabled={text.length===0} className='btn btn-danger mx-3 my-1' onClick={Lowercase}>Convert to lowercase</button>
                <button disabled={text.length===0}  className='btn btn-success mx-3 my-1' onClick={Cleartext}>Clear Text</button>
                <button disabled={text.length===0}  className='btn btn-warning mx-3 my-1' onClick={Copytext}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-secondary mx-3 my-1' onClick={Removespace}>Remove white spaces</button>
            </div>

            <div className='container my-5'>
                <h2 className='my-3'>Your Text Summary</h2>
                <p>Your text has <b>{text.length} </b>characters and <b>{text.split(/\s+/).filter(t=>t!=="").length}</b> words</p>
                <p>Time taken to read :<b> {text.split(/\s+/).filter(t=>t!=="").length*0.08}</b> Minutes</p>
                <h3 className='my-4'>Preview: </h3>
                <p>{text.length >0 ?text:'Enter something in the textbox to preview it !'}</p>
            </div>
        </>
    )
}
