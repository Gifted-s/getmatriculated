import React from 'react'
import PropTypes from 'prop-types'

const Percentage = ({percentage}) => {
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped bg-success" role="progressbar"
            style={{width:`${percentage}%`}}
            
            >
                {percentage}%
            </div>
        </div>
    )
}

Percentage.propTypes = {
percent: PropTypes.number.isRequired
}

export default Percentage
