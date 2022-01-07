import React, { Component } from 'react';
import '../vacation/vacation.css'
import { MdEdit, MdDelete, MdPlace } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';

class Vacation extends Component {
    constructor(props) {
        super(props);
        this.renderVacation = this.renderVacation.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }
    delete() {
        this.props.onDelete(this.props.index)
    }

    edit() {
        this.props.onEdit(this.props.index);
    }

    renderVacation() {
        let borderStyle = { border: "none" }
        if (this.props.onReqEdit && this.props.onReqEdit === this.props.index) {
            borderStyle.border = "2px #F86549 solid";
        }
        return (
            <div className="vacation">
                <div className="card" style={borderStyle}>
                    <div className="up-card">
                        <div><img src={this.props.imageUrl} alt={this.props.name} title={this.props.name}></img></div>
                        <MdEdit className='edit-button' onClick={this.edit}></MdEdit>
                        <MdDelete className='delete-button' onClick={this.delete}></MdDelete>
                    </div>
                    <div className="down-card">
                        <div className="down-up">
                            <Tooltip describeChild title={this.props.name} arrow >
                                <div className="dots">{this.props.name}</div>
                            </Tooltip>
                        </div>
                        <div className="down-down">
                            <Tooltip describeChild title={this.props.location} arrow > 
                                <div className="place dots">
                                    <MdPlace className="place-icon"></MdPlace>
                                    <span >&nbsp; {this.props.location}</span>
                                </div>
                            </Tooltip>
                            <Tooltip describeChild title={"$"+this.props.price.toLocaleString()} arrow>
                                <div className="price">
                                    <span className="dots">{"$"+parseInt(this.props.price).toLocaleString() }</span>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.renderVacation();
    }
}
export default Vacation;