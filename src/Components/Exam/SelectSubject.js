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
       
        if(this.state.max===4){
           alert('maximum number of subject is selected the first four subjects will be selected');
           
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
                                     <h1>PRACTICE EXAM QUESTIONS</h1>
            
                                     <div className="col-md-4 offset-md-4 my-4  col-sm-10">
                                         <div   className="subjectSelect ">
                                           <span className="selecte"><h5 style={{display:'inline'}}>Select subjects (max of 4)</h5>) </span> <span className='dropdown-toggle'></span> 
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

                                        
                                         </div>
                                         <div onClick={()=>{
                                             if(this.state.max!==4){
                                                 return alert('please select four subject')
                                             }
                                             setSubject(this.state.subject_selected);
                                             this.setState({isSubjectSelected:true});
                                         }} className="btn d-block my-2 btn-primary">
                                             Proceed
                                         </div>
                                     {/* <select onChange={(e)=>{
                                         setSubject(e.target.value);
                                         this.setState({isSubjectSelected:true})
                                     }}  style={{color:'rgb(0,0,0,0.6)' , border:'none'}}   className="custom-select">
                                        
                                        <option  value='English'>English</option> 
                                        <option  value='Mathematics'>Mathematics</option> 
                                        <option  value='Biology'>Biology</option> 
                                        <option  value='Chemistry'>Chemistry</option> 
                                        <option  value='Physics'>Physics</option> 
                                        <option  value='Commerce'>Commerce</option> 
                                        <option  value='Government'>Government</option> 
                                        <option  value='Geography'>Geography</option> 
                 
                                      
                                    </select> */}
                                     
                                     </div>
                                     </React.Fragment>
                                
                                
                                :
                                <Preload subject={selectedCourse} setExam={setIsExamSelected}/>}
                                
                               
                                </div>
                                <div className="my-3 container">
                             <div className="www row">
                                 <div  className=" col-md-12 col-sm-12 offset-md-0">
                                 <Tour/>
                                 </div>
                             </div>
      
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
