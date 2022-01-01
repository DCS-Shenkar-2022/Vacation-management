import React, { Component } from 'react';
import '../search/search.css'
import { MdOutlineSearch } from "react-icons/md";
import './search.css'

class Search extends Component {
    constructor(props){
        super(props);
    }

    renderSearch() {
        return (
            <div className="search">
               <input type="text" placeholder="&#x1F50E;&#xFE0E;     Search by name or location"></input>
               <MdOutlineSearch className="search-button"></MdOutlineSearch>
            </div>
        )
    }

    render(){
        return this.renderSearch();
    }
}
export default Search;

