import React, {useState} from 'react';
import logo from '../images/coinexploreTwo.png';
import './header.css';
import avatar from '../icons/avatar.svg';
import {Link} from 'react-router-dom'


function Header() {
   const [showhamburger, setshowhamburger] = useState(false);

   const Onclick = ()=>{
      setshowhamburger(true)
   }

  return <div className='headercontainer'>
    <div className='logoandtitleholder' style={{display:'flex',fontFamily: "'Dongle', sans-serif",}}>
        
        <div style={{height:"100%", textAlign:'center',display:'flex',alignItems:"center"}}>
           <img src={logo} alt='Logo' style={{width:'40px',height:'40px'}}/>
        </div>
        <div style={{height:"100%", textAlign:'center',display:'flex',alignItems:"center"}}>
            <p style={{fontSize:'47px',textAlign:'left'}}>COIN<span style={{color:'#708AF4'}}>EXPLORE</span></p>    
        </div>
        
           <div className='menuholder' >
              <input className="menuicon" type= "checkbox" id='menu' />
              <label className='open' for='menu'> 
                 <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
              </label>
              <label className='cancel' for='menu'> 
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
              </label>
              <div className='hambugholder'>
              <ul>
               <li className='hamburgli'>Home</li>
               <li className='hamburgli'>News</li>
               <li className='hamburgli'>Contact Us</li>
               <li className='hamburgli'>Coins</li>
               </ul>
           </div> 
           </div>   
           
   
        
       
    </div>
    <ul className="lister">
       <li className='list'><Link to="/addcoin" style={{color:"white",textDecoration:"none"}}>Add Coin</Link></li>
       <li className='list'>Promote</li>
       <li className='list'>News</li>
       <li className='list'>Contact Us</li>
       <p style={{width:'0.5px',height:"33px",backgroundColor:"white",margin:'0px 5px'}}></p>
       <li className='list'><Link to="/signin" style={{color:"white",textDecoration:"none"}}>Sign In</Link></li>
       <li className='list'><Link to="/signup" style={{color:"white",textDecoration:"none"}}>Register</Link></li>
       <img src= {avatar} style={{width:'30px',height:"30px"}}/>
    </ul>
  </div>;
}

export default Header;
