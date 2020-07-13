import React, { PureComponent } from 'react'
import {GoogleLogin} from 'react-google-login'
import FormLeft from './FormLeft'
import FormRight from './FormRight'
import Tour from '../Home/Tour'

export default class Login extends PureComponent {
    render() {
        return (
        <React.Fragment>
          <div className="container-fluid">
             <div className='form row'>
             <FormLeft/>
             <FormRight/>
             
             </div>
            
          </div>

          <div className="one__ container">
          <div className="w row">
               <div className=" col-md-12 my-4  col-sm-12">
                 <Tour/>
               </div>
             </div>
          </div>
        </React.Fragment>
        )
    }
}





// <div style={{marginTop:'200px', marginLeft:'560px'}} >
//         <GoogleLogin
//         clientId="getmatriculated.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={()=>console.log('successfully registerd')}
//         onFailure={()=>console.log('failed to login')}
//         cookiePolicy={'single_host_origin'}
//   />
//             </div>