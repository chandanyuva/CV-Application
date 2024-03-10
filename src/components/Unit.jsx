import { useState } from "react";

export default function Unit (type="text"){
    const [text,setText] = useState('');
    function textUpdate (e){
        setText(e.target.value);
    }
    return <div style={{display:"flex"}}>
        <input type={type} onChange={textUpdate} className="input"></input>
        <p className="output">{text}</p>
    </div>
}