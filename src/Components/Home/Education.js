import React, { Component } from 'react'
import schools from '../../schools/News';
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
export default class Education extends Component {
    constructor(props){
        super(props);
        this.state={
            news:[]
        }
    }
    componentDidMount(){
        this.setState({
            news:schools
        })
        console.log("found")
    }
    render() {
        return (
           <React.Fragment>
               
               <div className='row edu'>
                   <div className="col-sm-10 col-md-4 ">
                      <h3>ABOUT US</h3>
                     <div className="card" style={{width: '17rem' }}>
                        <img style={{height:'15em'}} src={require('../../Images/edu1.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-title">
                            Join the matriculating students
                            </p>
                            <p className="card-text">
                            We are here to help you be among the successful candidates that would gain admission into the tertiary institution of your choice.

                            </p>
                        </div>
                        </div>

                        {/* <div className="btn btn-primary bg-transparent read">
                            READ MORE
                        </div><span className="arrow"> > </span> */}
                   </div>


                       
              
                   <div className="col-sm-10 col-md-4 beta ">
                      <h3>STUDENT LIFE</h3>
                     <div className="card" style={{width: '17rem' }}>
                        <img style={{height:'15em'}} src={require('../../Images/edu2.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-title">
                            What we offer


                            </p>
                            <p className="card-text">
                            With our infallible services, Every student gets the proper preparation needed for achieving excellence in upcoming examination.
                            </p>
                        </div>
                        </div>

                        {/* <div className="btn btn-primary bg-transparent read">
                            READ MORE
                        </div><span className="arrow"> > </span> */}
                   </div>

                   <div className="news col-sm-10 col-md-4">
                     <h3 className="bblue latest">LATEST NEWS</h3>
                     <h3>UTME</h3>
                     {this.state.news.map((school)=>{
                         return(
                            <div key={school.name} className="media my-4">
                            {/* <img src={`${school.image}`} style={{height:"40px" , width:"40px"}} className="align-self-center mr-3" alt="..."/> */}
                            <div class="media-body">
                                {/* <h5 class="mt-0">{school.name} POST UTME</h5> */}
                         <h5>{school.news}</h5>
                         
                                <div className="btn btn-primary mt-2">
                               <a style={{color:'white', textDecoration:'none'}} href={school.link}>Read More</a> 
                                
                                </div>
                            </div>
    
                           
                            </div>
                         )
                          
                     })
                     }
                     {/* <div style={{marginTop:'20px'}} className="btn btn-primary bg-transparent read">
                            READ MORE
                        </div>
                        <FontAwesomeIcon style={{
                            color:"rgb(39, 113, 223)", width:"34px", height:"34px" ,padding:'6px',
                            marginTop:'23px',
                            position:'absolute',
                            marginLeft:'-20px',
                            zIndex:1
                            }} icon={faArrowCircleRight} /> */}
                   </div>
               </div>
              
           </React.Fragment>
        )
    }
}
