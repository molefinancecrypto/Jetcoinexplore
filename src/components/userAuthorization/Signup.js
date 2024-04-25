import React, {useState,useContext} from 'react';
import './signup.css'
import { Statecontext } from '../CointoviewContext';
import { ParticularCoin } from '../../contextfolder/Coindata';
import { Link,useNavigate } from 'react-router-dom';
import worldimage from './imagesforauth/worldforsigning.jpg';
import bubble from './imagesforauth/bubblesforsigning.jpg';
import GoToTop from '../Gototop';

export default function Signup() {
const[alertobj,setalertobj] = useContext(Statecontext).alertobj  
const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
 const [formData,setFormData] = useState({
  name: "",
  email: '',
  password:'',
confirm_password:''})
  
  const{username,email,password,confirm_password} = formData
/*const [usersignupEmail,setusersignupEmail] = useState('');
 const [usersignupPassword,setusersignupPassword] = useState('');*/
 const {setvotevalidation} = ParticularCoin();
 let navigate = useNavigate()

const onchangepassword = (event)=>{
  //setusersignupPassword(event.target.value)
  setFormData({...formData,...{'password':event.target.value}})
  
}

const onchangeUsername = (event)=>{
  setFormData({...formData,...{'name':event.target.value}})
}

const onchangePasswordTwo = (event)=>{
  setFormData({...formData,...{'confirm_password':event.target.value}})
}


const onchangeEmail = (event)=>{
  //setusersignupEmail(event.target.value)
  setFormData({...formData,...{'email':event.target.value}})
}

const onfinalsubmit = async (event)=>{
     event.preventDefault()
     if(username==='' ||password=== ''||email=== ''||confirm_password===''){
      setalertobj({...alertobj,...{message:'Fill in all details',trigger:!alertobj.trigger,pass:true}})
       
     }

     else if(password!== confirm_password){
      setalertobj({...alertobj,...{message:"Your password don't match",trigger:!alertobj.trigger,pass:true}})
  
     }
     else{
      console.log(formData)
      try{

      
      const returnObj = await fetch('https://apidev.coinexplore.io/api/users/add', {
                                              method: 'POST',
                                              headers: {
                                                      'Accept': 'application/json',
                                                      'Content-Type': 'application/json'
                                                      },
                                              body: JSON.stringify({...formData,...{username:formData.username}})
                                   });
      const newobj = await returnObj.json()
      console.log(newobj)


      const activateObj = await fetch('https://apidev.coinexplore.io/api/activate', {
                                              method: 'POST',
                                              headers: {
                                                      'Accept': 'application/json',
                                                      'Content-Type': 'application/json'
                                                      },
                                              body: JSON.stringify({activation_key:"123456",email:formData.email})
                                   });
      const activateObjJson = await activateObj.json()
      console.log(activateObjJson)
      setalertobj({...alertobj,...{message:"Succesfully registered, sign in.",trigger:!alertobj.trigger,pass:true}})
      
      setvotevalidation(true);
      navigate('/')
      
     }
    catch(error){
      setalertobj({...alertobj,...{message:"Please, check your internet connection.",trigger:!alertobj.trigger,pass:true}})
    }

    }
}
  

  return <div className='signupoverall'>
  
  <section className='authsection' >
      
          <div className='secondmain' >
            <div  className='leftsideauth' >
               <img className='mainbackgroundimg'  src={worldimage} alt='first background for auth'/>
               <div className='secondimgholder' >
                  <img className='secondimg'  src={bubble} alt='second background for auth'/>  
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
                            <input className='authinput' type='text' value={formData.name}  onChange={onchangeUsername}/>
                          </section>

                          <section className='lowerrightonesection' >
                            <p className='sectioninput'>Email:</p>
                            <input className='authinput' type='text' value={email} onChange={onchangeEmail}/>
                          </section>
                      </div>

                      <div className='lowerrightone'>
                          <section className='lowerrightonesection' >
                            <p className='sectioninput'>Password:</p>
                            <input className='authinput' type='password' value={password}  onChange={onchangepassword}/>
                          </section>

                          <section className='lowerrightonesection' >
                            <p className='sectioninput'>Confirm password:</p>
                            <input className='authinput' type='password' value={confirm_password}  onChange={onchangePasswordTwo}/>
                          </section>
                      </div>
               
                      <div className='signbuttondiv'>

                        <input onClick={(event)=>onfinalsubmit(event)} className='signbutton' type='button' value='Create Account' />

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
          <img style={{width:"100%",height:"800px",objectFit:'cover'}}  src={worldimage} alt='first background for auth'/>
          <div style={{width:'100%',height:"800px",position:'absolute',top:'0px',backgroundColor:'#05101c9a'}}></div>
          <div style={{position:'absolute',top:'0px',height:"800px",width:"100%",zIndex:'5'}}>
              <div style={{width:"100%",paddingBottom:'25px',boxSizing:'border-box',minHeight:'25%',backgroundImage:'linear-gradient(to bottom,#05101c,transparent)'}}>
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

          <div style={{width:'100%',boxSizing:'border-box',height:"75%",display:'flex',flexDirection:"column",justifyContent:'space-between',padding:'40px 15px',backgroundImage: 'linear-gradient(to bottom,#0d213a,#05101c)',borderRadius:'25px 25px 0px 0px'}}>
            <div style={{width:'100%',height:'50%'}}>

            <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'17px',color:'white'}}>Username:</p>
                <input type='text' value={username}  onChange={onchangeUsername} style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none',paddingBottom:'15px'}}/>
              </div>
              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'17px',color:'white'}}>Email:</p>
                <input type='text' value={email}  onChange={onchangeEmail} style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none',paddingBottom:'15px'}}/>
              </div>

              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'17px',color:'white'}}>Password:</p>
                <input value={password}  onChange={onchangepassword} type='password' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none',paddingBottom:'15px'}}/>
              </div>

              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'17px',color:'white'}}>Confirm&nbsp;Password:</p>
                <input value={confirm_password}  onChange={onchangePasswordTwo} type='password' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none',paddingBottom:'15px'}}/>
              </div>
              
            </div>

            <div style={{width:'100%',height:'50%',marginTop:"20px",display:"flex",justifyContent:"space-around",flexDirection:"column"}}>
              <button onClick={(event)=>onfinalsubmit(event)} style={{width:'80%',margin:'20px auto',color:'white',borderRadius:'15px',backgroundColor:"#02050a",outline:"none",height:'45px',borderWidth:"0px"}}>Sign-up</button>
              <div><p style={{color:"white"}}>Already have an account? &nbsp; &nbsp;</p><Link to="/signin" style={{textDecoration:'none',color:'#007AFF'}}> Sign In</Link></div>
            </div>

            </div>
          </div>
         
        </section>   
       <GoToTop />
    </div>;
}
