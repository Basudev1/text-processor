import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "new text"; wrong way
    // setText("new text"); right way
    const handleUpClick = () =>{
        // console.log("Up click was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase", "success");
    }
    const handleloClick = () =>{
        // console.log("Up click was clicked");
        let newText = text.toLocaleLowerCase()
        setText(newText);
        props.showAlert("Converted To Lowercase", "success");
    }
    const handleClear = () =>{
        let newText = ''
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleCopy = () =>{
        let text = document.getElementById('mybox');
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard", "success");
        document.getSelection().removeAllRanges();
    }
    const handleExtraspaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Cleared", "success");
    }
    const handleOnchange = (event) =>{
        // console.log("on change");
        setText(event.target.value)
    }
    return (
        <>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#242743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" onChange={handleOnchange} value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
                    
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraspaces}>Remove Extra Space</button>
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'#242743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) =>{ return element.length !==0}).length} words and {text.length} characters</p>
                <p>{.008 * text.split(" ").filter((element) =>{ return element.length !==0}).length} Minutes to read</p>
                <h2>Preiew</h2>
                <p>{text.length>0?text:"Enter something in the text box above to preview"}</p>
            </div>
        </>
    )
}
