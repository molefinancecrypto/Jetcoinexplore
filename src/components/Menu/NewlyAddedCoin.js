import '../Mainpage/cointable.css'
import React,{useState,useContext} from 'react';
import emptystar from '../../icons/stars/emptystar.png';
import fullstar from '../../icons/stars/fullstar.png';
import { ParticularCoin } from '../../contextfolder/Coindata';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import binancelogo from '../../chainLogo/binanceLogo.png';
import ethereumlogo from '../../chainLogo/ethereumLogo.png';
import {Statecontext} from '../CointoviewContext';
import GoToTop from '../Gototop';
//import { funcForpage } from './pagerForCoin';


function NewlyAddedCoin({overallwidth}) {
    const [TodayBest,setTodayBest] = useContext(Statecontext).todaybest;
    const empty = <img alt="emptystar" src={emptystar} style={{width:'20px',height:'20px'}}/>;
    const full = <img alt="fullstar" src={fullstar} style={{width:'20px',height:'20px'}} />;
    const eth = <img alt="ethlogo" src={ethereumlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const binance = <img alt="binancelogo" src={binancelogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const [colorvote,setcolorvote] = useState('#FFFFFF ')
    const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>;
    const[coins,setcoins] = useState(TodayBest.slice(0,4));
    const {votevalidation} = ParticularCoin();
    const navigate = useNavigate();
    const [watchlistArray,setwatchlistArray] = useContext(Statecontext).watchlistArray;


    const filterAgent = (cointoFilter,coin,newArray,index) =>{
        let arrayHolder = cointoFilter.filter(ctf=> ctf !== coin);
        arrayHolder.splice(index,0,newArray[0]);
        //arrayHolder[index] = newArray[0];
        //arrayHolder.unshift(newArray[0]);
        return arrayHolder;
    }
      const topVote = (coin) =>{
    
         if(TodayBest.includes(coin)){
          let index = TodayBest.indexOf(coin);
          let Newcoinarr = TodayBest.splice(index,1);
          Newcoinarr[0][Object.keys(Newcoinarr[0])]['vote']++;
          setTodayBest((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        }
      
      }
      
    
    
      //function for watchlist
    
      const addToWatchlist = (coin)=>{
        if(!watchlistArray.includes(coin)){
        
          if(TodayBest.includes(coin)){
            let index = TodayBest.indexOf(coin);
            let Newcoinarr = TodayBest.splice(index,1);
            Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = true;
            setTodayBest((prev)=>filterAgent(prev,coin,Newcoinarr,index));
            setwatchlistArray((prev)=>[...prev,Newcoinarr[0]])
          }
        
          //setwatchlistArray((prev)=>[...prev,coin])
    
          navigate('/watchlist')
        }
        else{
         
          if(TodayBest.includes(coin)){
            let index = TodayBest.indexOf(coin);
            let Newcoinarr = TodayBest.splice(index,1);
            Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = false;
            setTodayBest((prev)=>filterAgent(prev,coin,Newcoinarr,index));
            setwatchlistArray((prev)=> prev.filter(pre=>pre!==coin))
          }  
        }
      }
      
      const voteFunction = (coin)=>{
        if(votevalidation){
         topVote(coin)
        }
        else{
          alert('please, sign in first to vote')
          navigate('/signin')
        }
      }


      return <div style={{width:'95%',height:'500px',paddingTop:'35px',margin:'10px auto',boxSizing:"border-box"}}>
                <div style={{marginTop:'35px'}}><p style={{textAlign:'center',color:'white',fontSize:overallwidth>'700px'?'35px':'25px',letterSpacing:"1.5px",marginBottom:'15px'}}>New Listings</p>
                <div style={{width:'90%',margin:'0px auto',marginTop:'-15px',boxShadow: '0px 0px 50px #0b1f36',borderRadius:'10px 10px 15px 15px'}}>
                  <div style={{width:'100%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
                    <div className='tableheader'><div className='headerleft' ><p style={{display:overallwidth<=700?'none':"block"}}>S/N</p><p style={{width:'150px',textAlign:'center'}}>NAME</p></div> <div className='headerright'><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p>  <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader'>VOTE</p> </div> <p className='starholder' > </p></div>  
                    { coins.map( coin => <div className='coinselector'  key={uuidv4()}>

                      <div className='tableleft'>
                        <p style={{display:overallwidth<=700?'none':'block'}}>{coins.indexOf(coin)+1}</p>
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
                        <p className='change' style={{textAlign:'center',flex:'1',display:overallwidth>1100?'block':'none',color:coin[Object.keys(coin)]['change'][0]=== "+"?'green':'red'}}>{coin[Object.keys(coin)]['change']}</p>
                        <div style={{display:'flex',flex:'1',alignItems:'center',justifyContent:'center',color:colorvote}}>
                          <div onClick={()=>voteFunction(coin)} style={{width:'75px',height:"20px",paddingBottom:'27px',cursor:'pointer',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}>
                            <p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
                            <p  style={{fontSize:'15px',color:{colorvote}}}>{coin[Object.keys(coin)]['vote']}</p>
                          </div>                     
                        </div>
                      </div>
                      <div onClick={() => addToWatchlist(coin)}  className='starholder'>{coin[Object.keys(coin)]['watchlist']?full:empty}</div>
                  </div> )}
                  </div>
                </div>
                </div>
                <GoToTop />
              </div>
}

export default NewlyAddedCoin