import React from 'react'
import { Link } from 'react-router-dom'

const ButtonCv = ({openMyCv, label}) => {
  return (
    <div>
        <Link to='#'
         onClick={(e) => {
            e.preventDefault();
            window.open(openMyCv,"_blank")
            
        }} target='_blank'
        style={{ textDecoration:'none' , color:'#1976d2'}}>
            {label}
        </Link>
    </div>
  )
}

export default ButtonCv