import React, { Component } from "react";

class LineEvent extends Component {
    state = {
        opened: false,
    }

    handleClick = () => {
        this.setState({ opened: !this.state.opened });
    }

    render() {
        let contentClass = 'content';
        if (this.state.opened) {
            contentClass += ' opened'
        }
        return (
            <div className='event'>
                <div className='dot'>
                    <i>{this.props.event.type}</i>
                </div>
                <div className={contentClass}>
                    <div className='title' style={{ color: this.props.mainColor }} onClick={this.handleClick}>{this.props.event.title}</div>
                    <div className='description'>{this.props.event.description}</div>
                </div>
            </div>
        )
    }
}

export default LineEvent;