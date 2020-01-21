import React, { Component } from 'react'
import EachExam from './EachExam'

export default class Result extends Component {
    render() {
        return (
            <React.Fragment>
                 <div  className="result">
                        <div className=" result__ row">
                            
                        <h5 className="text-primary position-absolute font-weight-bold">Results</h5>
                           <EachExam/>
                           <EachExam/>
                           <EachExam/>
                           
                           
                        </div>
                    </div>

            </React.Fragment>
        
        )
    }
}
