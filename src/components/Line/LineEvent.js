import React, { Component } from "react";
import '../../css/fontello/css/fontello.css'
import moment from 'moment'

class LineEvent extends Component {
    state = {
        opened: false,
    }

    handleDelete = () => {
        this.props.deleteEvent(this.props.id, this.props.event.id);

    }

    handleEdit = () => {
        console.log('Not ready to edit!');
    }

    handleOpen = () => {
        this.setState({ opened: !this.state.opened });
    }

    render() {
        let eventClass = 'event';
        let eventIcon = '';
        let eventIconColor = '';
        if (this.state.opened) {
            eventClass += ' opened'
        }
        switch (this.props.event.type) {
            case 'MA':
                eventIcon = 'icon-calendar';
                eventIconColor = 'blue';
                break;
            case 'MT':
                eventIcon = 'icon-stethoscope';
                eventIconColor = 'green';
                break;
            case 'O':
                eventIcon = 'icon-blood';
                eventIconColor = 'red';
                break;
            case 'S':
                eventIcon = 'icon-heartbeat';
                eventIconColor = 'red';
                break;
            default:
                eventIcon = '';
                break;

        }
        return (
            <div className={eventClass}>
                <div className='dots'>
                    <div className='dot dot-remove' onClick={this.handleDelete}>
                        <i className='icon-trash-empty'></i>
                    </div>
                    <div className='dot dot-edit' onClick={this.handleEdit}>
                        <i className='icon-pencil-1'></i>
                    </div>
                    <div className='dot' onClick={this.handleOpen}>
                        <i className={eventIcon} style={{ color: eventIconColor }}></i>
                    </div>
                </div>
                <div className='content'>
                    <p className='date'>{moment(this.props.event.date.toDate()).format('yyyy MMMM DD')}</p>
                    <p className='title'>{this.props.event.title}</p>
                    <p className='description'>{this.props.event.description}</p>
                </div>
            </div >
        )
    }
}

export default LineEvent;