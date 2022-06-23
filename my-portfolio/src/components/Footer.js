import React from 'react'
import styled from 'styled-components'





const Footer = ({colorBg, topMargin, colorText}) => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();


  return (
    <FooterDisplay bg={colorBg} mgTop={topMargin} textOfColor={colorText}>
          
                <p >Designed By Afarait Sulaimon Bola &copy; {year}</p>
               
    </FooterDisplay>
  )
}

const FooterDisplay = styled.div`
        background-color: ${(props) => props.bg};
        height:10vh;
        display:flex;
        justify-content:space-around;
        align-items:center;
        font-family:Montserrat, san-serif;
        font-size:1.3em;
        font-weight:bold;
        margin-top:${(props) => props.mgTop};
        border-top:1px solid white;

        p{

          color: ${(props)=> props.textOfColor};
        }

        @media(max-width:475px){
          text-align:center;
      
        }

`;

export default Footer