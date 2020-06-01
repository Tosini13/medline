import React, { Component } from "react";
import '../css/line.css';

class Line extends Component {

    addEvent = () => {
        console.log('add event');
        let event = {
            'id': '3',
            'type': 'O', //Occurance
            'title': 'Ligaments breaking',
            'content': 'Breaking ligaments while playing football'
        };
        let events = [...this.state.events, event];
        this.setState({
            events: events,
            newEvent: this.createEvent
        });
    }

    createEvent = () => {
        console.log('create event');
        this.setState({ newEvent: this.addEvent });
    }

    state = {
        newEvent: this.createEvent,
        events: [
            {
                'id': '1',
                'type': 'O', //Occurance
                'title': 'Ligaments breaking',
                'content': 'Breaking ligaments while playing football'
            },
            {
                'id': '2',
                'type': 'MT', //Medical Test
                'title': 'Resonance of right knee',
                'content': 'Right knee was tested after breaking the anterior cruciate ligaments. Right knee was tested after breaking the anterior cruciate ligaments. Right knee was tested after breaking the anterior cruciate ligaments.'
            }
        ]
    }

    render() {
        console.log(this.state);
        let events = this.state.events.map((event) => {
            return (
                <div className='event' key={event.id}>
                    <div className='dot'>
                        <i>{event.type}</i>
                    </div>
                    <div className='content'>
                        <div className='title'>{event.title}</div>
                        <div className='description'>{event.content}</div>
                    </div>
                </div>
            )
        });

        return (
            <div className='lineContainer'>
                <div className='line'>
                </div>
                {events}
                <div className='event event-create event-disabled'>
                    <div className='dot' onClick={this.state.newEvent}>
                        <i>+</i>
                    </div>
                    <form className='content'>
                        <select>
                            <option>Medical Treatment</option>
                        </select>
                        <input className='title' placeholder='Title' />
                        <textarea className='description' placeholder='Description'></textarea>
                    </form>
                </div>
            </div>
        )
    }
}

export default Line;