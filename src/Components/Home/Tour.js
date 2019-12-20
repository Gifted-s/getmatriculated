import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle ,faPauseCircle} from '@fortawesome/free-solid-svg-icons'


export default class Tour extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{marginTop:'60px'}} className="row tour">
                    <div className="col-md-8 col-sm-12 mx-auto">
                    <img  src='http://gidiclass.com.ng/wp-content/uploads/2019/01/jamb.png' alt="jambImage is loading" className="img-fluid img_" alt="Responsive image"/>
                    </div>
                    
                  
                </div>
            </React.Fragment>
        )
    }
}
