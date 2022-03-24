import React, {useRef, useState,useEffect} from 'react';
import './signup.css'
import { ParticularCoin } from '../../contextfolder/Coindata';
import { Link,useNavigate } from 'react-router-dom';
import worldimage from './imagesforauth/worldforsigning.jpg';
import bubble from './imagesforauth/bubblesforsigning.jpg';



export default function Signup() {
  const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
 const [usersignupEmail,setusersignupEmail] = useState('');
 const [usersignupPassword,setusersignupPassword] = useState('');
 const {setvotevalidation} = ParticularCoin();
 const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>;
 let navigate = useNavigate()

const onchangepassword = (event)=>{
  setusersignupPassword(event.target.value)
  
}

const onchangeEmail = (event)=>{
  setusersignupEmail(event.target.value)
}

const onfinalsubmit = ()=>{
     if(usersignupEmail==='' ||usersignupPassword=== ''){
       alert('please fill in your details')
     }
     else{
      setvotevalidation(true);
      navigate('/')
      
     }
}
  
  

  return <section className='authsection' >
      
          <div className='secondmain' >
            <div  className='leftsideauth' >
               <img  className='mainbackgroundimg'  src={worldimage} alt='first background image for auth'/>
               <div className='secondimgholder' >
                  <img className='secondimg'  src={bubble} alt='second background image for auth'/>  
               </div> 
              <div className='backdiv' >
                <div onClick={()=> navigate('/')} className='backdivinner' >
                  <p>{backward}</p>
                  <p style={{fontSize:'20px'}}>Back</p>
                
                </div>
              </div> 
              
            </div>
            <div className='rightsideauth' >
              <div className='secondrightauth' >
                <div className='upperrightauth' >
                    <p style={{fontSize:'30px',marginBottom:'30px',textAlign:'left'}}>SIGN UP</p>
                    <div>
                      <p style={{fontSize:'25px',marginBottom:'10px',textAlign:'left'}}>Manage your account efficiently</p>
                      <p style={{fontSize:'15px',color:'grey',textAlign:'left'}}>Set up, verify your personal details and begin setting up your personal profile.</p>
                    </div>
                </div>
                <div className='lowerrightauth'>
                      <div className='lowerrightone' >
                          <section className='lowerrightonesection' >
                            <p className='sectioninput' >Username:</p>
                            <input className='authinput' type='text' />
                          </section>

                          <section className='lowerrightonesection' >
                            <p className='sectioninput'>Email:</p>
                            <input className='authinput' type='text'/>
                          </section>
                      </div>

                      <div className='lowerrightone'>
                          <section className='lowerrightonesection' >
                            <p className='sectioninput'>Password:</p>
                            <input className='authinput' type='password' />
                          </section>

                          <section className='lowerrightonesection' >
                            <p className='sectioninput'>Confirm password:</p>
                            <input className='authinput' type='password' />
                          </section>
                      </div>
               
                      <div className='signbuttondiv'>

                        <input className='signbutton' type='button' value='Create Account' />

                      </div>

                      <div className='signbuttondiv' >

                        <p style={{color:'white',marginTop:'35px'}}>
                              Already have an account? &nbsp; &nbsp;<Link to="/signin" style={{textDecoration:'none',color:'#007AFF'}}> Sign in</Link>
                        </p>

                      </div>
                    </div>
              </div>
            </div>
              
          

      </div>

    </section>;
}
