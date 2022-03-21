import React,{useState,useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import { Salesrepinfo } from './Salesrepapi';
import Salesrepidentity from './Salesrepidentity';
import GoToTop from '../Gototop';

function Salesrep() {
    const navigate = useNavigate();

    
    
    const [salesrepclicked,setsalesrepclicked] = useState('1');
    const [showprofile,setshowprofile] = useState(false);
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
  return (
    <div style={{minHeight:'100vh',width:'90vw',margin:'0px auto'}}>
        <div style={{color:"white",width:"100%",margin:'0px auto',textAlign:"left",marginBottom:'15px',display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        <p style={{width:'100%',textAlign:'center',color:'white',fontSize:'35px',letterSpacing:'2px',marginBottom:'15px',boxSizing:'border-box',}}>Sales Representaives</p>
        <div style={{height:'80%',width:'90vw',boxSizing:'border-box',margin:'0px auto',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'75%',height:'100%',backgroundColor:'#071323',border:'2px solid #112836',borderRadius:'10px'}}>
                <div style={{width:'100%',height:'60px',display:'flex',color:'white',boxShadow: '0px 2px 15px black'}}>
                    <p style={{width:'33.33%',display:'flex',justifyContent:'center',alignItems:"center"}}>Name</p>
                    <p style={{width:'33.33%',display:'flex',justifyContent:'center',alignItems:"center"}}>E-Mail</p>
                    <p style={{width:'33.33%',display:'flex',justifyContent:'center',alignItems:"center"}}>Telegram Handle</p>
                </div>
                
                <div style={{width:'100%',paddingTop:'15px',minHeight:'90%',color:'white',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    
                    {Salesrepinfo.map(salesrep => 
                    <div  onClick={ ()=>{
                        setshowprofile(true)
                        setsalesrepclicked(salesrep.id)
                        navigate(`/salesrep`,{state: salesrep})}} style={{cursor:'pointer',backgroundColor:salesrepclicked==salesrep.id?'#0d213a':'transparent',borderRadius:'10px',width:'95%',margin:'0px auto',paddingTop:'15px',paddingBottom:'15px',display:'flex',height:'35px',color:'white',justifyContent:'space-around'}}>
                        <p style={{width:'25%',display:'flex',justifyContent:'center',alignItems:"center"}}>{salesrep.name}</p>
                        <p style={{width:'25%',display:'flex',justifyContent:'center',alignItems:"center"}}>{salesrep.mail}</p>
                        <p style={{width:'25%',display:'flex',justifyContent:'center',alignItems:"center"}}>{salesrep.telegram}</p>
                    </div>)}
                </div>
                
            </div>

            <div style={{width:'20%',height:'40vh',backgroundColor:'#071323',border:'2px solid #112836',borderRadius:'10px'}}>
                        <Salesrepidentity showprofile={showprofile}/>
            </div>
        </div>
        <GoToTop />
    </div>
  )
}

export default Salesrep