import React, { useState,useContext,useEffect } from 'react';
import './rulesandreg.css';
import GoToTop from '../Gototop';
import { useNavigate } from 'react-router-dom';
import { Statecontext } from '../CointoviewContext';
import TermsHolder from './HolderOfTerms/TermsHolder';
import DyorHolder from './HolderOfTerms/DyorHolder'
import PrivacyHolder from './HolderOfTerms/PrivacyHolder'


export default function RulesandReg({overallwidth}) {
  const [headerterms,setheaderterms] = useContext(Statecontext).headerterms;
  const [headertoshow,setheadertoshow] = useContext(Statecontext).headertoshow;
  const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
  const [sliderposition,setsliderposition] = useState({left:0,info:'block',contracts:'none',Link:'none',addons:'none'})

  const navigate = useNavigate()
  const headerList = [<p>Terms & conditions</p>,<p>DYOR</p>,<p>Privacy & Cookie Policies</p>]
    



    const rules = ()=>{
      setsliderposition({left:0,info:'block',contracts:'none',Link:'none',addons:'none'});
      setheaderterms('Terms & Conditions')
      if(overallwidth<=900){
          setheadertoshow(0)
      }
  }
  const dyor = ()=>{
      setsliderposition({left:66.6,info:'none',contracts:'block',Link:'none',addons:'none'})
      setheaderterms('DYOR')
      if(overallwidth<=900){
          setheadertoshow(1)
      }
  }

  const pcpolicy = ()=>{
    setsliderposition({left:33.3,info:'none',contracts:'block',Link:'none',addons:'none'})
    setheaderterms('Privacy & Cookie Policies')
    if(overallwidth<=900){
        setheadertoshow(2)
    }
}

  return (
    <div className='rulesandregMain'>
            <div style={{width:'100%',display:'flex',justifyContent:'left',flexDirection:'column'}}>
                <div style={{color:"white",paddingLeft:'2.5%',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
                <p className={overallwidth<700?'none':'enlist'}><strong>{headerterms}</strong></p>
            </div>
            <div style={{display:overallwidth<700?'flex':'none',justifyContent:'space-around',width:'95%',margin:'20px auto'}}><p onClick={()=>{setheadertoshow(0);setheaderterms('Terms & Conditions')}} className= {headertoshow===0?'mobilebuttonrandr':'mobilebuttonrandrgrey'}>Terms & Conditions</p><p onClick={()=>{setheadertoshow(2);setheaderterms('Privacy & Cookie Policies')}} className= {headertoshow===2?'mobilebuttonrandr':'mobilebuttonrandrgrey'}>Privacy Policy</p><p onClick={()=>{setheadertoshow(1);setheaderterms('DYOR')}} className= {headertoshow===1?'mobilebuttonrandr':'mobilebuttonrandrgrey'}>DYOR</p></div>
            <div style={{height:'auto',width:overallwidth<=900?'100%':'95%',margin:'20px auto',border:'1px solid #112836',backgroundImage: 'linear-gradient(90.18deg, #040B15 35.76%, rgba(6, 17, 31, 10) 110.28%)',borderRadius:'7px',padding:'20px',paddingTop:'0px',boxSizing:'border-box'}}>
                <div style={{display:overallwidth<=700?'none':'flex',position:'relative',border:'0.5px solid grey',borderWidth:'0px 0px 0.5px',paddingTop:'15px',paddingBottom:'15px',height:'40px',alignItems:'center',width:'100%'}}>
                  <p style={{cursor:'pointer',textAlign:'center',width:'33.3%'}} onClick={ rules}>Terms & Conditions</p>
                  <p style={{cursor:'pointer',textAlign:'center',width:'33.3%'}} onClick={ pcpolicy}>Privacy & Cookie Policies</p>
                  <p  style={{cursor:'pointer',textAlign:'center',width:'33.3%'}} onClick={dyor}>DYOR</p>
                  <div style={{position:'absolute',backgroundColor:'#062750',width:'33.3%',height:'1px',top:'100%',left:headerterms==='Terms & Conditions'?'0%':headerterms==='Privacy & Cookie Policies'?'33.3%':'66.6%'}}></div>
                </div>
                <div style={{width:'100%',marginTop:overallwidth<='700px'?'20px':'40px',height:'auto'}}>{headerterms==='Terms & Conditions'?<TermsHolder/>:headerterms==='Privacy & Cookie Policies'?<PrivacyHolder/>:<DyorHolder />}</div>

    </div>
    <GoToTop />
    </div>
  )
}
