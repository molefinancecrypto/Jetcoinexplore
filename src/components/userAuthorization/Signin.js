import React,{useState, useEffect} from 'react';
import './signin.css';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../images/coinexploreTwo.png'
import { ParticularCoin } from '../../contextfolder/Coindata';
import CustomInput from '../customHooks/CustomInput';




export default function Signin() {
  
  const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
const [usersignupEmail,setusersignupEmail] = useState('');
 const [usersignupPassword,setusersignupPassword] = useState('');
 const {setvotevalidation} = ParticularCoin();
 const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>;
 const navigate = useNavigate()


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
  
  

return <section className='signinholder'>

          <div style={{width:'30%',height:'100%',backgroundColor:"#071323"}}></div>
          <div style={{width:'70%',height:'100%',backgroundColor:"#0C223B"}}></div>
          <div style={{position:'absolute',boxSizing:'border-box',display:'flex',justifyContent:'space-between',left:'0px',height:'80%',padding:'30px',top:'10%',width:"85%",backgroundImage: 'linear-gradient(to right,#071323,#0C223B)',boxShadow: '4px 2px 15px black'}}>
            <div style={{width:'30%',height:'100%',display:'flex',flexDirection:'column',justifyContent:"left",alignItems:'center'}}>
              <img src={logo} alt='Logo' style={{width:'65px',height:'65px'}}/>
              <p style={{color:'white',fontSize:'37px',textAlign:"center",marginTop:'20px'}}>Welcome Back!</p>
              <p style={{color:'grey',textAlign:"center",marginTop:'20px'}}>To keep connected with us pease log-in with your personal informations</p>
            </div>
            <div style={{width:'70%',height:'100%',color:'white',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
              <p style={{fontSize:'27px',marginBottom:'20px'}}>Sign in</p>
              <p style={{fontSize:'17px',color:'grey'}}>Please sign in to continue</p>
              <div style={{width:'50%',position:'relative',margin:'20px auto'}}>
                <p style={{position:'absolute',bottom:'10px',left:'0px'}}>Email:</p>
                <input type='text' style={{width:'100%',paddingLeft:'70px',color:'white',height:'45px',backgroundColor:'transparent',border:'0.5px solid white', borderWidth:'0px 0px 0.5px',outline:'none'}}/>
              </div>
              <div style={{width:'50%',position:'relative',margin:'20px auto'}}>
                <p style={{position:'absolute',bottom:'10px',left:'0px'}}>Password:</p>
                <input type='password' style={{width:'100%',paddingLeft:'140px',color:'white',height:'45px',backgroundColor:'transparent',border:'0.5px solid white', borderWidth:'0px 0px 0.5px',outline:'none'}}/>
              </div>
              <p>Forgot Password?</p>
              <div style={{width:'100%',textAlign:'center'}}><button style={{width:'30%',color:'white',backgroundColor:'#000810',borderRadius:'10px',borderWidth:'0px',outine:'none',height:'45px'}}>Sign in</button></div>
              <p style={{color:'white',marginTop:'35px'}}>
                              Don't have an account? <Link to="/signup" style={{textDecoration:'none',color:'#007AFF'}}> Sign in</Link>
              </p>
            </div>
          </div>
       </section>;
}
