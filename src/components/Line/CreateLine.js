import React, { Component } from "react";

class CreateLine extends Component {
    state = {
        title: '',
        color: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className='container'>
                <label for='title'>Title</label>
                <input name='title' onChange={this.handleChange} value={this.state.title} />
                <label for='color'>Color</label>
                <input name='color' onChange={this.handleChange} value={this.state.color} />
            </form>
        );
    }
}

export default CreateLine;