import React, {useRef, useState,useEffect} from 'react';
import './signup.css'
import { ParticularCoin } from '../../contextfolder/Coindata';
import { Link,useNavigate } from 'react-router-dom'


export default function Signup() {
 const [usersignupEmail,setusersignupEmail] = useState('');
 const [usersignupPassword,setusersignupPassword] = useState('');
 const {setvotevalidation} = ParticularCoin();
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
      navigate('/coin')
      
     }
}
  
  

  return <div className='signup'>
    <div className='signupchild'>
      <div className='topofsign'>
        <p style={{fontSize:'20px',color:'whitesmoke'}}>Create Account</p>
      </div>
      <div className='contentforsign'>
        <div style={{marginTop:"15px", fontSize:'10px',color:'whitesmoke'}}>Already created an account? <p style={{color:'white',textDecoration:'none',display:'inline',border:'2px solid black',marginLeft:"4px"}}><Link to="/signin" style={{color:'white'}}> Sign In</Link></p></div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'45px'}}>
              <div style={{marginTop:'15px',color:"white"}}><p>E-mail Address</p><input type="text" onChange={onchangeEmail}  value={usersignupEmail} style={{width:'80%',fontSize:'25px',backgroundColor:'rgb(107, 107, 150)' ,color:'white'}}></input></div>
              <div style={{marginTop:'15px',color:"white"}}><p>Password</p><input type="password" onChange={onchangepassword} value={usersignupPassword} style={{width:'80%',fontSize:'25px',backgroundColor:'rgb(107, 107, 150)',color:'white'}}></input></div>   

        </div>
        <div style={{ marginTop:"10px",textAlign:'right'}} onClick={ onfinalsubmit}><input type='button' value={'Submit'} style={{backgroundColor:'red',borderRadius:'10px',width:'80px',color:'white',height:"20px"}}></input></div>
      </div>

    </div>
  </div>;
}
