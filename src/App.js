import React, { Component, Suspense } from 'react';
import {Spinner} from 'reactstrap'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Footer from './Components/Home/Footer';
import Nav from './Components/Home/Nav';
import About from './Components/About/About';
import Login from './Components/Forms/Login';
import News from './Components/News/News';
import Exam from './Components/Exam/Exam';
import Testpage from './Components/Exam/Testpage';
import Dashboard from './Components/Dashboard/Dashboard';
import  GlobalContext  from './Components/Globacontext/GlobalContext';
const Home= React.lazy(()=>import('./Components/Home/Home'));

// import AsyncComponent from './Components/AsyncComponent/AsyncComponent'



export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Suspense fallback=
        {<div className="container">
        <div style={{marginTop:'260px'}} className="row">
          <div className=" mx-auto  col-md-2 col-sm-2">
          
            <Spinner/>
           
          
        </div>
       </div>
        </div>
        }>
          <BrowserRouter>
          <GlobalContext>
          <div className="container-fluid">
          <Nav/>
          </div>
          <Switch>
          {/*  Major links */}

          {/*  Home page */}
          <Route path="/" component={Home} exact/>
          {/*  About page */}
          <Route path='/about' component={About}/>
           {/*  News page */}
          <Route path='/news' component={News}/>
           {/*  Login page */}
          <Route path='/login' component={Login}/>
           {/* Practice Exam page */}
          <Route path='/exam' component={Exam}/>
           {/*  Dashboard page , the user must be logged in to access this*/}
          <Route path='/dashboard' component={Dashboard}/>
           {/*  Mock Exam page , , the user must be logged in to access this */}
          <Route path='/test' component={Testpage}/>
          </Switch>
         <Footer/>
         </GlobalContext>
          </BrowserRouter>
         
        
      </Suspense>
      </React.Fragment>

     
     
       
     
    )
  }
}
