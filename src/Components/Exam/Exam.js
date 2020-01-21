import React, { Component } from 'react'
import ExamBack from './ExamBack'
import ExamContext from './ExamContext';
export default class Exam extends Component {
    

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
}
