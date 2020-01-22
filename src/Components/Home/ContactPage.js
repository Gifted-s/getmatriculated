import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt,faMailBulk } from '@fortawesome/free-solid-svg-icons';


export default class ContactPage extends Component {
   

    render() {
        return (
           <React.Fragment>
               <div style={{marginTop:'100px'}} className="container">
                   <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <h3 className="my-3 mx-auto" style={{fontWeight:'bold'}}>Contact Us Today</h3>
                    <h6 className="my-4  mx-auto">Gmail <FontAwesomeIcon style={{color:'rgba(0,0,0,0.6)', marginLeft:'10px'}} icon={faMailBulk}/>: getmatriculated@gmail.com</h6>
                    <h6 className="my-4  mx-auto">Phone <FontAwesomeIcon  style={{color:'rgba(0,0,0,0.6)', marginLeft:'10px'}} icon={faPhoneAlt}/>:  07031850081</h6>
                    <h6 className="my-4 mx-auto">Instagram :@getmatriculated</h6>
                    <h6 className="my-4  mx-auto">Twitter :@get-matriculated</h6>
                    <h4>You can also message us</h4>
                    
                    
                    <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input style={{border:'1px solid rgba(0,0,0,0.2)', marginTop:'-10px'}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Full name</label>
                    <input style={{border:'1px solid rgba(0,0,0,0.2)', marginTop:'-10px'}} type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Phone Number</label>
                    <input style={{border:'1px solid rgba(0,0,0,0.2)', marginTop:'-10px'}} type="number" className="form-control" id="exampleInputPassword1"/>
                </div>
                 <div className="form-group">
                    <label for="exampleInputPassword1">Text</label>
                    <input style={{border:'1px solid rgba(0,0,0,0.2)', marginTop:'-10px'}} type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    </div>
                    <div  className="col-md-6 my-4 col-sm-12">
                     <img src={require('./Getmatriculated.png')} className='img-fluid' alt="getmatriculated"/>
                    </div>
                    
                   </div>
 
               </div>
           </React.Fragment>
        )
    }
}
