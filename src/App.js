
import React , {Component} from 'react';
import FileUpload from './components/FileUpload';
import Xender from './components/Xender.js/Xender';
import Xender_Nav from './components/Xender.js/Xender_Nav';
import Xender_progress_bar from './components/Xender.js/Xender_progress_bar';
import Select from './components/Xender.js/Select';
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
