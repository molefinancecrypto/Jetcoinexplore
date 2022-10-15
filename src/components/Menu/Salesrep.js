import React,{useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import { Salesrepinfo } from './Salesrepapi';
import Salesrepidentity from './Salesrepidentity';
import GoToTop from '../Gototop';

function Salesrep() {
    const navigate = useNavigate();
    const avatar = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>

    
    const [windowidth,setwindowidth] = useState(1000);
    const [salesrepclicked,setsalesrepclicked] = useState('1');
    const [showprofile,setshowprofile] = useState(false);
    const [profiledisplay,setprofiledisplay] = useState('block');
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
    const handleResize = ()=> {
        
          setwindowidth(window.innerWidth)

          if(windowidth<900){
              setprofiledisplay('none')
              
          }

          else{
            setprofiledisplay('block')
          }
        
    }
  
    useEffect(() => {
    
        handleResize()
        window.addEventListener('resize', handleResize);
        
      
        return () => {
            window.removeEventListener('resize', handleResize)
          
      }
      })
    
  
    return (
    <div style={{minHeight:'100vh',width:'90vw',margin:'0px auto'}}>
        <div style={{color:"white",width:"100%",margin:'0px auto',textAlign:"left",marginBottom:'15px',display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        <p style={{width:'100%',textAlign:'center',color:'white',fontSize:windowidth<=900?'24px':'35px',letterSpacing:windowidth<=900?'1px':'2px',marginBottom:'15px',boxSizing:'border-box',}}>Sales Representatives</p>
        <div style={{height:'80%',width:'90vw',boxSizing:'border-box',margin:'0px auto',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:windowidth<=900?'100%':'75%',height:'100%',backgroundColor:'#071323',border:'2px solid #112836',borderRadius:'10px'}}>
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
                        <p style={{width:'25%',display:'flex',justifyContent:'center',alignItems:"center"}}>{windowidth<=900?<span style={{display:'flex',justifyContent:'left',width:'100%'}}> <span style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginRight:'5px'}}>{avatar}</span> {salesrep.name}</span>: salesrep.name}</p>
                        <p style={{width:'25%',display:'flex',justifyContent:'center',alignItems:"center"}}>{ windowidth<=900?<i class="fa fa-envelope-o" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i>:salesrep.mail}</p>
                        <p style={{width:'25%',display:'flex',justifyContent:'center',alignItems:"center"}}>{ windowidth<=900? <i class="fa fa-telegram" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i>:salesrep.telegram}</p>
                    </div>)}
                </div>
                
            </div>

            <div style={{width:'20%',height:'300px',backgroundColor:'#071323',border:'2px solid #112836',borderRadius:'10px',display: profiledisplay}}>
                        <Salesrepidentity showprofile={showprofile}/>
            </div>
        </div>
        <GoToTop />
    </div>
  )
}

export default Salesrep