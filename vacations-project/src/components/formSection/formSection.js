import React, { Component } from 'react';

import Form from '../form/form.js'
import './formSection.css';

class FormSection extends Component {
    constructor(props){
        super(props);
    }

    renderFormSection() {
        return (
            <div className="form-section"> 
              <Form ></Form> 
            </div>
           
        )
    }

    render(){
        return this.renderFormSection();
    }
}
export default FormSection;

