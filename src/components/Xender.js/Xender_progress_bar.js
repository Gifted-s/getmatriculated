import React from 'react'
import PropTypes from 'prop-types';
import {Spinner, Badge} from 'reactstrap'

function Xender_progress_bar({percent}) {
    return (
        <div className="row mt-1">
          <div className="m-auto ">
           <span className="spinner"><Spinner id="spinner" size="sm"/><span>{percent}%</span></span> 
          </div>
        </div>
    )
}

Xender_progress_bar.propTypes = {

}

export default Xender_progress_bar

