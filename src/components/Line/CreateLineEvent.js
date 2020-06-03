import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from '../../store/actions/lineActions'

class CreateLineEvent extends Component {

    addEvent = () => {
        let event = {
            id: this.state.id,
            type: this.state.type,
            title: this.state.title,
            description: this.state.description
        };
        this.props.addEvent(this.props.id, event);
        this.setState({
            state: 0,
            handle: this.createEvent,
            id: this.props.iter,
            type: 'MA',
            title: '',
            description: ''
        })
    }

    createEvent = () => {
        this.setState({ handle: this.addEvent, state: 1 });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    state = {
        state: 0,
        handle: this.createEvent,
        id: this.props.iter,
        type: 'MA',
        title: '',
        description: ''
    }

    render() {
        let eventClass = 'event event-create ';
        if (this.state.state === 0) {
            eventClass += 'event-disabled';
        }
        return (
            <div className={eventClass}>
                <div className='dot dot-create' onClick={this.state.handle}>
                    <div></div>
                    <div></div>
                </div>
                <form className='content'>
                    <select id='type' onChange={this.handleChange}>
                        <option value="MA">Mediacal Appointment</option>
                        <option value="MT">Mediacal Test</option>
                        <option value="O">Occurance</option>
                        <option value="S">Surgery</option>
                    </select>
                    <input id='title' placeholder='Title' onChange={this.handleChange} value={this.state.title} />
                    <textarea id='description' placeholder='Description' onChange={this.handleChange} value={this.state.description}></textarea>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (id, event) => { dispatch(addEvent(id, event)) }
    }
}

export default connect(null, mapDispatchToProps)(CreateLineEvent);