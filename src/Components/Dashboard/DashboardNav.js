import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch , faBell} from '@fortawesome/free-solid-svg-icons';
export default class DashboardNav extends Component {
    render() {
        return (
        <React.Fragment>
            <nav id="dashboard_nav" className="dash_nav navbar-fixed-top navbar navbar-expand-lg  navbar-light ">
                    <span style={{fontSize:'20px', fontWeight:'bolder'}}  className="text-primary navbar-brand" to="">GetMatriculated.</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                 <div className="justify-content-end collapse navbar-collapse " id="navbarNavAltMarkup">
                
                        <div className="navbar-nav">
                            <span className="icon_d">
                            <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <span className="icon_d">
                            <FontAwesomeIcon icon={faBell} />
                            </span>
                            <span className="image">
                            <img className="dash_img img-fluid" src={require('../Home/download.jpg')}/><span className="name_">{this.props.name}</span>
                            </span>
                        </div>
                 </div>
            </nav>
            </React.Fragment>
        )
    }
}
