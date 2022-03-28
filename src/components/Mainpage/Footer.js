import React from 'react';
import { useNavigate } from 'react-router-dom';
import facebook from './../../socialMedia/facebook.jpg';
import twitter from './../../socialMedia/twitterLogo.jpg';
import telegram from './../../socialMedia/telegram.jpg';
import './footer.css';
import logo from '../../images/coinexploreTwo.png'

export default function Footer() {
  const navigate = useNavigate();
  return (
    
        <div className='footerMain' >
        <div className='footerFirst' >
          <div  onClick={()=> navigate('/')} className='logoandtitleholder' style={{width:"100%",height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div style={{height:"100%",width:"100%",textAlign:'center',display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={logo} alt='Logo' style={{width:'50px',height:'50px'}}/>
            </div>
            <div className='coinex_footer'>
              <p className='coinexplorefoot'><strong style={{fontWeight:'1200px'}}>COIN</strong><span style={{fontFamily:'NexaTextLight'}}>EXPLORE</span></p>    
            </div>  
          </div>
        </div>
        <div className='footerSecond' >
          <div className='footerSecondMain'>
            <p className='footerTopic'><strong>Our Company</strong></p>
            <div className='footSecondContent'>
              <p>News</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          
        
        <div className='footerSecondMain'>
            <p className='footerTopic' ><strong>Help & Support</strong></p>
            <div className='footSecondContent'>
              <p>DYOR</p>
              <p>Contact Us</p>
              <p>Advertise</p>
              <p onClick={()=> navigate('/salesrep')} style={{cursor:'pointer'}}>Sales Representative</p>
            </div>
          </div>
          <div className='footerSecondMain'>
            <p className='footerTopic' ><strong>Coins</strong></p>
            <div className='footSecondContent'>
              <p>All Time Ranking</p>
              <p>Daily Ranking</p>
              <p>New Listings</p>
              <p>Submit Coin</p>
              <p>Update Coin </p>
            </div>
          </div>
          </div>

          <div className='footerThird' >
          <div style={{width:'100%',height:'60%'}}>
             <p style={{width:'100%',textAlign:'left',paddingBottom:'30px'}}><strong>Subscribe to our weekly NewsLetter</strong></p>
             <div style={{width:'75%',maxWidth:'300px',position:'relative'}}><input placeholder='Enter E-mail' style={{paddingLeft:'10px',width:'100%',height:'40px',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}} type='text' /><button style={{width:'25px',position:'absolute',top:'7.5px',backgroundColor:'white',borderRadius:'50%',right:'5px',height:'25px',display:'flex',justifyContent:'center',alignItems:'center'}}><i class="fa fa-telegram" style={{fontSize:"20px"}} aria-hidden="true"></i></button></div>
          </div>
          <div style={{width:'180px',marginTop:'20px',display:'flex',justifyContent:'space-between'}}>
          <a style={{color:'white' ,textDecoration:"none"}} href='https://twitter.com/Jetoken1' target="_blank" ><i class="fa fa-twitter" style={{fontSize:"30px"}} aria-hidden="true"></i></a>
          <a style={{color:'white' ,textDecoration:"none"}} href='https://www.facebook.com/jetokenofficial/' target="_blank" ><i class="fa fa-facebook" style={{fontSize:"30px"}} aria-hidden="true"></i></a>
          <a style={{color:'white' ,textDecoration:"none"}} href='https://t.me/Jetokenbsc' target="_blank" ><i class="fa fa-telegram" style={{fontSize:"30px"}} aria-hidden="true"></i></a>
          <a style={{color:'white' ,textDecoration:"none"}} href='https://www.reddit.com/r/JeToken/' target="_blank" ><i class="fa fa-reddit" style={{fontSize:"30px"}} aria-hidden="true"></i></a>
          </div>
        
        </div>

      </div> 
    
  )
}
