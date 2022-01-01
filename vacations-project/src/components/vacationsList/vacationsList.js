import React, { Component } from 'react';
import Vacation from '../vacation/vacations';
import vacationsData from '../../Data/vacations.json'
import '../vacationsList/vacationsList.css'

class VacationList extends Component {
    constructor(props){
        super(props);
        
        this.createOneVacation =this.createOneVacation.bind(this); 
        this.renderVacations =this.renderVacations.bind(this); 

    }


    createOneVacation(vacation,keyIterator){
        return <Vacation key={keyIterator} index={vacation.id} imageUrl={vacation.imageUrl} name={vacation.name} location={vacation.location} price={vacation.price} onDelete={this.props.funcOnDelete} onEdit={this.props.funcOnEdit} >
        </Vacation>
    }

    renderVacations(filter){
        return this.props.vacations.map((vacation,keyIterator)=>{
            if(filter=="") {
               return this.createOneVacation(vacation,keyIterator);
            }

            else if(vacation.name.toLowerCase().includes(filter.toLowerCase()) || vacation.location.toLowerCase().includes(filter.toLowerCase())  ){
                return this.createOneVacation(vacation,keyIterator);
            }}
        )

    }


    render(){
        return(
            <div className="vacations-list">
                { this.renderVacations(this.props.filter)}
            </div>
        )
    }
}

export default VacationList;