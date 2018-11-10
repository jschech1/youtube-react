import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";



class SearchBar extends Component {

    state = {
        term: ""
    }


    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="searchTerm" hidden>Search</Label>
                    <Input 
                    type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="Your search term here!" 
                    />
                </FormGroup>
            </Form>
        )
    }
}

export default SearchBar;