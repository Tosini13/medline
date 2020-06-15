import React from 'react'
import { Link } from 'react-router-dom'

const LinesList = ({ lines }) => {

    return (
        <div className='container'>
            <h3>Your lines list:</h3>
            <div className='lineList'>
                {lines && lines.map(line => {
                    return (
                        <Link to={'/line/' + line.id} key={line.id}>
                            <div className='lineCard'>
                                <div className='badge' style={{ backgroundColor: line.color }}></div>
                                <p className='card-title grey-text'>{line.title}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )

}

export default LinesList;