import React , {createContext , useState} from 'react'
export const FileContext= createContext();
const Xender_context = (props) => {

const [files ,setFiles]    =useState([]) 
const loadFile=(files)=>{
 console.log('found context')
 }
    return (
        <div>
            <FileContext.Provider value={{files , loadFile}}>
                {props.children}
            </FileContext.Provider>
        </div>
    )
}

export default Xender_context
