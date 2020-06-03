import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        let linesList = this.props.lines.map(line => {
            return (

                <Link to={'/' + line.id} key={line.id}>
                    <div className='card' style={{ boxShadow: '0px 0px 5px ' + line.color }}>
                        <h3 className='title' style={{ color: line.color }}>{line.title}</h3>
                    </div>
                </Link>
            )
        })
        return (
            <div className='container'>
                <h3>Your lines list:</h3>
                {linesList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lines: state.lines
    }
}

export default connect(mapStateToProps)(Home);