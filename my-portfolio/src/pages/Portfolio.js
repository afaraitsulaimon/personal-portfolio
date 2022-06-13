import React from 'react'
import Menu from '../components/Menu'
import styled from 'styled-components';
import Footer from './Footer';
import {motion} from 'framer-motion'

import {portfolioDetails} from './PortfolioDetails'


const Portfolio = () => {
  return (

    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration:1 }}
    >
    <Container>
        <Menu/>
      

      
        <ProjectHeader>
            <h1>
            Project Done
            </h1>
            <TinyLine >

            </TinyLine>
        </ProjectHeader>

{/* Right Project holder start from here */}

{portfolioDetails.map((porty) => {


if (porty.id % 2 !== 0) {
      return  (<RightProjectHolder key={porty.id}>
          <ProjectListRight>
            <ProjectImageRight>
               <img src={porty.image} alt='portfolio-images' />
            </ProjectImageRight>

            <ProjectContentRight>
              <h1>{porty.title}</h1>
              <ProjectDescriptionRight>
                <p>{porty.projectDescription}</p>
              </ProjectDescriptionRight>

              <ProjectMoreDetailsRight>
                <span>Tools: {porty.toolsUsed}</span>
                <p>{porty.link}</p>
              </ProjectMoreDetailsRight>
            </ProjectContentRight>
          </ProjectListRight>
        </RightProjectHolder>)

    }else if (porty.id % 2 === 0) {
        
                
        return (<LeftProjectHolder key={porty.id}>
        <ProjectListLeft>
            <ProjectContentLeft>
            <h1>{porty.title}</h1>
            <ProjectDescriptionLeft>
                <p>{porty.projectDescription}</p>
            </ProjectDescriptionLeft>

            <ProjectMoreDetailsLeft>
                <span>Tools: {porty.toolsUsed}</span>
                <p>{porty.link}</p>
            </ProjectMoreDetailsLeft>
            </ProjectContentLeft>

            <ProjectImageLeft>
            <img src={porty.image} alt='portfolio-images' />
            </ProjectImageLeft>
        </ProjectListLeft>
        </LeftProjectHolder>)
    }

}
   
)}






{/* Left project Holder starts here */}


{/* Left project Holder ends here */}



<Footer colorBg='#1976d2' topMargin='30px' />

        </Container>

        </motion.div>

  )
}




const Container = styled.div`
    width:100%;
    min-height:100vh;
    background-color:#f9f9f9;

`;

const ProjectHeader = styled.div`
position:relative;
margin-left:20px;


h1{
    color:#1976d2;
}
`;


const TinyLine = styled.div`
 width:380px;
  height:1px;
    background-color:#1976d2;
     position:absolute;
      top:25px;
       left:220px;

       @media(max-width:768px){

        width:180px;
    }
`;

// styling for right starts from here

const RightProjectHolder = styled.div`
display:flex;
justify-content:center;
margin-top:20px;
`;


const ProjectListRight = styled.div`

    width:90%;
    height:70vh;
    background-color:green;
    display:flex;
    position:relative;

   

`;

const ProjectImageRight = styled.div`

    width:50%;
    height:100%;
    background-color:red;
   

`;

const ProjectContentRight = styled.div`

    width:50%;
    height:100%;
    background-color:yellow;

   

`;

const ProjectDescriptionRight = styled.div`
    width:50%;
    height:30%;
    background-color:green;
   position:absolute;
    top:40%;
    right:150px;
    border-radius:5px;

    @media(max-width:768px){

        width:60%;
        right:65px;
    }
    `;

const ProjectMoreDetailsRight = styled.div`
    position:absolute;
    top:70%;
    left:58%;
    padding-top:5px;

   
`;


// styling for left starts from here

const LeftProjectHolder = styled.div`
display:flex;
justify-content:center;
margin-top:20px;
`;





const ProjectListLeft = styled.div`

    width:90%;
    height:70vh;
    background-color:green;
    display:flex;
    position:relative;

   

`;

const ProjectImageLeft = styled.div`

    width:50%;
    height:100%;
    background-color:brown;
   

`;

const ProjectContentLeft = styled.div`

    width:50%;
    height:100%;
    background-color:teal;


`;

const ProjectDescriptionLeft = styled.div`
    width:50%;
    height:30%;
    background-color:green;
   position:absolute;
   top:40%;
   left:150px;
    border-radius:5px;

    @media(max-width:768px){

        width:60%;
        left:65px;
    }
    `;

const ProjectMoreDetailsLeft = styled.div`
    position:absolute;
    top:70%;
    right:58%;
    padding-top:5px;

    @media(max-width:768px){

        right:48%;

    }
`;

export default Portfolio