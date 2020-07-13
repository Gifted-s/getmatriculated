import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt,faMailBulk } from '@fortawesome/free-solid-svg-icons';


export default class ContactPage extends Component {
   

    render() {
        return (
           <React.Fragment>
               <div style={{marginTop:'100px', padding:'0 20px'}} className="container">
                   <div className="row">
                    <div className="col-md-6 col-sm-12">
                    
                    
                    <form className="border-primary p-4">
                        <div style={{borderRadius:'0'}} className='alert alert-secondary d-block'>
                            <h4 className="text-primary font-weight-bold">
                                Contact Us
                            </h4>
                        </div>
                    <div className="form-group">
                        <label className="text-primary" for="exampleInputEmail1">Full Name</label>
                        <input  type="text" className="cf form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                    </div>
                    <div className="form-group">
                        <label className="text-primary" for="exampleInputEmail1">Email address</label>
                        <input  type="email" className="cf form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                    </div>
                    <div className="form-group">
                        <label className="text-primary" for="exampleInputEmail1">Phone Number</label>
                        <input  type="telephone" className="cf form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                    </div>
                    <div className="form-group">
                        <label className="text-primary" for="exampleInputEmail1">Inquiry</label>
                        <input  type="text" className="cf form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                    </div>
                    <div class="form-group">
                        <label className="text-primary" for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control border-primary" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    <div className=" col-md-6 my-4 col-sm-10">
                     <h4 className="text-secondary">
                        <a href='
https://m.facebook.com/getmatriculated/' className="text-primary">
                      Facebook
                        </a>
                     </h4>
                     <h4 className="text-secondary">
                        <a href='

https://mobile.twitter.com/getmatriculated' className="text-primary">
                      Twitter
                        </a>
                     </h4>
                     <h4 className="text-primary">
                          Telephone : 09070930560, 07064196590

                     </h4>

                    
                     <h4 className="text-secondary">
                        <a href='

https://chat.whatsapp.com/Ik0sHWTCt8sKWgiCiW07w0' className="text-primary">
                      Whatsapp
                        </a>
                     </h4>


                     <h4 className="text-secondary">
                        <a href='
https://m.facebook.com/groups/605769713324813?group_view_referrer=profile_browser&_rdc=1&_rdr' className="text-primary">
                      
Facebook community link
                        </a>
                     </h4>
                    </div>
                    
                   </div>
 
               </div>
           </React.Fragment>
        )
    }
}
