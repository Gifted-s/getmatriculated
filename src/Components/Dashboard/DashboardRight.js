import React, { Component} from 'react';
import Result from './Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom'
import { UserContext } from '../Globacontext/GlobalContext';


class DashboardRight extends Component {
    // constructor(props){
    //     super(props);
    // }
      static contextType= UserContext;
      validate= async (amount)=>{
        if(amount===200 || amount>200){
            document.getElementById('navigator').style.display='block';
            document.getElementById('footer').style.display='block';
            document.getElementById('navbarNavAltMarkup').style.marginTop='-40px'
        this.props.history.push('/exam');
        return
        }
        else{
         alert('Please fund your wallet to take mock exam ');
         this.props.open()
        }
    }
    render() {
        const {amount}= this.context;
       
        return (
            <React.Fragment>
                <div className="col-12">

                 <div style={{backgroundColor:`${amount>=200?'transparent': 'white'}`}} className="dashboard_cover"></div> 
                <FontAwesomeIcon  onClick={()=>this.props.open()} className='menu__' icon={faEllipsisV}/>
                    <div className="dash_head">
                   
                    <h6 style={{fontWeight:'bold'}} className="text-primary">
                    <span className="image">
                     <img style={{borderRadius:'0'}} className="dash_img img-fluid" src={require('../Home/download.jpg')}/>
                    </span> 
                        Mock Exam</h6>
                    </div>
                     
                     <div className="take row justify-content-center">
                      <span style={{zIndex:2}} onClick={()=>this.validate(amount)} className="btn_test btn btn-primary"> TAKE TEST</span>
                    </div>
                    
                  
                    <Result/>
                    

                </div>
            </React.Fragment>
        )
    }
}

export default  withRouter(DashboardRight)