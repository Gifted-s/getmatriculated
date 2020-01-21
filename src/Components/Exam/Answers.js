import React from 'react'
import {Link} from 'react-router-dom';
const Answers = (props) => {
    return (
       <React.Fragment>
           <div className="row">
               <div style={{backgroundColor:'white',boxShadow:'0 0 8px 0 rgba(0,0,0,0.2)', borderRadius:'10px', marginTop:'120px'}} className="col-md-8 col-sm-10 mx-auto">
                   <div className="list-group ">
                       <h4 className="text-center my-3 text-primary">Answers</h4>
                     { 
                     props.answer.map((answer, index)=>{
                         return(
                            <div key={index} className="list-item my-3">

                            ({index+1}).  {answer.answer}
                            <p style={{paddingLeft:'30px'}}>
                               Explanation : {answer.explanation}
                            </p>
                             </div>
                         )
                       
                     })
                     }
                      
                   </div>
                   <Link to="/">
                   <div className="btn my-4 btn-primary d-block">
                       Go back to home
                   </div>
                   </Link>
                 
               </div>
           </div>
       </React.Fragment>
    )
}

export default Answers
