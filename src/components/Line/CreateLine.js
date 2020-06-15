import React, { Component } from "react";
import { connect } from "react-redux";
import { addLine } from '../../store/actions/lineActions'
import { Redirect } from "react-router-dom";

class CreateLine extends Component {

    colors = ['black', '#c4c4c4', '#d1c624', '#001a8f', '#068f09', '#ad0707', '#0abbc4'];

    state = {
        title: '',
        color: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeColor = (e) => {
        this.setState({
            color: e.target.id
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addLine(this.state);
        this.props.history.push('/');
    }

    render() {

        if (!this.props.signedIn) return <Redirect to='/signin' />

        let radios = this.colors.map(color => {
            let colorClass = 'color';
            if (this.state.color === color) {
                colorClass += ' chosen'
            }
            return (
                <div id={color} key={color} className={colorClass} onClick={this.handleChangeColor} style={{
                    backgroundColor: color,
                }}>
                </div>
            )
        })

        return (
            <form className='container lineForm'>
                <label>Title</label>
                <input name='title' onChange={this.handleChange} value={this.state.title} />
                <div className='chooseColor'>
                    {radios}
                </div>
                <div className='btn' onClick={this.handleSubmit} >ADD LINE</div>
            </form>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        signedIn: state.firebase.auth.uid ? true : false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLine: (line) => dispatch(addLine(line))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLine);