import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle ,faPauseCircle, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'


export default class Tour extends Component {
    constructor(props){
        super(props);
        this.video= React.createRef();
        this.state={
            play:false
        }
    }
    play =()=>{
        this.video.current.play();
        this.setState((prev)=>{
            return {play:!prev.play}
        })
    }
    pause =()=>{
        this.video.current.pause();
        this.setState((prev)=>{
            return {play:!prev.play}
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="tour row">
                    <div className="v col-sm-12 col-md-6">
                        <div style={{display:`${this.state.play?'none':'block'}`}} className="cover"></div>
                      <video ref={this.video}  src={require('./video.mp4')}  type="video/mp4"/>
                      <div  className="icon_">
                          <FontAwesomeIcon onClick={this.play.bind(this)} className="icon__" style={{width:'120px', position:'absolute' ,display:`${this.state.play?'none':'block' }`, height:'120px' , zIndex:'2',color:'white', backgroundColor:'transparent'}} icon={faPlayCircle}/>
                          <FontAwesomeIcon onClick={this.pause.bind(this)} className="icon___" style={{width:'90px', position:'absolute',display:`${!this.state.play?'none':'block' }` , height:'90px' ,zIndex:'2',color:'rgba(0,0,0,0.5)', backgroundColor:'transparent'}} icon={faPauseCircle}/>
                                    
                      </div>
                    </div>
                    <div className="t col-sm-12 col-md-6">
                    <img  src={require('./download.jpg')} alt="jambImage is loading" className="img-fluid img_" alt="Responsive image"/>
                    {/* <h4>TAKE A TOUR</h4>
                    <p className="provide">We provide you with the best solutions to questions and<br/> keep you
                        informed on information regarding the<br/> institution of your choice</p>
                      
                      <p className="mat">We are here to get you matriculated</p>
                      <div style={{marginTop:'20px',padding:'5px 10px', color:'rgb(39, 113, 223)'}} className="btn btn-primary bg-transparent">
                            <span style={{position:"relative", top:'-3px'}}>READ MORE</span>
                       
                        <FontAwesomeIcon style={{
                            color:"rgb(39, 113, 223)", width:"23px", height:"23px",
                            display:'inline',
                            marginLeft:'13px',
                            
                            marginTop:'5px',
                           
                            }} icon={faArrowCircleRight} />
                       </div>
                       */}
                    </div>
                </div>
                {/* <div style={{marginTop:'60px'}} className="row tour">
                    <div className="col-md-8 col-sm-12 mx-auto">
                    <img  src='http://gidiclass.com.ng/wp-content/uploads/2019/01/jamb.png' alt="jambImage is loading" className="img-fluid img_" alt="Responsive image"/>
                    </div>
                    
                  
                </div> */}
            </React.Fragment>
        )
    }
}
