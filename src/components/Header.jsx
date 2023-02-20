import React from 'react'

import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>

        </div>
    </header>
  )
}
// giving default props
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

//kind of like using typescript. below requires my props to be string
Header.propTypes = {
    text: PropTypes.string,
}

export default Header

