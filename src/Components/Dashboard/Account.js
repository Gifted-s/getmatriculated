import React, { Component } from 'react'
import Modal from './Modal'
import {UserContext} from '../Globacontext/GlobalContext'
export default class Account extends Component {
    static contextType = UserContext
    render() {
        
        const {exposeSetAmount, amount}= this.context;
        const {closeUp}= this.props
        return (
            <React.Fragment>
               
                    <div className="account">
                        <p style={{marginBottom:'0px'}} className="font-size-small text-primary">
                            Wallet Account
                        </p>
                        <div className="account-details">
                           <p style={{fontSize:'12px'}} className="text-primary text-center font-size-smaller">
                               Wallet Balance
                           </p>
                           <h2 className="text-primary text-center">
                               {amount}
                           </h2>
                        </div>


                        <Modal  setAmount={exposeSetAmount} type="SHARE FUNDS"/>
                        <span className="ml-3">
                        <Modal   setAmount={exposeSetAmount}   type="FUND WALLET"/>
                        </span>
                      
                    </div>
               
            </React.Fragment>
        )
    }
}
