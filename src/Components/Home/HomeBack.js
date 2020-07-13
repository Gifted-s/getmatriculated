import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class HomeBack extends Component {
    render() {
        return (
           <React.Fragment>
               
               <div className=" homeback">
                  <h1>READY TO GET<br/> MATRICULATED?</h1>
                 
                  <p>Join the matriculated <b style={{fontWeight:'bold'}}>Students</b> for this year</p>
                  {/* <Link to="/login">
                  <div style={{fontSize:'13px',padding:'10px 14px'}}  className="btn btn-bblue  text-uppercase">GET MATRICULATED</div>
                  </Link> */}
                 
               </div>
           </React.Fragment>
        )
    }
}
