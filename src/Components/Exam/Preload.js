import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
export default class Preload extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
           <React.Fragment>
               <div className="row pre">
                   <div style={{backgroundColor:'white',borderRadius:'7px', padding:'50px'}} className="inner_ mx-auto   col-md-8  col-sm-10">
                     <h4 className="text-primary text-center">Welcome To</h4>
                     <h4 className="text-primary text-center">{this.props.subject} UTME Practice Class.</h4>
                     <p style={{fontSize:'17px', lineHeight:'1.8em'}} className="my-4 text-center text-secondary">
                         In Preparation for the upcoming UTME examination.<br/>
                         We have decided to help students come out with excellent results.
                     </p>
                     <p style={{fontSize:'17px', lineHeight:'1.8em'}} className="my-4 text-center text-secondary">
                     We therefore are giving everyone<br/>
                     the opportunity to practice questions based on different topics<br/>
                     that will be updated frequently.

                     </p>
                     <p style={{fontSize:'17px', lineHeight:'1.8em'}} className="my-4 text-center text-secondary">
                     Do make sure you check here for latest updates.
                     </p>
                     <p style={{fontSize:'17px',fontWeight:'bold', color:'rgba(0,0,0,0.8)', lineHeight:'1.5em'}} className="my-4 text-center ">
                     Number of questions : 10<br/>
                     Duration :10 minutes
                     <br/>
                     <div onClick={()=>this.props.setExam(true)} style={{padding:'3px 26px',marginTop:'20px', fontSize:'13px' ,color:'rgb(39, 113, 223)'}} className=" btn btn-primary bg-transparent">
                           <span style={{position:"relative", top:'-2px'}}>PROCEED</span>
                      
                       <FontAwesomeIcon style={{
                           color:"rgb(39, 113, 223)", width:"19px", height:"19px",
                           display:'inline',
                           marginLeft:'13px',
                           
                           marginTop:'5px',
                          
                           }} icon={faChevronCircleRight} />   
                   </div>
                     </p>
                    
                     
                    

                   </div>
               </div>
           </React.Fragment>
        )
    }
}
