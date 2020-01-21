import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const FormLeft = () => {
    return (
       <React.Fragment>
       <div className="form-left col-md-4 col-sm-0">
           
       <ScrollAnimation animateIn='fadeIn'><h5 className="text-center my-3">Welcome to </h5></ScrollAnimation>
       <ScrollAnimation animateIn='bounceInLeft'><h3 className="text-center">GetMatriculated</h3></ScrollAnimation>
       <ScrollAnimation animateIn='fadeIn'><p className="text-center">The project admin board</p></ScrollAnimation>
       <ScrollAnimation animateIn='fadeIn'><p style={{marginTop:'-14px'}} className="text-center">Login to access your account</p></ScrollAnimation>


       </div>
       </React.Fragment>
    )
}
export default FormLeft