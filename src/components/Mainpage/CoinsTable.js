import './cointable.css'
import React,{useState,useEffect} from 'react';
import { CoinObj } from '../coinholder';
import fireemoji from '../../emoji/fire_emoji.png';
import newcommer from  '../../emoji/newcomer.png';
import trophy from  '../../emoji/trophy.png';
import { ParticularCoin } from '../../contextfolder/Coindata';
import { v4 as uuidv4 } from 'uuid';
import CoinInfo from './CoinInfo';

const CoinsTable = () => {
    const[coinhold, setcoinhold] = useState( CoinObj )
    const[coins,setcoins] = useState(coinhold);
    const [search,setsearch] = useState('');
    const [buttonColor, setbuttoncolor] = useState(['rgb(0, 0, 24)','#708AF4','#708AF4']);
    

    useEffect( ()=>{
      if(search.length>0){

        setcoins(handleSearch())
      }
      else{
       
        setcoins(CoinObj)
        setbuttoncolor(['rgb(0, 0, 24)','#708AF4','#708AF4'])
      }
      
    },[search])

    const clickHottest = ()=>{
      setcoinhold(CoinObj);
      setcoins(CoinObj);
      setbuttoncolor(['rgb(0, 0, 24)','#708AF4','#708AF4'])
    }

    const clickpromoted = ()=>{
      setcoinhold(CoinObj.slice(0,4))
      setcoins(CoinObj.slice(0,4));
      setbuttoncolor(['#708AF4','rgb(0, 0, 24)','#708AF4'])
    }

    const clickalltime = ()=>{
      setcoinhold(CoinObj.slice(5,9))
      setcoins(CoinObj.slice(5,9));
      setbuttoncolor(['#708AF4','#708AF4','rgb(0, 0, 24)'])
      
    }

    const handleSearch = () =>{
          return coinhold.filter( (coin)=> (coin[Object.keys(coin)]['name'].toLowerCase().includes(search)||coin[Object.keys(coin)]['symbol'].toLowerCase().includes(search)))
    }

    const Onchange = (e)=>{
       setsearch(e.target.value)
    }

   

      
     

  return <div style={{marginTop:'30px', color:'white',boxSizing:'border-box'}}>
    
      <p style={{fontSize:'25px'}} onClick={handleSearch}>CryptoCurrency Data</p>
      <div className='searchandbutton' >
        <div className='buttonsabovesearch'>
          <div style={{border: '1px solid black',display: 'flex',width: '33.3%',padding: '1px 3px',backgroundColor: buttonColor[0],borderRadius: '12px'}} className='Hottest' onClick={clickHottest} ><div style={{display:'flex',alignItems:'center',width:'22px',height:"100%"}}><img style={{width:'22px',height:"22px"}} src={fireemoji}/></div><p style={{fontSize:"17px"}}>Hottest</p></div>
          <div style={{border: '1px solid black',display: 'flex',width: '33.3%',padding: '1px 3px',backgroundColor: buttonColor[1],borderRadius: '12px'}} className='promoted' onClick={clickpromoted}><div style={{display:'flex',alignItems:'center',width:'22px',height:"100%"}}><img style={{width:'22px',height:"22px"}} src={newcommer}/></div><p style={{fontSize:"17px"}}>Promoted</p></div>
          <div style={{border: '1px solid black',display: 'flex',width: '33.3%',padding: '1px 3px',backgroundColor: buttonColor[2],borderRadius: '12px'}} className='alltime' onClick={clickalltime}><div style={{display:'flex',alignItems:'center',width:'22px',height:"100%"}}><img style={{width:'22px',height:"22px"}} src={trophy}/></div><p style={{fontSize:"17px"}}>All-Time</p></div>
        
        </div>
        <div className='divforsearchtable' ><input type="search" placeholder='Search for coin..' value={search} onChange={Onchange} style={{color:'black', borderRadius:'7px',height:'40px',fontSize:'28px',width:'100%'}}/></div>
      </div>
      <div style={{backgroundColor:'rgb(0, 0, 24)',width:'90%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
           <div className='tableheader'><p className='headerleft' >NAME</p> <div className='headerright' ><p className='symbol'>SYMBOL</p> <p style={{textAlign:'center',width:'20%'}}>MARKET-CAP</p> <p className='launch'>LAUNCH-DATE</p> <p style={{textAlign:'center',width:'20%'}}>CHANGE</p> <p style={{textAlign:'center',width:'20%'}}>VOTE</p></div></div>
           { coins.length== 0 ?<div style={{fontSize:'30px'}}>NO MATCHES</div> : coins.map( coin => <CoinInfo coin={coin} key={uuidv4()}/> )}
      </div>
  </div>;
};

export default CoinsTable;


