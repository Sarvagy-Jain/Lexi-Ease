import React,{useState} from 'react'

export default function TextForm(props) {

const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
}
const handleDownClick=()=>{
  let newText = text.toLowerCase();
  setText(newText);
}
const handleClearClick=()=>{
  let newText = "";
  setText(newText);
}
const handleEmailClick=()=>{
  let newText = "";
  const strPattern = ["\\S+@\\S+"];
  for (let i = 0; i < 1; i++) {
      const pattern = new RegExp(strPattern[i], 'g');
      let matches;
      while ((matches = pattern.exec(text)) !== null) {
          newText +=  matches[0] + '\n';
          
      }
  }
  setText(newText);
}

const handlePhoneClick=()=>{
  let newText = "";
  const  strPattern   = ["\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+","g"];
  for (let i = 0; i < 1; i++) {
      const pattern = new RegExp(strPattern[i], 'g');
      let matches;
      while ((matches = pattern.exec(text)) !== null) {
          newText +=  matches[0] + '\n';
          
      }
  }
  setText(newText);
}
const handleOnChange=(event)=>{
    setText(event.target.value) // to update the text
}
const [text,setText] = useState("")
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control"  style={{
           backgroundColor: "#222222" , 
           color:"#DEFCF9",  
           fontFamily:'sans-serif',
           fontSize:"25 px", 
        }}

        value={text} onChange={handleOnChange} rows="10"></textarea>
        </div> 
        
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleEmailClick}>Extract Emails</button>
        <button className="btn btn-primary mx-1" onClick={handlePhoneClick}>Extract Phone</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
      </div>
      <div>
        <h2>Your text Summary: {text.split(" ").length - 1} words and {text.length} characters </h2>
      </div>

    </>
  )
}
