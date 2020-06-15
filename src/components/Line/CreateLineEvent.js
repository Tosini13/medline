import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from '../../store/actions/lineActions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateLineEvent extends Component {

    addEvent = () => {
        let event = {
            type: this.state.type,
            date: this.state.date,
            title: this.state.title,
            description: this.state.description,
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

    handleChangeDate = (date) => {
        this.setState({
            date
        })
    }

    handleCancel = () => {
        this.setState({ handle: this.createEvent, state: 0 });
    }

    state = {
        state: 0,
        handle: this.createEvent,
        date: new Date(),
        type: 'MA',
        title: '',
        description: ''
    }

    render() {
        let eventClass = 'event event-form ';
        if (this.state.state === 0) {
            eventClass += 'event-disabled';
        }
        return (
            <div className={eventClass}>
                <div className='dots'>
                    <div className='dot dot-cancel' onClick={this.handleCancel}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='dot dot-create' onClick={this.state.handle}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <form className='content content-form'>
                    <select id='type' onChange={this.handleChange}>
                        <option value="MA">Mediacal Appointment</option>
                        <option value="MT">Mediacal Test</option>
                        <option value="O">Occurance</option>
                        <option value="S">Surgery</option>
                    </select>
                    <DatePicker id='date' className='center'
                        selected={this.state.date}
                        onChange={this.handleChangeDate}
                        dateFormat="yyyy MMMM dd"
                        showYearDropdown
                        showMonthDropdown
                    />
                    <input id='title' placeholder='Title' onChange={this.handleChange} value={this.state.title} />
                    <textarea id='description' placeholder='Description' rows={'3'} onChange={this.handleChange} value={this.state.description}></textarea>
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