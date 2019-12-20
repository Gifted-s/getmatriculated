import React, {useState} from 'react'

const Nav = () => {
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
    function practice(){
        setActive('practice')
    }
    function login (){
        setActive('login')
    }
    return (
        <React.Fragment>
        <nav className="navbar-fixed-top navbar navbar-expand-lg  navbar-light ">
            <a className="navbar-brand brand" href="#">GetMatricuated<span className="dot prim">.</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="justify-content-end collapse navbar-collapse " id="navbarNavAltMarkup">
                
                <div className="navbar-nav">
                <a onClick={()=>home()} className={active=="home"?"nav-item nav-link active":"nav-item nav-link"} href="#">HOME</a>
                <a onClick={()=>about()} className={active=="about"?"nav-item nav-link active":"nav-item nav-link"} href="#">ABOUT US</a>
                <a onClick={()=>news()} className={active=="news"?"nav-item nav-link active":"nav-item nav-link"}href="#">NEWS</a>
                <a onClick={()=>practice()} className={active=="practice"?"nav-item nav-link active":"nav-item nav-link"} href="#">PRACTICE NOW</a>
                <a onClick={()=>login()} className={active=="login"?"nav-item nav-link active":"nav-item nav-link"} href="#">LOGIN</a>
                </div>
            </div>
     </nav>
        </React.Fragment>
        
    )
}

export default Nav
