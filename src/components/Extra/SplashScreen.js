import React from 'react'

const SplashScreen = (props) => {
    const styleScreen = {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        top: '0',
        left: '0'
    }
    const styleContainer = {
        position: 'absolute',
        fontSize: '40px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: 'grey dashed 2px',
        // boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
        padding: '15px 20px',
        backgroundColor: 'white',
        // backgroundColor: '#019785',
    }
    const styleTrace = {
        height: '100%',
        width: '10px',
        height: '100%',
        width: '10px',
        borderLeft: 'red dashed 3px',
        position: 'absolute',
        top: '0',
        left: '64%'
    }
    const styleText = {
        display: 'block',
        color: 'white',
        color: '#019785',
        margin: '0',
    }
    return (
        <div className='splashScreen' style={styleScreen}>
            <div style={styleContainer}>
                <p style={styleText}>
                    MedL<span style={{ color: '#ad0707', margin: '0px 5px' }}></span>ne
                    <div style={styleTrace}></div>
                </p>
            </div>
        </div>
    )
}

export default SplashScreen;