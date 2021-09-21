import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      json:[]
    };
  }

  callApi = (requestParams,formData) => {
    // mock output
    const data = formData

    this.setState({data, requestParams});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
       
        <div id="span1">URL: {this.state.requestParams.url}</div>
        <span id="div1"> {this.state.requestParams.method}</span>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;