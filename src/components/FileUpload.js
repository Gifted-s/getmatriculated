import React, {useState} from 'react'
import axios from 'axios';
import Message from './Message';
import Percentage from './Percentage';
// import Message from './Message'
 const FileUpload = () => {
     const[files, setFiles]= useState([]);
    const [file , setFile]= useState("");
    const [file_name , setfile_name]= useState(" ");
    const [uploadedFile , setuploadedFile]= useState({});
    const [Msg, setMessage]= useState("");
    const [percentage, setuploadpercentage]= useState(0);
    const Change= e=>{
        e.preventDefault();
        
        setFile(e.target.files[0])
        setfile_name(e.target.files[0].name);
        setFiles([...files, e.target.files[0]])
        
    }
    const onSubmitt=async (e)=>{
        console.log(files)
        e.preventDefault();
        const Form= new FormData();
        for(const _file of files){
            Form.append("file" , _file);
        }
      
        
        
        try{
            const res= await axios.post('http:///192.168.43.164:4000/upload', Form,{
                headers:{
                    "Content-Type" : 'multipart/form-data'
                },
                onUploadProgress:uploadProgress=>{
                    const loading= parseInt(Math.round((uploadProgress.loaded *100))/
                    (uploadProgress.total)
                    )
                 setuploadpercentage(loading)
                //  console.log(parseInt(Math.round(progressEvent.loaded)))
                if(loading===100){
                    setTimeout(()=>{
                        setuploadpercentage(0)
                        setuploadedFile("")
                    },
                    10000
                    )
                    
                }
                }
                
            })
            const {fileName , filePath}= res.data
            setuploadedFile({fileName, filePath});
            
        }
      
        catch(err){
          setMessage("Please Selet An Image")
            
        }
       

    }
    return (
        <div>
            
            {Msg ? <div>
                <Message msg={Msg}/>
                {/* <Message/> */}
            </div>:null}
            <form onSubmit={onSubmitt}>
             <div className="outline-success alert alert-success bg-transparent"  ></div> 
            <div className="custom-file mb-12">
            <input onChange={Change} type="file" className="custom-file-input mt-5" id="customFile"/>
            <label className="custom-file-label" htmlFor="customFile">{file_name}</label>
            
            <Percentage percentage={percentage}/>
           
            <input type="submit" className="btn btn-primary btn-block mt-4" id="validationTooltip05" value="Upload File" 
            />
         </div>
            </form>
            {uploadedFile ?<div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <h3 className="text-center">
                        {uploadedFile.fileName}
                    </h3>
                    <img style={{width:'100'}}  src={uploadedFile.filePath}/>
                </div>


            </div>: null}
        </div>
    )
}
export default FileUpload