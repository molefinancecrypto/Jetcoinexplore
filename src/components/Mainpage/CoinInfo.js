import React, {useState, useEffect} from 'react';
import './cointable.css';
import emptystar from '../../icons/stars/emptystar.png';
import fullstar from '../../icons/stars/fullstar.png';
import halfstar from '../../icons/stars/halfstar.png';
import { ParticularCoin } from '../../contextfolder/Coindata';
import {Link, useNavigate} from 'react-router-dom'
import GoToTop from '../Gototop';

function CoinInfo({coin}) {
    const [votes,setvotes] = useState(0);
    const [colorvote,setcolorvote] = useState('#797878 ')
    const [stars,setstars] = useState(emptystar);
    const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 24 24" width="17px" fill= {colorvote}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>;
    const [direction,setdirection] = useState('');
    const navigate = useNavigate();
    const {votevalidation} = ParticularCoin();
    //#B6B3B3
    //#fffff
    const StarClick = ()=>{
        if(votevalidation){
          if(votes<=1){
            setvotes(votes+1);
            
          }
        }
        else{
          alert('please log in to vote')
          navigate('/signin')
        }
      }

    
 
      
  
      useEffect(
        ()=>{
          if(votes===1){
            setstars(halfstar)
          }
  
          if(votes===2){
            setstars(fullstar)
          }
  
        },[votes])

  return <div className='coinselector'>
  <div className='tableleft' onClick={ ()=>{
    navigate(`/coin/${coin[Object.keys(coin)]['name']}`,{state: coin})}}>
      <div style={{width:'150px',display:'flex',alignItems:'center',justifyContent:"left",padding:'0px'}}>
      <img className='tablecoinlogo' style={{borderRadius:'50%'}} src={coin[Object.keys(coin)]['img']} alt='coinLogo'/>
      <p style={{marginLeft:'15px'}}>{coin[Object.keys(coin)]['name']}</p>
      </div>
      </div>
  <div className= 'tableright'><p className='symbol'>{coin[Object.keys(coin)]['symbol']}</p>
       <p className='capRank'>{coin[Object.keys(coin)]['market_cap_rank']}</p>
       <p className='launch'>{coin[Object.keys(coin)]['launch']}</p>
       <p className='change' >{coin[Object.keys(coin)]['change']}</p>
       <div style={{minWidth:'55px',width:'20%',display:'flex',alignItems:'center',justifyContent:'center',color:colorvote}}><div style={{width:'55px',height:"55px",padding:'4px',backgroundColor:'rgba(8, 52, 107,0.4)'}}><p style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClick={StarClick}>{arrowforvote}</p>
                                                                                                 <p  style={{fontSize:'15px',color:{colorvote}}}>{votes}</p>
                                                                                              </div>                      
      </div>
  </div>
  <GoToTop/>
</div>;
}

export default CoinInfo;




