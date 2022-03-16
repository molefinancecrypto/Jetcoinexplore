import React from 'react';
import { useNavigate } from 'react-router-dom';
import facebook from './../../socialMedia/facebook.jpg';
import twitter from './../../socialMedia/twitterLogo.jpg';
import telegram from './../../socialMedia/telegram.jpg';
import './footer.css'

export default function Footer() {
  const navigate = useNavigate();
  return (
    
        <div className='footerMain' >
        <div className='footerFirst' >
          <div style={{width:'100%',height:'60%'}}>
             <p style={{width:'100%',textAlign:'left',paddingBottom:'30px'}}><strong>Subscribe to our weekly NewsLetter</strong></p>
             <div style={{width:'50%',position:'relative'}}><input placeholder='Enter E-mail' style={{paddingLeft:'10px',width:'100%',height:'40px',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}} type='text' /><button style={{width:'25px',position:'absolute',top:'7.5px',backgroundColor:'white',borderRadius:'50%',right:'5px',height:'25px',display:'flex',justifyContent:'center',alignItems:'center'}}><i class="fa fa-telegram" style={{fontSize:"20px"}} aria-hidden="true"></i></button></div>
          </div>
          <div style={{width:'30%',display:'flex',justifyContent:'space-between'}}>
          <i class="fa fa-twitter" style={{fontSize:"30px"}} aria-hidden="true"></i>
          <i class="fa fa-facebook" style={{fontSize:"30px"}} aria-hidden="true"></i>
          <i class="fa fa-telegram" style={{fontSize:"30px"}} aria-hidden="true"></i>
          <i class="fa fa-reddit" style={{fontSize:"30px"}} aria-hidden="true"></i>
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
              <p onClick={()=> navigate('/salesrep')} style={{cursor:'pointer'}}>Sales Rep</p>
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
      </div> 
    
  )
}
