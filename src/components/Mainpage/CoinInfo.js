import React, {useState, useEffect} from 'react';
import './cointable.css';
import emptystar from '../../icons/stars/emptystar.png';
import fullstar from '../../icons/stars/fullstar.png';
import halfstar from '../../icons/stars/halfstar.png';
import { ParticularCoin } from '../../contextfolder/Coindata';
import {useNavigate} from 'react-router-dom'
import binancelogo from '../../chainLogo/binanceLogo.png';
import ethereumlogo from '../../chainLogo/ethereumLogo.png';
import ftmlogo from '../../chainLogo/ftmLogo.png';
import maticlogo from '../../chainLogo/maticLogo.png';
import trxlogo from '../../chainLogo/trxLogo.png';

function CoinInfo({coin,overallwidth,addToWatchlist, topVote,coins}) {
    const [votes,setvotes] = useState(0);
    const empty = <img alt="emptystar" src={emptystar} style={{width:'20px',height:'20px'}}/>;
  
    const full = <img alt="fullstar" src={fullstar} style={{width:'20px',height:'20px'}} />;
    const [colorvote,setcolorvote] = useState('#FFFFFF ')
    const [stars,setstars] = useState(emptystar);
    const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>;
    const navigate = useNavigate();
    const {votevalidation} = ParticularCoin();
    //#B6B3B3
    //#fffff

    const eth = <img alt="ethlogo" src={ethereumlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const binance = <img alt="binancelogo" src={binancelogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const ftm = <img alt="ftmlogo" src={ftmlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const matic = <img alt="maticlogo" src={maticlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const trx = <img alt="trxlogo" src={trxlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const voteFunction = (coin)=>{
        if(votevalidation){
          topVote(coin)
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

  return <div className='main'>
  <div className='tableleft' onClick={ ()=>{
    navigate(`/coin/${coin[Object.keys(coin)]['name']}`,{state: coin})}}>
      <p style={{display:overallwidth<=700?'none':'block'}}>{coins.indexOf(coin)+1}</p>
      <div style={{width:'150px',display:'flex',alignItems:'center',justifyContent:"left",padding:'0px'}}>
      <img className='tablecoinlogo' style={{borderRadius:'50%'}} src={coin[Object.keys(coin)]['img']} alt='coinLogo'/>
      <div style={{marginLeft:'15px'}}>
        <p style={{color:'white',textAlign:'left'}}>{coin[Object.keys(coin)]['name']}</p>
        <p style={{color:'grey',textAlign:'left',fontSize:'12px'}}>{coin[Object.keys(coin)]['symbol']}</p>
      </div>
      </div>
      </div>
  <div className= 'tableright'><p className='chain'><span style={{display:'flex',justifyContent:'center',alignItems:"center"}}>{coin[Object.keys(coin)]['chain'] === 'ETH'? eth: coin[Object.keys(coin)]['chain'] === 'BSC'?binance :coin[Object.keys(coin)]['chain'] === 'MATIC'?matic:coin[Object.keys(coin)]['chain'] === 'TRX'?trx:ftm}</span> <span style={{display:'flex',justifyContent:'center',alignItems:"center",marginLeft:'4px'}}>{coin[Object.keys(coin)]['chain']}</span></p>
       <p className='capRank'>{coin[Object.keys(coin)]['market_cap_rank']}</p>
       <p className='price'>{coin[Object.keys(coin)]['price']}</p>
       <p className='launch'>{coin[Object.keys(coin)]['launch']}</p>
       <p className='change' style={{textAlign:'center',flex: '1',display:overallwidth>1100?'block':'none',color:coin[Object.keys(coin)]['change'][0]=== "+"?'green':'red'}} >{coin[Object.keys(coin)]['change']}</p>
       <div className='high-votes' style={{flex: '1',display:'flex',alignItems:'center',justifyContent:'center',color:colorvote}}><div onClick={()=>voteFunction(coin)} style={{width:'75px',height:"20px",cursor:'pointer',paddingBottom:'27px',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}><p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
          <p style={{fontSize:'15px',color:{colorvote}}}>{coin[Object.keys(coin)]['vote']}</p>
        </div>                        
      </div>
      
  </div>
  <div  onClick={() =>addToWatchlist(coin)} className='starholder'>{coin[Object.keys(coin)]['watchlist']?full:empty}</div>
</div>;
}

export default CoinInfo;




