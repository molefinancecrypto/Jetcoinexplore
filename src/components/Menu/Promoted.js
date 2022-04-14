import React, {useState} from 'react';
import './promotion.css';
import {useNavigate} from 'react-router-dom';
import Calendarcomp from './Calendarcomp';


function Promoted() {
    const navigate = useNavigate();
    const [promosec,setpromosec] = useState(false);
    const del = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>;
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
  return (
    <div style={{width:'90%',minHeight:'100vh',color:'white',padding:'30px 30px',boxSizing:'border-box',backgroundColor:'#071323',borderRadius:'20px',margin:'30px auto',border:'2px solid #0B1F36'}}>
        <div style={{color:"white",paddingTop:'10px',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        <p style={{textAlign:'center',fontSize:'37px',letterSpacing:'1.5px',margin:'20px 0px',color:'white'}}>Promotion</p>
        <div style={{width:'100%',height:'auto',display:'flex',justifyContent:"space-between"}}>
            <div style={{width:'65%',padding:'30px',boxSizing:'border-box',minHeight:'75vh',background: 'linear-gradient(180deg, #040B15 15.79%, rgba(3, 13, 24, 0) 131.04%)',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                <div>
                    <p style={{textAlign:'center',fontSize:'30px'}}>Advertise</p>
                    <div style={{width:'85%',height:'auto',margin:'10px auto',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                        <div style={{border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px',}}><p style={{width:'100%',display:'flex',justifyContent:'space-between',padding:'10px',boxSizing:'border-box'}}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box'}}>Promoted Section &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:'13px',padding:'5px',borderRadius:'10px'}}>$250/day</span></span> <span style={{fontSize:'25px',cursor:'pointer'}} onClick={()=> setpromosec(!promosec)}>{promosec?'-':'+'}</span></p>
                            {promosec && <div style={{width:'100%',height:'auto'}}><Calendarcomp /></div>}
                        </div>
                        <p style={{width:'100%',display:'flex',justifyContent:'space-between',border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px',padding:'10px',boxSizing:'border-box'}}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box'}}>Banner Ad &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:'13px',padding:'5px',borderRadius:'10px'}}>$3000/day</span></span> <span style={{fontSize:'25px'}}>+</span></p>
                        <p style={{width:'100%',display:'flex',justifyContent:'space-between',border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px',padding:'10px',boxSizing:'border-box'}}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box'}}>Custom Ad &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:'13px',padding:'5px',borderRadius:'10px'}}>Contact us</span></span> <span style={{fontSize:'25px'}}>+</span></p>
                    </div>
                </div>
                <div>
                <p style={{textAlign:'center',fontSize:'30px',marginTop:'30px'}}>Discounts</p>
                <p style={{textAlign:'center',color:'#BABABA',width:'80%',margin:'5px auto'}}>Discounts are calculated based on total frequency of orders.
                                                                There are discounts available for 3+ days, 7+days and 14+ days.</p>
                <div style={{width:'80%',margin:'5px auto',borderRadius:'10px',border:'2px solid #0B1F36'}}>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}><span>3+ Days</span><span>10% Off</span></p>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}><span>7+ Days</span><span>20% Off</span></p>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}><span>14+ Days</span><span>30% Off</span></p>
                </div>
                <p style={{textAlign:'center',color:'#BABABA',width:'80%',margin:'5px auto',marginTop:'15px'}}>NB: By completing any purchase or advertising request,you agree that there 
                                                                will be no refunds issued either in part or full, as expressly stated in our <a href="#">Terms & Conditions</a></p>
                </div>
            </div>
            <div style={{width:'30%',height:'80vh',paddingBottom:'20px',paddingTop:'30px',boxSizing:'border-box',background: 'linear-gradient(180deg, #040B15 15.79%, rgba(3, 13, 24, 0) 131.04%)',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                <div>
                    <p style={{textAlign:'center',fontSize:'30px'}}>Orders</p>
                    <div style={{width:'90%',margin:'5px auto',height:'250px',padding:'7px',boxSizing:'border-box',borderRadius:'10px',border:'2px solid #0B1F36'}}>
                        <div style={{display:'flex',justifyContent:'space-around'}}><p style={{width:'10%',textAlign:'center'}}>#</p><div style={{width:'80%',display:'flex',justifyContent:'space-between'}}><p>Item(s)</p><p>Date</p><p>Price</p></div><p style={{width:'10%',textAlign:'center'}}> </p></div>
                    </div>
                </div>
                <div style={{width:'90%',margin:'15px auto',padding:'10px',textAlign:'left',borderRadius:'10px',border:'2px solid #0B1F36'}}>Select payment method</div>
                <div style={{width:'90%',margin:'15px auto',padding:'10px',textAlign:'left',borderRadius:'10px',border:'2px solid #0B1F36'}}>Name:</div>
                <div style={{width:'90%',margin:'15px auto',padding:'10px',textAlign:'left',borderRadius:'10px',border:'2px solid #0B1F36'}}>E-mail:</div>
            </div>
        </div>
    </div>
  )
}

export default Promoted


/* import 'react-calendar/dist/Calendar.css' */