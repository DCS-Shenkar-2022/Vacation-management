import React, { Component } from 'react';
import Vacation from '../vacation/vacations';
import vacationsData from '../../Data/vacations.json'
import '../vacationsList/vacationsList.css'

class VacationList extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     vacations : [
        //     ]
        // }
        this.createOneVacation =this.createOneVacation.bind(this); 
    }
    // ממלא מידע של  ideas
    // componentDidMount(){
    //     vacationsData.map(item=>this.addToList({id:item.id ,name:item.name,location:item.location,price:item.price,imageUrl:item.imageUrl}))
    // }

    createOneVacation(vacation,keyIterator){
        return <Vacation key={keyIterator} index={vacation.id} imageUrl={vacation.imageUrl} name={vacation.name} location={vacation.location} price={vacation.price} >
        </Vacation>
    }

    // addToList( {id = null, name = 'vacation', location = 'place',price="0$",imageUrl="https://www.researchgate.net/profile/Ahmed-Mohmed-2/post/Why_do_we_need_a_vacation_How_often_do_you_need_a_vacationWhat_are_the_benefits_of_vacationsDo_vacations_make_you_happier/attachment/5e079b76cfe4a777d4fedc26/AS%3A841148566339584%401577556854285/image/vacation-final.jpg"} ) {
    //         this.setState(prevState => ({
    //             vacations: [
    //         ...prevState.vacations, {
    //             id: id !== null ? id : this.nextId(prevState.vacations),
    //             name: name,
    //             location: location,
    //             price:price,
    //             imageUrl:imageUrl
    //             }
    //         ]
    //         }))
    //     }

    //     nextId(vacations = []) {
    //     let max = vacations.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
    //     return ++max;
    //     }

    render(){
        return(
            <div className="vacations-list">
                { this.props.vacations.map(this.createOneVacation)}
            </div>
        )
    }
}

export default VacationList;