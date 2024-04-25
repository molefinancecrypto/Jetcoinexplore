import React, {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Statecontext } from '../CointoviewContext';
import './watchlist.css';
import emptystar from '../../icons/stars/emptystar.png';
import fullstar from '../../icons/stars/fullstar.png';
import GoToTop from '../Gototop';
import { v4 as uuidv4 } from 'uuid';
import { ParticularCoin } from '../../contextfolder/Coindata';
import binancelogo from '../../chainLogo/binanceLogo.png';
import ethereumlogo from '../../chainLogo/ethereumLogo.png';
import ftmlogo from '../../chainLogo/ftmLogo.png';
import maticlogo from '../../chainLogo/maticLogo.png';
import trxlogo from '../../chainLogo/trxLogo.png';

function Watchlist({overallwidth}) {
  const [AllTime,setAllTime] = useContext(Statecontext).alltime;
  const [TodayBest,setTodayBest] = useContext(Statecontext).todaybest;
  const [MarketCap,setMarketCap] = useContext(Statecontext).marketCap;
  const [NewListings,setNewListings] = useContext(Statecontext).newlistings;
    const [watchlistArray,setwatchlistArray] = useContext(Statecontext).watchlistArray;
    const eth = <img alt="ethlogo" src={ethereumlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const binance = <img alt="binancelogo" src={binancelogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const ftm = <img alt="ftmlogo" src={ftmlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const matic = <img alt="maticlogo" src={maticlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const trx = <img alt="trxlogo" src={trxlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const empty = <img alt="emptystar" src={emptystar} style={{width:'20px',height:'100%'}}/>;
    const full = <img alt="fullstar" src={fullstar} style={{width:'20px',height:'100%'}} />;
    const [votes,setvotes] = useState(0);
    const {votevalidation} = ParticularCoin();
    const navigate = useNavigate()
    const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>;
  

    const filterAgent = (cointoFilter,coin,newArray,index) =>{
      let arrayHolder = cointoFilter.filter(ctf=> ctf !== coin);
      arrayHolder.splice(index,0,newArray[0]);
      //arrayHolder[index] = newArray[0];
      //arrayHolder.unshift(newArray[0]);
      return arrayHolder;
  }

    const removeFromWatchlist = (coin)=>{
      if(AllTime.includes(coin)){
        let index = AllTime.indexOf(coin);
        let Newcoinarr = AllTime.splice(index,1);
        Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = false;
        setAllTime((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        setwatchlistArray((prev)=> prev.filter(pre=>pre!==coin))
      }
      else if(TodayBest.includes(coin)){
        let index = TodayBest.indexOf(coin);
        let Newcoinarr = TodayBest.splice(index,1);
        Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = false;
        setTodayBest((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        setwatchlistArray((prev)=> prev.filter(pre=>pre!==coin))
      }
      else if(NewListings.includes(coin)){
        let index = NewListings.indexOf(coin);
        let Newcoinarr = NewListings.splice(index,1);
        Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = false;
        setNewListings((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        setwatchlistArray((prev)=> prev.filter(pre=>pre!==coin))
      }
      else if(MarketCap.includes(coin)){
        let index = MarketCap.indexOf(coin);
        let Newcoinarr = MarketCap.splice(index,1);
        Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = false;
        setMarketCap((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        setwatchlistArray((prev)=> prev.filter(pre=>pre!==coin))
      }
      }

      const voteFunction = ()=>{
        if(votevalidation){
          if(votes<=1){
            setvotes(votes+1);
            
          }
        }
        else{
          alert('please, sign in first to vote')
          navigate('/signin')
        }
      }
    

     
      /*
           useEffect(()=>{
        console.log(watchlistArray)
      })
      */
     
  //coin[Object.keys(coin)]['change'][0]=== "+"?'green':'red'
    return (
    <div className='watchlistcontainer'>
        
            <div style={{width:'80%',padding:'20px',boxSizing:'border-box',margin:'10px auto'}}>
                <p className='watchlistDiv'>Watchlist</p>
                <p className='watchersdiscription'>Follow your favorite coins and tokens!</p>
            </div>
            <div className='divforlinkAndDescriptionWatcher'>
                <div>
                    <p style={{textAlign:'left',fontFamily:'NexaTextLight'}}>Share your watchlist with this public link</p>
                    <p style={{color:'blue',textAlign:'left',fontFamily:'NexaTextLight'}}>https://coinexplore/specialwatchlist</p>
                </div>
                <div className='divforstardescription'>
                    <p className='ptagindescription'>{empty} <span className='spanfordescription'>Add projects to your watchlist by clicking on the empty star</span></p>
                    <p className='ptagindescription'>{full} <span className='spanfordescription'>Watchlisted projects are directly visible, click on the star icon to remove it from your watchlist</span></p>
                    
                </div>
                
            </div>

            <div style={{width:'90%',margin:'0px auto',marginTop:'25px',boxShadow: '0px 0px 50px #0b1f36',borderRadius:'10px 10px 15px 15px'}}>
            <div style={{width:'100%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
           <div className='tableheader'><p className='headerleft' >NAME</p> <div className='headerright'><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p>  <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader'>VOTE</p> </div> <p className='starholder' > </p></div>  
              { watchlistArray!=[]? watchlistArray.map( coin => <div className='coinselector'  key={uuidv4()}>
    
    <div className='tableleft' >
    <div style={{width:'150px',display:'flex',alignItems:'center',justifyContent:"left",padding:'0px'}}>
      <img className='tablecoinlogo' style={{borderRadius:'50%'}} src={coin[Object.keys(coin)]['img']} alt='coinLogo'/>
      <div style={{marginLeft:'15px'}}>
        <p style={{color:'white',textAlign:'left'}}>{coin[Object.keys(coin)]['name']}</p>
        <p style={{color:'grey',textAlign:'left',fontSize:'12px'}}>{coin[Object.keys(coin)]['symbol']}</p>
      </div>    
    </div>
    </div>
       <div className= 'tableright'><p className='chain'><span style={{display:'flex',color:'white',justifyContent:'center',alignItems:"center"}}>{coin[Object.keys(coin)]['chain'] === 'ETH'? eth: coin[Object.keys(coin)]['chain'] === 'BSC'?binance :coin[Object.keys(coin)]['chain'] === 'MATIC'?matic:coin[Object.keys(coin)]['chain'] === 'TRX'?trx:ftm}</span> <span style={{display:'flex',justifyContent:'center',alignItems:"center",marginLeft:'4px'}}>{coin[Object.keys(coin)]['chain']}</span></p>
            <p className='capRank'>{coin[Object.keys(coin)]['market_cap_rank']}</p>
            <p className='price'>{coin[Object.keys(coin)]['price']}</p>
            <p className='launch'>{coin[Object.keys(coin)]['launch']}</p>
            <p className='change' style={{textAlign:'center',flex:'1',display:overallwidth>1100?'block':'none',color:coin[Object.keys(coin)]['change'][0]=== "+"?'green':'red'}}>{coin[Object.keys(coin)]['change']}</p>
            <div style={{display:'flex',flex:'1',alignItems:'center',justifyContent:'center'}}><div onClick={voteFunction} style={{width:'75px',height:"20px",paddingBottom:'27px',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}><p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
              <p  style={{fontSize:'15px'}}>{coin[Object.keys(coin)]['vote']}</p>
              </div>                     
            </div>
       </div>
       <div onClick={() => removeFromWatchlist(coin)}  className='starholder'>{coin[Object.keys(coin)]['watchlist']?full:empty}</div>
    </div> 
    
    ): <div style={{color:'white',fontSize:'35px'}}> Nothing has been added to your watchlist</div>}
    </div>
    </div>
  
    <GoToTop/>
        
    </div>)
}

export default Watchlist