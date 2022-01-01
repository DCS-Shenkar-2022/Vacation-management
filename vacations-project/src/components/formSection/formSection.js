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
              <Form vacationToEdit={this.props.vacationToEdit} editMode={this.props.editMode} onSave={this.props.funcToUpdate} onCancel={this.props.funcToCancel} onAdd={this.props.funcToAdd} deleteMode={this.props.deleteMode} onAfterDelete={this.props.changeDeleteMode}></Form> 
            </div>
           
        )
       
    }

    render(){
        return this.renderFormSection();
    }
}
export default FormSection;

