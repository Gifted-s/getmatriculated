import React, { Component } from 'react'
import schools from '../../schools/News';
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
                     <div className="card" style={{width: '18rem' }}>
                        <img style={{height:'13em'}} src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-title">
                                Education, the passport to <br/> the future
                            </p>
                            <p className="card-text">
                              We delight in serving you the best material you need a acheive a great standard as far as academic execellence is concerned

                            </p>
                        </div>
                        </div>

                        <div className="btn btn-primary bg-transparent read">
                            READ MORE
                        </div><span className="arrow"> > </span>
                   </div>


                   <div className="col-sm-10 col-md-4">
                       <h3>STUDENT LIFE</h3>
                     <div className="card" style={{width: '18rem'}}>
                     <img style={{height:'13em'}} src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-title">
                                Education, the passport to <br/> the future
                            </p>
                            <p className="card-text">
                              We delight in serving you the best material you need a acheive a great standard as far as academic execellence is concerned

                            </p>
                        </div>
                        </div>
                        <div className="btn btn-primary bg-transparent read">
                            READ MORE
                        </div><span className="arrow"> > </span>
                   </div>

                   <div className="news col-sm-10 col-md-4">
                     <h3 className="bblue latest">LATEST NEWS</h3>
                     <h3>UPCOMING EVENTS</h3>
                     {this.state.news.map((school)=>{
                         return(
                            <div key={school.name} class="media">
                            <img src={`${school.image}`} style={{height:"40px" , width:"40px"}} className="align-self-center mr-3" alt="..."/>
                            <div class="media-body">
                                <h5 class="mt-0">{school.name} POST UTME</h5>
                         <p>{school.news}</p>
                                <div className="btn btn-primary ">
                                Learn More
                                
                                </div>
                            </div>
    
                           
                            </div>
                         )
                          
                     })
                     }
                     <div style={{marginTop:'20px'}} className="btn btn-primary bg-transparent read">
                            READ MORE
                        </div>
                        <FontAwesomeIcon style={{
                            color:"rgb(39, 113, 223)", width:"34px", height:"34px" ,padding:'6px',
                            marginTop:'23px',
                            position:'absolute',
                            marginLeft:'-20px',
                            zIndex:1
                            }} icon={faArrowCircleRight} />
                   </div>
               </div>
              
           </React.Fragment>
        )
    }
}
