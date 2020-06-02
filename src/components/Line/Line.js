import React, { Component } from "react";
import '../../css/line.css';
import LineEvent from './LineEvent.js';
import CreateLineEvent from './CreateLineEvent.js';

class Line extends Component {


    addEvent = (event) => {
        let events = [...this.state.events, event];
        console.log(events);
        this.setState({
            events: events
        });
    }

    state = {
        title: 'Right knee',
        color: '#6e0303',
        events: [
            {
                id: 0,
                type: 'O', //Occurance
                title: 'Ligaments breaking',
                description: 'Breaking ligaments while playing football'
            },
            {
                id: 1,
                type: 'MT', //Medical Test
                title: 'Resonance of right knee',
                description: 'Right knee was tested after breaking the anterior cruciate ligaments. Right knee was tested after breaking the anterior cruciate ligaments. Right knee was tested after breaking the anterior cruciate ligaments.'
            }
        ]
    }

    render() {
        const style = {
            borderColor: this.state.color,
        }
        let events = this.state.events.map((event) => {
            return (
                <LineEvent key={event.id} event={event} mainColor={this.state.color} />
            )
        });
        console.log(this.state.events.length);
        return (
            <div className='lineContainer'>
                <h3 className='lineTitle' style={{ color: this.state.color }}>{this.state.title}</h3>
                <div>
                    <div className='line' style={style}>
                    </div>
                    {events}
                    <CreateLineEvent iter={this.state.events.length} addEvent={this.addEvent} mainColor={this.state.color} />
                </div>
            </div>
        )
    }
}

export default Line;