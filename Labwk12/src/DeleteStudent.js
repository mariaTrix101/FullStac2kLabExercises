import React, { Component } from 'react';
import axios from 'axios';


class DeleteStudent extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        console.log(this.props.id)
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
            .then(res => {
                console.log(res);
            });
    }
    render() {
        return (
            <input type="button" value="Delete" onClick={this.handleSubmit} />
        )

    }
};

export default DeleteStudent;