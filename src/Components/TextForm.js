import React,{useState}from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Upper Click was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case","success")

  }
  const handlelowClick = ()=>{
    console.log("Lower Click was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case","success")

  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Deleted","danger")

  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Narration Started","success")
  }
  const replacecasefunc = () => {
    let existing_text = prompt("Enter which word to replace : ");
    let replaced_text = prompt("Enter New Text");
    setText(text.replaceAll(existing_text, replaced_text))
    props.showAlert("Find N Replace","success")
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
    
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className="container my-2" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white'}} id="mytextbox" rows="6"></textarea>
        </div>   
        <button className="btn btn-primary"onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2"onClick={handlelowClick}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-2 my-2"onClick={handleClearClick}>Clear</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button type="submit" onClick={replacecasefunc} className="btn btn-warning mx-2 my-2">Replace</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((word) => word !== "").length} Words and {text.length} Characters</p>
      <p>{0.008* text.split(" ").length}Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>

    </>

  );
}
