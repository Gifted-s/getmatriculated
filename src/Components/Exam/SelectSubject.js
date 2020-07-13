import React, { Component, useContext} from 'react'
import { ExamContextProvider } from './ExamContext';
import Preload from './Preload';
import Tour from '../Home/Tour';

export default class SelectSubject extends Component {
    constructor(props){
        super(props);
        this.state={
            isSubjectSelected:false,
            max:0,
            subject_selected:[]
        }
    }
    increment= (subject, setSubject)=>{
       
        if(this.state.max>1){
           alert('You can only select one topic');
           
           setSubject(this.state.subject_selected);
           this.setState({isSubjectSelected:true});
            return
        }
        this.setState({max:this.state.max+1});
        
        this.setState({subject_selected:[...this.state.subject_selected,subject ]})
    }
    
    render() {
        return (
            <React.Fragment>
               
                <ExamContextProvider.Consumer>
                    {
                        ({setSubject,selectedCourse, setIsExamSelected})=>{
                          
                            return(
                              
                                <div className="row exam">
                                <div className="col-12 align-item-center exam_back" >
                                {!this.state.isSubjectSelected?
                                  <React.Fragment>
                                     <h1 style={{fontWeight:'bolder'}}>PRACTICE EXAM QUESTIONS</h1>
            
                                     <div className="col-md-4 offset-md-4 my-4  col-sm-10">
                                         {/* <div   className="subjectSelect ">
                                           <span className="selecte"><h5 style={{display:'inline'}}>Select subject (max of 1)</h5>) </span> <span className='dropdown-toggle'></span> 
                                         </div>

                                         <div className="dropdown_body">
                                           <p>
                                           English
                                           <input value='English' onChange={()=>this.increment('English',setSubject)}  type='checkbox'/>
                                           </p> 
                                           <p>
                                           Mathematics
                                           <input onChange={()=>this.increment('Mathematics', setSubject)} type='checkbox'/>
                                           </p> 
                                           <p>
                                           Biology
                                           <input onChange={()=>this.increment('Biology', setSubject)} type='checkbox'/>
                                           </p> 
                                           <p>
                                           Chemistry
                                           <input onChange={()=>this.increment('Chemistry', setSubject)} type='checkbox'/>
                                           </p> 
                                           <p>
                                           Physics
                                           <input onChange={()=>this.increment('Physics', setSubject)} type='checkbox'/>
                                           </p> 
                                           <p>
                                           Commerce
                                           <input onChange={()=>this.increment('Commerce', setSubject)} type='checkbox'/>
                                           </p> 
                                           <p>
                                           Government
                                           <input onChange={()=>this.increment('Government', setSubject)} type='checkbox'/>
                                           </p> 
                                           <p>
                                           Geography
                                           <input onChange={()=>this.increment('Geography', setSubject)} type='checkbox'/>
                                           </p> 

                                        
                                         </div> */}
                                         {/* <div onClick={()=>{
                                             if(this.state.max>1){
                                                 return alert('You can only take a subject at a time')
                                             }
                                             setSubject(this.state.subject_selected);
                                             this.setState({isSubjectSelected:true});
                                         }} className="btn d-block my-2 btn-primary">
                                             Proceed
                                         </div> */}
                                    


                                        <select  onChange={(e)=>{
                                         setSubject(e.target.value);
                                         this.setState({isSubjectSelected:true})
                                     }}  style={{color:'rgb(0,0,0,0.6)' , border:'none'}} id="disabledSelect" className="custome form-control">
                                        
                                            


                                        
                                        <option  value='English' style={{display:'none'}}>Select Subject</option> 
                                        <option  value='English'> Use Of English</option>
                                        <option  value='Mathematics'>Mathematics</option> 
                                        <option  value='Chemistry'>Chemistry</option> 
                                        <option  value='CRS'>CRS</option> 
                                        <option  value='Biology'>Biology</option> 
                                        <option  value='Economics'>Economics</option> 
                                        <option  value='Financial accounting'>Financial accounting</option> 
                                        <option  value='Geography'>Geography</option> 
                                        <option  value='Literature in English'>Literature in English</option> 
                                        <option  value='Physics'>Physics</option> 
                                        <option  value='Commerce'>Commerce</option> 
                                        <option  value='Agricultural Science'>Agricultural Science</option>
                                        <option  value='PGovernment'>Government</option> 
                                        <option  value='Music'>Music</option> 
                                        <option  value='French'>French</option>
                                        <option  value='Igbo'>Igbo</option>
                                        <option  value='Art'>Art</option> 
                                        <option  value='Yoruba'>Yoruba</option>  
                                        
                 
                                      
                                    </select>
                                     
                                     </div>
                                     </React.Fragment>
                                
                                
                                :
                                <Preload subject={selectedCourse} setExam={setIsExamSelected}/>}
                                
                               
                                </div>
                              
                             </div>
                           
                            )
                         
                        }
                    }
                 
                 </ExamContextProvider.Consumer>
            </React.Fragment>
        )
    }
}
