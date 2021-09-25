import React, { useState ,useEffect } from 'react';
import './form.scss';
import axios from "axios";

function Form (props){

    const [method, setMethod] = useState('get');
    const [url, setUrl ] = useState('');
const [textformat,setTextFormat] =useState(false);
 const [reqBody, setreqBody] = useState("")

    async function handleSubmit (e){
    try {

    e.preventDefault();
    const formData =({
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
    let data = JSON.parse(e.target.value);
    setreqBody(data);
}

function changeMethodGet(e){
    setMethod('get')
    setTextFormat(false)
}

function changeMethodPost(e){
    setMethod('post')
    setTextFormat(true)
}
function changeMethodUpdate(e){
    setMethod('put')
    setTextFormat(true)
}
function changeMethodDelete(e){
    setMethod('delete')
    setTextFormat(false)
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
    <span id= "get" value="get" onClick={changeMethodGet}>GET</span>
    <span id= "post" value="post" onClick={changeMethodPost}>POST</span>
    <span id= "put" value="put" onClick={changeMethodUpdate}>PUT</span>
    <span id= "delete" value="delete" onClick={changeMethodDelete}>DELETE</span>
</label>
{textformat &&(
<textarea cols="100" rows="30" onChange={reqBodyHandler} id="textarea"></textarea>)}
        </form>
        </>
    );


    }
export default Form;



