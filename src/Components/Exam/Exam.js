import React, { Component } from 'react'
import ExamBack from './ExamBack'
import ExamContext from './ExamContext';
export default class Exam extends Component {
    
    componentDidMount(){
        document.getElementById('footer').style.display='none';
    }

    render() {
        return (
            <ExamContext>
            <React.Fragment>
           
            <div className="container-fluid">
                  <ExamBack/>

              </div>
            
            </React.Fragment>
            </ExamContext>
        )
    }
    componentWillUnmount(){
        document.getElementById('footer').style.display='block';
    }
}


