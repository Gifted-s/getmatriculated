import React from 'react'
import PropTypes from 'prop-types'

const Select = props => {
    return (
        <div>
        <div  className="select alert bg-primary">
            <div className="row">
                <div className="col">
                <span className="icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22">
                                                    <g fill="" fillRule="evenodd" transform="translate(1 1)">
                                                        <circle cx="10" cy="10" r="10" fill="none" strokeWidth="2">
                                                        </circle>
                                                        <path fillOpacity=".991" stroke="none" fillRule="nonzero" d="M8.13 11.52l4.378-4.578 1.098 1.098L14.473 3l-5.038.868 1.098 1.098-4.381 4.381z">
                                                        </path>
                                                        <path fillOpacity=".991" stroke="none" fillRule="nonzero" d="M12.7 7.793l-4.735 4.735-1.097-1.097L6 16.469l5.038-.868-1.098-1.098 4.68-4.68z">
                                                        </path>
                                                    </g>
                                                </svg>
                </span>
              <span className="history">
                        
                  History
                        
             </span>
                </div>
                <div className="col">
                    <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                                                        <circle cx="9" cy="9" r="9" fill="" strokeWidth="1.8">
                                                        </circle>
                                                        <path fillRule="nonzero" strokeWidth="2" d="M6.376 14.231c.06.02.12.04.18.04.2 0 .4-.12.46-.32.1-.26-.04-.54-.3-.64a4.532 4.532 0 0 1-2.64-5.8 4.523 4.523 0 0 1 2.34-2.52c1.1-.5 2.32-.54 3.44-.12 1.18.44 2.66 2.343 3.14 3.503h-2.78l2.78 2.477 1.774-2.477h-.967c-.52-1.6-1.987-3.823-3.587-4.423a5.373 5.373 0 0 0-4.2.16c-1.34.62-2.36 1.7-2.86 3.08-1.08 2.8.38 5.98 3.22 7.04z">
                                                        </path>
                                                    </g>
                                                </svg>
                    </span>
                <span>Send File </span>
                </div>
            </div>
         
        </div>
     </div>
    )
}

Select.propTypes = {

}

export default Select
