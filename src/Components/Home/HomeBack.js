import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class HomeBack extends Component {
    render() {
        return (
           <React.Fragment>
               
               <div className=" homeback">
                  {/* <h1>READY TO GET<br/> MATRICULATED?</h1> */}
                  <h1>ARE YOU READY<br/>TO APPLY?</h1>
                  <p>Join the matriculated <b>Students</b> for this year</p>
                  <Link to="/login">
                  <div  className="btn btn-bblue text-uppercase">Get started today</div>
                  </Link>
                 
               </div>
           </React.Fragment>
        )
    }
}
