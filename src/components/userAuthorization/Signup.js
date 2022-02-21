import React, {useRef, useState,useEffect} from 'react';
import './signup.css'
import { ParticularCoin } from '../../contextfolder/Coindata';
import { Link,useNavigate } from 'react-router-dom';



export default function Signup() {
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
  
  

  return <div className='signup'>
  <div style={{color:"white",width:"100%",textAlign:"left",display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer'}} onClick={()=> navigate('/')}><p>{homeIcon}</p>Back to main Page</div>
  <div className='signupchildWrapper'>
  <div className='signupchild' id='signin'>
    <div className='topofsign'>
      <p style={{fontSize:'20px',color:'whitesmoke'}}><span style={{fontWeight:'750px'}}><strong>Welcome</strong></span>, Please Sign Up</p>
    </div>
    <div className='contentforsign'>
      <div style={{display:'flex',flexDirection:'column',marginTop:'45px'}}>
      <div style={{marginTop:'15px',color:"white"}}><input type="text"  placeholder="Username"   style={{width:'80%',fontSize:'15px',backgroundColor:'transparent' ,color:'white',outline:'none',borderWidth:'0px 0px 1.5px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input></div>
            <div style={{marginTop:'50px',color:"white"}}><input type="text" onChange={onchangeEmail} placeholder="Email"  value={usersignupEmail} style={{width:'80%',fontSize:'15px',backgroundColor:'transparent' ,color:'white',outline:'none',borderWidth:'0px 0px 1.5px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input></div>
            <div style={{marginTop:'50px',color:"white"}}><input type="password" onChange={onchangepassword} placeholder="Password" value={usersignupPassword} style={{width:'80%',fontSize:'15px',backgroundColor:'transparent' ,color:'white',outline:'none',borderWidth:'0px 0px 1.5px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input></div>   

      </div>
      <div style={{ margin:'50px auto',marginTop:'50px',width:'80%'}} onClick={ onfinalsubmit}><input type='button' className='buttonForSign' value={'Sign Up'} ></input></div>
    
      <div className='signinFoot'>
        <div style={{ color:'whitesmoke'}}>Already have an account? <Link to="/signin" style={{textDecoration:'none'}}><p style={{color:'white',textDecoration:'none',display:'inline',border:'2px solid black',marginLeft:"4px"}}>Sign In</p></Link></div></div>
    </div>

  </div>
  </div>
</div>;
}
