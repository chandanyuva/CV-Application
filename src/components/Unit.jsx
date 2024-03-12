import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Unit ({type="text",id}){
    const [value,setValue] = useState('');
    return <div 
            style={{display:"flex"}}>
        <label htmlFor={id}>{id}</label>
        <input type={type} onChange={(e)=> setValue(e.target.value)} id={id}></input>
        <p id={id} style={{marginLeft:"auto"}}>{value}</p>
    </div>
}