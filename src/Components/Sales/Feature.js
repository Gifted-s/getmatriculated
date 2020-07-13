import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
export default class Feature extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-6 col-sm-10">
                    <ScrollAnimation animateIn="bounceInLeft">
                      <h2 className="font-weight-bold mt-4 text-secondary">
                          Amazing Features Of 2020 Version
                      </h2>
                      <p className="my-3 text-secondary">
                          <span className="font-weight-bold">
                              Contains 17,000+ Questions offline
                          </span>
                          - practice authentic UTME past and model Questions from 24 subjects with detailed explanations.
                      </p>

                      <p className="my-3 text-secondary">
                          <span className="font-weight-bold">
                           Summary of 16 JAMB prescribed literature textbooks
                          </span>
                          - study Literature textbooks and practice over 1000 likely questions 
                      </p>

                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                             Dictionary
                          </span>
                          - get definition of over 92,000 words offline
                      </p>

                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                            School Finder
                          </span>
                          - using school finder is by far the easiest way to know JAMB requirement for any course in Nigeria
                      </p>


                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                           Voice (Text-To-Speech)
                          </span>
                          - you can listen to questions and explanation in an interesting way.
                      </p>
                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                          Offline Chatbot
                          </span>
                          - Chat with Clara to find the answers to most requests using our custom built Chatbot technology 
                          with amazing artificial inteligence
                      </p>

                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                         Educational Games 
                          </span>
                        - have fun while learning with our facinating games
                      </p>
                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                         Does Not Expire
                          </span>
                        - continues to function as long as your device stays alive!
                      </p>
                      <p className="my-2 text-secondary">
                          <span className="font-weight-bold">
                       No Subscription Fee
                          </span>
                        - once activated, forever activated for all subjects
                      </p>
                      </ScrollAnimation>
                    </div>
                   
                   
                    <div className="col-md-6 col-sm-10">
                        <ScrollAnimation animateIn="bounceInRight">
                        <img className="img___ img-fluid" src={require('../../Images/laptop1.png')} alt='getmatriculTED'/>
                        </ScrollAnimation>
                    </div>
                    
                </div>
            </div>
        )
    }
}
