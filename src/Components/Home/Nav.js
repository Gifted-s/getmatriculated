import React, {useState} from 'react'
import {withRouter, Link} from 'react-router-dom';

const Nav = (props) => {
    const [active, setActive]=useState("home");
    function home(){
        setActive("home")
    }
    function about(){
        setActive('about')
    }
    function news(){
        setActive('news')
    }
    function contact(){
        setActive('contact')
    }
    function practice(){
        setActive('practice')
    }
    function login (){
        setActive('login')
    }
    return (
        <React.Fragment>
        <nav  className="navbar-fixed-top navbar navbar-expand-lg  navbar-light " id="navigator">
            <Link  className="navbar-brand" to=""><img className="navbar-brand img-fluid" src={require('./Getmatriculated.png')}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="justify-content-end collapse navbar-collapse " id="navbarNavAltMarkup">
                
                <div className="navbar-nav">
                <a  href="/" onClick={()=>home()} className={active==="home"?"nav-item nav-link active":"nav-item nav-link"}>HOME</a>
                <Link onClick={()=>about()} className={active==="about"?" nav-item nav-link active":"nav-item nav-link"} to="/about">ABOUT US</Link>
                <Link to="/news" onClick={()=>news()} className={active==="news"?"nav-item nav-link active":"nav-item nav-link"}>NEWS</Link>
                <Link to="/contact" onClick={()=>contact()} className={active==="contact"?"nav-item nav-link active":"nav-item nav-link"}>CONTACT</Link>
                <Link to="/exam" onClick={()=>practice()} className={active==="practice"?"nav-item nav-link active":"nav-item nav-link"} >PRACTICE NOW</Link>
                <Link to="/login" onClick={()=>login()} className={active==="login"?"nav-item nav-link active":"nav-item nav-link"}><span className="mock">
                    MOCK
                    </span></Link>
                </div>
            </div>
     </nav>
        </React.Fragment>
        
    )
}

export default withRouter(Nav)
