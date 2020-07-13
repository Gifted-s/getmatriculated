import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll'
import Offer from './Offer'
import Team from './Team'


export default class About extends Component {
    render() {
        return (
          
              <React.Fragment>
                  <div className="container about">
                <div className="tour row">
                    <div  className="v about_left col-sm-12 col-md-6">
                      
                      <img src={require('../../Images/about1.png')} className="img-fluid" alt="loading____"></img>
                    </div>
                    <div className=" about_right col-sm-12 col-md-6">
                    <h5>INTRODUCTION</h5>
                    <h3>About <span>GetMatriculated<span style={{color:'rgb(39, 113, 223) '}}>.</span></span></h3>
                      
                     
                          <ScrollAnimation animateIn='fadeIn'>
                          <p className="delight">
                          We delight in serving you the best materials you need to acheive a<br/> great standard
                          as far as academic excellence is concerned
                          </p>
                          </ScrollAnimation>
                   

                        <ScrollAnimation animateIn='fadeIn'>
                        <p className="about_text">
                      
                        We provide you with the best solution to questions<br/> and keep you
                        informed on information regarding<br/> the institution of your choice<br/>
                        We are here to get you matriculated
                        
                           
                        </p>
                        </ScrollAnimation>
                      
                      <div style={{marginTop:'60px',padding:'1px 16px',fontSize:'13px' ,color:'rgb(39, 113, 223)'}} className="btn btn-primary bg-transparent">
                            <span style={{position:"relative", top:'-5px'}}>READ MORE</span>
                       
                        <FontAwesomeIcon style={{
                            color:"rgb(39, 113, 223)", width:"23px", height:"23px",
                            display:'inline',
                            marginLeft:'13px',
                            
                            marginTop:'5px',
                           
                            }} icon={faArrowCircleRight} />
                       </div>
                      
                    </div>
                </div>
                </div>
                {/* <div style={{marginTop:'60px'}} className="row tour">
                    <div className="col-md-8 col-sm-12 mx-auto">
                    <img  src='http://gidiclass.com.ng/wp-content/uploads/2019/01/jamb.png' alt="jambImage is loading" className="img-fluid img_" alt="Responsive image"/>
                    </div>
                    
                  
                </div> */}
                <div className="container-fluid">
                    <Offer/>
                   
                </div>
                <Team/>
            </React.Fragment>
         
        )
    }
}
