import React from 'react';
import facebook from './../../socialMedia/facebook.jpg';
import twitter from './../../socialMedia/twitterLogo.jpg';
import telegram from './../../socialMedia/telegram.jpg';
import './footer.css'

export default function Footer() {
  return (
    
        <div className='footerMain' >
        <div className='footerFirst' >
          <div style={{width:'100%',height:'60%'}}>
             <p style={{width:'100%',textAlign:'left',paddingBottom:'30px'}}><strong>Subscribe to our weekly NewsLetter</strong></p>
             <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}><input placeholder='Enter E-mail' style={{paddingLeft:'10px',width:'50%',height:'35px',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}} type='text' /><button style={{width:'40%',height:'35px',backgroundColor:'#0d213a',border:'1px solid transparent',borderRadius:'10px',color:'white'}}>send</button></div>
          </div>
          <div style={{width:'30%',display:'flex',justifyContent:'space-between'}}>
            <img style={{width:'35px',height:'35px',borderRadius:'50%'}} src={twitter}/>
            <img style={{width:'35px',height:'35px',borderRadius:'50%'}} src={facebook}/>
            <img style={{width:'35px',height:'35px',borderRadius:'50%'}} src={telegram}/>
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
