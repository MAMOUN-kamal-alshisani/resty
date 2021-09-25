import React from 'react'

function History({ handleApiCall, RequestHistory }){

    return (
        <>
          <h1>Requests:</h1>
          {/* <strong>
            {state.active.name
              ? `${state.active.name} is ${state.active.color}`
              : "Click a character name to show their info"}
          </strong> */}
          <ul>
          {RequestHistory &&
            RequestHistory.map((data, index) => {
             return (
             <li key={index} >
             METHOD :{data.method}
             <br />
             URL :{data.url}
             <br />

             <button onClick={() => handleApiCall(data)}>Add request</button>
             </li>);
    
})}
</ul>
</>
            )
}





export default History;