import React, { Component } from 'react';
import '../form/form.css'
import { IoIosAdd,IoIosCheckmark,IoIosClose } from "react-icons/io";
class Form extends Component {
    constructor(props){
        super(props);
    }

    renderForm() {
        return (
            <div className={this.props.add ? "form form-add" :"form"} >
                <div className="form-title">Add a New Vacation</div>
                <div className="all-input-elements">
                <div className="inputelement">
                        <label>Name</label>
                        <input type="text" placeholder="Name"></input>
                        </div>
                        <div className="inputelement">
                        <label>Location</label>
                        <input type="text" placeholder="Location"></input>
                        </div>
                        <div className="inputelement">
                        <label>Price</label>
                        <input type="text" placeholder="Price"></input>
                        </div>
                        <div className="inputelement">
                        <label>Image Url</label>
                        <input type="text" placeholder="Image Url"></input>
                        </div>
                    </div>
                <div className="form-buttons">
                        <IoIosAdd className='plus-button'></IoIosAdd>
                         {/* <IoIosClose  className="cancel-button"></IoIosClose>
                        <IoIosCheckmark className="check-button"></IoIosCheckmark>  */}
                    </div>
            </div>
        )
    }

    render(){
        return this.renderForm();
    }
}
export default Form;