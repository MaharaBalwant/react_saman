import React, {useState} from "react";


export default function TextForm(props) {
    
    const handleOnClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.vale);
    }

    const [text, setText] = useState('');

    return (
        <div className="container">
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">{props.label}</label>
                <textarea value={text} onChange={handleOnChange} className="form-control" id="formGroupExampleInput2" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert Upper</button>
        </div>
    )
}