import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt,faMailBulk } from '@fortawesome/free-solid-svg-icons';


export default class ContactPage extends Component {
   

    render() {
        return (
           <React.Fragment>
               <div style={{marginTop:'120px'}} className="container">
                   <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <h2 className="my-3 mx-auto" style={{fontWeight:'bold'}}>Contact Us Today</h2>
                    <h4 className="my-4  mx-auto">Gmail <FontAwesomeIcon style={{color:'rgba(0,0,0,0.6)', marginLeft:'10px'}} icon={faMailBulk}/>: getmatriculated@gmail.com</h4>
                    <h4 className="my-4  mx-auto">Phone <FontAwesomeIcon  style={{color:'rgba(0,0,0,0.6)', marginLeft:'10px'}} icon={faPhoneAlt}/>:  07031850081</h4>
                    <h4 className="my-4 mx-auto">Instagram :@getmatriculated</h4>
                    <h4 className="my-4  mx-auto">Twitter :@get-matriculated</h4>
                    
                    
                    </div>
                    <div  className="col-md-6 col-sm-12">
                     <img src={require('./Getmatriculated.png')} className='img-fluid' alt="getmatriculated"/>
                    </div>
                    
                   </div>
 
               </div>
           </React.Fragment>
        )
    }
}
