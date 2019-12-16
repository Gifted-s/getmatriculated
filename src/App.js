
import React , {Component} from 'react';
import Xender from './components/Xender.js/Xender';

import Xender_context from './components/Xender.js/Xender_context';




class App extends Component {
  render(){
    return (
     <div>
 
 
      <div>
        
      {/* <Xender_progress_bar/> */}
    {/* <h4 className="display-4 mb-4 text-center">
      <i className="fab fa-react"></i> React File Upload
    </h4>
    <FileUpload/> */}
    <Xender_context>
    <Xender/>
    </Xender_context>
    
      </div>  
     </div> 
    
     
      
    );
  }
 
}

export default App;
