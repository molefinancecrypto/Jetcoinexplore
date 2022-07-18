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
//import { funcForpage } from './pagerForCoin';
import datapager from './pagerForCoin';

const CoinsTable = ({overallwidth}) => {
  const [AllTime,setAllTime] = useContext(Statecontext).alltime;
  const [TodayBest,setTodayBest] = useContext(Statecontext).todaybest;
  const [MarketCap,setMarketCap] = useContext(Statecontext).marketCap;
  const [NewListings,setNewListings] = useContext(Statecontext).newlistings;
    const[coinhold, setcoinhold] = useState( CoinObj );
    const [coinheader,setcoinheader] = useContext(Statecontext).coinheader;
    const[coins,setcoins] = useState(AllTime);
    const dropdown = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/></svg>;
    const dropup = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14l5-5 5 5H7z"/></svg>;
    const[todropfilter,settodropfilter] = useState(false);
    const[chainfilter,setchainfilter] = useState('ALL');
    const[coinpageindex,setcoinpageindex] = useState(0);
    const[coinpage,setcoinpage] = useState(datapager);
    const tableref = useRef('');
    const [changepagebyfoot,setchangepagebyfoot] = useContext(Statecontext).changepagebyfoot
    const [changefootcheck,setchangefootcheck] = useContext(Statecontext).changefootcheck
    const inputRef = useRef('');
    const forward = <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="25px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg> 
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="25px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
    const [watchlistArray,setwatchlistArray] = useContext(Statecontext).watchlistArray;
    let newArray = [];
    const navigate = useNavigate();
  const funcForpager = (pager)=>{
    let idholder = 0;
    for(let i =0; i<pager.length; i += 8){
      let newsobj = pager.slice(i,i+8);
      newArray.push(newsobj)
    }
  return newArray;
  }


  const filterAgent = (cointoFilter,coin,newArray,index) =>{
      let arrayHolder = cointoFilter.filter(ctf=> ctf !== coin);
      arrayHolder.splice(index,0,newArray[0]);
      //arrayHolder[index] = newArray[0];
      //arrayHolder.unshift(newArray[0]);
      return arrayHolder;
  }
  //function for watchlist

  const addToWatchlist = (coin)=>{
    if(!watchlistArray.includes(coin)){
      if(AllTime.includes(coin)){
        let index = AllTime.indexOf(coin);
        let Newcoinarr = AllTime.splice(index,1);
        Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = true;
        setAllTime((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        setwatchlistArray((prev)=>[...prev,Newcoinarr[0]])

      }
      else if(TodayBest.includes(coin)){
        let index = TodayBest.indexOf(coin);
        let Newcoinarr = TodayBest.splice(index,1);
        Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = true;
        setTodayBest((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        setwatchlistArray((prev)=>[...prev,Newcoinarr[0]])
      }
      else if(NewListings.includes(coin)){
        let index = NewListings.indexOf(coin);
        let Newcoinarr = NewListings.splice(index,1);
        Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = true;
        setNewListings((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        setwatchlistArray((prev)=>[...prev,Newcoinarr[0]])
      }
      else if(MarketCap.includes(coin)){
        let index = MarketCap.indexOf(coin);
        let Newcoinarr = MarketCap.splice(index,1);
        Newcoinarr[0][Object.keys(Newcoinarr[0])]['watchlist'] = true;
        setMarketCap((prev)=>filterAgent(prev,coin,Newcoinarr,index));
        setwatchlistArray((prev)=>[...prev,Newcoinarr[0]])
      }
      //setwatchlistArray((prev)=>[...prev,coin])

      navigate('/watchlist')
    }
    else{
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
  }

//function to increase vote after authentication

const filterToVote = (cointoFilter,coin,newArray,index) =>{
  let arrayHolder = cointoFilter.filter(ctf=> ctf !== coin);
  arrayHolder.splice(index,0,newArray[0]);
  //arrayHolder[index] = newArray[0];
  //arrayHolder.unshift(newArray[0]);
  return arrayHolder;
}

const topVote = (coin) =>{
  if(AllTime.includes(coin)){
    let index = AllTime.indexOf(coin);
    let Newcoinarr = AllTime.splice(index,1);
    Newcoinarr[0][Object.keys(Newcoinarr[0])]['vote']++;
    setAllTime((prev)=>filterToVote(prev,coin,Newcoinarr,index));

  }
  else if(TodayBest.includes(coin)){
    let index = TodayBest.indexOf(coin);
    let Newcoinarr = TodayBest.splice(index,1);
    Newcoinarr[0][Object.keys(Newcoinarr[0])]['vote']++;
    setTodayBest((prev)=>filterToVote(prev,coin,Newcoinarr,index));
  }
  else if(NewListings.includes(coin)){
    let index = NewListings.indexOf(coin);
    let Newcoinarr = NewListings.splice(index,1);
    Newcoinarr[0][Object.keys(Newcoinarr[0])]['vote']++;
    setNewListings((prev)=>filterToVote(prev,coin,Newcoinarr,index));
  }
  else if(MarketCap.includes(coin)){
    let index = MarketCap.indexOf(coin);
    let Newcoinarr = MarketCap.splice(index,1);
    Newcoinarr[0][Object.keys(Newcoinarr[0])]['vote']++;
    setMarketCap((prev)=>filterToVote(prev,coin,Newcoinarr,index));
  }
}







  const rightpage = ()=>{
    if(coinpageindex===coinpage.length-1){
      setcoinpageindex(0)
    }
    else{
      setcoinpageindex(coinpageindex+1)
    }
  }

  const leftpage = ()=>{
    if(coinpageindex===0){
      setcoinpageindex(coinpage.length-1)
    }
    else{
      setcoinpageindex(coinpageindex-1)
    }
  }
  
    const headertablemobile = (choice)=>{
      
       setcoinheader(choice);
      
     }

     const pagechangedfromfooter = (rf)=>{
      setchangefootcheck(changepagebyfoot);
       window.scrollTo(0,rf.current.offsetTop)
     }


    //usEffect to scroll to cointable from footer 

    useEffect(()=>{
      if(changefootcheck === changepagebyfoot){
        window.scrollTo(0,0)
      }
      else{
        pagechangedfromfooter(tableref)
      }
    },[changepagebyfoot])

    
    
    useEffect(()=>{
      
      if(chainfilter==='ALL'){
        if(coinheader==='first'){
          const arraypager = funcForpager(TodayBest);
          setcoinpageindex(0);
          setcoins(TodayBest);
          setcoinpage(arraypager)
        }

        else if(coinheader==='second'){
          const arraypager = funcForpager(AllTime);
          setcoinpageindex(0);
          setcoins(AllTime);
          setcoinpage(arraypager);
        }

        else{
          const arraypager = funcForpager(MarketCap);
          setcoinpageindex(0);
          setcoins(MarketCap);
          setcoinpage(arraypager)
        }
        
      }


      else if(coinheader==='first'){
        const arraypager = TodayBest.filter(coin => coin[Object.keys(coin)]['chain']===chainfilter);
        const pagedata = funcForpager(arraypager);
        setcoinpageindex(0);
        setcoins(TodayBest.filter(coin => coin[Object.keys(coin)]['chain']===chainfilter));
        setcoinpage(pagedata)
          }

      else if(coinheader==='second'){
        const arraypager = AllTime.filter(coin => coin[Object.keys(coin)]['chain']===chainfilter);
        const pagedata = funcForpager(arraypager);
        setcoinpageindex(0);
    setcoins(AllTime.filter(coin => coin[Object.keys(coin)]['chain']===chainfilter));
    setcoinpage(pagedata);
      }

      

          else{
            const arraypager = MarketCap.filter(coin => coin[Object.keys(coin)]['chain']===chainfilter);
            const pagedata = funcForpager(arraypager);
            setcoinpageindex(0);
            setcoins(MarketCap.filter(coin => coin[Object.keys(coin)]['chain']===chainfilter));
            setcoinpage(pagedata)
          } 
    },[chainfilter,coinheader])

  return <div  ref={tableref} style={{marginTop:'60px', color:'white',boxSizing:'border-box'}}>
    
      <p className='highlighted'>COINS</p>
      <div style={{position:'relative',width:'270px',height:'50px',margin:'10px auto'}}>

      <div style={{width:'100%',position:'absolute',top:'0px',left:'0px',height:'auto',borderRadius:'10px',border:'2px solid #0B1F36',backgroundColor:'#05101c',zIndex:'5'}}> <div style={{width:'100%',display:'flex',justifyContent:'space-around',borderBottom:todropfilter?'1px solid #0B1F36':'0px solid #0B1F36'}}><p style={{borderWidth:'0px 2px 0px 0px',borderRight:todropfilter?'0px solid #0B1F36':'1px solid #0B1F36',padding:'10px'}}>Filter table by chain</p><p style={{color:'#BABABA',padding:'10px',display:'flex',cursor:'pointer',width:'auto',boxSizing:'border-box'}} onClick={()=>settodropfilter(!todropfilter)}><span>{chainfilter}</span><span style={{display:'flex',alignItems:'center'}} >{todropfilter?dropup: dropdown}</span></p>
            </div>
            <div style={{display:todropfilter?'block':'none',paddingTop:'10px',paddingBottom:'10px'}}>
            <p style={{padding:'10px',fontSize:'13px',textAlign:'left',color:'#BABABA',cursor:'pointer'}} onClick={()=>{setchainfilter('ALL');settodropfilter(!todropfilter)}}>ALL CHAINS</p>
              <p style={{padding:'10px',fontSize:'13px',textAlign:'left',color:'#BABABA',cursor:'pointer'}} onClick={()=>{setchainfilter('BSC');settodropfilter(!todropfilter)}}>BINANCE SMART CHAIN</p>
              <p style={{padding:'10px',fontSize:'13px',textAlign:'left',color:'#BABABA',cursor:'pointer'}} onClick={()=>{setchainfilter('ETH');settodropfilter(!todropfilter)}}>ETHEREUM</p>
              <p style={{padding:'10px',fontSize:'13px',textAlign:'left',color:'#BABABA',cursor:'pointer'}} onClick={()=>{setchainfilter('MATIC');settodropfilter(!todropfilter)}}>MATIC</p>
              <p style={{padding:'10px',fontSize:'13px',textAlign:'left',color:'#BABABA',cursor:'pointer'}} onClick={()=>{setchainfilter('TRX');settodropfilter(!todropfilter)}}>TRX</p>
              <p style={{padding:'10px',fontSize:'13px',textAlign:'left',color:'#BABABA',cursor:'pointer'}} onClick={()=>{setchainfilter('FTM');settodropfilter(!todropfilter)}}>FTM</p>
            </div>
      </div>
      </div>
      <div style={{width:overallwidth>900?'70%':'90%',fontSize:overallwidth>900?'17px':'11px',display:'flex',justifyContent:'space-between',margin:'15px auto', borderRadius:'15px',boxSizing:'border-box',border:'2px solid #0B1F36'}}><p style={{display:overallwidth>900?'block':'flex',alignItems:'center',justifyContent:'center',border:'0.5px solid #0B1F36',margin:'2px',borderRadius:'15px 0px 0px 15px',borderWidth:'0px 0.5px 0px 0px',padding:'10px',width:'33.3%',textAlign:'center',boxSizing:'border-box',color:coinheader==='first'?'white':'#BABABA',backgroundColor:coinheader==='first'?'#112836':'transparent',cursor:'pointer'}} onClick={()=>headertablemobile('first')}>Today's Best</p><p style={{border:'0.5px solid #0B1F36',borderWidth:'0px 0.5px 0px 0px',margin:'2px',padding:'10px',width:'33.3%',textAlign:'center',boxSizing:'border-box',color:coinheader==='second'?'white':'#BABABA',backgroundColor:coinheader==='second'?'#112836':'transparent',display:overallwidth>900?'block':'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}} onClick={()=>headertablemobile('second')}>All Time Best</p><p style={{padding:'10px',width:'33.3%',textAlign:'center',boxSizing:'border-box',margin:'2px',color:coinheader==='third'?'white':'#BABABA',backgroundColor:coinheader==='third'?'#112836':'transparent',borderRadius:'0px 15px 15px 0px',display:overallwidth>900?'block':'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}} onClick={()=>headertablemobile('third')}>By Market Cap</p></div>
      <div className='headerClass'>
           <div className='tableheader'><div className='headerleft' ><p style={{display:overallwidth<=700?'none':"block"}}>S/N</p><p style={{width:'150px',textAlign:'center'}}>NAME</p></div> <div className='headerright' ><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p> <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader' >VOTE</p> </div> <p className='starholder' > </p></div>
           { coins.length== 0 ?<div style={{fontSize:'30px'}}>NO MATCHES</div> : coins.length>=8? <div style={{height:'auto',width:'100%',borderRadius:'0px 0px 10px 10px'}}>{coinpage[coinpageindex].map( coin => <CoinInfo addToWatchlist={addToWatchlist} overallwidth={overallwidth}  topVote= {topVote} coin={coin} coins={coins} key={uuidv4()}/> )}</div> : <div style={{height:'auto',width:'100%',borderRadius:'0px 0px 10px 10px'}}>{coins.map( coin => <CoinInfo addToWatchlist={addToWatchlist} topVote={topVote} overallwidth={overallwidth} coin={coin} coins={coins} key={uuidv4()}/> )}</div>}
           
      </div>
      {coins.length>8 && <div style={{width:'30%',minWidth:'270px',margin:'30px auto',display:'flex',justifyContent:'space-around'}}><p style={{display:'flex',justifyContent:'center',alignItems:"center"}} onClick={leftpage}>{backward}</p>{coinpage.map(coin=><p style={{color: coinpageindex===coinpage.indexOf(coin)?'white':'#BABABA',border:coinpageindex===coinpage.indexOf(coin)?'1.5px solid #0B1F36':'0px',cursor:'pointer',padding:'3px 10px'}} onClick={()=>setcoinpageindex(coinpage.indexOf(coin))}>{coinpage.indexOf(coin)+1}</p>)} <p style={{display:'flex',justifyContent:'center',alignItems:'center'}} onClick={rightpage}>{forward}</p></div>}
      
  </div>;
};

/* 
<div style={{width:'35%',margin:'15px auto'}}>{coinpage.map(coin=><p style={{color:'white',padding:'3px'}} onClick={setcoinpageindex(coinpage.indexOf(coin))}>{coinpage.indexOf(coin)+1}</p>)}</div>
*/

export default CoinsTable;




export function PromotedCoin({overallwidth}) {
  const [AllTime,setAllTime] = useContext(Statecontext).alltime;
  const [TodayBest,setTodayBest] = useContext(Statecontext).todaybest;
  const [MarketCap,setMarketCap] = useContext(Statecontext).marketCap;
  const [NewListings,setNewListings] = useContext(Statecontext).newlistings;
  const empty = <img src={emptystar} style={{width:'20px',height:'20px'}}/>;
  const full = <img src={fullstar} style={{width:'20px',height:'20px'}} />;
  const eth = <img src={ethereumlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
  const binance = <img src={binancelogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
  const [colorvote,setcolorvote] = useState('#FFFFFF ')
  const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>;
  const[coins,setcoins] = useState(TodayBest.slice(0,4));
  const {votevalidation} = ParticularCoin();
  const navigate = useNavigate();
  const [watchlistArray,setwatchlistArray] = useContext(Statecontext).watchlistArray;
  const [maindata,setmaindata] = useState();
  

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


  useEffect(
    async()=>{
      const newdata = await fetch('https://dev2.coinexplore.io/api/coins/all');
      const Json = await newdata.json();
      const Jsondata = Json['coins']
      setmaindata(Jsondata)
      console.log(maindata)
    },[]
  )
















  const voteFunction = (coin)=>{
    if(votevalidation){
     topVote(coin)
    }
    else{
      alert('please, sign in first to vote')
      navigate('/signin')
    }
  }



  



  return <div style={{width:'90%',margin:'0px auto',marginTop:'-15px',boxShadow: '0px 0px 50px #0b1f36',borderRadius:'10px 10px 15px 15px'}}>
            <div style={{width:'100%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
           <div className='tableheader'><div className='headerleft' ><p style={{display:overallwidth<=700?'none':"block"}}>S/N</p><p style={{width:'150px',textAlign:'center'}}>NAME</p></div> <div className='headerright'><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p>  <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader'>VOTE</p> </div> <p className='starholder' > </p></div>  
          { maindata?
             maindata.map( coin => <div className='coinselector'  key={uuidv4()}>
    
    <div className='tableleft' >
    <p style={{display:overallwidth<=700?'none':'block'}}>{maindata.indexOf(coin)+1}</p>
    <div style={{width:'150px',display:'flex',alignItems:'center',justifyContent:"left",padding:'0px'}}>
      <img className='tablecoinlogo' style={{borderRadius:'50%',width:"50px",height:'50px'}} src={coin['logo']} alt='coinLogo'/>
      <div style={{marginLeft:'15px'}}>
        <p style={{color:'white',textAlign:'left'}}>{coin['name']}</p>
        <p style={{color:'grey',textAlign:'left',fontSize:'12px'}}>{coin['symbol']}</p>
      </div>    
    </div>
    </div>
       <div className= 'tableright'><p className='chain'><span style={{display:'flex',justifyContent:'center',alignItems:"center"}}>{coin['chain'] === 'ETH'? eth:binance}</span> <span style={{display:'flex',justifyContent:'center',alignItems:"center",marginLeft:'4px'}}>{coin['chain']}</span></p>
            <p className='capRank'>{coin['marketcap']}</p>
            <p className='price'>{coin['price']}</p>
            <p className='launch'>{coin['launchDate']}</p>
            <p className='change' style={{textAlign:'center',flex:'1',display:overallwidth>1100?'block':'none',color:coin['pricechangepct'][0]>0?'green':'red'}}><span>{coin['pricechangepct'][0]>0?'+':'-'}</span> {coin['pricechangepct']}</p>
            <div style={{display:'flex',flex:'1',alignItems:'center',justifyContent:'center',color:colorvote}}><div onClick={()=>voteFunction(coin)} style={{width:'75px',height:"20px",paddingBottom:'27px',cursor:'pointer',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}><p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
                <p style={{fontSize:'15px',color:{colorvote}}}>{coin['totalVotes']}</p>
            </div>                     
            </div>
       </div>
       <div onClick={() => addToWatchlist(coin)}  className='starholder'>{coin['watchlist']?full:empty}</div>
    </div> 
    
    ) :<i class="fa fa-spinner fa-spin" style={{fontSize:'48px',color:'white'}}></i>}
    </div>
    </div>

    /*

    return <div style={{width:'90%',margin:'0px auto',marginTop:'-15px',boxShadow: '0px 0px 50px #0b1f36',borderRadius:'10px 10px 15px 15px'}}>
            <div style={{width:'100%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
           <div className='tableheader'><div className='headerleft' ><p style={{display:overallwidth<=700?'none':"block"}}>S/N</p><p style={{width:'150px',textAlign:'center'}}>NAME</p></div> <div className='headerright'><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p>  <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader'>VOTE</p> </div> <p className='starholder' > </p></div>  
      <div style={{width:'100%',textAlign:'center',height:'65px',display:'flex',alignItems:'center',justifyContent:"center"}}><i class="fa fa-spinner fa-spin" style={{fontSize:'48px',color:'white'}}></i></div>
    </div>
    </div>
  
}*/

/* return <div style={{width:'90%',margin:'0px auto',marginTop:'-15px',boxShadow: '0px 0px 50px #0b1f36',borderRadius:'10px 10px 15px 15px'}}>
            <div style={{width:'100%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
           <div className='tableheader'><div className='headerleft' ><p style={{display:overallwidth<=700?'none':"block"}}>S/N</p><p style={{width:'150px',textAlign:'center'}}>NAME</p></div> <div className='headerright'><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p>  <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader'>VOTE</p> </div> <p className='starholder' > </p></div>  
           {  coins.map( coin => <div className='coinselector'  key={uuidv4()}>
    
    <div className='tableleft' >
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
            <div style={{display:'flex',flex:'1',alignItems:'center',justifyContent:'center',color:colorvote}}><div onClick={()=>voteFunction(coin)} style={{width:'75px',height:"20px",paddingBottom:'27px',cursor:'pointer',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}><p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
              <p  style={{fontSize:'15px',color:{colorvote}}}>{coin[Object.keys(coin)]['vote']}</p>
              </div>                     
            </div>
       </div>
       <div onClick={() => addToWatchlist(coin)}  className='starholder'>{coin[Object.keys(coin)]['watchlist']?full:empty}</div>
    </div> 
    
    )}
    </div>
    </div>*/

}
