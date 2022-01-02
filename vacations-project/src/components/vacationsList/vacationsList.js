import React, { Component } from 'react';
import Vacation from '../vacation/vacations';
import '../vacationsList/vacationsList.css'

class VacationList extends Component {
    constructor(props) {
        super(props);
        this.createOneVacation = this.createOneVacation.bind(this);
        this.renderVacations = this.renderVacations.bind(this);
    }

    createOneVacation(vacation, keyIterator) {
        return <Vacation key={keyIterator} index={vacation.id} imageUrl={vacation.imageUrl} name={vacation.name} location={vacation.location} price={vacation.price} onDelete={this.props.funcOnDelete} onEdit={this.props.funcOnEdit} onReqEdit={this.props.vacationRequestToEdit}>
        </Vacation>
    }

    renderVacations(filter) {
        let resultVacations;
        let filterVacations = this.props.vacations.filter((vacation) => {
            if (vacation.name.toLowerCase().includes(filter.toLowerCase()) || vacation.location.toLowerCase().includes(filter.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });
        resultVacations = this.props.vacations.map((vacation, keyIterator) => {
            if (filter == "") {
                return this.createOneVacation(vacation, keyIterator);
            }

            else if (vacation.name.toLowerCase().includes(filter.toLowerCase()) || vacation.location.toLowerCase().includes(filter.toLowerCase())) {
                return this.createOneVacation(vacation, keyIterator);
            }

        })

        if (filterVacations.length > 0) {
            return resultVacations;
        }
        else {
            return <p> &#9992; Sorry, no search results are found for: "{this.props.filter}" &#128532; </p>
        }

    }

    render() {
        return (
            <div className="vacations-list">
                {this.renderVacations(this.props.filter)}
            </div>
        )
    }
}

export default VacationList;