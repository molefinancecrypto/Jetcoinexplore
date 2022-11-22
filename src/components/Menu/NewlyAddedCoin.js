import '../Mainpage/cointable.css'
import React,{useState,useContext, useEffect} from 'react';
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
  const [userObject,setuserObject] = useContext(Statecontext).userObject;
    const[alertobj,setalertobj] = useContext(Statecontext).alertobj;
    const [triggerAfterVotes,setTriggerAfterVotes] = useState(false);
    const empty = <img src={emptystar} style={{width:'20px',height:'20px'}}/>;
    const full = <img src={fullstar} style={{width:'20px',height:'20px'}} />;
    const eth = <img src={ethereumlogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const binance = <img src={binancelogo} style={{width:'20px',height:'20px',borderRadius:'50%'}}/>;
    const [colorvote,setcolorvote] = useState('#FFFFFF ')
    const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>;
    const[coins,setcoins] = useState(null);
    const {votevalidation} = ParticularCoin();
    const navigate = useNavigate();
    const [watchlistArray,setwatchlistArray] = useContext(Statecontext).watchlistArray;
    const [maindata,setmaindata] = useState();


    //function to call newly enlisted coins

    const enlistedCoins = async()=>{
      const returnObj = await fetch('https://apidev.coinexplore.io/api/coins/list/latest',
      {
        method: 'GET',
        
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userObject.token}`
                
                },
    })
    const Json = await returnObj.json(); 
    console.log(Json['coins'])        
    setcoins(Json['coins'])
    }

    //useEffect for enlistedCoins

    useEffect(()=>{
        enlistedCoins()
    },[])

    
      
    
    
      //function for watchlist
      const coinToWatchlist = async(id,coin)=>{
        if(userObject.token===''){
          setalertobj({...alertobj,...{message:'Please, sign in first to add coin to watchlist.',trigger:!alertobj.trigger,pass:true}})
        
        }
      
        else{
      
          if(userObject.exp*1000> new Date().getTime()){
            if(coin['watchListDate']){
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
              setTriggerAfterVotes(!triggerAfterVotes)
            }
            
            }
            else{
              
              const returnObj = await fetch(`https://apidev.coinexplore.io/api/users/coins/watchlist/${id}`,
              {
                method: 'POST',
                
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${userObject.token}`
                        
                        },
            })
            const dataHolder = await returnObj.json();
            console.log(dataHolder)
            if(dataHolder.success){
              setTriggerAfterVotes(!triggerAfterVotes)
            }
            
      
            }
        
          }
          else{
            setuserObject({...userObject,...{userEmail:'',userUsername:'',token:'',exp: 0}})
              window.localStorage.removeItem('userDetails')
          }  
        }
      }






      //function to vote a coin

      const voteFunction = async(id)=>{
        if(userObject.token===''){
          setalertobj({...alertobj,...{message:'Please, sign in first to vote.',trigger:!alertobj.trigger,pass:true}})
          
        }
        else{
          try{
    
            const returnObj = await fetch(`https://apidev.coinexplore.io/api/users/coins/vote/${id}`, {
                                                    method: 'PUT',
                                                    
                                                    headers: {
                                                            'Accept': 'application/json',
                                                            'Content-Type': 'application/json',
                                                            Authorization: `Bearer ${userObject.token}`
                                                            
                                                            },
                                                    
          
                                         });
            const dataHolder = await returnObj.json();
            console.log(dataHolder)
            if(dataHolder.success){
              setTriggerAfterVotes(!triggerAfterVotes)
            }
            console.log(triggerAfterVotes)
          }
        
    
          catch(error){
            setalertobj({...alertobj,...{message:'Please, wait for the next 12hours to vote again.',trigger:!alertobj.trigger,pass:true}})
          }
        }
      }
    
    


      return <div style={{width:'95%',minHeight:'100vh',paddingTop:'35px',margin:'10px auto',boxSizing:"border-box"}}>
                <div style={{marginTop:'35px'}}><p style={{textAlign:'center',color:'white',fontSize:overallwidth>'700px'?'35px':'25px',letterSpacing:"1.5px",marginBottom:'15px'}}>New Listings</p>
                <div style={{width:'90%',margin:'0px auto',marginTop:'-15px',boxShadow: '0px 0px 50px #0b1f36',borderRadius:'10px 10px 15px 15px'}}>
                  <div style={{width:'100%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
                    <div className='tableheader'><div className='headerleft' ><p style={{display:overallwidth<=700?'none':"block"}}>S/N</p><p style={{width:'150px',textAlign:'center'}}>NAME</p></div> <div className='headerright'><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p>  <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader'>VOTE</p> </div> <p className='starholder' > </p></div>  
                    { coins=== null ?<i class="fa fa-spinner fa-spin" style={{fontSize:'48px',color:'white'}}></i> :coins.map( coin => <div className='coinselector'  key={uuidv4()}>

                      <div className='tableleft'>
                        <p style={{display:overallwidth<=700?'none':'block'}}>{coins.indexOf(coin)+1}</p>
                        <div style={{width:'150px',display:'flex',alignItems:'center',justifyContent:"left",padding:'0px'}}>
                          <img className='logo' style={{borderRadius:'50%',width:"50px",height:'50px'}} src={coin['logo']} alt='coinLogo'/>
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
                        <p className='change' style={{textAlign:'center',flex:'1',display:overallwidth>1100?'block':'none',color:coin['pricechangepct']>= 0 ?'green':'red'}}>{coin['pricechangepct']}</p>
                        <div style={{display:'flex',flex:'1',alignItems:'center',justifyContent:'center',color:colorvote}}>
                          <div onClick={()=>voteFunction(coin)} style={{width:'75px',height:"20px",paddingBottom:'27px',cursor:'pointer',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}>
                            <p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
                            <p  style={{fontSize:'15px',color:{colorvote}}}>{coin['totalVotes']}</p>
                          </div>                     
                        </div>
                      </div>
                      <div onClick={() => coinToWatchlist(coin['id'],coin)}  className='starholder'>{coin['watchlist']?full:empty}</div>
                  </div> )}
                  </div>
                </div>
                </div>
                <GoToTop />
              </div>
}

export default NewlyAddedCoin