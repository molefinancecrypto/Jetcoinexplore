import './cointable.css'
import React,{useState,useEffect,useRef,useContext} from 'react';
import { CoinObj } from '../coinholder';
import emptystar from '../../icons/stars/emptystar.png';
import fullstar from '../../icons/stars/fullstar.png';
import halfstar from '../../icons/stars/halfstar.png'
import { ParticularCoin } from '../../contextfolder/Coindata';
import { v4 as uuidv4 } from 'uuid';
import CoinInfo from './CoinInfo';
import { useNavigate } from 'react-router-dom';
import binancelogo from '../../chainLogo/binanceLogo.png';
import ethereumlogo from '../../chainLogo/ethereumLogo.png';
import {Statecontext} from '../CointoviewContext';

const CoinsTable = ({overallwidth}) => {
    const[coinhold, setcoinhold] = useState( CoinObj );
    const [coinheader,setcoinheader] = useContext(Statecontext).coinheader;
    const[coins,setcoins] = useState(coinhold);
    const tableref = useRef('');
    
    const inputRef = useRef('');


    const headertablemobile = (choice)=>{
      
       setcoinheader(choice);
      
     }


    
    useEffect( ()=>{
      
      if(coinheader==='first'){

        setcoins(coinhold)
      }

      else if(coinheader==='second'){
        setcoins(coinhold.slice(0,3))
      }
      else if(coinheader==='third'){
        setcoins(coinhold.slice(4,7))
      }

      else{
        setcoins(coinhold.slice(8,11))
      }
      
    },[coinheader])
    
     

  return <div  style={{marginTop:'60px', color:'white',boxSizing:'border-box'}}>
    
      <p className='highlighted' onClick={()=> console.log(tableref.current.offsetTop)}>COINS</p>
      <div style={{width:overallwidth>900?'70%':'90%',fontSize:overallwidth>900?'17px':'11px',display:'flex',justifyContent:'space-between',margin:'15px auto', borderRadius:'15px',boxSizing:'border-box',border:'2px solid #0B1F36'}}><p style={{display:overallwidth>900?'block':'flex',alignItems:'center',justifyContent:'center',border:'0.5px solid #0B1F36',margin:'2px',borderRadius:'15px 0px 0px 15px',borderWidth:'0px 0.5px 0px 0px',padding:'10px',width:'25%',textAlign:'center',boxSizing:'border-box',color:coinheader==='first'?'white':'#BABABA',backgroundColor:coinheader==='first'?'#112836':'transparent',cursor:'pointer'}} onClick={()=>headertablemobile('first')}>Today's Best</p><p style={{border:'0.5px solid #0B1F36',borderWidth:'0px 0.5px 0px 0px',margin:'2px',padding:'10px',width:'25%',textAlign:'center',boxSizing:'border-box',color:coinheader==='second'?'white':'#BABABA',backgroundColor:coinheader==='second'?'#112836':'transparent',display:overallwidth>900?'block':'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}} onClick={()=>headertablemobile('second')}>All Time Best</p><p style={{border:'0.5px solid #0B1F36',borderWidth:'0px 0.5px 0px 0px',margin:'2px',padding:'10px',width:'25%',textAlign:'center',boxSizing:'border-box',color:coinheader==='third'?'white':'#BABABA',backgroundColor:coinheader==='third'?'#112836':'transparent',display:overallwidth>900?'block':'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}} onClick={()=>headertablemobile('third')}>New Listings</p><p style={{padding:'10px',width:'25%',textAlign:'center',boxSizing:'border-box',margin:'2px',color:coinheader==='fourth'?'white':'#BABABA',backgroundColor:coinheader==='fourth'?'#112836':'transparent',borderRadius:'0px 15px 15px 0px',display:overallwidth>900?'block':'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}} onClick={()=>headertablemobile('fourth')}>By Market Cap</p></div>
      <div className='headerClass'>
           <div className='tableheader'><p className='headerleft' >NAME</p> <div className='headerright' ><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p> <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader' >VOTE</p></div></div>
           { coins.length== 0 ?<div style={{fontSize:'30px'}}>NO MATCHES</div> : <div style={{height:'auto',width:'100%',borderRadius:'0px 0px 10px 10px'}}>{coins.map( coin => <CoinInfo overallwidth={overallwidth} coin={coin} key={uuidv4()}/> )}</div>}
      </div>
  </div>;
};

export default CoinsTable;




export function PromotedCoin({overallwidth}) {
  const empty = <img src={emptystar} style={{width:'20px',height:'20px'}}/>;
    const full = <img src={fullstar} style={{width:'20px',height:'20px'}} />;
    const eth = <img src={ethereumlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const binance = <img src={binancelogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
  const [colorvote,setcolorvote] = useState('#FFFFFF ')
  const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>;
  const[coins,setcoins] = useState(CoinObj.slice(0,4));
  const [votes,setvotes] = useState(0);
  const [stars,setstars] = useState(emptystar);
  const {votevalidation} = ParticularCoin();
  const navigate = useNavigate()

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

    useEffect( ()=>{
      setcoins(CoinObj.slice(0,4))
    },[])


  return <div style={{width:'90%',margin:'0px auto',marginTop:'-15px',boxShadow: '0px 0px 50px #0b1f36',borderRadius:'10px 10px 15px 15px'}}>
            <div style={{width:'100%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
           <div className='tableheader'><p className='headerleft' >NAME</p> <div className='headerright'><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p>  <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader'>VOTE</p></div></div>  
              {  coins.map( coin => <div className='coinselector'  key={uuidv4()}>
    
    <div className='tableleft' >
    <div style={{width:'150px',display:'flex',alignItems:'center',justifyContent:"left",padding:'0px'}}>
      <img className='tablecoinlogo' style={{borderRadius:'50%'}} src={coin[Object.keys(coin)]['img']} alt='coinLogo'/>
      <div style={{marginLeft:'15px'}}>
        <p style={{color:'white',textAlign:'left'}}>{coin[Object.keys(coin)]['name']}</p>
        <p style={{color:'grey',textAlign:'left',fontSize:'12px'}}>{coin[Object.keys(coin)]['symbol']}</p>
      </div>    
    </div>
    </div>
       <div className= 'tableright'><p className='chain'><span style={{display:'flex',justifyContent:'center',alignItems:"center"}}>{coin[Object.keys(coin)]['chain'] === 'ETH'? eth:binance}</span> <span style={{display:'flex',justifyContent:'center',alignItems:"center",marginLeft:'4px'}}>{coin[Object.keys(coin)]['chain']}</span></p>
            <p className='capRank'>{coin[Object.keys(coin)]['market_cap_rank']}</p>
            <p className='price'>{coin[Object.keys(coin)]['price']}</p>
            <p className='launch'>{coin[Object.keys(coin)]['launch']}</p>
            <p className='change' style={{textAlign:'center',width:'16.67%',display:overallwidth>700?'block':'none',color:coin[Object.keys(coin)]['change'][0]=== "+"?'green':'red'}}>{coin[Object.keys(coin)]['change']}</p>
            <div style={{minWidth:'75px',width:'20%',display:'flex',alignItems:'center',justifyContent:'center',color:colorvote}}><div style={{width:'75px',height:"20px",paddingBottom:'27px',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}><p style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClick={StarClick}>{arrowforvote}</p>
              <p  style={{fontSize:'15px',color:{colorvote}}}>{coin[Object.keys(coin)]['vote']}</p>
              </div>                     
            </div>
            <div className='starholder'>{coin[Object.keys(coin)]['watchlist']?full:empty}</div>
       </div>
    </div> 
    
    )}
    </div>
    </div>
  
}



