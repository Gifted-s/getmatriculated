import React, { Component } from 'react'

export default class Cool extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-10">
                    <img className="img-- img-fluid" src={require('../../Images/laptop2.png')} alt='getmatriculTED'/>
                    </div>
                    <div className="col-md-6 col-sm-10">


                    <h2 className="font-weight-bold mt-4 text-secondary">
                          Other cool features
                      </h2>
                      <p className="my-3 text-secondary">
                          <span className="font-weight-bold">
                          Practice one or more subjects at once 
                          </span>
                          - you can practice all four subjects at a time
                      </p>

                      <p className="my-3 text-secondary">
                          <span className="font-weight-bold">
                           Built-in Calculator
                          </span>
                          - use the built in calculator to crunch numbers without leaving the exam interface 
                      </p>

                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                             Rich Result Analysis
                          </span>
                          - get detailed analysis on how you perform on any exam
                      </p>

                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                            Bookmarks
                          </span>
                          - bookmark any question that you wish to view later
                      </p>

                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                           Decide Everything
                          </span>
                          - easily change the number of questions, exam year, exam time, exam mode and username
                      </p>

                     
                      
                    </div>
                </div>
            </div>
        )
    }
}
