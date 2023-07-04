import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
   <nav>
    <div className="nav-items">{props.title}</div>
  </nav> 
   </>
  )
} 
// work  as check condition 
Navbar.propTypes =  {
    title:PropTypes.string.isRequired,
}