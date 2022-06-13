import React from 'react'
import Menu from '../components/Menu'
import styled from 'styled-components';
import Footer from './Footer';
import {motion} from 'framer-motion'
import {FaGithub,FaHtml5, FaJs, FaCss3, FaFigma, FaReact, FaPhp, FaBootstrap, FaJira, FaNodeJs} from "react-icons/fa";
import { SiMiro, SiStyledcomponents, SiTailwindcss, SiMaterialui, SiProducthunt} from "react-icons/si";

const About = () => {
  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration:1 }} >
        
        <Menu/>
            <TopContent>
                <Text>
                      <h1>I'am Afarait Sulaimon Bola <br/> Software developer and Product Manager</h1>
                      <p>Like to make product useful for usage and i love to always 
                        make product attractive to users and then love to keep them with the user experience.
                         All i care for in a product is to see the users come back with a great and lovely experience.</p>

                </Text>

               
            </TopContent>


       
                <UsingTools>
                          <h2>My ToolBox & Skill Set</h2>

                          <ul>
                            <li><span><FaHtml5/></span>HTML5 </li>
                            <li><span><FaCss3/></span>CSS3</li>
                            <li><span><FaJs/></span>JavaScript</li>
                            <li><span><FaPhp/></span>PHP</li>
                            <li><span><FaReact/></span>Reactjs</li>
                            <li><span><SiProducthunt/></span> Product Management </li>
                            <li><span><FaReact/></span>React native</li>
                            <li><span><FaGithub/></span>Github</li>
                            <li><span><FaBootstrap/></span>Bootstrap</li>
                            <li><span><SiTailwindcss/></span>Tailwind</li>
                            <li><span><SiMaterialui/></span>Material UI</li>
                            <li><span><SiStyledcomponents/></span>Style Component</li>
                            <li><span><SiMiro/></span>Miro</li>
                            <li><span><FaFigma/></span>Figma</li>
                            <li><span><FaJira/></span>Jira</li>
                            <li><span><FaNodeJs/></span>Node js</li>



                          </ul>
                          <p style={{ textAlign:'center', fontSize:'1.2em', color:'blue' }}>Trying to improve my skill set on React, React Native and Nodejs</p>
                </UsingTools>


            <PeakOfMeHolder>
                <PeakOfMe>
                <p>
                I like to Bring ideas to life through my skills in Product Management and 
                Programming Languange, to form a better Minimum Viable Product. 
                User Experience, Product simplicity and clean code are what gives me joy on the job.
                </p>

                <p>
                Am a graduate of HND in Physics Electronics from the prestigious 
                Lagos State Polytechnic, Ikorodu, Lagos State, Nigeria. (2008). Also obtained my National Diploma in Electrical Electronics Engineering from Moshood Abiola Polytechnic, Abeokuta, Ogun state, Nigeria.
                </p>

                <p>
                I Love to explore and learn new things based on technology and 
                sometimes things differently from technology. Love to also use my
                knowledge in this field to impact people and make the world a better and safer place. 
                </p>


                </PeakOfMe>
                </PeakOfMeHolder>

       <Footer colorBg='#1976d2' colorText='white' />
    </motion.div>
  )
}


const TopContent = styled.div`
  width:100%;
  min-height:80vh;
  background-color:#1976d2;
  display:flex;
  justify-content:center;
  align:items:center;
  color:white;
`;



const Text = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    justify-content:center;

    h1{
      font-size:3rem;
    }
`;




const UsingTools = styled.div`

width:100%;
min-height:50vh;
padding-bottom:30px;

h2{
  font-size:2em;
  padding:1.3em;
  color:#1976d2;
}

ul{

  display:grid;
  grid-template-columns: auto auto auto auto;

  li{

    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom:2em;
    font-weight:bold;
    color:blue;


    span{
      font-size:3em;
      color:#1976d2;
    }

  }
}
`;


const PeakOfMeHolder = styled.div`
    width:100%;
    min-height:70vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#1976d2;
`;


const PeakOfMe = styled.div`

      width:70vw;
      min-height:50vh;
      text-align:center;
      
      p{

        padding:2em;
        font-size:1.1em;
        color:white;
      }
`;

export default About