import React from 'react'
import PropTypes from 'prop-types'


function Button({ children, version, type, isDisabled }) {
    //children will pass props as children from higher components using it
    //version will be primary or secondary (for our class)
    //type: submit vs something else
    //isDisabled will allow me to validate information coming in


  return (
    <button type={type} disabled={isDisabled } className={`btn btn-${version}`} >{children}</button>
  )
}

Button.defaultProps ={
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes ={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool 
}

export default Button