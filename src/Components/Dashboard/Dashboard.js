import React, { Component } from 'react'
import DashboardNav from './DashboardNav'
import SideBar from './SideBar';

import DashboardRight from './DashboardRight';
import JwtDecode from 'jwt-decode';
 class Dashboard extends Component {
     constructor(){
         super();
         this.state={
             user:{},
             showSidebar:true,
             showFund:false,
             showShare:false
                
            }

     }
     componentDidMount(){
       const userTo= localStorage.getItem('userToken');
       const user= JwtDecode(JSON.parse(userTo))
      
       this.setState({user:user.data})
      
       document.getElementById('navigator').style.display="none";
       document.getElementById('footer').style.display="none";
     }
    render() {
       
        return (
          <React.Fragment>
              
              <DashboardNav name={this.state.user.name}/>

            <div className="container-fluid ">
                {/* <div className='row'> */}
                    {/* <div className="fund_form col-md-8 offset-md-3 col-sm-10"> */}
                             {/* hello */}
                    {/* </div>
                </div> */}

                <div style={{marginTop:'70px'}} className="row">
                    <div  className="dash_left">
                       
                        <SideBar showStatus={this.state.showSidebar} close={()=>this.setState({showSidebar:false})} email={this.state.user.email}  name={this.state.user.name}/>
                    </div>
                    <div  className="dash_right">
                        <DashboardRight open={()=>this.setState({showSidebar:true})}  />
                    </div>
                  
                </div>
              </div>
        
          </React.Fragment>
        )
    }
}

export default Dashboard
