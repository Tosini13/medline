import React, { useState } from 'react'
import EditLine from './EditLine';

const LineDashboard = (props) => {

    const [edit, setEdit] = useState(false);

    if (edit) {
        return (
            <EditLine line={props.props.line} id={props.props.id} history={props.props.history} backToLine={() => { setEdit(false) }} />
        )
    } else {
        return (
            <div className='lineDashboard'>
                <p className='lineTitle'>{props.props.line.title}</p>
                <div className='btns-container'>
                    <div className='btn' onClick={() => {
                        console.log('edit');
                        setEdit(true);
                    }} >
                        <i className='icon-pencil-1' style={{ color: 'blue' }}></i>
                    </div>
                    <div className='btn' onClick={() => { props.deleteLine(props.props.id); props.props.history.push('/') }} >
                        <i className='icon-trash-empty' style={{ color: 'red' }}></i>
                    </div>
                </div>
            </div>
        )
    }
}


export default LineDashboard;