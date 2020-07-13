import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Pricing from './Pricing'
class Buy extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginTop:'80px'}}>
                    <div className="col-md-12 col-sm-10">
                            <div className="jumbotron bg-transparent" style={{paddingTop:'20px'}}>
                            <h1 className="text-primary pay">Pay With Card or Bank Account<br/>(Automated)</h1>
                            
                            <p className="pro">You will be required to provide your <b>
                            Product Key,
                            mobile number and email address.</b> You will find your Product Key after installing
                            the application. After a successful payment, an <b>
                            Activation Key</b>  will be automatically
                            sent to your mobile number and email address. Please check your spam box in case you
                             could not find it in your inbox.
                            </p>
                            {/* <Link className="btn pl-4 pr-4 btn-primary mt-2 " href="#" role="button">PROCEED</Link> */}
                            </div>
                    </div>
                    {/* <div className="col-md-6 col-sm-10">
                   
                            <div className="jumbotron bg-transparent" style={{paddingTop:'20px'}}>
                            <h1 className="text-primary pay">Sales Outlets</h1>
                            <img height="14em" width='100%' src={require('../Home/download.jpg')} className="img-fluid" alt="..."></img>
                            <p className="pro">You can buy our products in CDs via any of our over 200 sales<br/> outlet accross country</p>
                            <Link className="btn pl-4 pr-4 btn-primary mt-2 " href="#" role="button">PROCEED</Link>
                            </div>
                    
                    </div> */}
                </div>
                <h4 className="text-primary font-weight-bold pt-3">
                    Pay To Bank | Bank Transfer
                </h4>
                <hr style={{backgroundColor:'rgba(0,0,0,0.2)', height:'1px'}} class=" my-2"></hr>

                <div className="row">
                  <div className="col-md-6 col-sm-10">
                  <h5 className="my-2 font-weight-bold text-primary" >
                       GT Bank
                   </h5>
                   <p className="text-secondary my-2">
                     Account Name: Odeleke Fiyinfolu
                   </p>
                   <p className="text-secondary my-2">
                   Account Number: 0264540732
                   </p>
                   <p className="text-secondary my-2">
                       Account Type : Savings
                   </p>

                   <p className="text-secondary mt-4 mb-2">
                   If you are buying less than 10 activation keys, after payment, after payment,<br/> Send Text Message Containing  
                   </p>
                   <p className="text-secondary mt-3 mb-2 ml-3">
                      1. Product Name
                   </p>
                   <p className="text-secondary mt-3 mb-2 ml-3">
                      2. Product Key
                   </p>
                   <p className="text-secondary mt-3 mb-2 ml-3">
                      3. Amount Paid
                   </p>
                   <p className="text-secondary mt-3 mb-2 ml-3">
                      4. Bank Name (GTBank or UBA)
                   </p>
                   <p className="text-secondary mt-3 mb-2 ml-3">
                      5. Depositors Name or Payment Details
                   </p>

                   <p className="text-secondary mt-4 mb-2">
                     To:
                   </p>
                   <p className="text-secondary mt-4 mb-2">
                      09070930560, 07064196590
                   </p>
                  </div>

                  <div className="col-md-6 col-sm-10">
                  <h5 className="my-2 font-weight-bold text-primary" >
                        UBA
                   </h5>
                   <p className="text-secondary my-2">
                     Account Name: Odeleke Fiyinfolu 
                   </p>
                   <p className="text-secondary my-2">
                     Account Number: 2085729766
                   </p>
                   <p className="text-secondary my-2">
                     Account Type: Savings
                   </p>
           
                   </div>

                   <p style={{borderTop:'1px solid rgba(0,0,0,0.2)', lineHeight:'1.6em',padding:'10px' ,borderBottom:'1px solid rgba(0,0,0,0.2)',borderRight:'1px solid rgba(0,0,0,0.2)',width:'100%'}} className="pro my-4">
                   If you are on Whatsapp, send it to 09070930560. we respond faster on Whatsapp.
                    For those buying 10 or lesser activation keys, Kindly contact us on Whatsapp(09070930560) or call our customer agents after
                    payment.
                   </p>
                </div>

                <h4 className="text-primary font-weight-bold pt-3">
                    Pricing
                </h4>
                <hr style={{backgroundColor:'rgba(0,0,0,0.1)', height:'1px'}} class=" my-3"></hr>
                <div className="row my-4">
                    <Pricing  name="GetMatriculated UTME" to="/utmeapp" price="₦1500"/> 
                    <Pricing name="GetMatriculated SSCE" price="₦1500"/>
                    <Pricing name="MathSolver" price="₦500"/>
                    <Pricing name="EnglishKit" price="₦500"/>
                    <Pricing name="GetMatriculated Unilag Foundation" price="₦1500"/>
                    <Pricing name="GetMatriculated Post UTME" price="₦1500"/>
                    <Pricing name="GetMatriculated BECE" price="₦1500"/>
                    <Pricing name="TestCenter" price="₦2000"/>
                    <Pricing name="GetMatriculated National Common Entrance" price="₦1500"/>
                    <Pricing name="GetMatriculated CowbellPedia" price="₦1500"/>
                </div>
            </div>
        )
    }
}
export default withRouter(Buy)