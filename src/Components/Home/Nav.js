import React, {useState} from 'react'
import {withRouter, Link} from 'react-router-dom';

const Nav = (props) => {
    const [active, setActive]=useState("home");
    function home(){
        setActive("home");
    }
    function about(){
        setActive('about');
    }
    function product(){
        setActive('product');
    }
    function buy(){
        setActive('buy');
    }
    function news(){
        setActive('news');
    }
    function contact(){
        setActive('contact');
    }
    function practice(){
        setActive('practice');
    }
    function login (){
        setActive('login');
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
                <Link to='/'  onClick={()=>home()} className={active==="home"?"nav-item nn nav-link active":" nnnav-item nav-link"}>
                    
                HOME</Link>
                <button className="a__ navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <Link className="n_" to='/'>
                   HOME
               </Link>
            </button>
            <span  onClick={()=>product()} className={active==="product"?" nav-item nn nav-link active":" nn nav-item nav-link"} to="#">
            <li class="nav-item dropdown">
        <span style={{marginTop:'-8px'}} class=" nn nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          PRODUCTS
        </span>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/utmeapp" style={{marginTop:'8px'}} class="dropdown-item" >GetMatriculated UTME</Link>
    {/* <a style={{marginTop:'8px'}} className="dropdown-item" href="/sales">GetMatriculated SSCE</a>
    <a style={{marginTop:'8px'}} className="dropdown-item" href="#">MathSolver</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">EnglishKit</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">GetMatriculated Unilag Foundation</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">GetMatriculated Post UTME</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">GetMatriculated BECE</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">TestCenter</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">GetMatriculated National<br/> Common Entrance Examination</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">GetMatriculated CowbelPedia</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">GetMatriculated CBT Kit</a>
    <a style={{marginTop:'8px'}} class="dropdown-item" href="#">Active</a> */}
        </div>
      </li>
                </span>
              <button className=" a__ navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <div className="dropdown n_">
  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    PRODUCTS
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item" to="/utmeapp">GetMatriculated UTME</Link>
    {/* <a className="dropdown-item" href="/sales">GetMatriculated SSCE</a>
    <a className="dropdown-item" href="#">MathSolver</a>
    <a class="dropdown-item" href="#">EnglishKit</a>
    <a class="dropdown-item" href="#">GetMatriculated Unilag Foundation</a>
    <a class="dropdown-item" href="#">GetMatriculated Post UTME</a>
    <a class="dropdown-item" href="#">GetMatriculated BECE</a>
    <a class="dropdown-item" href="#">TestCenter</a>
    <a class="dropdown-item" href="#">GetMatriculated National<br/> Common Entrance Examination</a>
    <a class="dropdown-item" href="#">GetMatriculated CowbelPedia</a>
    <a class="dropdown-item" href="#">GetMatriculated CBT Kit</a>
    <a class="dropdown-item" href="#">Active</a> */}

  </div>
</div>
            </button>

            <Link  onClick={()=>buy()} className={active==="buy"?" nav-item nn nav-link active":" nn nav-item nav-link"} to="/buy">
                BUY
                </Link>
              <button className="a__ navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <Link className="n_" to='/buy'>
                   BUY
               </Link>
            </button>


                {/* <a  onClick={()=>about()} className={active==="about"?" nav-item nn nav-link active":" nn nav-item nav-link"} href="/about">
                ABOUT US
                </a>
              <button className="a__ navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <a className="n_" href='/about'>
                   ABOUT US
               </a>
            </button> */}
            {/* <a onClick={()=>news()} className={active==="news"?" nav-item nn nav-link active":" nn nav-item nav-link"} href="/news">
                NEWS
                </a>
              <button className=" a__ navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <a className="n_" href='/news'>
                   NEWS
               </a>
            </button> */}
            <Link  onClick={()=>contact()} className={active==="contact"?" nav-item nn nav-link active":" nn nav-item nav-link"} to="/contact">
                CONTACT US
                </Link>
              <button className=" a__ navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <Link className="n_" to='/contact'>
                   CONTACT US
               </Link>
            </button>
            <Link  onClick={()=>practice()} className={active==="practice"?" nav-item nn nav-link active":" nn nav-item nav-link"} to="/exam">
                PRACTICE TEST
                </Link>
              <button className="a__ navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <Link className="n_" to='/exam'>
                   PRACTICE TEST
               </Link>
            </button>
                {/* <a href="/login" onClick={()=>login()} className={active==="login"?"nav-item nav-link active nn":" active nn nav-item nav-link"}><span className="mock">
                    MOCK
                    </span></a>
                    <button className="a__ navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <a className="n_" href='/login'>
                   MOCK
               </a>
            </button> */}
                </div>

            </div>
     </nav>
        </React.Fragment>
        
    )
}

export default withRouter(Nav)
