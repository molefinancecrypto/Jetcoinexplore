import React from 'react';
import './hamburger.css'

function Hamburgerfile({setshowhamburger}) {

  const Onclick = ()=>{
    setshowhamburger(false)
  }

  return <>
      <ul style={{backgroundColor:'rgb(0, 0, 24)',width:'140px',height:'170px',listStyle:'none',position:'absolute',right:'0px',top:'0px',padding:'0px',border:'1px solid black'}}>
          <p onClick={Onclick} style={{marginTop:'0px',padding:'2px',height:'24px',width:'24px',backgroundColor:'white'}}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></p>
          <li className='hamburgli'>Home</li>
          <li className='hamburgli'>News</li>
          <li className='hamburgli'>Contact Us</li>
          <li className='hamburgli'>Coins</li>
      </ul>
  </>;
}

export default Hamburgerfile;
