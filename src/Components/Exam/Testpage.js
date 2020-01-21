import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExamContextProvider } from './ExamContext';

import { faChevronCircleRight, faChevronCircleLeft, faStop} from '@fortawesome/free-solid-svg-icons';
import Answers from './Answers';


export default class Testpage extends Component {
    constructor(props){
        super(props);
     
        this.state={
            questions:this.props.questions  
        ,
            current:1,
            index:0,
            finish:false,
            userOptions:this.props.options,
            displayModal:false,
            seconds:0,
            minute:10,
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false

        }
    }
   setOption= async ()=>{
    if( this.state.userOptions[this.state.index]==='A') {
        
                this.setState((prevState)=>{
                 return {checked1:true}
       });
     }
    else if( this.state.userOptions[this.state.index]==='B') {
       return this.setState({checked2:true});
     }
     else if( this.state.userOptions[this.state.index]==='C') {
        return this.setState({checked3:true});
      }
      else if( this.state.userOptions[this.state.index]==='D') {
        return this.setState({checked4:true});
      }
   }

 
    render() {
       
      const {userOptions}= this.state
        return (
            <React.Fragment>
                {
                 !this.state.finish?
             <ExamContextProvider.Consumer>
                    {
                        
                        ({selectedCourses})=>{
                           
                           return(

                 <div className='container'>
                      
                     
                     {this.state.showModal &&
                      <div style={{backgroundColor:'white', height:'50vh', marginTop:'120px'}}  className=" col-md-8 col-sm-10 mx-auto">
                      <h3 className="text-center text-secondary">Are your sure?</h3>
                      <div style={{marginLeft:'210px'}} className='finish_cont my-4'>
                      <button onClick={()=>{
                          console.log(this.state.userOptions)
                          this.setState({finish:true})
                          }} className="finish_ btn btn-primary">
                      Yes, I want to submit    
                      </button>

                      <button onClick={()=>{
                      document.getElementById('q_c').style.display='block';
                      document.getElementById('q_ci').style.display='block';
                      document.getElementById('q_cis').style.display='inline-block';
                       this.setState({showModal:false})}
                       
                       } className="finish__ btn btn-danger">
                      Cancel 
                      </button>
                      </div>
              
                     </div>
                     }
                    
                    <div id='q_c' className="test row">
                    
                    {selectedCourses.map((subject)=>{
                                   return(
                                       
                                    <h5 key={subject} className="btn text-primary btn-primary bg-transparent ">
                                    {subject}
                                     </h5>
                                   )
                                  
                               })}
                        <div className=" bg-primary text-top col-md-12 col-sm-12">
                              
                               
                                <span className="li_">
                                <ul >
                                
                                <li>
                                  <span className="time">Time:</span>  
                                  10:00 Min
                                </li>
                                <li>
                                <span className="time_left">Time Left:</span>  
                            {this.state.minute} Min: {this.state.seconds}s
                                </li>
 
                             </ul>
                                </span>
                            
                        </div>
                    </div>
                    <div id="q_ci" className="row question_container">
                    <div className=" q_ col-md-12 col-sm-12">
                        <h6 className="question-header font-weight-bold" style={{marginTop:'-23px'}}>QUESTION ({this.state.index+1})</h6>
                        <div className="q_inner col-md-12 col-sm-12">
                            <p style={{fontWeight:'bold',fontStyle:'italic',fontSize:'16px',paddingBottom:'15px', paddingTop:'15px', color:'rgba(0,0,0,0.5)'}}>Read the Question carefully before you choose you answer</p>
                             <p style={{fontWeight:'bold',fontSize:'16px', color:'rgba(0,0,0,0.6)'}}>
                                {this.state.questions[this.state.index].q}
                             </p>
                            
                            
                             <p className="option" style={{fontWeight:'bold',fontSize:'16px', color:'rgba(0,0,0,0.5)'}}>
                            
                             <input className='option' onClick={()=>{
                                 const options= userOptions
                                 options.splice(this.state.index,1,'A');
                                 
                                 this.setState({userOptions:options})
                                 this.setState({checked1:true})
                                 this.setState({checked2:false})
                                 this.setState({checked3:false})
                                 this.setState({checked4:false})}} checked={this.state.checked1}  type="radio" value="A" /><span style={{position:'absolute'}}>(A)</span>
                             <span className="ques"   style={{position:'absolute', left:'114px'}}>{this.state.questions[this.state.index].options.A}</span>
                             
                             </p>

                             <p className="option" style={{fontWeight:'bold',fontSize:'16px', color:'rgba(0,0,0,0.5)'}}>

                             <input onClick={()=>{
                                  const options= userOptions
                                  options.splice(this.state.index,1,'B')
                                  this.setState({userOptions:options})
                                 this.setState({checked2:true})
                                 this.setState({checked1:false})
                                
                                 this.setState({checked3:false})
                                 this.setState({checked4:false})
                            
                            }} checked={this.state.checked2} className='option' type="radio" value="B" /><span style={{position:'absolute'}}>(B)</span>
                             <span className="ques"  style={{position:'absolute', left:'114px'}}>{this.state.questions[this.state.index].options.B}</span>
                             
                             </p>

                             <p className="option" style={{fontWeight:'bold',fontSize:'16px', color:'rgba(0,0,0,0.5)'}}>

                             <input onClick={()=>{
                                  const options= userOptions
                                  options.splice(this.state.index,1,'C')
                                  this.setState({userOptions:options})
                            this.setState({checked3:true})
                            this.setState({checked1:false})
                            this.setState({checked2:false})
                           
                            this.setState({checked4:false})
                            }} checked={this.state.checked3} className='option'  type="radio" value="C" /><span style={{position:'absolute'}}>(C)</span>
                             <span className="ques"  style={{position:'absolute', left:'114px'}}>{this.state.questions[this.state.index].options.C} </span>
                
                             </p>

                             <p  className="option" style={{fontWeight:'bold',fontSize:'16px', color:'rgba(0,0,0,0.5)'}}>

                             <input onClick={()=>{
                                  const options= userOptions
                                  options.splice(this.state.index,1,'D')
                                  this.setState({userOptions:options})
                                 this.setState({checked4:true})
                                 this.setState({checked1:false})
                                 this.setState({checked2:false})
                                 this.setState({checked3:false})
                                 
                            }} checked={this.state.checked4} className='option' type="radio" value="D" name="option"/><span style={{position:'absolute'}}>(D)</span>
                             <span className="ques" style={{position:'absolute', left:'114px'}}>{this.state.questions[this.state.index].options.D}</span>

                             </p>

                            
                            

                             


                        </div>
                 <div id="q_cis" className="q_selector col-md-12 col-sm-12">
                  
                     <div onClick={()=>{
                         this.setState({current:this.state.current === 1?1:this.state.current-1})
                         if(this.state.current=== 1){
                            this.setState({index:0})
                        }
                         this.setState((prevState)=>{
                         return {index:prevState.index ===0 ? 0: prevState.index-1}
                     })}} style={{marginTop:'13px',padding:'3px 26px',fontSize:'13px' ,color:'rgb(39, 113, 223)'}} className=" btn btn-primary bg-transparent">
                           <span style={{position:"relative", top:'-2px'}}>PREVIOUS</span>
                      
                       <FontAwesomeIcon style={{
                           color:"rgb(39, 113, 223)", width:"19px", height:"19px",
                           display:'inline',
                           marginLeft:'13px',
                           
                           marginTop:'5px',
                          
                           }} icon={faChevronCircleLeft} />   
                   </div>


                   <div onClick={()=>{
                       this.setOption().then(()=>{
                        this.setState({current:this.state.current!== this.state.questions.length?this.state.current+1:1})
                        this.setState((prevState)=>{
                            return {index:prevState.index === this.state.questions.length-1 ? 0: prevState.index+1}
                        })
                        if( this.state.userOptions[this.state.index]==='A') {
                           
                                    this.setState((prevState)=>{
                                     return {checked1:true}
                           });
                         }
                         else{
                            this.setState({checked1:false})
                         }
                        
                         if( this.state.userOptions[this.state.index]==='B') {
                           
                            this.setState((prevState)=>{
                             return {checked2:true}
                   });
                 }
                        else{
                            this.setState({checked2:false})
                        }
                        if( this.state.userOptions[this.state.index]==='C') {
                                
                            this.setState((prevState)=>{
                            return {checked3:true}
                            });
                            }
                            else{
                                this.setState({checked3:false})
                            }
                            if( this.state.userOptions[this.state.index]==='D') {
                                
                                this.setState((prevState)=>{
                                return {checked4:true}
                        });
                    }
                            else{
                                this.setState({checked4:false})
                            }
                            })
                                // if(this.state.current=== this.state.questions.length){
                                //     this.setState({index:0})
                                // }
                            
                                
                         }} style={{marginTop:'12px',padding:'3px 26px',fontSize:'13px' ,color:'rgb(39, 113, 223)'}} className=" btn btn-primary bg-transparent">
                           <span style={{position:"relative", top:'-4px'}}>NEXT</span>
                      
                       <FontAwesomeIcon style={{
                           color:"rgb(39, 113, 223)", width:"19px", height:"19px",
                           display:'inline',
                           marginLeft:'13px',
                           
                           marginTop:'5px',
                          
                           }} icon={faChevronCircleRight} />   
                   </div>


                   <div onClick={()=>{
                      document.getElementById('q_c').style.display='none';
                      document.getElementById('q_ci').style.display='none';
                      document.getElementById('q_cis').style.display='none';
                       this.setState({showModal:true})}
                       
                       } style={{marginTop:'12px',padding:'3px 26px',fontSize:'13px', float:'right' ,color:'rgb(39, 113, 223)'}} className="submit_ btn btn-primary bg-transparent">
                           <span style={{position:"relative", top:'-2px'}}>SUBMIT</span>
                      
                       <FontAwesomeIcon style={{
                           color:"rgb(39, 113, 223)", width:"19px", height:"19px",
                           display:'inline',
                           marginLeft:'13px',
                           
                           marginTop:'5px',
                          
                           }} icon={faStop} />   
                   </div>
                   </div>
                    </div>
                    </div>

                    <div className="row">
                        <div className="number__ col-md-12 col-sm-12">
                            {
                                this.state.questions.map((question, index)=>{
                                  return(
                                    <div key={index} onClick={()=>{
                                       
                                        this.setState({current:index+1})
                                        this.setState({index})
                                        this.setOption().then(()=>{
                                            if( this.state.userOptions[this.state.index]==='A') {
                           
                                                this.setState((prevState)=>{
                                                 return {checked1:true}
                                       });
                                     }
                                     else{
                                        this.setState({checked1:false})
                                     }
                                    
                                     if( this.state.userOptions[this.state.index]==='B') {
                                       
                                        this.setState((prevState)=>{
                                         return {checked2:true}
                               });
                             }
                                    else{
                                        this.setState({checked2:false})
                                    }
                                    if( this.state.userOptions[this.state.index]==='C') {
                                            
                                        this.setState((prevState)=>{
                                        return {checked3:true}
                                        });
                                        }
                                        else{
                                            this.setState({checked3:false})
                                        }
                                        if( this.state.userOptions[this.state.index]==='D') {
                                            
                                            this.setState((prevState)=>{
                                            return {checked4:true}
                                    });
                                }
                                        else{
                                            this.setState({checked4:false})
                                        }
                                    
                                        })
                                    }} className= {(this.state.current===index+1?`light  btn btn-primary p-1`:`light btn btn-light p-1` )}>
                                        {index+1}
                                    </div>
                                  )
                                })
                            }
                            
                            
                           
                        </div>
                    </div>

                </div>
                           )
                        }
                    }
                </ExamContextProvider.Consumer>
                :
                <Answers answer={this.state.questions}/>
                }
                
            </React.Fragment>
        )
    }
    componentDidMount(){
        
        this.makeTime= setInterval(()=>{
         this.setState((prevState)=>{
                return {seconds: prevState.seconds===0?59:prevState.seconds-1}
         })
         if(this.state.seconds===59){
            this.setState((prevState)=>{
                return {minute: prevState.minute-1}
            })
          
         }
         if(this.state.minute<0){
             this.setState({minute:1})
             this.setState({finish:true})
             alert('Time Up, Click OK to View result');
         }
        },
        1000)
    }
    componentWillUnmount(){
        clearInterval(this.makeTime)
    }
}
