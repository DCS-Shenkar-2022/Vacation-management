import React, { Component } from 'react';
import '../form/form.css'
import { IoIosAdd, IoIosCheckmark, IoIosClose } from "react-icons/io";
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            location: "",
            price: "",
            imageUrl: ""
        }
        this.clearStateFields = this.clearStateFields.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.save = this.save.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.add = this.add.bind(this);
    }

    clearStateFields() {
        this.setState(() => {
            return {
                id: "",
                name: "",
                location: "",
                price: "",
                imageUrl: ""
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.editMode && (this.props.editMode != prevProps.editMode || this.props.vacationToEdit.id != prevProps.vacationToEdit.id)) {
            this.setState(() => {
                return { ...this.props.vacationToEdit }
            })
        }
        if (this.props.deleteMode) {
            this.props.onAfterDelete();
            this.clearStateFields();
        }
    }

    onValueChange(eventChangeField) {
        this.setState((prevState) => {
            return {
                ...prevState,
                [eventChangeField.target.name]: eventChangeField.target.value
            }
        })
    }

    save() {
        this.props.onSave(this.state);
        this.clearStateFields();
    }

    cancelSave() {
        this.props.onCancel();
        this.clearStateFields();
    }

    add() {
        if (this.state.name && this.state.location && this.state.price) {
            this.props.onAdd(this.state);
            this.clearStateFields();
        }
        else return;
    }

    renderForm() {

        return (
            <div className={this.props.editMode ? "form" : "form form-add"} >
                <div className="form-title"> {this.props.editMode ? <div>Edit a Vacation</div> : <div>Add a New Vacation</div>}</div>
                <form className="all-input-elements">
                    <div className="inputelement">
                        <label>Name</label>
                        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onValueChange} ></input>
                    </div>
                    <div className="inputelement">
                        <label>Location</label>
                        <input type="text" placeholder="Location" name="location" value={this.state.location} onChange={this.onValueChange}></input>
                    </div>
                    <div className="inputelement">
                        <label>Price</label>
                        <input type="number" placeholder="Price" name="price" value={this.state.price} onChange={this.onValueChange}></input>
                    </div>
                    <div className="inputelement">
                        <label>Image Url</label>
                        <input type="text" placeholder="Image Url" name="imageUrl" value={this.state.imageUrl} onChange={this.onValueChange}></input>
                    </div>
                </form>
                <div className="form-buttons">{this.props.editMode ?
                    <div><IoIosClose className="cancel-button" onClick={this.cancelSave}></IoIosClose><IoIosCheckmark className="check-button" onClick={this.save}></IoIosCheckmark>  </div> :
                    <IoIosAdd className='plus-button' onClick={this.add}></IoIosAdd>}
                </div>
            </div>
        )
    }

    render() {
        return this.renderForm();
    }
}
export default Form;