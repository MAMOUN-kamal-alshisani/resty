
import React from 'react';
import "./result.scss"
import JSONPretty from 'react-json-prettify';
// import {github} from 'react-json-prettify/themes';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../loading/loading';
function Results(props){
  return (
    <section className="result">
      <pre>{props.data ?<JSONPretty json={props.data} /> : <Loading/>}</pre>
    </section>
    
  );
  
}

export default Results;