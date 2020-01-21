import React, {useState, createContext} from 'react'
export  const ExamContextProvider= createContext();
const ExamContext = (props) => {
   
    const [isExamSelected , setIsExamSelected ]=useState(false);
    const [selectedCourses, setCourses]=useState([]);
    const setSubject=(selectedSubjects)=>{
        setCourses(selectedSubjects);
       
    }
    return (
        
            <ExamContextProvider.Provider value={{ setSubject,setIsExamSelected, isExamSelected, selectedCourses}}>
             {props.children} 
            </ExamContextProvider.Provider>
      
    )
}

export default ExamContext
