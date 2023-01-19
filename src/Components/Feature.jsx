import React from 'react'

const Feature = ({ title, text }) => {
    return (
        <div className="feature">
            <div className="feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature