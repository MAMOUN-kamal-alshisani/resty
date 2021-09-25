import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';
import { useState ,useEffect} from 'react';
const fake = {
  count: 2,
  results: [
    { name: "fake thing 1", url: "http://fakethings.com/1" },
    { name: "fake thing 2", url: "http://fakethings.com/2" },
  ],
};

function App()  {

const [data, setData]= useState(fake)
const [requestParams, setRequestParams]=useState({})
const [url,  setUrl ] = useState('');





 useEffect(async() =>  {


  try{
    let getdata = await axios.get(requestParams.url)
    let data = {

Results:getdata.data,
Headers:getdata.headers,

    }
    setData({data, requestParams})
  }catch(e){

    console.error('not workin');
  }

},[requestParams])




// useEffect(async() =>  {

//     let headdata = await axios.get(requestParams.url)
//     let data = {

// Headers:head.headers,

//   }
//   setData({data, requestParams})
// },[requestParams])





 

function callApi(requestParams){
  setRequestParams(requestParams)
}

  return (
    <React.Fragment>
      <Header />
      <div id="span1">URL :{requestParams.url}</div>
      <span id="div1"> method : {requestParams.method}</span>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );



  
  }
  

export default App;






