import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="footer">
                <ul style={{color:"white" }} className=" foot  nav navbar-dark bg-dark justify-content-center">
                    <li  className="nav-item">
                        <a className="nav-link " href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/news">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/exam" >Practice Now</a>
                    </li>
                    <li  className="nav-item">
                        <a className="nav-link " href="/news">Opportunities</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Contact Us</a>
                    </li>
                    </ul>



                    <div style={{color:"white" ,marginTop:"0px", backgroundColor:'black',padding:'70px ', color:"white" }} className="foot nav justify-content-center">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <h5 style={{fontWeight:'bold'}}>GetMatriculated</h5>
                            <p style={{marginTop:'20px'}}><a href="#">Home</a></p>
                            <p> <a href="/about">About Us</a></p>
                            <p><a href="/news">News</a></p>
                            <p><a href="/exam">Practice Now</a></p>

                        </div>
                        <div className="col-md-4 col-sm-12">
                        <h5 style={{fontWeight:'bold'}}>Our Products</h5>
                            <p style={{marginTop:'20px'}}><a href="#">Learning Management System</a></p>
                            <p> <a href="/about">GetMatriculated</a></p>
                            <p><a href="#">Get Insights</a></p>
                            <p><a href="#">Learning Portals</a></p>
                            <p><a href="#">Forum</a></p>

                        </div>
                        <div className="col-md-4 col-sm-12">
                        <h5 style={{fontWeight:'bold'}}>Contact Us</h5>
                            <p style={{marginTop:'20px'}}><a href="#">Knowledge Center</a></p>
                            <p> <a href="#">Contact</a></p>
                            <p><a href="#">Terms</a></p>
                            <p><a href="#">Private policy</a></p>
                            <p><a href="#">Mail</a></p>
                            
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
