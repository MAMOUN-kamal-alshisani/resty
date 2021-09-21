import React, { useState } from 'react';
import './form.scss';
import axios from "axios";

function Form (props){
    const [Textarea, setTextarea] = useState(false);
    const [method, setMethod] = useState('GET');
    const [url, setUrl ] = useState('');
    const [requestBody, setRequestBody] = useState('');

    async function handleSubmit (e){
    try {
    e.preventDefault();
    const formData = await axios({
        method: method,
        url: url,
        requestBody:requestBody
    });
    props.handleApiCall(formData,requestBody);
}catch(error){console.log(error);}
}

function urlHandler(e){
    setUrl(e.target.value)

}
function methodHandler(e){
    setMethod(e.target.value)
    setTextarea(false)
}
function TextareaHandler(e){
    setTextarea(true)
    setMethod(e.target.value)
}

function reqBodyHandler(e){
    setRequestBody(e.target.value)

}
    return(

        <>
        <form onSubmit={handleSubmit}>

<label>
{/* <span>URL:</span> */}
<input name='url' type='text' id="texturl"onChange={urlHandler}/>
<button type ="submit " id="buttonId">GO!!!</button>
</label>
<label className="methods">
    <span id= "get" value="get" onClick={methodHandler}>GET</span>
    <span id= "POST" value="POST" onClick={TextareaHandler}>POST</span>
    <span id= "PUT" value="PUT" onClick={TextareaHandler}>PUT</span>
    <span id= "DELETE" value="DELETE" onClick={methodHandler}>DELETE</span>
</label>
{Textarea &&(
<textarea cols="20" rows="10" onChange={reqBodyHandler}></textarea>)}
        </form>
        </>
    );


    }
export default Form;



