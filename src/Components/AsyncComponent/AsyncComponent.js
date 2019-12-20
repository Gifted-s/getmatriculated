import React, { Component } from 'react'
export default function AsyncComponent(imported){
    
    
     class AsyncComponent extends Component {
        constructor(props){
            super(props);
            this.state={
                component:null
            }
        }
       async componentDidMount(){
           const {default:component}= await imported();
           this.setState({component})
       }
       
        render() {
            const C= this.state.component
            return C ? C : <div>Loading....</div>
        }
    }
    return AsyncComponent

    
}
