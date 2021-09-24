import React, { useState } from 'react';
import './form.scss';
import axios from "axios";

function Form (props){

    const [method, setMethod] = useState('get');
    const [url, setUrl ] = useState('https://pokeapi.co/api/v2/pokemon');
const [textformat,setTextFormat] =useState(false);
 const [reqBody, setreqBody] = useState('')
    async function handleSubmit (e){
    try {
    e.preventDefault();
    const formData = await axios({
        method: method,
        url: url,
        reqBody:reqBody
    });
   props.handleApiCall(formData);
}catch(error){console.log(error);}
}

function urlHandler(e){
    setUrl(e.target.value)

}
function methodHandler(e){
    setMethod(e.target.id)
 
}
function TextFormatHandler(e){
    setTextFormat(true)
    setMethod(e.target.id)
}

function reqBodyHandler(e){
    setreqBody(e.target.value)
}
    return(

        <>
        <form onSubmit={handleSubmit}>

<label>
{/* <span>URL:</span> */}
<input name='url' type='text' id="texturl"onChange={urlHandler} placeholder={"http://api/url"}/>
<button type ="submit " id="buttonId">GO!!!</button>
</label>
<label className="methods">
    <span id= "get" value="get" onClick={methodHandler}>GET</span>
    <span id= "post" value="post" onClick={TextFormatHandler}>POST</span>
    <span id= "put" value="put" onClick={TextFormatHandler}>PUT</span>
    <span id= "delete" value="delete" onClick={methodHandler}>DELETE</span>
</label>
{textformat &&(
<textarea cols="100" rows="30" onChange={reqBodyHandler} id="textarea"></textarea>)}
        </form>
        </>
    );


    }
export default Form;



