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
    const [stars,setstars] = useState(emptystar);
    const [direction,setdirection] = useState('');
    const navigate = useNavigate();
    const {votevalidation} = ParticularCoin()
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

  return <div style={{display:'flex',justifyContent:'space-around',scrollBehavior:'smooth',marginBottom:"0px",textAlign:"center",padding:'10px 5px',boxSizing:'border-box',backgroundColor:'rgb(2, 2, 41)'}}>
  <div className='tableleft' onClick={ ()=>{
    navigate(`/coin/${coin[Object.keys(coin)]['name']}`,{state: coin})}}><img className='tablecoinlogo' src={coin[Object.keys(coin)]['img']} alt='coinLogo'/><p>{coin[Object.keys(coin)]['name']}</p></div>
  <div className= 'tableright'><p className='symbol'>{coin[Object.keys(coin)]['symbol']}</p>
       <p style={{textAlign:'center',width:'20%'}}>{coin[Object.keys(coin)]['market_cap_rank']}</p>
       <p className='launch'>{coin[Object.keys(coin)]['launch']}</p>
       <p style={{textAlign:'center',width:'20%',color:coin[Object.keys(coin)]['change'][0]==='+'? 'green':'red'}}>{coin[Object.keys(coin)]['change']}</p>
       <p style={{textAlign:'center',width:'20%',display:'flex',justifyContent:'space-around'}}><span style={{fontSize:'22px'}}>{votes}</span><span style={{display:'flex'}}><img src={stars} alt="star-state" style={{width:'24px',height:"24px"}} onClick={StarClick}/></span></p>
  </div>
  <GoToTop/>
</div>;
}

export default CoinInfo;




