import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";


const searchTermStyle = {
    maxWidth: "65.7%"
}

class SearchBar extends Component {

    
  
    state = {
        term: ""
    }

    handleInputChange = event => {
        this.setState({ term: event.target.value });
        this.props.runSearch(event.target.value);
    }


    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="searchTerm" hidden>Search</Label>
                    <Input 
                    style={searchTermStyle}
                    type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="Your search term here!" 
                    value={this.state.term}
                    onChange={this.handleInputChange}
                    />
                </FormGroup>
            </Form>
        )
    }
}

export default SearchBar;