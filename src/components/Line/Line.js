import React, { Component } from "react";
import '../../css/line.css';
import LineEvent from './LineEvent.js';
import CreateLineEvent from './CreateLineEvent.js';
import { connect } from "react-redux";

class Line extends Component {

    render() {
        const style = {
            borderColor: this.props.line.color,
        }
        let events = this.props.line.events.map((event) => {
            return (
                <LineEvent key={event.id} event={event} mainColor={this.props.line.color} />
            )
        });
        return (
            <div className='lineContainer'>
                <h3 className='lineTitle' style={{ color: this.props.line.color }}>{this.props.line.title}</h3>
                <div>
                    <div className='line' style={style}>
                    </div>
                    {events}
                    <CreateLineEvent iter={this.props.line.events.length} id={this.props.line.id} mainColor={this.props.line.color} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.line_id;
    return {
        line: state.lines.find(line => parseInt(id) === line.id)
    }
}

export default connect(mapStateToProps)(Line);