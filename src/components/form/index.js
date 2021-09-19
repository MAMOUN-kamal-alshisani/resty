import React from 'react';

import './form.scss';

function Form ({handleApiCall}){

function handleSubmit(e){

    e.preventDefault();
    const formData = {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon'
    };
   handleApiCall(formData);
}

    return(

        <>
        <form onSubmit={handleSubmit}>

<label>
<span>URL:</span>
<input name='url' type='text'/>
<button type ="submit ">GO!!!</button>
</label>
<label className="methods">
    <span id= "get">GET</span>
    <span id= "get">POST</span>
    <span id= "get">PUT</span>
    <span id= "get">DELETE</span>
</label>

        </form>
        </>
    );
}


export default Form;