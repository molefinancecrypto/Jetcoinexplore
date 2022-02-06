import React, {useState} from 'react';
import logo from '../images/coinexploreTwo.png';
import './header.css'
import Hamburgerfile from './Hamburgerfile';


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
        <div className='menuholder' onClick={Onclick} >
           <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </div>
        {showhamburger && < Hamburgerfile setshowhamburger={setshowhamburger}/>}
       
    </div>
    <ul className="lister">
       <li className='list'>Home</li>
       <li className='list'>News</li>
       <li className='list'>Contact Us</li>
       <li className='list'>Coins</li>
    </ul>
  </div>;
}

export default Header;
