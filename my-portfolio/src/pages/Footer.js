import React from 'react'
import styled from 'styled-components'





const Footer = ({colorBg, topMargin}) => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();


  return (
    <FooterDisplay bg={colorBg} mgTop={topMargin}>
          
                <p>Designed By Afarait Sulaimon Bola &copy; {year}</p>
               
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

      

`;

export default Footer