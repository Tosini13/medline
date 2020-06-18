import React, { useState } from 'react'
import EditLine from './EditLine';
import Question from '../Extra/Question';


const LineDashboard = (props) => {

    const [edit, setEdit] = useState(false);
    const [deleteLine, setDeleteLine] = useState(false);
    const [question, setQuestion] = useState(null);

    const handleDelete = () => {
        setDeleteLine(true);
        setQuestion({
            question: 'Do you want to delete line?',
            answer1: {
                answer: 'Yes',
                feedback: () => {
                    props.deleteLine(props.props.id);
                    setDeleteLine(false);
                    props.props.history.push('/')
                }
            },
            answer2: {
                answer: 'No',
                feedback: () => {
                    setDeleteLine(false);
                }
            }
        });
    }

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
                    <div className='btn' onClick={handleDelete} >
                        <i className='icon-trash-empty' style={{ color: 'red' }}></i>
                    </div>
                </div>
                {deleteLine ? <Question question={question} /> : null}
            </div>
        )
    }
}


export default LineDashboard;