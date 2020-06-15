import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEvent } from '../../store/actions/lineActions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditLineEvent extends Component {

    updateEvent = () => {
        let event = {
            type: this.state.type,
            date: this.state.date,
            title: this.state.title,
            description: this.state.description,
        };
        this.props.updateEvent(this.props.id, this.state.id, event);
        this.props.changeEditState();
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
        this.props.changeEditState();
    }


    state = {
        handle: this.createEvent,
        ...this.props.event,
        date: this.props.event.date.toDate()
    }

    render() {
        return (
            <div className='event event-form'>
                <div className='dots'>
                    <div className='dot dot-cancel' onClick={this.handleCancel}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='dot dot-create dot-update' onClick={this.updateEvent}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <form className='content content-form'>
                    <select id='type' onChange={this.handleChange} value={this.state.type}>
                        <option value="MA">Mediacal Appointment</option>
                        <option value="MT">Mediacal Test</option>
                        <option value="O">Occurance</option>
                        <option value="S">Surgery</option>
                    </select>
                    <DatePicker id='date' className='center'
                        selected={this.state.date}
                        onChange={this.handleChangeDate}
                        dateFormat="yyyy MMMM d"
                        showYearDropdown
                        showMonthDropdown
                    />
                    <input id='title' placeholder='Title' onChange={this.handleChange} value={this.state.title} />
                    <textarea id='description' placeholder='Description' rows={'5'} onChange={this.handleChange} value={this.state.description}></textarea>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEvent: (lineId, eventId, event) => { dispatch(updateEvent(lineId, eventId, event)) }
    }
}

export default connect(null, mapDispatchToProps)(EditLineEvent);