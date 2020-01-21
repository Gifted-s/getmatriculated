import React, { Component } from 'react'

export default class EachExam extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className='col-md-10 col-sm-12'>
                                <div style={{backgroundColor:'rgba(0,0,0,0.08)',borderRadius:'0' ,border:'none', marginTop:'70px'}} className=' row '>
                            <div className='col-md-3 col-sm-10'>
                                <div style={{marginTop:'-46px', marginLeft:'20px'}} className='sub text-center position-absolute font-weight-bold text-primary'>
                                    Use Of English
                                </div>
                             <div style={{fontSize:'16px'}} className='score__ text-primary text-center  font-weight-bold'> 80</div>
                             </div>
                             <div className='col-md-3 col-sm-10'>
                             <div style={{marginTop:'-46px', marginLeft:'20px'}} className='sub text-center position-absolute font-weight-bold text-primary'>
                                    Physics
                                </div>
                             <div style={{fontSize:'16px'}} className='score__  text-primary text-center  font-weight-bold'>30</div>
                             </div>
                             <div className='col-md-3 col-sm-10'>
                             <div style={{marginTop:'-46px', marginLeft:'20px'}} className='sub text-center position-absolute font-weight-bold text-primary'>
                                    Mathematics
                                </div>
                             <div style={{fontSize:'16px'}} className='score__  text-primary text-center  font-weight-bold' >89</div>
                             </div>
                             <div className='col-md-3 col-sm-10'>
                             <div style={{marginTop:'-46px', marginLeft:'20px'}} className='sub text-center position-absolute font-weight-bold text-primary'>
                                   Chemistry
                                </div>
                             <div style={{fontSize:'16px'}} className='score__ text-primary text-center  font-weight-bold'> 50</div>
                             </div>
                             </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                            <div style={{marginTop:'34px', marginLeft:'20px'}} className='sub text-center position-absolute font-weight-bold text-danger'>
                                  Total Score
                                </div>
                            <div  style={{backgroundColor:'rgba(0,0,0,0.08)',padding:'10px', border:'none',fontSize:'16px', marginTop:'70px'}}  className='text-danger text-center  font-weight-bold' >170</div>
                             
                             
                            </div>
                        
            </React.Fragment>
        )
    }
}
