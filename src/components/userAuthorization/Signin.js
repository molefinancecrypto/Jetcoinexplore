import React,{useState, useContext} from 'react';
import './signin.css';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../images/coinexploreTwo.png'
import worldimage from './imagesforauth/worldforsigning.jpg';
import GoToTop from '../Gototop';
import { Statecontext } from '../CointoviewContext';

export default function Signin() {
  
  const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
  const [formData,setFormData] = useState({
    email: '',
    password:''})
    const[alertobj,setalertobj] = useContext(Statecontext).alertobj
 const [userObject,setuserObject] = useContext(Statecontext).userObject;
 const navigate = useNavigate()

const{email,password} = formData
const onchangepassword = (event)=>{
  setFormData({...formData,...{'password':event.target.value}})
  
}

const onchangeEmail = (event)=>{
  setFormData({...formData,...{'email':event.target.value}})
}


const onfinalsubmit = async(event)=>{
  event.preventDefault()
  if(email==='' ||password=== ''){
    setalertobj({...alertobj,...{message:'Please fill in all details',trigger:!alertobj.trigger,pass:true}})
    console.log(alertobj)
  }
  else{
   try{
    const returnObj = await fetch('https://apidev.coinexplore.io/api/login', {
      method: 'POST',
      
      headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              
              },
      body: JSON.stringify(formData)
});
console.log(returnObj.status)


const newobj = await returnObj.json()
console.log(newobj)
if(!newobj.success){
  setalertobj({...alertobj,...{message:'Username or Password incorrect.',trigger:!alertobj.trigger,pass:true}})
}
else{

  window.localStorage.setItem('userDetails',JSON.stringify(newobj))
  const userDetail = JSON.parse(window.localStorage.getItem('userDetails'));
  console.log(userDetail)
  const {access_token,username,email,exp} = userDetail;
  setuserObject({...userObject,...{userEmail:email,userUsername:username,token:access_token,exp}})
  setalertobj({...alertobj,...{message:'Succesfully Login',trigger:!alertobj.trigger,pass:true}})
  navigate('/')
}
   }

   catch(error){
      
        setalertobj({...alertobj,...{message:'Please,check your network connections',trigger:!alertobj.trigger,pass:true}})
   }
   
      
      
  }
}
  
  

return <div className='signoverall' > 
        <section className='authsection' >
      
      <div className='secondmain' >
        
        <div  className='leftsideauth' >
          <div onClick={()=> navigate('/')} className='backdivinner' style={{cursor:'pointer'}}>
            <p>{backward}</p>
            <p style={{fontSize:'20px'}}>Back</p>
          </div>
          <img  className='mainbackgroundimg' src={logo} alt='Coinex_logo' style={{width:"20vw", height:"40vh", objectFit:"cover"}}/>
          <div>
            <p style={{fontSize:'40px',color:'#FFFFFF'}}>Welcome Back!</p>
            <p style={{fontSize:'15px',color:'grey'}}>To keep connected with us pease log-in with your personal informations</p>
          </div>
        </div>
        <div className='rightsideauth' >
          <div className='secondrightauth' >
            <div className='upperrightauth' >
                <p style={{fontSize:'30px',marginBottom:'30px',textAlign:'left'}}>SIGN IN</p>
                <div>
                  <p style={{fontSize:'20px',marginBottom:'10px',textAlign:'left',color:'grey'}}>Please sign in to continue</p>
                </div>
            </div>
            <div className='lowerrightauth'>
                  <div className='lowerrightone' >
                      <section className='lowerrightonesection' >
                        <p className='sectioninput' >Email:</p>
                        <input onChange={(event)=>onchangeEmail(event)} className='authinput' type='text' value={formData.email} />
                      </section>
                  </div>
                  <div className='lowerrightone'>
                      <section className='lowerrightonesection' >
                        <p className='sectioninput'>Password:</p>
                        <input onChange={(event)=>onchangepassword(event)} className='authinput' type='password' value={formData.password} />
                      </section>
                  </div>
           
                  <div className='signbuttondiv'>

                    <input onClick={onfinalsubmit} className='signbutton' type='button' value='Sign in' />

                  </div>

                  <div className='signbuttondiv' >

                    <p style={{color:'white',marginTop:'35px'}}>
                      <Link to="/forgotpassword" style={{textDecoration:'none',color:'#007AFF'}}> Forgot Password?</Link>
                    </p>

                    <p style={{color:'white',marginTop:'35px'}}>
                      Don't have an account? <Link to="/signup" style={{textDecoration:'none',color:'#007AFF'}}> Sign up</Link>
                    </p>

                  </div>
                </div>
          </div>
        </div>
          
      

  </div>

</section>
          
       <section className='mobilesignin' >
          <img style={{width:"100%",height:'550px',objectFit:'cover'}}  src={worldimage} alt='first background for auth'/>
          <div style={{width:'100%',height:'550px',position:'absolute',top:'0px',backgroundColor:'#05101c9a'}}></div>
          <div style={{position:'absolute',top:'0px',height:"550px",width:"100%",zIndex:'5'}}>
              <div style={{width:"100%",boxSizing:'border-box',height:'30%',backgroundImage:'linear-gradient(to bottom,#05101c,transparent)'}}>
                <div style={{width:'100%',height:'60%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>  
                    <div onClick={()=> navigate('/')} style={{paddingLeft:'20px',display:'flex',justifyContent:"left"}} >
                        <p>{backward}</p>
                        <p style={{fontSize:'20px',color:'white'}}>Back</p>
                    </div>
                    <div style={{marginTop:'15px'}}>
                        <p style={{paddingLeft:'22px',fontSize:'25px',color:'white',textAlign:'left'}}>Sign-in</p>
                        <p style={{paddingLeft:'22px',fontSize:'17px',textAlign:'left',color:'#BABABA',marginTop:"10px"}}>Plese sign-in to continue</p>
                    </div>
                </div>
              </div>

          <div style={{width:'100%',boxSizing:'border-box',height:"70%",display:'flex',flexDirection:"column",justifyContent:'space-between',padding:'40px 15px',backgroundImage: 'linear-gradient(to bottom,#0d213a,#05101c)',borderRadius:'25px 25px 0px 0px'}}>
            <div style={{width:'100%',height:'50%'}}>
              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',color:'white',paddingTop:'17px'}}>Email:</p>
                <input onChange={(event)=>onchangeEmail(event)} value={formData.email} type='text' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none',paddingBottom:'15px'}}/>
              </div>

              <div style={{width:'80%',height:'45px',display:'flex',justifyContent:'space-between',margin:'20px auto',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                <p style={{marginBottom:'0px',paddingTop:'17px',color:'white'}}>Password:</p>
                <input onChange={(event)=>onchangepassword(event)} value={formData.password} type='password' style={{fontSize:'17px',backgroundColor:'transparent',width:'100%',color:'white',marginBottom:'0px',paddingTop:"30px",boxSizing:'border-box',paddingLeft:'15px',height:'100%',border:'0px solid white',outline:'none',paddingBottom:'15px'}}/>
              </div>
              
            </div>

            <div style={{width:'100%',height:'50%',marginTop:"20px",display:"flex",justifyContent:"space-around",flexDirection:"column"}}>
              <button onClick={onfinalsubmit} style={{width:'80%',margin:'20px auto',marginTop:'10px',color:'white',borderRadius:'15px',backgroundColor:"#02050a",outline:"none",height:'45px',borderWidth:"0px"}}>Sign-in</button>
              <p style={{textAlign:'center',color:"#007AFF",marginBottom:'10px',width:'70%',margin:'0px auto'}}><Link to="/forgotpassword" style={{textDecoration:'none',color:'#007AFF'}}>Forgot Password?</Link></p>
              <div><p style={{color:"white"}}>Don't have an account? &nbsp; &nbsp;</p><Link to="/signup" style={{textDecoration:'none',color:'#007AFF'}}> Sign up</Link></div>
            </div>

            </div>
          </div>
         
        </section>   
       
       <GoToTop />
    </div>;
}


/*
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

*/