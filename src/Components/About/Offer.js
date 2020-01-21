import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
const Offer = () => {
    return (
       <React.Fragment>
           <div className="row offer">
               <div className="col-12 justify-content-center">
               <ScrollAnimation animateIn='fadeIn'>
               <p className="head text-center ">
                JOIN THE MATRICULATED STUDENT FOR THIS YEAR
            </p>
            </ScrollAnimation>
      
            <ScrollAnimation animateIn='fadeIn'>
            <h3 className=" text-center  ">What We Offer</h3>
            </ScrollAnimation>
            <span className="line mx-auto"></span>
            <ScrollAnimation animateIn='fadeIn'>
           <p className="choice text-center ">
           
           We provide you with the best solution to questions and keep you
            informed on information regarding<br/> the institution of your choice<br/>
            We are here to get you matriculated<br/>
           
            
     
       
             <p style={{marginTop:'70px',padding:'1px 16px',fontSize:'13px' ,color:'rgb(39, 113, 223)'}} className="align-self-center btn btn-primary bg-transparent">
                            <span style={{position:"relative", top:'-5px'}}>READ MORE</span>
                       
                        <FontAwesomeIcon style={{
                            color:"rgb(39, 113, 223)", width:"23px", height:"23px",
                            display:'inline',
                            marginLeft:'13px',
                            
                            marginTop:'5px',
                           
                            }} icon={faArrowCircleRight} />
                       </p>
               
                       </p>
                       </ScrollAnimation>
           

          
           
        

            </div>
            
           </div>

       </React.Fragment>
    )
}

export default Offer
