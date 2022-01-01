import React, { Component } from 'react';

import Search from '../search/search.js'
import VacationList from '../vacationsList/vacationsList';

import '../mainSection/mainSection.css'
class MainSection extends Component {
    constructor(props){
        super(props);

        this.renderMainSection =this.renderMainSection.bind(this); 

    }

    renderMainSection() {
        return (
            <div className="main-section"> 
                <Search onSearch={this.props.funcSetFilter}></Search>
                <VacationList vacations={this.props.vacations} funcOnDelete={this.props.funcOnDelete} funcOnEdit={this.props.funcOnEdit} filter={this.props.filter}></VacationList> 
            </div>
           
        )
    }

    render(){
        return this.renderMainSection();
    }
}
export default MainSection;

