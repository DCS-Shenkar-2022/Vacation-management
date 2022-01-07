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
            imageUrl: "",
            errorMsg: ""
        }
        this.clearStateFields = this.clearStateFields.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.save = this.save.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.add = this.add.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
    }

    clearStateFields() {
        this.setState(() => {
            return {
                id: "",
                name: "",
                location: "",
                price: "",
                imageUrl: "",
                errorMsg: ""

            }
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.editMode && (this.props.editMode != prevProps.editMode || this.props.vacationToEdit.id != prevProps.vacationToEdit.id)) {
            this.setState(() => {
                return { ...this.props.vacationToEdit }
            })
            if (this.state.errorMsg) {
            this.setState({
                errorMsg: ""
            })
        }
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

    validateInputs() {
        let errorMsg = ""
        let counter = 1;
        if (this.state.name == "" || this.state.location == "" || this.state.price == "" || this.state.imageUrl == "") {
            if (counter == 1) {
                errorMsg += "Please check the following:\n"
            }
            errorMsg += `${counter++}. All fields are required !\n`
        }

        if (this.state.price < 0) {
            if (counter == 1) {
                errorMsg = +"Please check the following:\n"
            }
            errorMsg += `${counter++}. Negative price is not valid !\n`

        }

        const validURL = (urlToCheck) => {
            var pattern = new RegExp('^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$', 'i');
            return !!pattern.test(urlToCheck);
        }

        if (!validURL(this.state.imageUrl) && this.state.imageUrl != "") {
            if (counter == 1) {
                errorMsg +="Please check the following:\n"
            }
            errorMsg += `${counter++}. Url is not valid!\n`
        }

        if (errorMsg == "")
            return true;

        this.setState({
            errorMsg: errorMsg
        })

    }

    add() {

        if (this.validateInputs()) {
            this.props.onAdd({ id: null, name: this.state.name, location: this.state.location, price: this.state.price, imageUrl: this.state.imageUrl });
            this.clearStateFields();
        }
        else {
            return;
        }

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
                    <div className="error-msg">{this.state.errorMsg}</div>

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