
import React from 'react';
import "./result.scss"
import JSONPretty from 'react-json-prettify';
// import {github} from 'react-json-prettify/themes';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../loading/loading';
import ReactJson from "react-json-view";
const util = require('util');
function Results(props){
  return (
  <section>
        {/* <pre>{props.data ? util.inspect(props.data, undefined, 2) : null}</pre> */}
        {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading/>}</pre> */}
        <pre> {props.data ? <ReactJson src={props.data} theme='paraiso'/> : <Loading />}</pre>
      </section>
    
  );
  
}

export default Results;
