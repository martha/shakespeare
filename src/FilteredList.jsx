import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "All",
            sortAttr: "type"
        };
    }

    // Set the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
      // Checks if the current search term is contained in this item
      return item.name.toLowerCase().search(this.state['search']) !== -1 &&
        (item.type === this.state['type'] || this.state['type'] === 'All');
    }

    // todo make everything more extensibleee
    sortItems = (a, b) => {
      const {sortAttr} = this.state;

      if (!a[sortAttr] || !b[sortAttr]) {
        return 0;
      }

      if (typeof a[sortAttr] === 'string') {
        return a[sortAttr].localeCompare(b[sortAttr]);
      }

      if (typeof a[sortAttr] === 'number') {
        return a[sortAttr] - b[sortAttr];
      }
      
      return 0;
    }

    onSelectTypeDropdown = (selectedItem) => {
      this.setState({type: selectedItem});
    }

    onSelectSortDropdown = (selectedItem) => {
      this.setState({sortAttr: selectedItem});
    }

    render() {
      return (
          <div className="filter-list">
              <h1>Shakespeare Plays</h1>

              <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onSelectTypeDropdown}>
                <MenuItem eventKey="All">All</MenuItem>
                <MenuItem eventKey="Comedy">Comedies</MenuItem>
                <MenuItem eventKey="History">Histories</MenuItem>
                <MenuItem eventKey="Tragedy">Tragedies</MenuItem>
              </DropdownButton>

              <DropdownButton id="sortDropdown" title={"Sort by"} onSelect={this.onSelectSortDropdown}>
                <MenuItem eventKey="name">Title</MenuItem>
                <MenuItem eventKey="publicationDate">Publication Date</MenuItem>
                <MenuItem eventKey="type">Type</MenuItem>
              </DropdownButton>

              <input type="text" placeholder="Search" onChange={this.onSearch}/>
              <List items={this.props.items.filter(this.filterItem).sort(this.sortItems)}/>
          </div>
      );
    }
}


export default FilteredList;