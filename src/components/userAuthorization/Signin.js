import React,{useState, useEffect} from 'react';
import './signin.css';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../images/coinexploreTwo.png'
import { ParticularCoin } from '../../contextfolder/Coindata';
import CustomInput from '../customHooks/CustomInput';
import worldimage from './imagesforauth/worldforsigning.jpg';




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
  
  

return <div className='signoverall' > 
          <section className='signinholder'>

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
              <div style={{width:'50%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'25px'}}>Email:</p>
                <input type='text' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none'}}/>
              </div>
              <div style={{width:'50%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'25px'}}>Password:</p>
                <input type='password' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none'}}/>
              </div>
              <p>Forgot Password?</p>
              <div style={{width:'100%',textAlign:'center'}}><button style={{width:'30%',color:'white',backgroundColor:'#000810',borderRadius:'10px',borderWidth:'0px',outine:'none',height:'45px'}}>Sign in</button></div>
              <p style={{color:'white',marginTop:'35px'}}>
                              Don't have an account? &nbsp; &nbsp; <Link to="/signup" style={{textDecoration:'none',color:'#007AFF'}}> Sign up</Link>
              </p>
            </div>
          </div>
       </section>
       <section className='mobilesignin' >
          <img style={{width:"100%",height:'100vh',objectFit:'cover'}}  src={worldimage} alt='first background image for auth'/>
          <div style={{width:'100%',minHeight:'100%',position:'absolute',top:'0px',backgroundColor:'#05101c9a'}}></div>
          <div style={{position:'absolute',top:'0px',height:"100%",width:"100%",zIndex:'5'}}>
              <div style={{width:"100%",boxSizing:'border-box',minHeight:'30%',backgroundImage:'linear-gradient(to bottom,#05101c,transparent)'}}>
                <div style={{width:'100%',height:'60%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>  
                    <div onClick={()=> navigate('/')} style={{paddingLeft:'20px',display:'flex',justifyContent:"left"}} >
                        <p>{backward}</p>
                        <p style={{fontSize:'20px',color:'white'}}>Back</p>
                    </div>
                    <div>
                        <p style={{paddingLeft:'22px',fontSize:'25px',color:'white',textAlign:'left'}}>Sign-in</p>
                        <p style={{paddingLeft:'22px',fontSize:'17px',textAlign:'left',color:'#BABABA',marginTop:"10px"}}>Plese sign-in to continue</p>
                    </div>
                </div>
              </div>

          <div style={{width:'100%',boxSizing:'border-box',minHeight:"70%",display:'flex',flexDirection:"column",justifyContent:'space-between',padding:'40px 15px',boxSizing:"border-box",backgroundImage: 'linear-gradient(to bottom,#05101c,#0d213a)',borderRadius:'25px 25px 0px 0px'}}>
            <div style={{width:'100%',height:'50%'}}>
              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'25px',color:'white'}}>Email:</p>
                <input type='text' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none'}}/>
              </div>

              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'25px',color:'white'}}>Password:</p>
                <input type='password' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none'}}/>
              </div>
              <p style={{textAlign:'center',color:"#BABABA",marginTop:'10px',width:'70%',margin:'0px auto'}}>Forgot Password?</p>
            </div>

            <div style={{width:'100%',height:'50%',marginTop:"20px",display:"flex",justifyContent:"space-around",flexDirection:"column"}}>
              <button style={{width:'80%',margin:'20px auto',color:'white',borderRadius:'15px',backgroundColor:"#02050a",outline:"none",height:'45px',borderWidth:"0px"}}>Sign-in</button>
              <div><p style={{color:"white"}}>Don't have an account? &nbsp; &nbsp;</p><Link to="/signup" style={{textDecoration:'none',color:'#007AFF'}}> Sign up</Link></div>
            </div>

            </div>
          </div>
         
        </section>   
       
       
    </div>;
}
