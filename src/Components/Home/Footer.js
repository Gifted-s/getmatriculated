import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="footer">
                <ul style={{color:"white" }} className=" foot  nav navbar-dark bg-dark justify-content-center">
                    <li  className="nav-item">
                        <Link className="nav-link " to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/buy">Buy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/utmeapp">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/exam" >Practice Now</Link>
                    </li>
                    <li  className="nav-item">
                        <Link className="nav-link " to="/contact">Contact Us</Link>
                    </li>
                  
                    </ul>



                    <div style={{color:"white" ,marginTop:"0px", backgroundColor:'black',padding:'70px ', color:"white" }} className="foot nav justify-content-center">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <h5 style={{fontWeight:'bold'}}>GetMatriculated</h5>
                            <p style={{marginTop:'20px'}}><Link  to="/">Home</Link></p>
                            <p> <Link to="/buy">Buy</Link></p>
                            <p> <Link to="/contact">Contact Us</Link></p>

                            <p><Link to="/utmeapp">Products</Link></p>
                            <p><Link to="/exam">Practice Test</Link></p>

                        </div>
                        <div className="col-md-4 col-sm-12">
                        <h5 style={{fontWeight:'bold'}}>Our Products</h5>
                            <p style={{marginTop:'20px'}}><Link to="/utmeapp">GetMatriculated UTME</Link></p>
                            {/* <p> <a href="/about">GetMatriculated</a></p>
                            <p><a href="#">Get Insights</a></p>
                            <p><a href="#">Learning Portals</a></p>
                            <p><a href="#">Forum</a></p> */}

                        </div>
                        <div className="col-md-4 col-sm-12">
                        <h5 style={{fontWeight:'bold'}}>Contact Us</h5>
                           
                            <p style={{marginTop:'20px'}}> <Link to="contact">Contact</Link></p>
                            {/* <p><a href="#">Terms</a></p>
                            <p><a href="#">Private policy</a></p> */}
                            <p><Link to="/contact">Mail</Link></p>
                            
                        </div>
                    </div>
                    </div>
                    

                    <div style={{color:"white", padding:'20px 0 10px 0'}} className=" nav navbar-dark bg-dark justify-content-center">
                    <p className="root"><span className="copy_text">Copyright</span> <span className="copy">&copy;</span> <span className="copy_textr">2019 GetMatriculated. All Rights Reserved. Privacy Policy</span>  <i className="fab fa-facebook-square"></i>  <i className="fab fa-twitter"></i> <i className="far fa-envelope"></i> </p>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}
