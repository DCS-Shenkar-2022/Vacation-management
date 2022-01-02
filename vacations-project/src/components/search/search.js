import React, { Component } from 'react';
import '../search/search.css'
import { MdOutlineSearch } from "react-icons/md";
import './search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueToSearch: ""
        }
        this.renderSearch = this.renderSearch.bind(this);
        this.search = this.search.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.valueToSearch);
    }

    onValueChange(eventChangeSearchField) {
        this.setState((prevState) => {
            return {
                valueToSearch: eventChangeSearchField.target.value
            }
        })
    }

    renderSearch() {
        return (
            <div className="search">
                <input type="text" placeholder="&#x1F50E;&#xFE0E; Search by name or location" onChange={this.onValueChange}></input>
                <div className="hover-search"><MdOutlineSearch className="search-button" onClick={this.search} /></div>
            </div>
        )
    }

    render() {
        return this.renderSearch();
    }
}
export default Search;

