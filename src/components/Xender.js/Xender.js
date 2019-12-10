import React from 'react'
import PropTypes from 'prop-types'
import Xender_Nav from './Xender_Nav';
import {Spinner} from 'reactstrap'
import Select from './Select';
import Xender_progress_bar from './Xender_progress_bar';
import axios from 'axios';
import { FileContext } from './Xender_context';

// const SelectFile=()=>{
//     <input type="fi"></input>
// }

class Xender  extends React.Component{
    constructor(props){
        super(props);
     this.state={
         files:[],
         file_uploaded:false,
         send:false,
         setDefault:false,
         setPage:true,
         percent:0,
         length:0
     }
    }
    componentDidMount(){

    }
    checkFileType=(string)=>{
       const index= string.lastIndexOf(".")
       const fileType=string.slice(index+1, string.length);
       switch(fileType){
           case 'mp3' :
               return '/uploads/music.png';
           case 'mp4' :
               return '/uploads/video.png';
            case 'avi' :
            return '/uploads/video.png';   
            case 'mkv' :
               return '/uploads/video.png';
            case 'webm' :
            return '/uploads/video.png';   
            case 'pdf'  :
              return '/uploads/pdf.png'  ;
            case 'docx' || 'doc'  :
                return '/uploads/word.png';
            case 'exe'   :
               return '/uploads/setup.png' ;
            case 'html'   :
                    return '/uploads/html.png' ;
            case 'jpg' || 'png'  :
            return '/uploads/image.png' ;

             default :
                return null   
       }
    }
    handleChange=(e)=>{
     const file=e.target.files[0];
     this.setState((prev)=>{
             return {length:prev.length+1}
     })
     this.setState((state) => {
        return {files: [...state.files ,file]};
      });
      
     this.setState({file_uploaded:true});
     
    }
    handleSubmit=async (e)=>{
        e.preventDefault();
        this.setState({setDefault:true});
        this.setState({send:true});
        const formData= new FormData();
        const files= this.state.files
        for(var file of files){
            formData.append("files" , file)
        }
        const res=await axios.post('http://192.168.43.164:4000/upload',formData ,{
            headers:{"Content-Type": "mutipart/form-data"},
            onUploadProgress:uploadProgress=>{
                const loading= parseInt(Math.round((uploadProgress.loaded *100))/
                (uploadProgress.total)
                )
             this.setState({percent:loading})
            //  const percentage_per_file= 100/this.state.files.length;
        
            
            //  console.log(parseInt(Math.round(progressEvent.loaded)))
            if(loading===100){
                
               setTimeout(()=>{
                     this.setState({files:[]})
                     this.setState({percent:0})
                     this.setState({setDefault:false});
                     this.setState({send:false});
                },
                10000
                )
                
            }
        }
        })
       
        const result = res.data;
        try{
          console.log(result)
        }
        catch(err){

        }
    }
    handleCancel=()=>{
        this.setState({setDefault:false});
        this.setState({send:false});
        this.setState({file:[]})
    }
    SendFile=(props)=>{
         return(
             <div>
            <Xender_Nav length={this.state.length} isSend={this.state.send}/>
                
            {this.state.send? <Xender_progress_bar percent= {this.state.percent}/> :null}
            <div className="container ">
           
                <Select onClick={props.loadFile} />
                {
                    this.state.percent===100?<div className="alert alert-info alert-dismissible fade show " role="alert">
                    All files sent successfully check history to view report
                    <button className="close" type="button" data-dismiss ="alert" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                :null
                }
            
            <div className="row select_file">
                
                <div className="m-auto">
                {
                !this.state.setDefault?
                <button  onClick={()=>this.fileInput.click()} >
                <span >
                <svg className="icon__" xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 20 24">
                                                    <path stroke="none" fillRule="nonzero" d="M10.865.36l3.334 3.275c1.342 1.347-.67 3.367-2.013 2.02l-.013-.013c-.413-.42-.75-.282-.75.31V16.43a1.43 1.43 0 0 1-1.432 1.426h.017a1.427 1.427 0 0 1-1.432-1.426V5.953c0-.596-.336-.732-.75-.31l-.014.013C6.47 7.002 4.457 4.982 5.8 3.636L9.09.365A1.267 1.267 0 0 1 10.864.36zM2.929 6.5a1.428 1.428 0 0 1 2.02 2.02 7.142 7.142 0 1 0 10.1 0A1.428 1.428 0 0 1 17.07 6.5c3.905 3.905 3.905 10.236 0 14.141-3.905 3.905-10.236 3.905-14.141 0-3.905-3.905-3.905-10.236 0-14.141z">
                                                    </path>
                                                </svg>
                </span>
               <span className="select_btn">Select file to send</span> 
                </button>
                
                :<div><button onClick={this.handleCancel}>Cancel Operation</button></div>
            }
         
            </div>
           
           
            </div>
          
        <div className="container sent">
        <p className=" header">Selected files {this.state.files.length} </p>
            <form onSubmit={this.handleSubmit}>
            <div className="custom-file mb-12">

            <input onChange={this.handleChange} ref={fileInput=>this.fileInput= fileInput} style={{display:"none"}} type="file" className="custom-file-input mt-5" id="customFile"/>
            {/* <label className="custom-file-label" htmlFor="customFile"></label>
            */}
           
            <input  ref={submit=> this.submit = submit} style={{display:"none"}} type="submit" className="btn btn-primary btn-block mt-4" id="validationTooltip05" value="Upload File" 
            />
         </div>

            </form>
        <div className="files">
            {   
                this.state.file_uploaded?
                this.state.files.map((file)=>{
                    return(
                <div key={file.name} className="alert alert-success outline-success bg-transparent">
                    <span><span className="file_container">
                    {
                       <img className="avatar" src={ this.checkFileType(file.name)}/>
                    }
                    {file.name}  {file.fileType}
                    
                    
                    </span> 
                    {this.state.send && this.state.percent!==100 ? <span style={{position:"relative"}} className=" bg-transparent  sending">
                       Sending <Spinner size="sm"/></span>:null}</span>
                    {/* <span className="badge bg-success size" >
                    { file.size/1000000}Mb </span> */}
                </div>
                    )
                }).reverse()
                :
                <div onClick={()=>this.fileInput.click()} className="alert-dark alert">
                    Please select some files to send
                </div>
                
            }
          
       
      
        </div>
      
   
        </div>
        {this.state.file_uploaded &&this.state.send===false?
        <input type="submit" onClick={()=>this.submit.click()} className="btn btn-primary btn-block mt-4" id="validationTooltip05" value="Send Files" 
        />
        :null
        }
        </div>
        </div>
         )
    }


History=()=>{
    return(
        <div>
            <p style={{textAlign:'center'}}>Sent on Friday October 15, 2019</p>
             <div className="files">
            {
                this.state.files.map((file)=>{
                    return(
                <div key={file.name} className="alert alert-success outline-success bg-transparent">
                    <span><span className="file_container">{file.name}  {file.fileType}</span> </span>
                    <span className="badge bg-success" style={{marginLeft:"180", color:"white", padding:'10'}}>{file.size/1000}Kb </span>
                </div>
                    )
                })
            }
              
              </div>
            

        </div>
    )
}









    render(){
        return (
            <div>
                <FileContext.Consumer>{({loadFile})=>{
                    return(
                        <this.SendFile loadFile={loadFile()}/>
                    )
                }}
               
                </FileContext.Consumer>
               
                
            </div>
             
        )
    }
   
}

Xender.propTypes = {

}

export default Xender
