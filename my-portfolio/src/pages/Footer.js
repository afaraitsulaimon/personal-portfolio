import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();

  return (
    <FooterDisplay>
            <div>
                <p>Designed By Afarait Sulaimon Bola {year}</p>
            </div>
    </FooterDisplay>
  )
}

const FooterDisplay = styled.div`
        background-color:#1976d2;
        height:10vh;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family:Montserrat, san-serif;
        font-size:1.3em;
        font-weight:bold;

`;

export default Footer