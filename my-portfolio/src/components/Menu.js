import { Button } from '@mui/material';
import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from "react-icons/fa";
import './MenuDisplay.css'


const Menu = () => {

    const [showHideResponsive, setShowHideResponsive] = useState(true);
    const [displayMenu, setDisplayMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)
   


    const handleResponseMenu = () => {
        setShowHideResponsive(!showHideResponsive);
        setDisplayMenu(!displayMenu);

}

const checkWidth = () => {
    setWidth(window.innerWidth);
    
}
   
useEffect(() => {
    window.addEventListener('resize', checkWidth);
    if (width >= 768) {
        setDisplayMenu(false);
        setShowHideResponsive(true);

    }
},[width])


  return (

    <Header>

            <MenuLogo>
               <Link to='/'> <h1>ASB</h1></Link>
            </MenuLogo>

            <div className={displayMenu ? `showLinksForSmallScreen` : `hideLinksForSmallScreen`}>

                    <ul className='nav-links'>
                        <li>
                            <Link to='about-me'>About</Link>
                        </li>

                        <li>
                            <Link to='portfolio'>Portfolio</Link>
                        </li>

                        <li>
                            <Link to='/'>Resume</Link>
                        </li>
                    </ul>

                <div>
                    <Button variant="contained" style={{ backgroundColor:'blue'  }}>Get in Touch</Button>
                </div>  

            </div>

                <ResponsiveDisplayButton onClick={handleResponseMenu}>
                    {showHideResponsive ?  <FaBars/>: <FaTimes/>}
                </ResponsiveDisplayButton>
   

            
    </Header>
  )
}


const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#1976d2;
    font-family:Montserrat, san-serif;
    max-height:10vh;
    
`;

const MenuLogo = styled.div`
margin-left:2em;
    a{
        color:white;
        text-decoration:none;
    }

    @media(max-width:768px){
        margin-left:3.5em;
    }
`;






const ResponsiveDisplayButton = styled.div`
        cursor:pointer;
        display:none;

        @media(max-width:768px){

            display:block;
        }
`;

export default Menu