import React, { Component } from 'react';

import MainSection from '../mainSection/mainSection.js'
import FormSection from '../formSection/formSection.js'
import './app.css';

class App extends Component {
    constructor(props){
        super(props);
    }

    renderApp() {
        return (
            <div className="app"> 
              <MainSection ></MainSection> 
              <FormSection ></FormSection> 
            </div>
           
        )
    }

    render(){
        return this.renderApp();
    }
}
export default App;

