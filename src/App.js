import React, { Component, Suspense } from 'react';
import {Spinner} from 'reactstrap'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
const Home= React.lazy(()=>import('./Components/Home/Home'));

// import AsyncComponent from './Components/AsyncComponent/AsyncComponent'



export default class App extends Component {
  render() {
    return (
      <Suspense fallback=
        {<div className="container">
        <div className="row">
          <div className=" col-md-12 col-sm-12">
            <div style={{marginTop:'290px'}} className="mx-auto col-md-2">
            <Spinner/>
            </div>
          
        </div>
       </div>
        </div>
        }>

         <Home/>
  
      </Suspense>

     
     
       
     
    )
  }
}
