import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import {FaLinkedin, FaDownload} from 'react-icons/fa'


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
                            <li><FaDownload  style={{ color:'#1976d2',  cursor:'pointer'}} /> <span>Download</span></li>
                        </ul>
                    </InnerResumeMenu>

                   

                    <ResumeContentHolder>
                        <ResumeLeftDiv>
                            
                   
                                <DataHolder>
                                    <li ><span style={{ color:'#1976d2' }}>Afarait Sulaimon B.</span></li>
                                    <li>Lagos, Nigeria</li>
                                    <li>afaraitsulaimon@gmail.com </li>
                                    <li style={{ color:'#1976d2' }}>github.com/afaraitsulaimon</li>

                                </DataHolder>

                                <CoreTechHolder>
                                <h4>Core Technologies</h4>
                               
                                    <li>Html5</li>
                                    <li>CSS3</li>
                                    <li>Javascript</li>
                                    <li>PHP</li>
                                    <li>ReactJs</li>
                                    <li>NodeJs</li>
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
                                <div>
                                <h2>Frontend developer and Software.</h2>
                                
                                <p>
                                    Love to build scalable and minimum viable products. Also love creating
                                    high performance web experience for users and a better user experience
                                    products.
                               
                                   
                                 </p>
                                </div>
                               
                                <div>
                                <h2 style={{ textDecoration:'underline' }}>Objective</h2>
                                     <p>
                                     To secure a responsible career opportunity and fully utilize my training 
                                    and skills, while making a significant contribution to the success of the company.

                                     </p>
                                </div>

                                    <JobExpHolder>
                                    <h2>Job Experience</h2>

                                       <div>
                                            <ul >
                                            <li>Support Staff @ Peoples plus Management</li> 
                                            <li>August 2017 – March 2021</li>
                                            </ul>
                                           
                                           <div>
                                               <ul>
                                               <li>⚫ Keying in of shipping document on NCS 
                                                   (Nigeria Custom Service) Portal to generate PAAR 
                                                    (Pre-Arrival Assessment Report) for customers.
                                                </li>

                                                <li>⚫ Keying in of shipping documents / Exchange Control 
                                                    Documents (ECD) into the bank system. 
                                                </li>

                                               </ul>
                                           </div>
                                       </div>





                                       <div>
                                            <ul >
                                            <li>Note Counter (Cash & Teller Dept.)  @ Peoples plus Management</li> 
                                            <li>August 2017 – March 2021</li>
                                            </ul>
                                           
                                           <div>
                                               <ul>
                                               <li>⚫  Counting / Confirming of Bulk cash brought into and 
                                                   taking out of the bank by the customer
                                                </li>
                                                
                                                <li>
                                                    ⚫ Detecting of the fake note in the cash.
                                                </li>

                                                <li>
                                                    ⚫ Sorting of good note for the ATM.
                                                </li>

                                               </ul>
                                           </div>
                                       </div>



                                       <div>
                                            <ul >
                                            <li>Online Sales Consultant (J-Force Team) @ Jumia.com.ng</li> 
                                            <li>Feb. 2014 – August 2014</li>
                                            </ul>
                                           
                                           <div>
                                               <ul>
                                               <li>⚫  To help customers that are willing to order online 
                                                   to order there items.
                                                </li>
                                                
                                                <li>
                                                    ⚫ To advertise the services of Jumia more 
                                                    both online and one on one to people.
                                                </li>



                                               </ul>
                                           </div>
                                       </div>





                                       <div>
                                            <ul >
                                            <li>Uploader @ Taafoo.com,</li> 
                                            <li>Nov 2012 – Jan 2013</li>
                                            </ul>
                                           
                                           <div>
                                               <ul>
                                               <li>⚫   To name and separate the unique item.
                                                </li>
                                                
                                                <li>
                                                    ⚫ To Upload all the items on the website.
                                                </li>


                                                <li>⚫   To scan the items in the store.
                                                </li>
                                                
                                                <li>
                                                    ⚫ To pick the items bought for shipment.
                                                </li>



                                               </ul>
                                           </div>
                                       </div>




                                       <div>
                                            <ul >
                                            <li>NYSC (National Youth Service Corps)</li> 
                                            <li>March 2010-Feb 2011</li>
                                            </ul>
                                           
                                           <div>
                                               <ul>
                                               <li>⚫    Teaching Electronics

                                                </li>
                                                
                                                <li>
                                                    ⚫ Prepare students well for NABTEB Exam.
                                                </li>



                                               </ul>
                                           </div>
                                       </div>



                                       <div>
                                <h2>TRAINING.</h2>
                                
                                <p>
                                Online Training at Utiva.io (Product management) - April 2021                               
                                   
                                 </p>
                                </div>

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

`;

const InnerResumeHolder = styled.div`
        width:80%;
        min-height:90vh;
        background:#f5f4fc;

     

        
`;

const InnerResumeMenu = styled.div`
        width:100%;
        height:50px;
        background-color:red;
      
ul{
    float:right;
    display:flex;
 
    

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
`;

const ResumeLeftDiv = styled.div`
        width:30%;
        min-height:100%;

    
`;

const DataHolder = styled.div`


         
                li{
                    list-style:none;
                    padding-left:2em;
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
         
`;




const ToolsHolder = styled.ul`

        h4{
            color:#0f64b9;
            font-weight:bold;
            font-size:1.1em;

        }
        
        li{
            list-style:none;
        }
`;


const CoreTechHolder = styled.ul`

        h4{
            color:#0f64b9;
            font-weight:bold;
            font-size:1.1em;

        }

        li{
            list-style:none;
        }
`;

const SkillsHolder = styled.ul`

        h4{
            color:#0f64b9;
            font-weight:bold;
            font-size:1.1em;

        }
        li{
            list-style:none;
        }
`;



const ResumeRightDiv = styled.div`
        width:70%;
        min-height:100%;
        background-color:orange;
`;

const JobExpHolder = styled.div`

`;


export default Resume