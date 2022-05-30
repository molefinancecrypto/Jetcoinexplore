import React, { useState } from 'react';
import './rulesandreg.css';
import GoToTop from '../Gototop';
import { useNavigate } from 'react-router-dom';

export default function RulesandReg({overallwidth}) {
  const [header,setheader] = useState('Rules & Regulation');
  const [headertoshow,setheadertoshow] = useState(0);
  const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
  const [sliderposition,setsliderposition] = useState({left:0,info:'block',contracts:'none',Link:'none',addons:'none'})

  const navigate = useNavigate()
  const headerList = [<p>Rules & Regulation</p>,<p>DYOR</p>,<p>Privacy & Cookie Policy</p>]
    const step = [<p>step 1</p>,<p>step 2</p>,<p>step 3</p>];



    const rules = ()=>{
      setsliderposition({left:0,info:'block',contracts:'none',Link:'none',addons:'none'});
      setheader('Rules & Regulation')
      if(overallwidth<=900){
          setheadertoshow(0)
      }
  }
  const dyor = ()=>{
      setsliderposition({left:33.3,info:'none',contracts:'block',Link:'none',addons:'none'})
      setheader('DYOR')
      if(overallwidth<=900){
          setheadertoshow(1)
      }
  }

  const pcpolicy = ()=>{
    setsliderposition({left:66.6,info:'none',contracts:'block',Link:'none',addons:'none'})
    setheader('Privacy & Cookie Policy')
    if(overallwidth<=900){
        setheadertoshow(2)
    }
}
  return (
    <div className='rulesandregMain'>
            <div style={{width:'100%',display:'flex',justifyContent:'left',flexDirection:'column'}}>
                <div style={{color:"white",paddingLeft:'2.5%',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
                <p className='enlist'><strong>{header}</strong></p>
            </div>
            <div style={{height:overallwidth<=900?'600px':'800px',width:overallwidth<=900?'100%':'95%',margin:'20px auto',border:'1px solid #112836',backgroundImage: 'linear-gradient(90.18deg, #040B15 35.76%, rgba(6, 17, 31, 10) 110.28%)',borderRadius:'7px',padding:'20px',boxSizing:'border-box'}}>
                {overallwidth<=900?<div style={{width:'100%',position:'relative',textAlign:'center',fontSize:'17px',marginBottom:'20px',paddingTop:'25px'}}>{headerList[headertoshow]}<p style={{width:'auto',fontSize:'11px',padding:'5px',borderRadius:'5px',backgroundColor:'white',opacity:'0.4',color:'black',position:'absolute',top:'0px',left:'0px'}}>{step[headertoshow]}</p></div>:<div style={{display:'flex',position:'relative',border:'0.5px solid grey',borderWidth:'0px 0px 0.5px',paddingTop:'15px',paddingBottom:'15px',justifyContent:'space-around',height:'40px',alignItems:'center',width:'100%'}}>
                    <p style={{cursor:'pointer'}} onClick={ rules}>Rules & Regulation</p>
                    <p  style={{cursor:'pointer'}} onClick={dyor}>DYOR</p>
                    <p style={{cursor:'pointer'}} onClick={ pcpolicy}>Privacy & Cookie Policy</p>
                    <div style={{position:'absolute',backgroundColor:'#062750',width:'33.3%',height:'1px',top:'100%',left:`${sliderposition.left}%`}}></div>
                </div>}
                <div style={{width:'100%',marginTop:'40px'}}></div>

    </div>
    <GoToTop />
    </div>
  )
}
