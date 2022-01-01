import React, { Component } from 'react';
import '../vacation/vacation.css'
import { MdEdit,MdDelete,MdPlace } from "react-icons/md";

class Vacation extends Component {
    constructor(props){
        super(props);
    }

    renderVacation() {
        return (
            <div className="vacation">
                <div className="card">
                    <div className="up-card">
                        <div><img src={this.props.imageUrl}></img></div>
                        <MdEdit className='edit-button'></MdEdit>
                        <MdDelete className='delete-button'></MdDelete>
                    </div>
                    <div className="down-card">
                        <div className="down-up">
                            <div>{this.props.name}</div>
                        </div>
                        <div className="down-down">
                            <div className="place"><MdPlace className="place-icon"></MdPlace><span>&nbsp; {this.props.location}</span></div>
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