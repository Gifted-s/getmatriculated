import React, { Component } from 'react'
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
                    
                      <div  className='l offset-md-2 offset-sm-0 col-sm-12 col-md-3'>
                         <h3>CONTACT US</h3>
                         <p className=" dd">Detailed information, brochures<br/> and forms can be mailed to you <br/> upon requests</p>
                         <p className="text_">We provide you with the best solution to questions and keep you informed
                             on information regarding the institution of your choice.<br/>
                             We are here to get you matriculated

                         </p>
                      </div>
                       <div  className='r  col-sm-12 col-md-4'>
                      <h3>FREQUENTLY ASKED QUESTIONS</h3>
                      {this.state.questions.map((question)=>{
                          return(
                            <div class="media" style={{padding:'10px'}}>
                            <img style={{width:"60px", height:'52px',borderRadius:"5px"}} src={question.image} alt="..."/>
                            <div class="media-body">
                               
                          <p style={{color:"rgb(39, 113, 223)", fontWeight: '700'}}>{question.text}</p>
                            </div>
                            </div>
                          )
                          
                      })}
                      <button style={{color:"rgb(39, 113, 223)", padding:"5px 10px" ,fontSize:"10px" ,fontWeight: '600'}} className="btn btn-primary bg-transparent ">VIEW ALL QUESTIONS</button> 
                      <button style={{color:"rgb(39, 113, 223)", padding:"5px 10px" ,fontSize:"10px" ,fontWeight: '600'}} className="btn btn-primary bg-transparent ml-2">ASK A QUESTION</button>
                      </div>
                    
                    
                  
                </div>
            </React.Fragment>
        )
    }
}
