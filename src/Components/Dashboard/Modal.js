import React, { Component } from 'react'
import {Spinner} from 'reactstrap';
import {withRouter} from 'react-router-dom';
 class Modal extends Component {
    state={
        show:false,
        email:'',
        amount:'',
        display:'block'
    }
    
    handleSubmit=(e)=>{
       e.preventDefault();
      
      this.props.setAmount(this.state.amount)
      this.setState({display:'none'});
      
      alert('Transaction successfull, Now click on the screen and click take test, which you succes')
      // Do some logic here
      
    }
    render() {
      const {type}=this.props
        return (
<React.Fragment>
                
<span   className="fund btn btn-primary" data-toggle="modal" data-target="#exampleModal">
{type}
</span>


<div    className="fade modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
 
    <div className="col-md-12 col-sm-10">
    <div style={{display:this.state.display, padding:'10px'}} className="bg-primary  modal-content">
        {
            this.state.show&&
            <div style={{float:'right'}}>
            <Spinner style={{color:'white', float:'right'}}/>
        </div>
        }
       

        <form onSubmit={this.handleSubmit} style={{padding:'40px', height:'330px'}} className='form'>
           <div className="form-group">
           <label style={{fontWeight:'bold', marginBottom:'-30px'}}
            className='white' htmlFor='email'>{type==="SHARE FUNDS"?"Enter Friends Email":"Enter Your Email"}</label>
               <input onChange={(e)=>this.setState({email:e.target.value})} style={{borderRadius:'4px',height:'40px', padding:'5px'}} type="email" id='email' className="form-control" placeholder="Enter email" />
           </div>
           <div className="form-group">
               <label style={{fontWeight:'bold', marginBottom:'-30px'}} className='white' htmlFor='amount '>Enter Amount</label>
               <input onChange={(e)=>this.setState({amount:e.target.value})} type="number" style={{borderRadius:'4px',height:'40px', padding:'5px'}}  id='amount' className="form-control" placeholder="Enter amount" />
           </div>
           <button onClick={()=>this.setState({show:true})} type='submit' className="form-control btn btn-success d-block">
               Proceed
           </button>
          
        </form>
    </div>  
    </div>
</div>
    
  </div>

            </React.Fragment>
        )
    }
}

export default withRouter(Modal)