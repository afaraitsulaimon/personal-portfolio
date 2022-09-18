import React from 'react'
import { Link } from 'react-router-dom'

const ButtonOpeningProject = ({theLink, label}) => {
  return (
    <div>
        <Link to='#'
         onClick={(e) => {
            e.preventDefault();
           window.location.href= theLink;
            
        }} target='_blank'
        style={{ textDecoration:'none' , color:'#1976d2'}}>
            {label}
        </Link>
    </div>
  )
}

export default ButtonOpeningProject