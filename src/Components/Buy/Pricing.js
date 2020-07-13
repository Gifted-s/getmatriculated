import React from 'react'
import {withRouter} from 'react-router-dom';
const Pricing = (props) => {
    return (
       
            <div onClick={()=> props.history.push(props.to) } className="col-md-4 col-sm-10">
                    <div style={{border:'none', borderRadius:'none'}} className="card ccc border-primary">
                    <div className="card-header font-weight-bold text-light bg-primary text-center">
                        {props.name}
                    </div>
                    <div class="card-text  p-4 text-center">
                        {props.price}
                    </div>
                    
                    </div>
                    </div>
        
    )
}

export default withRouter(Pricing)
