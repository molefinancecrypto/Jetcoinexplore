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
  
  

  return <div className='signupoverall'>
  
  <section className='authsection' >
      
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

    </section>

    <section className='mobilesignin' >
          <img style={{width:"100%",height:'100vh',objectFit:'cover'}}  src={worldimage} alt='first background image for auth'/>
          <div style={{width:'100%',minHeight:'100%',position:'absolute',top:'0px',backgroundColor:'#05101c9a'}}></div>
          <div style={{position:'absolute',top:'0px',height:"100%",width:"100%",zIndex:'5'}}>
              <div style={{width:"100%",paddingBottom:'25px',boxSizing:'border-box',minHeight:'40%',backgroundImage:'linear-gradient(to bottom,#05101c,transparent)'}}>
                <div style={{width:'100%',height:'60%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>  
                    <div onClick={()=> navigate('/')} style={{paddingLeft:'20px',display:'flex',justifyContent:"left"}} >
                        <p>{backward}</p>
                        <p style={{fontSize:'20px',color:'white'}}>Back</p>
                    </div>
                    <div>
                        <p style={{paddingLeft:'22px',fontSize:'25px',color:'white',textAlign:'left'}}>Sign-up</p>
                        <p style={{fontSize:'20px',textAlign:'center',color:'white',marginTop:"10px"}}>Manage your account Efficiently</p>
                        <p style={{width:'70%',margin:'0px auto',fontSize:'16px',textAlign:'center',color:'#BABABA',marginTop:"10px"}}>Set-up verify your personal details and begin setting up your profile</p>
                    </div>
                </div>
              </div>

          <div style={{width:'100%',boxSizing:'border-box',minHeight:"60%",display:'flex',flexDirection:"column",justifyContent:'space-between',padding:'40px 15px',boxSizing:"border-box",backgroundImage: 'linear-gradient(to bottom,#05101c,#0d213a)',borderRadius:'25px 25px 0px 0px'}}>
            <div style={{width:'100%',height:'50%'}}>

            <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'25px',color:'white'}}>Username:</p>
                <input type='text' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none'}}/>
              </div>
              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'25px',color:'white'}}>Email:</p>
                <input type='text' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none'}}/>
              </div>

              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'25px',color:'white'}}>Password:</p>
                <input type='password' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none'}}/>
              </div>

              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'25px',color:'white'}}>Confirm&nbsp;Password:</p>
                <input type='password' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none'}}/>
              </div>
              <p style={{textAlign:'center',color:"#BABABA",marginTop:'10px',width:'70%',margin:'0px auto'}}>Forgot Password?</p>
            </div>

            <div style={{width:'100%',height:'50%',marginTop:"20px",display:"flex",justifyContent:"space-around",flexDirection:"column"}}>
              <button style={{width:'80%',margin:'20px auto',color:'white',borderRadius:'15px',backgroundColor:"#02050a",outline:"none",height:'45px',borderWidth:"0px"}}>Sign-up</button>
              <div><p style={{color:"white"}}>Already have an account? &nbsp; &nbsp;</p><Link to="/signin" style={{textDecoration:'none',color:'#007AFF'}}> Sign In</Link></div>
            </div>

            </div>
          </div>
         
        </section>   
       
    </div>;
}
