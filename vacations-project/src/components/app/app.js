import React, { Component } from 'react';

import MainSection from '../mainSection/mainSection.js'
import FormSection from '../formSection/formSection.js'
import './app.css';
import vacationsData from '../../Data/vacations.json'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            vacations : [
            ]
        }
        this.addToVacationsData =this.addToVacationsData.bind(this); 
        this.nextId =this.nextId.bind(this); 
        this.renderApp =this.renderApp.bind(this); 

    }
    componentDidMount(){
        vacationsData.map(item=>this.addToVacationsData({id:item.id ,name:item.name,location:item.location,price:item.price,imageUrl:item.imageUrl}))
        console.log(this.state.vacations)
    }

    addToVacationsData( {id = null, name = 'vacation', location = 'place',price="0$",imageUrl="https://www.researchgate.net/profile/Ahmed-Mohmed-2/post/Why_do_we_need_a_vacation_How_often_do_you_need_a_vacationWhat_are_the_benefits_of_vacationsDo_vacations_make_you_happier/attachment/5e079b76cfe4a777d4fedc26/AS%3A841148566339584%401577556854285/image/vacation-final.jpg"} ) {
            this.setState(prevState => ({
                vacations: [
            ...prevState.vacations, {
                id: id !== null ? id : this.nextId(prevState.vacations),
                name: name,
                location: location,
                price:price,
                imageUrl:imageUrl
                }
            ]
            }))
        }
    
        nextId(vacations = []) {
            let max = vacations.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
            return ++max;
            }

    renderApp() {
        return (
            <div className="app"> 
              <MainSection vacations={this.state.vacations} ></MainSection> 
              <FormSection ></FormSection> 
            </div>
           
        )
    }

    render(){
        return this.renderApp();
    }
}
export default App;

