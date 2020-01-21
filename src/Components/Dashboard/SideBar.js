import React, { Component } from 'react'
import Account from './Account';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons'

export default class SideBar extends Component {
    constructor(){
        super();
        this.state={
         showSidebar:false
        }
    }
    
    render() {
        
        return (
           <React.Fragment>
               {
                   this.props.showStatus&&
                   <div id="sidebar" className='sidebar'>
             
                
                  <FontAwesomeIcon onClick={()=>this.props.close()} className="close_" style={{width:'20px', height:'20px',color:'rgba(0,0,0,0.4)' ,marginTop:'-10px'}} icon={faWindowClose}/>
                 
                  <div className="user">
                      <h5 style={{fontWeight:'bold'}} className="text-secondary">
                      {this.props.name}
                      </h5>
                      <div className="user_details">
                      <p  className="text-secondary">
                      {this.props.email}
                  
                      </p>
                      </div>
                      
                      <span>
                    <img  className="side_img img-fluid" src={require('../Home/download.jpg')}/>
                 </span>
                
                  </div>
                  <Account/>
                  
              </div>
               }
              
           </React.Fragment>
        )
    }
}
