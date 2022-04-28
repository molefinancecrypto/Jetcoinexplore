import React,{useState,useEffect,useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';
import Calendar from 'react-calendar';
import { Statecontext } from '../CointoviewContext';


export default function BannerpromoAds({overallwidth}) {

    const uploader = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"/></svg>;
    const[dayarrban,setdayarrban] = useContext(Statecontext).dayarrban;
    const  [triggerlengthban,settriggerlengthban] = useContext(Statecontext).triggerlengthban;
    const [date, setDate] = useState('');
    const setter = (val) => {
        setdayarrban(()=>val);
        settriggerlengthban(prev=>prev-1);
        
      }
     
     
       const clickday = (e)=>{
        let changingday = `${e.getDate()}-${e.getMonth() + 1}-${e.getFullYear()}`
        if(dayarrban.includes(changingday)){
           let newarr = dayarrban;
         let idx = newarr.indexOf(changingday);
         newarr.splice(idx, 1);
         setter(newarr); 
        }
        else{
         setdayarrban(prev=> [...prev,changingday]);
         settriggerlengthban(prev=>prev+1)
         
         
        }    
     }
       
       const tileClassName = (data) => {
        const { _, date, view } = data;
     
        // Check if a date React-Calendar wants to check is on the list of dates to add class to
        if (view === 'month') {
            if (dayarrban.includes(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)) {
                
                
                
                return 'selectedclasstiles';
            }
        }
     }




  return (
    <div style={{padding:overallwidth>900?'20px':'20px 0px'}}>
      <p style={{width:'80%',margin:'10px auto',color:'#BABABA',textAlign:'left',fontFamily:'NexaTextLight',fontSize:'15px'}}>What you get: The coin will be displayed on our promo section, on our home page.</p>
        <div style={{width:overallwidth>900?'50%':'85%',margin:'15px auto',border:'2px solid #0B1F36',borderRadius:'10px'}}>
          <input type='file' style={{width:'100%',marginBottom:'15px',padding:'10px',display:'none'}} id='bannerpromoid'/>
          <p style={{width:'100%',textAlign:'center',padding:'10px',backgroundColor:'#02050a',borderRadius:'10px 10px 0px 0px',fontSize:'17px',boxSizing:'border-box'}}>Banner</p>
          <label for='bannerpromoid' style={{backgroundColor:'red',width:'100px',cursor:'pointer'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',width:overallwidth>900?'60%':'80%',margin:'0px auto',padding:'20px'}}><p>{uploader}</p> <p style={{fontSize:'15px'}}>Upload max: 130 * 130</p></div>  
          </label> 
          
        </div>
        <div style={{width:overallwidth>900?'60%':'85%',border:'2px solid #0B1F36',padding:'10px 5px',borderRadius:'10px',margin:'10px auto',display:'flex',justifyContent:'space-around'}}><p>Ad redirect:</p> &nbsp; <input type='text' placeholder='https://tt.me/coinexplore' style={{backgroundColor:'transparent',width:'50%',fontSize:'13px',color:'white',outline:'none',borderWidth:'0px 0px 0px',letterSpacing:'1.5px'}}/></div>
        <p style={{width:'80%',margin:'5px auto',textAlign:'center',fontFamily:'NexaTextLight',fontSize:'15px'}}>Coin Unavailable? <NavLink to='/addcoin'>Add here</NavLink></p>
        <p style={{width:overallwidth>900?'50%':'70%',margin:'20px auto',textAlign:'center',marginBottom:'5px'}}>AVAILABLE SLOTS</p>
        <Calendar onChange={setDate} value={date} onClickDay={clickday} tileClassName={tileClassName}/>
    </div>
  )
}
