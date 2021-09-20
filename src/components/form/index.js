import React, { useState } from 'react';
import {userState} from 'react'
import './form.scss';
import axios from "axios";

function Form (props){
    const [Textarea, setTextarea] = useState(false);
    const [method, setMethod] = useState('GET');

    const [url, setUrl ] = useState('');
    const [request, setRequest] = useState('');

    async function handleSubmit (e){
    try {
    e.preventDefault();
    const formData = await axios({
        method: method,
        url: url
    });
    props.ApiCall(formData,request);
}catch(error){console.log(error);}
}

function urlHandler(e){
    setUrl(e.target.value)

}
function methodHandler(e){
    setMethod(e.target.id)
    setTextarea(false)
}
function TextareaHandler(e){
    setTextarea(true)
    setMethod(e.target.value)
}


function requestHandler(e){
    setRequest(e.target.value)

}
    return(

        <>
        <form onSubmit={handleSubmit}>

<label>
<span>URL:</span>
<input name='url' type='text'onChange={urlHandler}/>
<button type ="submit ">GO!!!</button>
</label>
<label className="methods">
    <span id= "get" onClick={methodHandler}>GET</span>
    <span id= "POST" onClick={TextareaHandler}>POST</span>
    <span id= "PUT" onClick={TextareaHandler}>PUT</span>
    <span id= "DELETE" onClick={methodHandler}>DELETE</span>
</label>
<textarea cols="20" rows="10" onChange={requestHandler}></textarea>
        </form>
        </>
    );


    }
export default Form;



