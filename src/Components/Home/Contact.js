import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
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
                    
                      <div  className='l offset-md-1 offset-sm-0 col-sm-12 col-md-4'>
                         <h3>CONTACT US</h3>
                         <h5 className="text-primary">
                         We want to hear from you!
                         </h5>
                         <p className=" dd">We delight in offering you the best services and attending to your various enquires. We are here to serve you! </p>
                         <p className="text_">Click the button below we are eager to get back to you<br/>
                            
                         </p>
                         <Link to="/contact" className="m-4 btn btn-primary">
                             Reach US
                         </Link>
                        
                    
                      </div>
                       <div   className='r  col-sm-12 col-md-5'>
                       <h3>TOP STORIES</h3>
                       
                                    
                       {/* <div className="fb-post" data-href="https://web.facebook.com/getmatriculated/posts/102196661322638"  data-show-text="true"><blockquote cite="https://developers.facebook.com/getmatriculated/posts/102196661322638" className="fb-xfbml-parse-ignore">Posted by <a href="https://www.facebook.com/getmatriculated/">GetMatriculated</a> on&nbsp;<a href="https://developers.facebook.com/getmatriculated/posts/102196661322638">Saturday, January 11, 2020</a></blockquote></div> */}


                                    <div className="fb-post"  data-href="https://web.facebook.com/getmatriculated/posts/102196661322638"  data-show-text="true">
                           <blockquote cite="https://developers.facebook.com/getmatriculated/posts/102196661322638"
                            class="fb-xfbml-parse-ignore">
                            <p>The Joint Admissions and Matriculation Board (JAMB) 
                                has announced that it would commence the sales of its
                                 registration...</p>Posted by
                                 <a href="https://www.facebook.com/jambonline/">
                                Joint Admission and Matriculation Board</a> 
                                on&nbsp;<a href="https://developers.facebook.com/jambonline/posts/2774564762587314">
                                    Thursday, January 9, 2020</a></blockquote></div>
                      </div>

                      
                </div>
            </React.Fragment>
        )
    }
}
