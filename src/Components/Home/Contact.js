import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
 const questions=[
     {
         image:'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         text:'What is the department cut off mark for international relations and history this year in lasu pls need correct answer'
     },
     {
        image:'https://images.pexels.com/photos/1543895/pexels-photo-1543895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        text:'What is the department cut off mark for international relations and history this year in lasu pls need correct answer'
    },
    {
        image:'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        text:'What is the department cut off mark for international relations and history this year in lasu pls need correct answer'
    },
    {
        image:'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        text:'What is the department cut off mark for international relations and history this year in lasu pls need correct answer'
    },
    
 ]
export default class Contact extends Component {

constructor(props){
    super(props);
    this.state={
        questions:[]
    }
}
componentDidMount(){
    this.setState({
        questions
    })
}
    render() {
        return (
            <React.Fragment>
                <div style={{ marginTop:'60px'}} className="row tour">
                    
                      <div  className='l offset-md-3 offset-sm-0 col-sm-12 col-md-3'>
                         <h3>CONTACT US</h3>
                         <p className=" dd">Detailed information, brochures<br/> and forms can be mailed to you <br/> upon requests</p>
                         <p className="text_">We provide you with the best solution to questions and keep you informed
                             on information regarding the institution of your choice.<br/>
                             We are here to get you matriculated

                         </p>
                      </div>
                       <div  className='r  col-sm-12 col-md-3'>
                       <h3>TOP STORIES</h3>
                       <div className="fb-post" data-href="https://web.facebook.com/jambonline/posts/2774564762587314" data-width="500" data-show-text="true"><blockquote cite="https://developers.facebook.com/jambonline/posts/2774564762587314" class="fb-xfbml-parse-ignore"><p>The Joint Admissions and Matriculation Board (JAMB) has announced that it would commence the sales of its registration...</p>Posted by <a href="https://www.facebook.com/jambonline/">Joint Admission and Matriculation Board</a> on&nbsp;<a href="https://developers.facebook.com/jambonline/posts/2774564762587314">Thursday, January 9, 2020</a></blockquote></div>
                       {/* <div className="card" style={{}}>
                        <img src={require('./matric.jpg')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">October 1, 2019</h5>
                            <p className="card-text">Nigria independent day</p>
                            <p className="card-text" style={{marginTop:'-10px'}} >Nigria clockd 59</p>
                            <div style={{marginTop:'8px',padding:'1px 10px', color:'rgb(39, 113, 223)'}} className="btn btn-primary bg-transparent">
                            <span style={{position:"relative", top:'-3px'}}>READ MORE</span>
                       
                        <FontAwesomeIcon style={{
                            color:"rgb(39, 113, 223)", width:"23px", height:"23px",
                            display:'inline',
                            marginLeft:'13px',
                            
                            marginTop:'5px',
                           
                            }} icon={faArrowCircleRight} />
                       </div>
                        </div>
                        </div> */}
                      </div>
                </div>
            </React.Fragment>
        )
    }
}
