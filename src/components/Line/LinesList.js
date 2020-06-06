import React from 'react'
import { Link } from 'react-router-dom'

const LinesList = ({ lines }) => {

    return (
        <div className='container'>
            <h3>Your lines list:</h3>
            {lines && lines.map(line => {
                return (
                    <Link to={'/line/' + line.id} key={line.id}>
                        <div className='card' style={{ boxShadow: '0px 0px 5px ' + line.color }}>
                            <h3 className='title' style={{ color: line.color }}>{line.title}</h3>
                        </div>
                    </Link>
                )
            })}
        </div>
    )

}

export default LinesList;