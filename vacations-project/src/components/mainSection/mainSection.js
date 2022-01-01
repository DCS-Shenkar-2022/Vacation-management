import React, { Component } from 'react';

import Search from '../search/search.js'
import VacationList from '../vacationsList/vacationsList';

import '../mainSection/mainSection.css'
class MainSection extends Component {
    constructor(props){
        super(props);
    }

    renderMainSection() {
        return (
            <div className="main-section"> 
                <Search></Search>
                <VacationList></VacationList> 
            </div>
           
        )
    }

    render(){
        return this.renderMainSection();
    }
}
export default MainSection;

