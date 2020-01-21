import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserAlt, faLock,faMailBulk, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll'
import {withRouter} from 'react-router-dom'

const FormRight = (props) => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [name, setName]= useState('');
    const [error, setError]= useState('none');
    const [iserror, setIsError]= useState('none');
    const [phone, setPhone]= useState(null);
    const [login, setLogin]= useState(false);
    function submit (e){
      e.preventDefault();
     
      
      // localStorage.setItem('user',JSON.stringify({
      //   email,
      //   name
       
      // }) )
      if(!login){
        if(!email || !password || !name || !phone){
          setError('Please enter the required fields');
          setIsError('block');
          return
        } 
        
        fetch('https://get-matriculated.herokuapp.com/api/auth/signup',{
          method:'POST' ,
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name,
            email,
            password,
            phoneNumber:phone
          })
        })
        .then((res)=>{
              return res.json()
          })
          .then((resJON)=>{
              if(resJON){
                setLogin(true)
              }
          })
        
      }
      else{
        console.log('loged in')
        fetch('https://get-matriculated.herokuapp.com/api/auth/login',{
          method:'POST' ,
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
         
            email,
            password,
            
          })
        })
        .then((res)=>{
              return res.json()
          })
          .then((resJON)=>{
            if(resJON.error){
              setError('Authentication error please check details and try again')
              return setIsError('block');

            }
               if(resJON){
                 localStorage.setItem('userToken', JSON.stringify(resJON.token));
                
                 props.history.push('/dashboard')
               }
          })
      }
    
     
      
    }
    return (
      <React.Fragment>
                        

       <div className=" form-right col-md-8 col-sm-12">
        {
            !login?
            <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft'
            >
              <img className="form-logo img-fluid mx-auto" src={require('../Home/Getmatriculated.png')}/>
           <p className="my-1 text-primary">Welcome to</p>
           <h4 className="my-3 font-weight-bold text-primary">GetMatriculated.</h4>
            <h5 className="my-3" style={{color:'rgba(0,0,0,0.8)'}}>Register</h5>

        <div style={{display:iserror}} className="col-md-6 offset-md-3 col-sm-12 alert alert-danger">{error}</div>

            <span style={{marginTop:'-1px', width:'90px'}} className="line mx-auto"></span>
            <p style={{marginTop:'-27px'}}>To have access and take mock examination</p>
            <form method="POST" onSubmit={(e)=>submit(e)} className='form'>
            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
                <FontAwesomeIcon icon={faUserAlt} style={{ left:'20',bottom:'13px', position:'absolute',color:'rgba(0,0,0,0.5)'}}/>
                <input type='text' onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Fullname"/>
            </div>
            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
                <FontAwesomeIcon icon={faMailBulk} style={{ left:'20',bottom:'13px', position:'absolute',color:'rgba(0,0,0,0.5)'}}/>
                <input type='email' onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter email"/>
            </div>
            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
                <FontAwesomeIcon icon={faPhoneAlt} style={{ left:'20',bottom:'13px', position:'absolute',color:'rgba(0,0,0,0.5)'}}/>
                <input type='text' onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Enter phone number"/>
            </div>

            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
            <FontAwesomeIcon icon={faLock} style={{ left:'20',bottom:'13px', position:'absolute',color:'rgba(0,0,0,0.5)'}}/>
                <input type='password' onChange={(e)=>setPassword(e.target.value)} className="outline-transparent form-control" placeholder="Enter Password"/>
            </div>
            
            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
                <input type='submit' className="btn btn-primary" />
            </div>
            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
              Already have an account? <span onClick={()=>setLogin(!login)} style={{cursor:'pointer'}} className="text-primary">Sign in</span>
            </div>
            </form>
            </ScrollAnimation>
            :
            <ScrollAnimation animateIn='bounceInRight'>
           <p className="my-1 text-primary">Welcome to</p>
           <h4 className="my-3 font-weight-bold text-primary">GetMatriculated.</h4>
            <h5 className="my-3" style={{color:'rgba(0,0,0,0.8)'}}>Login to Account</h5>
            <div style={{display:iserror}} className="col-md-6 offset-md-3 col-sm-12 alert alert-danger">{error}</div>
            <span style={{marginTop:'-1px', width:'90px'}} className="line mx-auto"></span>
            <p style={{marginTop:'-27px'}}>To have access and take mock examination</p>
            <form method="POST" onSubmit={(e)=>submit(e)} className='form'>

            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
                <FontAwesomeIcon icon={faUserAlt} style={{ left:'20',bottom:'13px', position:'absolute',color:'rgba(0,0,0,0.5)'}}/>
                <input type='email' onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter email"/>
            </div>

            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
            <FontAwesomeIcon icon={faLock} style={{ left:'20',bottom:'13px', position:'absolute',color:'rgba(0,0,0,0.5)'}}/>
                <input type='password' onChange={(e)=>setPassword(e.target.value)} className="outline-transparent form-control" placeholder="Enter Password"/>
            </div>
            
            <div className=" col-md-6 offset-md-3 col-sm-12 form-group">
                <input type='submit' className="btn btn-primary" />
            </div>
            <div className="  col-md-6 offset-md-3 col-sm-12 form-group">
              Dont have an account? <span onClick={()=>setLogin(!login)} style={{cursor:'pointer'}} className="text-primary">Register Now</span>
            </div>
            </form>
            </ScrollAnimation>

        }
       
       </div>
    
      </React.Fragment>
    )
}

export default withRouter(FormRight)