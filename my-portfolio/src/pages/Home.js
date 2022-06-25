import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import styled from 'styled-components'
import rightTopSideImage from '../images/person.png'
import {FaFacebookF,FaTwitter,FaInstagram, FaGithub} from "react-icons/fa";
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration:1 }}
    >
        <Menu/>
          <TopContent>
            <LeftTopContent>
              <h1>Hi,<br/>I'm Bola <br/><span>Software Developer &</span> <br/><span>a Product Manager</span></h1>
             <HireMeButton>
                  <button>Hire Me</button>
             </HireMeButton>
            </LeftTopContent>
          
            <RightTopContent>
              <div className='topImageHolder'>
                <img src={rightTopSideImage} alt='peenarz'  />
                </div>

                <SocialMediaIcon>
             
                    <ul>
                        <li><a href='https://www.github.com/afaraitsulaimon' target='blank'><FaGithub/></a></li>
                         <li><a href='https://www.facebook.com/afaritsulaimon' target='blank'><FaFacebookF/></a></li>
                        <li><a href='https://www.twitter.com/Bolaafarait' target='blank'><FaTwitter/></a></li>
                        <li><a href='https://www.instagram.com/peenarz' target='blank'><FaInstagram/></a></li>

                    </ul>
               
        </SocialMediaIcon>
            </RightTopContent>
          </TopContent>


        
          <Footer colorBg='#1976d2' />


    </motion.div>
  )
}

const TopContent = styled.div`
    width:100%;
    height:100vh;
    background-color:#1976d2;
    display:flex;

    @media(max-width:768px){
      flex-direction:column;
      align-items:center;
      justify-content:center;
      
  
    }

   
`;

const LeftTopContent = styled.div`
      width:60%;
      display:flex;
      align-items:center;
      font-size:1.5em;
      padding-left:3em;
      color:white;
     position:relative;
     font-family: 'Quicksand', sans-serif;


     @media(max-width:768px){

          h1{
            font-size:0.8em;
            padding-bottom:3em;

          }
      }

      @media(max-width:475px){
        margin-bottom:120px;

        h1{
          font-size:0.9em;
  
        }
    
      }
`;


const HireMeButton = styled.div`
      position:absolute;
      top:80%;

      button{
        padding:1em 4em;
        font-size:0.6em;
        font-weight:bold;
        border-radius:50px;
        cursor:pointer;
        color:#1976d2;
        border:none;

      
        @media(max-width:475px){
          padding:1em 2em;
      
        }

        &:hover{
          border:2px solid white;
          background-color:green;
          transition: 1s ease-in-out;
          color:white;
        }

      }

     

      @media(max-width:475px){
        top:70%;
    
      }
`;


const RightTopContent = styled.div`
    
      width:40%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

      .topImageHolder{

        background-color:white;
        width:200px;
        height:200px; 
        display:flex; 
        justify-content:center;
        align-items:center;
        border-radius:50%;


        @media(max-width:768px){

          width:100px;
          height:100px; 
        }


        @media(max-width:475px){
          width:80px;
          height:80px;
         margin-top:50px;
      
        }
       
        img{

          width:90%;
          height:90%;
          object-fit:cover;

          @media(max-width:475px){

            width:60%;
            height:60%;
          }
        }
      }
     
      @media(max-width:768px){
        position:absolute;
        width:70%;
        top:60%;
        margin-top:20px;


      
       
      }

`;


const SocialMediaIcon = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
      background-color:#1976d2;
      
      ul{

        display:flex;
        width:10em;
        justify-content:space-between;
        align-items:center;

        @media(max-width:475px){
          
          padding-right:40px;
    
        }



        li{
          list-style:none;
          cursor:pointer;
          width:40px;
          height:40px;
          display:flex;
          justify-content:center;
          align-items:center;

          &:hover{
            background-color:white;
            border-radius:50%;
            transition: 1s ease-in-out;

          }

          a{
            color:white;
            
            &:hover{
              color:#1976d2;
              font-size:1.5em;
              
            }
           
          }

        }
      }

   
`;

export default Home