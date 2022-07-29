import React,{useState,useContext} from 'react';
import './contactUs.css';
import { useNavigate  } from 'react-router-dom';
import GoToTop from '../Gototop';
import { Statecontext } from '../CointoviewContext';

export default function ContactUs({overallwidth}) {
    const [firstname,setfirstname] = useState('')
    const [lastname,setlastname] = useState('')
    const [email,setemail] = useState('')
    const [message,setmessage] = useState('')
    const [userObject,setuserObject] = useContext(Statecontext).userObject;

    const navigate = useNavigate()
    const changeFirstname = (event)=>{
        setfirstname(event.target.value)
      }

      const changeLastname = (event)=>{
        setlastname(event.target.value)
      }
      const changeEmail = (event)=>{
        setemail(event.target.value)
      }

      const changeMessage = (event)=>{
        setmessage(event.target.value)
      }


      const onfinalsubmit = async(event)=>{
        event.preventDefault()
        if(email==='' ||firstname=== ''||lastname===''||message===''){
          alert('please fill in your details')
        }
        else{
         if(userObject.token!=='' || userObject.exp*1000> new Date().getTime()){
          console.log('a')
          const returnObj = await fetch('https://apidev.coinexplore.io/api/contact', {
            method: 'POST',
            
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userObject.token}`
                    },
            body: JSON.stringify({
              firstname,
              lastname,
              email,
              message
            })
         });
         const newobj = await returnObj.json()
        if(newobj.success){
           alert('Your message has been sent succesfully!')
          }
        else{
          alert('Please, retry')
        }
        }

    else{
      alert('Please, sign in first to send messages')
    }
         }
         
    
        
      }


    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
  
  
  
    return (
    <div className='contactHolder'>
        <div style={{width:'100%',display:'flex',justifyContent:'left',flexDirection:'column'}}>
                <div style={{color:"white",paddingLeft:'2.5%',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
                <p className='enlist'><strong>GET IN TOUCH!</strong></p>
        </div>

        <div className='contactlayerOne'>
            <div className='contactlayerTwo' >
                <div className='contactdivOne' >
                    <div style={{width:'100%',marginTop:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                        <p style={{marginBottom:'10px',textAlign:'left',color:'white',letterSpacing:'1.5px',fontSize:'20px'}}>First Name:</p>
                        <input onChange={changeFirstname} value={firstname} type='text' style={{fontSize:'15px',fontFamily:'NexaTextLight',paddingLeft:'5px',backgroundColor:'transparent',width:'100%',color:'white',paddingBottom:'10px',boxSizing:'border-box',border:'0px solid white',outline:'none'}}/>
                    </div>

                    <div style={{width:'100%',marginTop:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between',border:'0.5px solid white',borderWidth:'0px 0px 0.5px'}}>
                        <p style={{marginBottom:'10px',textAlign:'left',color:'white',letterSpacing:'1.5px',fontSize:'20px'}}>Last Name:</p>
                        <input onChange={changeLastname} value={lastname} type='text' style={{fontSize:'17px',fontFamily:'NexaTextLight',paddingLeft:'5px',backgroundColor:'transparent',width:'100%',color:'white',paddingBottom:'10px',boxSizing:'border-box',border:'0px solid white',outline:'none'}}/>
                    </div>
                    <div style={{width:'100%',marginTop:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between',border:'0.5px solid white',borderWidth:'0px 0px 0.5px',boxSizing:'border-box'}}>
                        <p style={{marginBottom:'10px',textAlign:'left',color:'white',letterSpacing:'1.5px',fontSize:'20px'}}>Email:</p>
                        <input onChange={changeEmail} value={email} type='email' style={{fontSize:'17px',fontFamily:'NexaTextLight',paddingLeft:'5px',backgroundColor:'transparent',width:'100%',color:'white',paddingBottom:'10px',boxSizing:'border-box',border:'0px solid white',outline:'none'}}/>
                    </div>
                </div>

                <div className='contactdivTwo' >
                <section style={{textAlign:'left',width:'100%',height:'100%',boxSizing:'border-box'}}>
                            <p style={{textAlign:'left',height:'20%',color:'white',paddingBottom:overallwidth<=900?'5px':'15px',boxSizing:'border-box'}}>Message</p>
                            <textarea  onChange={changeMessage} value={message} style={{height:'80%',paddingTop:'10px',paddingLeft:'10px',boxSizing:'border-box',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',fontFamily:'NexaTextLight',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section>

                </div>
                
            </div>
            <div>
                  <button onClick={onfinalsubmit} style={{width:overallwidth<=900?'100px':'250px',padding:'3.5px',height:'40px',cursor:'pointer',backgroundColor:'#02050a',outline:'none',border:'2px solid #02050a',borderRadius:'5px',color:'white'}}>submit</button>    
                </div>
        </div>
      <GoToTop />
    </div>
  )
}
