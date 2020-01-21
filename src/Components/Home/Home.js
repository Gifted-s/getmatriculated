import React, { Component, Suspense} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll'
import { faAddressBook, faSortAlphaDown, faFlask ,faCalculator, faArrowRight, faAtom, faDna, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav';
import {Spinner} from 'reactstrap';
import Tour from './Tour';
import Contact from './Contact';
import Footer from './Footer';

const HomeBack = React.lazy(()=> import('./HomeBack'))
const Education = React.lazy(()=> import('./Education'))
export default class Home extends Component {
  render() {
  
    return (
        <React.Fragment>
               {/* <div className="container-fluid">
               <Nav/>
               </div> */}
               <React.Suspense fallback={<div style={{justifyContent:'center'}}> <Spinner/></div>} >
                  <HomeBack/>
                </React.Suspense>
               
                  <div className="container">
                  
                     <Education/>
                 
                   
                  
                          
                          <div className="row">
                            <div className="col-sm-12 col-md-12 my-4 grass">
                            <ScrollAnimation animateIn='fadeIn'><h5>Click to take weekly practice Exam</h5></ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn'><h4>ARE YOU PREPARED FOR EXAM DAY? PUT YOUR KNOWLEDGE TO TEST</h4></ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn'><span className="btn btn-right btn-light">Join Us</span></ScrollAnimation>
                            </div>
                            
                            
                          
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-12 my-1 feat ">
                            <ScrollAnimation animateIn='fadeIn'><h5 className="feature" style={{fontWeight:'bold'}}>FEATURED SUBJECTS</h5></ScrollAnimation>
                          
                            <ScrollAnimation animateIn='fadeIn'><p>Here are different subjects available to you. You can take any test at your displosal</p></ScrollAnimation>
                          
                        
                            </div>
                            
                            
                          
                          </div>
                          
                          <ScrollAnimation animateIn='fadeIn'>
                            <div className="row">
                          
                         <div className="col-sm-10 col-md-4">
                            <div style={{alignItems:'center' ,padding:"60px 3px 10px 3px"}} className="card text-center">
                                <FontAwesomeIcon style={{width:"70px" , height:"70px" , color:"rgb(39, 113, 223)"}} icon={faSortAlphaDown} />
                                  <div className="card-body">
                                    <h5 style={{fontWeight:'bolder' , fontSize:'20px' , opacity:'0.8'}} className="card-title">ENGLISH LANGUAGE</h5>
                                    <p style={{ fontSize:'15px' , fontWeight:'normal' ,opacity:'0.7'}} className="card-text">English Language,English Language,English Language,English Language,English Language,English Language'</p>
                                    <FontAwesomeIcon style={{width:"25px",padding:'3px' ,fontWeight:'lighter' ,borderRadius:'50%',border:"2px solid rgb(39, 113, 223)" ,height:"25px" , color:"rgb(39, 113, 223)"}} icon={faArrowRight} />
                                  </div>
                                  
                                </div>
                            </div>

                            <div className="col-sm-10 col-md-4">
                            <div style={{alignItems:'center', padding:"60px 3px 10px 3px"}} className="card text-center">
                                <FontAwesomeIcon style={{width:"70px" , height:"70px" , color:"rgb(39, 113, 223)"}} icon={faCalculator} />
                                  <div className="card-body">
                                    <h5 style={{fontWeight:'bolder' , fontSize:'20px' , opacity:'0.8'}} className="card-title">MATHEMATICS</h5>
                                    <p style={{ fontSize:'15px' , fontWeight:'normal' ,opacity:'0.7'}} className="card-text">English Language,English Language,English Language,English Language,English Language,English Language'</p>
                                    <FontAwesomeIcon style={{width:"25px",padding:'3px' ,fontWeight:'lighter' ,borderRadius:'50%',border:"2px solid rgb(39, 113, 223)" ,height:"25px" , color:"rgb(39, 113, 223)"}} icon={faArrowRight} />
                                  </div>
                                  
                                </div>
                            </div>


                            <div className="col-sm-10 col-md-4">
                            <div style={{alignItems:'center', padding:"60px 3px 10px 3px"}} className="card text-center">
                                <FontAwesomeIcon style={{width:"70px" , height:"70px" , color:"rgb(39, 113, 223)"}} icon={faFlask} />
                                  <div className="card-body">
                                    <h5 style={{fontWeight:'bolder' , fontSize:'20px' , opacity:'0.8'}} className="card-title">CHEMISTRY</h5>
                                    <p style={{ fontSize:'15px' , fontWeight:'normal' ,opacity:'0.7'}} className="card-text">English Language,English Language,English Language,English Language,English Language,English Language'</p>
                                    <FontAwesomeIcon style={{width:"25px",padding:'3px' ,fontWeight:'lighter' ,borderRadius:'50%',border:"2px solid rgb(39, 113, 223)" ,height:"25px" , color:"rgb(39, 113, 223)"}} icon={faArrowRight} />
                                  </div>
                                  
                                </div>
                            </div>

                       
                            
                          </div>
                          </ScrollAnimation>


                          <div className="row">
                         
                         <div className="col-sm-10 col-md-4">
                            <div style={{alignItems:'center', padding:"60px 3px 10px 3px"}} className="card text-center">
                                <FontAwesomeIcon style={{width:"70px" , height:"70px" , color:"rgb(39, 113, 223)"}} icon={faAtom} />
                                  <div className="card-body">
                                    <h5 style={{fontWeight:'bolder' , fontSize:'20px' , opacity:'0.8'}} className="card-title">PHYSICS</h5>
                                    <p style={{ fontSize:'15px' , fontWeight:'normal' ,opacity:'0.7'}} className="card-text">English Language,English Language,English Language,English Language,English Language,English Language'</p>
                                    <FontAwesomeIcon style={{width:"25px",padding:'3px' ,fontWeight:'lighter' ,borderRadius:'50%',border:"2px solid rgb(39, 113, 223)" ,height:"25px" , color:"rgb(39, 113, 223)"}} icon={faArrowRight} />
                                  </div>
                                  
                                </div>
                            </div>

                            <div className="col-sm-10 col-md-4">
                            <div style={{alignItems:'center', padding:"60px 3px 10px 3px"}} className="card text-center">
                                <FontAwesomeIcon style={{width:"70px" , height:"70px" , color:"rgb(39, 113, 223)"}} icon={faDna} />
                                  <div className="card-body">
                                    <h5 style={{fontWeight:'bolder' , fontSize:'20px' , opacity:'0.8'}} className="card-title">BIOLOGY</h5>
                                    <p style={{ fontSize:'15px' , fontWeight:'normal' ,opacity:'0.7'}} className="card-text">English Language,English Language,English Language,English Language,English Language,English Language'</p>
                                    <FontAwesomeIcon style={{width:"25px",padding:'3px' ,fontWeight:'lighter' ,borderRadius:'50%',border:"2px solid rgb(39, 113, 223)" ,height:"25px" , color:"rgb(39, 113, 223)"}} icon={faArrowRight} />
                                  </div>
                                  
                                </div>
                            </div>


                            <div className="col-sm-10 col-md-4">
                              <div style={{alignItems:'center', padding:"60px 3px 10px 3px"}} className="card text-center">
                                  <FontAwesomeIcon style={{width:"70px" , height:"70px" , color:"rgb(39, 113, 223)"}} icon={faDollarSign} />
                                  <div className="card-body">
                                    <h5 style={{fontWeight:'bolder' , fontSize:'20px' , opacity:'0.8'}} className="card-title">COMMERCE</h5>
                                    <p style={{ fontSize:'15px' , fontWeight:'normal' ,opacity:'0.7'}} className="card-text">English Language,English Language,English Language,English Language,English Language,English Language'</p>
                                    <FontAwesomeIcon style={{width:"25px",padding:'3px' ,fontWeight:'lighter' ,borderRadius:'50%',border:"2px solid rgb(39, 113, 223)" ,height:"25px" , color:"rgb(39, 113, 223)"}} icon={faArrowRight} />
                                  </div>
                                  
                                </div>
                            </div>


                            
                          </div>

                          <div className="row">
                            <div style={{fontWeight:'bold', padding:"10px"}} className="col-md-12 col-sm-12 btn btn-bblue">
                              View More
                            </div>
                          </div>
                          <Tour/>
                          <Contact/>
                  </div>
               {/* <Footer/> */}
        </React.Fragment>
    )
  }
}
