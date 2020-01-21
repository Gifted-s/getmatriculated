import React, { Component } from 'react'
import SelectSubject from './SelectSubject';
import Testpage from './Testpage';
import { ExamContextProvider } from './ExamContext';
import Preload from './Preload';



export default class ExamBack extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            options:[]
        }
    }
    async componentDidMount(){
        await fetch('https://get-matriculated.herokuapp.com/api/question/get-question?subject=chemistry')
        .then((res)=>{
            return res.json()
        })  
        .then(resJSON=>{
           
            this.setState({data:resJSON.questions})
            const arr=[]
            for(const i in resJSON.questions){
                arr.push(i)
            }
            this.setState({options:arr})
        })
       }

    render() {
        return (
     <React.Fragment>   
         <ExamContextProvider.Consumer>
             {({isExamSelected})=>{
                return(

                  !isExamSelected?
                  <SelectSubject/>:
                   <Testpage questions={this.state.data} options={this.state.options}/>
                )
             }}
           
         </ExamContextProvider.Consumer>
        
       
    </React.Fragment>
        )
    }
}
