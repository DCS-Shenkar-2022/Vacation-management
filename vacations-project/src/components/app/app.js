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
            ],
            editing : false,
            deleting:false,
            vacationToEdit:{},
            filter:""
        }
        this.addToVacationsData =this.addToVacationsData.bind(this); 
        this.nextId =this.nextId.bind(this); 
        this.renderApp =this.renderApp.bind(this); 
        this.deleteVacation=this.deleteVacation.bind(this);
        this.requestToEdit=this.requestToEdit.bind(this);
        this.updateVacation=this.updateVacation.bind(this);
        this.cancelUpdateVacation=this.cancelUpdateVacation.bind(this);
        this.changeDeleteMode=this.changeDeleteMode.bind(this);
        this.setFilter=this.setFilter.bind(this);

    }
    componentDidMount(){
        vacationsData.map(item=>this.addToVacationsData({id:item.id ,name:item.name,location:item.location,price:item.price,imageUrl:item.imageUrl}))
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


        deleteVacation(vacationIdToDelete){
                this.setState(prevState=>({
                    vacations:prevState.vacations.filter(vacation=>vacation.id !==vacationIdToDelete ),
                    editing:false,
                    deleting:true
                }))
            }
        

        requestToEdit(vacationIdToEdit){
            this.setState(prevState=>({
                vacationToEdit:prevState.vacations.find(vacation=>vacation.id ==vacationIdToEdit ),
                editing:true
            }))

        this.state.vacationToEdit.style.border='black';
    
        }
        
        updateVacation(newVacation){   
            this.setState(prevState=>({
                vacations:prevState.vacations.map(vacation=>vacation.id !=newVacation.id ? vacation : newVacation),
                editing:false
    
            }))
        }

        cancelUpdateVacation(){   
            this.setState({
                editing:false
            })
        }

      changeDeleteMode(){
        this.setState({
            deleting:false
        })
      }


      setFilter(filter){
        this.setState({
            filter:filter
        })
      }

    renderApp() {
        return (
            <div className="app"> 
              <MainSection vacations={this.state.vacations} funcOnDelete={this.deleteVacation} funcOnEdit={this.requestToEdit}  funcSetFilter={this.setFilter} filter={this.state.filter}></MainSection> 
              <FormSection vacationToEdit={this.state.vacationToEdit} editMode={this.state.editing} funcToUpdate={this.updateVacation} funcToCancel={this.cancelUpdateVacation} funcToAdd={this.addToVacationsData} deleteMode={this.state.deleting} changeDeleteMode={this.changeDeleteMode}></FormSection> 
            </div>
           
        )
    }


    
    render(){
        return this.renderApp();
    }
}
export default App;

