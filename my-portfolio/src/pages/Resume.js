import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import {FaLinkedin, FaDownload} from 'react-icons/fa'
import ButtonCv from '../components/ButtonCv'
import pdf from "../file/afaraitcv.pdf";



const Resume = () => {
  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration:1 }}
    >
        <Menu/>
        

            <ResumeHolder>
                <InnerResumeHolder>
                    <InnerResumeMenu>
                        <ul>
                            <li><FaLinkedin style={{ color:'#1976d2', cursor:'pointer'}}/></li>
                            <li style={{ display:'flex', width:'100px',  justifyContent:'space-around', alignItems:'center'}}><FaDownload  style={{ color:'#1976d2',  cursor:'pointer'}} /><ButtonCv label="Download" openMyCv={pdf} /></li>
                        </ul>
                    </InnerResumeMenu>

                   

                    <ResumeContentHolder>
                        <ResumeLeftDiv>
                            
                   
                                <DataHolder>
                                    <li>Lagos, Nigeria</li>
                                    <li>afaraitsulaimon@gmail.com </li>
                                    <li style={{ color:'gray' }}>github.com/afaraitsulaimon</li>

                                </DataHolder>

                                <CoreTechHolder>
                                <h4>Core Technologies</h4>
                               
                                    <li>Html5</li>
                                    <li>CSS3</li>
                                    <li>Javascript</li>
                                    <li>PHP</li>
                                    <li>ReactJs</li>
                                    <li>Python</li>
                                    <li>React-Native</li>
                                    <li>Bootstrap</li>
                                    <li>Tailwind</li>
                                    <li>Sass</li>
                                    <li>Material UI</li>
                                    <li>Styled-Component</li>

                                </CoreTechHolder>


                                <SkillsHolder>
                                <h4>Skills</h4>
                               
                                    <li>Product Management</li>
                                    <li>User Research</li>
                                    <li>Prototyping</li>
                                    <li>Team Player</li>
                                    <li>Design Thinking</li>
                                
                                </SkillsHolder>

                                <ToolsHolder>
                                <h4>Tools</h4>
                               
                                    <li>Figma</li>
                                    <li>Jira</li>
                                    <li>Miro</li>
                                    <li>VsCode</li>
                                    <li>Github</li>
                                    <li>Slack</li>
                                
                                </ToolsHolder>
                        </ResumeLeftDiv>

                        <ResumeRightDiv>
                            <ForMediaAdjustMent>
                        <h1  style={{ color:'#1976d2', paddingLeft:'2rem', fontSize:'2.5rem',fontFamily: "'Kdam Thmor Pro', sans-serif" }}>Afarait<br/> Sulaimon B.</h1>

                                <Profession>
                                        <h2>Software developer and Product Manager.</h2>
                                        
                                        <p>
                                            Love to build scalable and minimum viable products. Also love creating
                                            high performance web experience for users and a better user experience
                                            products.
                                    
                                        
                                        </p>
                                </Profession>
                                </ForMediaAdjustMent>
                                <Objective>
                                <h2>Objective</h2>
                                     <p>
                                     To secure a responsible career opportunity and fully utilize my training 
                                    and skills, while making a significant contribution to the success of the company.

                                     </p>
                                </Objective>

                                    <JobExpHolder>
                                    <h2>Job Experience</h2>

                                       <JobDetailsHolder>
                                            <ul >
                                            <li className='jobTitle'>Support Staff @ Peoples plus Management</li> 
                                            <li>August 2017 – March 2021</li>
                                            </ul>
                                           
                                           <JobDescriptionHolder>
                                               <ul>
                                               <li> <div></div>Keying in of shipping document on NCS 
                                                   (Nigeria Custom Service) Portal to generate PAAR 
                                                    (Pre-Arrival Assessment Report) for customers.
                                                </li>

                                                <li> Keying in of shipping documents / Exchange Control 
                                                    Documents (ECD) into the bank system. 
                                                </li>

                                               </ul>
                                           </JobDescriptionHolder>
                                       </JobDetailsHolder>





                                       <JobDetailsHolder>
                                            <ul >
                                            <li className='jobTitle'>Note Counter (Cash & Teller Dept.)  @ Peoples plus Management</li> 
                                            <li>August 2017 – March 2021</li>
                                            </ul>
                                           
                                           <JobDescriptionHolder>
                                               <ul>
                                               <li>  Counting / Confirming of Bulk cash brought into and 
                                                   taking out of the bank by the customer
                                                </li>
                                                
                                                <li>
                                                     Detecting of the fake note in the cash.
                                                </li>

                                                <li>
                                                     Sorting of good note for the ATM.
                                                </li>

                                               </ul>
                                           </JobDescriptionHolder>
                                       </JobDetailsHolder>



                                       <JobDetailsHolder>
                                            <ul >
                                            <li className='jobTitle'>Online Sales Consultant (J-Force Team) @ Jumia.com.ng</li> 
                                            <li>Feb. 2014 – August 2014</li>
                                            </ul>
                                           
                                           <JobDescriptionHolder>
                                               <ul>
                                               <li>  To help customers that are willing to order online 
                                                   to order there items.
                                                </li>
                                                
                                                <li>
                                                     To advertise the services of Jumia more 
                                                    both online and one on one to people.
                                                </li>



                                               </ul>
                                           </JobDescriptionHolder>
                                       </JobDetailsHolder>





                                       <JobDetailsHolder>
                                            <ul >
                                            <li className='jobTitle'>Uploader @ Taafoo.com,</li> 
                                            <li>Nov 2012 – Jan 2013</li>
                                            </ul>
                                           
                                           <JobDescriptionHolder>
                                               <ul>
                                               <li> To name and separate the unique item.
                                                </li>
                                                
                                                <li>
                                                     To Upload all the items on the website.
                                                </li>


                                                <li>   To scan the items in the store.
                                                </li>
                                                
                                                <li>
                                                    <span></span>To pick the items bought for shipment.
                                                </li>



                                               </ul>
                                           </JobDescriptionHolder>
                                       </JobDetailsHolder>




                                       <JobDetailsHolder>
                                            <ul >
                                            <li className='jobTitle'>NYSC (National Youth Service Corps)</li> 
                                            <li>March 2010-Feb 2011</li>
                                            </ul>
                                           
                                           <JobDescriptionHolder>
                                               <ul>
                                               <li>  Teaching Electronics

                                                </li>
                                                
                                                <li>
                                                     Prepare students well for NABTEB Exam.
                                                </li>



                                               </ul>
                                           </JobDescriptionHolder>
                                       </JobDetailsHolder>



                                       <TrainingHolder>
                                <h2>Training</h2>
                                
                                <p>
                                Online Training at Utiva.io (Product management) - April 2021                               
                                   
                                 </p>
                                </TrainingHolder>

                                    </JobExpHolder>
                                     
                         </ResumeRightDiv>

                    </ResumeContentHolder>
                </InnerResumeHolder>
            </ResumeHolder>
            
        <Footer colorBg='#1976d2' colorText='white' />
    </motion.div>
  )
}

const ResumeHolder = styled.div`

    width:100%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:5rem;
    margin-bottom:5rem;

`;

const InnerResumeHolder = styled.div`
        width:80%;
        min-height:90vh;
        background:#f5f4fc;

     

        
`;

const InnerResumeMenu = styled.div`
        width:100%;
        height:50px;
      
ul{
    float:right;
    display:flex;
 
    @media(max-width:475px){
        width:87%;
        display:flex;
        flex-direction:row;
        justify-content:center;

    }
    

    li{
        list-style:none;
        padding:1em;
       font-size:0.9em;


        span{
            color:#a9a9c8;
            cursor:pointer;
           
        }
    }
}
`;

const ResumeContentHolder = styled.div`
    width:100%;
    min-height:100%;
    display:flex;

    @media(max-width:475px){

        display:grid;


    }
`;

const ResumeLeftDiv = styled.div`
        width:30%;
        min-height:100%;

        @media(max-width:475px){
            width:100%;

            display:grid;
            align-items:center;
            text-align:center;
            position:relative;
    
    
        }

    
`;

const DataHolder = styled.div`
                margin-top:2rem;

         
                li{
                    list-style:none;
                    padding-left:2em;
                    color:gray;
                    font-size:0.8em;
                    font-family: 'Quicksand', sans-serif;
                }

                li:first-child{

                    color:#0f64b9;
                    font-weight:bold;
                    text-decoration:underline;
                    font-size:1.1em;
                }

                li:last-child{
                    font-weight:bold;


                    }

                    @media(max-width:475px){
                        position:absolute;
                        top:120px;
                       display:flex;
                       flex-direction:column;
                       width:100%;
                     
                
                    } 
         
`;




const ToolsHolder = styled.ul`

        h4{
            color:#1976d2;
            font-weight:bold;
            font-size:1.1em;
            font-family: 'Quicksand', sans-serif;


        }
        
        li{
            list-style:none;
            color:gray;
            font-size:0.8em;
            font-family: 'Quicksand', sans-serif;



        }
`;


const CoreTechHolder = styled.ul`

        h4{
            color:#1976d2;
            font-weight:bold;
            font-size:1.1em;
            font-family: 'Quicksand', sans-serif;
        

        }

        li{
            list-style:none;
            color:gray;
            font-size:0.8em;
            font-family: 'Quicksand', sans-serif;
        }

        @media(max-width:475px){
            margin-top:520px;
    
        } 
`;

const SkillsHolder = styled.ul`

        h4{
            color:#1976d2;
            font-weight:bold;
            font-size:1.1em;
            font-family: 'Quicksand', sans-serif;


        }
        li{
            list-style:none;
            color:gray;
            font-size:0.8em;
            font-family: 'Quicksand', sans-serif;
        }
`;



const ResumeRightDiv = styled.div`
        width:70%;
        min-height:100%;

        p{
            font-size:0.9em;
        }

       @media(max-width:475px){
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        position:relative;


    }
`;


const ForMediaAdjustMent = styled.div`

        @media(max-width:475px){
          
            position:absolute;
            top:-1150px;
    
        }
`;

const JobExpHolder = styled.div`
        h2{
            padding-left:2rem;
            font-family: 'Quicksand', sans-serif;
            color:#1976d2;

        }
`;


const JobDetailsHolder = styled.div`

        ul{
            
            .jobTitle{
                font-weight:800;
                

            }  
            li{
                list-style:none;
                font-size:0.8rem;
                font-family: 'Quicksand', sans-serif;

            }
        }

`;

const JobDescriptionHolder = styled.div`


ul{

    li{
        list-style:none;
       padding:0 2rem 1rem 0;
       font-size:0.8rem;
       color:gray;
       font-family: 'Quicksand', sans-serif;
    }
}
`;

const TrainingHolder = styled.div`

h2{
    padding-left:2rem;

}
    p{
        padding-left:2.2rem;
        color:gray;
        font-size:0.8rem;
        font-family: 'Quicksand', sans-serif;


    }
`;



const Profession = styled.div`
        padding-left:2rem;
        border-bottom:2px solid #1976d2;
        max-width:100%;
        display:flex;
        flex-direction:column;
        text-align:center;
        padding:2rem;




        h2{
            font-size:1.5rem;
            font-family: 'Quicksand', sans-serif;
            color:#1976d2;

        }

        p{
            font-size:0.8rem;
            color:'light-gray';
            font-family: 'Quicksand', sans-serif;


        }
`;


const Objective = styled.div`

padding:2rem;


h2{
    font-size:1.5rem;
    font-family: 'Quicksand', sans-serif;
    color:#1976d2;


}

p{
    font-size:0.8rem;
    color:gray;
    font-family: 'Quicksand', sans-serif;


}
`;


export default Resume