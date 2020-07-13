import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle ,faPauseCircle, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

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
                      <video ref={this.video}  src={require('./GetMatriculated.mp4')}  type="video/mp4"/>
                      <div  className="icon_">
                          <FontAwesomeIcon onClick={this.play.bind(this)} className="icon__" style={{width:'120px', position:'absolute' ,display:`${this.state.play?'none':'block' }`, height:'120px' , zIndex:'2',color:'white', backgroundColor:'transparent'}} icon={faPlayCircle}/>
                          <FontAwesomeIcon onClick={this.pause.bind(this)} className="icon___" style={{width:'90px', position:'absolute',display:`${!this.state.play?'none':'block' }` , height:'90px' ,zIndex:'2',color:'rgba(0,0,0,0.5)', backgroundColor:'transparent'}} icon={faPauseCircle}/>
                                    
                      </div>
                    </div>
                    <div style={{backgroundColor:'green', paddingTop:'47px'}} className="t  col-sm-12 col-md-6">
                    {/* <img  src={require('./download.jpg')} alt="jambImage is loading" className="img-fluid img_" alt="Responsive image"/> */}
                    <h2 className="font-weight-bold pl-4  text-light">FREE CBT SOFTWARE</h2>
                    <p className="provide pl-4 mt-4 text-light font-weight-bold">The best computer based test(CBT)<br/> Software is available to download<br/> for FREE</p>
                    <img className="salesimage" src='data:image/png;base64,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'
                    alt="loading..."
                    />
                      
                      <p className="mat text-light font-weight-bold pl-4 text-light">How do I get the software?</p>
                      <Link to='/utmeapp' style={{marginTop:'20px', marginLeft:'20px',padding:'5px 10px'}} className="btn btn-success bg-transparent">
                            <span className="text-light" style={{position:"relative", top:'-3px'}}>CLICK HERE</span>
                       
                        <FontAwesomeIcon style={{
                            color:"white", width:"23px", height:"23px",
                            display:'inline',
                            marginLeft:'13px',
                            
                            marginTop:'5px',
                           
                            }} icon={faArrowCircleRight} />
                       </Link>
                      
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
