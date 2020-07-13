import React, { Component } from 'react'
import Feature from './Feature'
import Cool from './Cool'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle ,faPauseCircle, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {Link}  from 'react-router-dom';
export default class Sales extends Component {
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
                <div className="sales_back container-fluid">
                    <h3 className="font-weight-bold text-light">
                        GetMatriculated UTME 2020
                    </h3>

                    <p className="text-light wwww">
                    GetMatriculated UTME is a Computer-based Testing and Learning Application that enables students sitting for Unified Tertiary Matriculation Examination (UTME) 
                    to challenge their preparedness. It is by far the best CBT Practice Software available in Nigeria.
                    </p>
                    <Link to="/buy" className="btn btn-iinfo">BUY PRODUCT</Link>
                    <span class="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        DOWNLOAD
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href='https://play.google.com/store/apps/details?id=com.iafsawii.getmatriculated.utme'>Download for Android</a>
                        <a className="dropdown-item" href="https://www.testdriller.com/items/gmutme20.zip">Download for Desktop</a>
                    </div>
                    </span>
                </div>
                <Feature/>
                <Cool/>

                <div className="vid_sales  container-fluid">
                    <h3 className="font-weight-bold text-light text-center">
                        Challenge your preparedness
                    </h3>
                    <p className="text-light text-center">
                        Practice 17+ Past Questions and Learn By Topics
                    </p>
                   <div className="row ">
                       <div className=" col-md-4 col-sm-3 btn-for-m offset-md-5">
                       
                    <span class="dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        DOWNLOAD
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        
                    <a className="dropdown-item" href='https://play.google.com/store/apps/details?id=com.iafsawii.getmatriculated.utme'>Download for Android</a>
                        <a className="dropdown-item" href="https://www.testdriller.com/items/gmutme20.zip">Download for Desktop</a>
                    </div>
                    </span>
                    <Link to="/buy" className="btn btn-sm btn-iinfo">Activate</Link>
                       </div>
                   </div>


                   <div className="tour row">
                    <div style={{boxShadow:'0 0 0 0 transparent'}} className="v col-sm-12 col-md-6 offset-md-3">
                        <div style={{display:`${this.state.play?'none':'block'}`}} className="cover"></div>
                      <video ref={this.video}  src={require('../Home/GetMatriculated.mp4')}  type="video/mp4"/>
                      <div  className="icon_">
                          <FontAwesomeIcon onClick={this.play.bind(this)} className="icon__ icc" style={{width:'120px', position:'absolute' ,display:`${this.state.play?'none':'block' }`, height:'120px' , zIndex:'2',color:'red', backgroundColor:'white'}} icon={faPlayCircle}/>
                          <FontAwesomeIcon onClick={this.pause.bind(this)} className="icon___" style={{width:'90px', position:'absolute',display:`${!this.state.play?'none':'block' }` , height:'90px' ,zIndex:'2',color:'rgba(0,0,0,0.5)', backgroundColor:'transparent'}} icon={faPauseCircle}/>
                                    
                      </div>
                    </div>
                    </div>
                   
                    
                </div>

            </React.Fragment>
        )
    }
}
