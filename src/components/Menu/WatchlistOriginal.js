import React, {useState,useContext,useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
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

export default function WatchlistOriginal({overallwidth}) {

const navigate = useNavigate()
const [watchlistArray,setwatchlistArray] = useState()
const [triggerAfterVotes,setTriggerAfterVotes] = useState(false);
const[alertobj,setalertobj] = useContext(Statecontext).alertobj
const [userObject,setuserObject] = useContext(Statecontext).userObject;
const [loaderid,setloaderid] = useState('');
const eth = <img src={ethereumlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
  const binance = <img src={binancelogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
  const [colorvote,setcolorvote] = useState('#FFFFFF ')
  const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>;
const empty = <img src={emptystar} style={{width:'20px',height:'20px'}}/>;
  const full = <img src={fullstar} style={{width:'20px',height:'20px'}} />;

  const coinToWatchlist = async(id,coin)=>{

    if(userObject.exp*1000> new Date().getTime()){
      
        console.log(coin['watchListDate'])
        const returnObj = await fetch(`https://apidev.coinexplore.io/api/users/coins/watchlist/${id}`,
        {
          method: 'DELETE',
          
          headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${userObject.token}`
                  
                  },
      })
      const dataHolder = await returnObj.json();
      console.log(dataHolder)
      if(dataHolder.success){
        setloaderid(id)
        setTriggerAfterVotes(!triggerAfterVotes)
        setalertobj({...alertobj,...{message:'coin has been removed from watchlist',trigger:true}})
      }

    }
    
      else{
        setuserObject({...userObject,...{userEmail:'',userUsername:'',token:'',exp: 0}})
        window.localStorage.removeItem('userDetails')
        
      }
  }




useEffect(
    async ()=>{
        const returnObj = await fetch('https://apidev.coinexplore.io/api/users/coins/watchlist',{
            method: 'GET',
            
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userObject.token}`
                    
                    },
            })

          const jsonData = await returnObj.json()
          console.log(jsonData)
          setwatchlistArray(jsonData)
          
          setloaderid('')
        
    },[triggerAfterVotes,userObject.token]
)




    
  const voteFunction = async(id)=>{
    if(userObject.token===''){
      setalertobj({...alertobj,...{message:'please, sign in first to vote',trigger:true}})
      
    }
    else{
      
      const returnObj = await fetch(`https://apidev.coinexplore.io/api/users/coins/vote/${id}`, {
                                              method: 'PUT',
                                              
                                              headers: {
                                                      'Accept': 'application/json',
                                                      'Content-Type': 'application/json',
                                                      Authorization: `Bearer ${userObject.token}`
                                                      
                                                      },
                                              
    
                                   });
      const dataHolder = await returnObj.json();
      if(dataHolder.success){
        setTriggerAfterVotes(!triggerAfterVotes)
      }
      console.log(dataHolder)
    }
  }
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
                 {

 watchlistArray?
  watchlistArray.map( coin => <div className='coinselector'  key={uuidv4()}>

              <div className='tableleft' >

                  <p style={{display:overallwidth<=700?'none':'block'}}>{watchlistArray.indexOf(coin)+1}</p>
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
                  <p className='change' style={{textAlign:'center',flex:'1',display:overallwidth>1100?'block':'none',color:coin['pricechangepct'][0]>0?'green':'red'}}><span>{coin['pricechangepct'][0]>0?'+':'-'}</span> {`${coin['pricechangepct']}%`}</p>
                  <div style={{display:'flex',flex:'1',alignItems:'center',justifyContent:'center',color:colorvote}}><div onClick={()=>voteFunction(coin['id'])} style={{width:'75px',height:"20px",paddingBottom:'27px',cursor:'pointer',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}><p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
                      <p style={{fontSize:'15px',color:{colorvote}}}>{coin['totalVotes']}</p>
                      </div>                     
                  </div>
              </div>
              <div  className='starholder' onClick={()=>coinToWatchlist(coin['id'],coin) }>{loaderid===coin['id']?<i class="fa fa-spinner fa-spin" style={{fontSize:'20px',color:'white'}}></i>:full}</div>
          </div> 

):<i class="fa fa-spinner fa-spin" style={{fontSize:'48px',color:'white'}}></i>
                 } 
        </div>
        </div>
      
        <GoToTop/>
            
        </div>)
}
