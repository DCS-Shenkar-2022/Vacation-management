import React, { Component } from 'react';
import '../vacation/vacation.css'
import { MdEdit,MdDelete,MdPlace } from "react-icons/md";

class Vacation extends Component {
    constructor(props){
        super(props);
        this.state={
           editing:false
        }
        this.renderVacation =this.renderVacation.bind(this); 
        this.delete=this.delete.bind(this);
        this.edit=this.edit.bind(this);

    }
    delete(){
        this.props.onDelete(this.props.index)
    }

    edit(){
        this.setState({
            editing:true
        })
        this.props.onEdit(this.props.index);
        
    }


    renderVacation() {
        // let borderStyle={border:"none"}
        // if( this.state.editing){
        //     borderStyle.border="2px #F86549 solid";
        // }
        return (
            <div className="vacation">
                {/* style={borderStyle} */}
                <div className="card" >
                    <div className="up-card">
                        <div><img src={this.props.imageUrl}></img></div>
                        <MdEdit className='edit-button' onClick={this.edit}></MdEdit>
                        <MdDelete className='delete-button' onClick={this.delete}></MdDelete>
                    </div> 
                    <div className="down-card">
                        <div className="down-up ">
                            <div>{this.props.name}</div>
                        </div>
                        <div className="down-down">
                            <div className="place "><MdPlace className="place-icon"></MdPlace><span>&nbsp; {this.props.location}</span></div>
                            <div className="price"><span>{this.props.price}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    render(){
        return this.renderVacation();
    }
}
export default Vacation;