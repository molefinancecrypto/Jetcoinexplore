import React,{useState, useEffect} from 'react';
import './signin.css';
import { NavLink,useNavigate } from 'react-router-dom';
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

          <div style={{width:'45vw',height:'55vh',backgroundColor:'#071321',boxShadow: '10px 2px 15px black',borderRadius:'15px'}}>
             
        
                <div style={{height:"15%", textAlign:'center',border: '0.5px solid grey',borderWidth: '0px 0px 0.5px 0px',justifyContent:'center',display:'flex',alignItems:"center",color:'white'}}>
                   <img src={logo} alt='Logo' style={{width:'40px',height:'40px'}}/>
                </div>
                 
              
             <div style={{width:'100%',height:'85%',padding:'20px',boxSizing:'border-box'}}>
               <p style={{height:'15%',textAlign:'center',color:'white',fontSize:'17px',letterSpacing:'2px'}}>SIGN INTO ACCOUNT</p>
               <div style={{width:'100%',height:'80%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',boxSizing:'border-box'}}>

               <input type='text' placeholder='Enter your mail' style={{textAlign:'center',width:'70%',height:'50px',backgroundColor:'transparent',outline:'none',color:'white',fontSize:'17px',paddingLeft:'7px',border:'0.5px solid grey',borderWidth:'0px 0px 0.5px 0px'}}/>
               <input type='password' placeholder='Enter your password' style={{textAlign:'center',width:'70%',height:'50px',backgroundColor:'transparent',outline:'none',color:'white',fontSize:'17px',paddingLeft:'7px',border:'0.5px solid grey',borderWidth:'0px 0px 0.5px 0px'}}/>
               <input type='submit' value='submit' style={{textAlign:'center',marginTop:'15px',width:'70%',height:'50px',backgroundColor:'rgb(117, 117, 243)',borderRadius:'10px',border:'1px solid #071321'}}/>
               <p style={{textAlign:'center',color:'white'}}>Don't have an account? <NavLink to='/signup'>Sign up</NavLink></p>
               </div>

             </div>
          </div>

       </section>;
}
