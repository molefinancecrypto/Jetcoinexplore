import '../Mainpage/cointable.css'
import React,{useState,useContext,useRef, useEffect} from 'react';
import emptystar from '../../icons/stars/emptystar.png';
import fullstar from '../../icons/stars/fullstar.png';
import { ParticularCoin } from '../../contextfolder/Coindata';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import binancelogo from '../../chainLogo/binanceLogo.png';
import ethereumlogo from '../../chainLogo/ethereumLogo.png';
import {Statecontext} from '../CointoviewContext';
import GoToTop from '../Gototop';
import alexisearch from '../alexi-icons/alexisearch.png';
//import { funcForpage } from './pagerForCoin';


function NewlyAddedCoin({overallwidth}) {
  const [userObject,setuserObject] = useContext(Statecontext).userObject;
    const[alertobj,setalertobj] = useContext(Statecontext).alertobj;
    const [showmenu,setshowmenu] = useState(false);
    const [searchvalue,setsearchvalue] = useState('')
    const [coinShown, setcoinShown] = useState();
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
    const [pagesForCoins,setpagesForCoins] = useState();
    const [pageNavigator,setpageNavigator] = useState([0,10])
    const forward = <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="25px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg> 
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="25px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
    const[pageIndex,setpageindex] = useState(1) //the page on focus
    const [pageArray,setpageArray] = useState([]) //the array containing the pages id to be iterated with .map
    const [allcoins,setallcoins] = useState()
    const [coinlength,setcoinlength] = useState(0)
    const menuref = useRef();
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
    setcoinlength(Json['coins'].length)
    setallcoins(Json['coins'])
    calcpage(Json['coins'])
    coinSplice()
    
    }

    //func to generate coinSplice displayed
    const coinSplice = ()=>{
        const data = allcoins.slice(pageNavigator[0],pageNavigator[1])
        setcoins(data)
    }

    //func to calculate pages
    const calcpage = (totalarr)=>{

      setpagesForCoins(Math.ceil(totalarr.length/10))    
    }
    //useEffect for enlistedCoins

    useEffect(()=>{
        enlistedCoins()
        loopArray(pageIndex,pagesForCoins)
    },[pagesForCoins])


    //useEffect for pageing control

    useEffect(()=>{
      loopArray(pageIndex,pagesForCoins)
      {allcoins && coinSplice()}
      
  },[pageIndex,pageNavigator])


  //useEffecy for searching throgh newly enlisted coins
  useEffect(
    async()=>{
       if(userObject.token===''){
          if(searchvalue===""){
             const searchObj = await fetch(`https://apidev.coinexplore.io/api/coins/search?q=`)
             const objnew = await searchObj.json()
             setcoinShown(objnew['coins'])
          }
          else{
 
             const searchObj = await fetch(`https://apidev.coinexplore.io/api/coins/search?q=${searchvalue}`)
             const objnew = await searchObj.json()
             setcoinShown(objnew['coins'])
             console.log(objnew)
          }
       }
       else{
          if(userObject.exp*1000> new Date().getTime()){
             if(searchvalue===""){
                const searchObj = await fetch(`https://apidev.coinexplore.io/api/coins/search?q=`)
                const objnew = await searchObj.json()
                console.log(objnew)
                setcoinShown(objnew['coins'])
                console.log(coinShown)
             }
             else{
    
                const searchObj = await fetch(`https://apidev.coinexplore.io/api/coins/search?q=${searchvalue}`)
                const objnew = await searchObj.json()
                setcoinShown(objnew['coins'])
                console.log(objnew)
             }
          }
          else{
             if(searchvalue===""){
                const searchObj = await fetch(`https://apidev.coinexplore.io/api/coins/search?q=`)
                const objnew = await searchObj.json()
                setcoinShown(objnew['coins'])
             }
             else{
    
                const searchObj = await fetch(`https://apidev.coinexplore.io/api/coins/search?q=${searchvalue}`)
                const objnew = await searchObj.json()
                setcoinShown(objnew['coins'])
                console.log(objnew)
             }
          }
       }
       
    },[searchvalue])


    //this useEffect triggers for when any mouse event occurs in respect to the search bar
    useEffect(
      ()=>{
         let checkwhereclicked = (event)=>{
            if(!menuref.current.contains(event.target)){
               setshowmenu(false)
            }
            
         }
         document.addEventListener('mousedown',checkwhereclicked);

         return ()=>{
            document.removeEventListener('mousedown',checkwhereclicked)
         }
      }
   )

    const changeSearch = (e)=>{
      setsearchvalue(e.target.value)
   }

   const closeshowmenu = ()=>{
      setshowmenu(false)
   }

   const rolldownsearch = ()=> {
    setshowmenu(true)
    
 }

    //function to arrange coin array to be looped
    const loopArray = (pageFocus,pagesForCoins)=>{
      const middlenumb = Math.ceil((3+pagesForCoins)/2)

        if( pageFocus>=1 && pageFocus<=4 ){
        
          setpageArray([1,2,3,4,5,6,'...',pagesForCoins-1,pagesForCoins])
        }
      
        else if(pageFocus>=pagesForCoins-3 && pageFocus<= pagesForCoins ){
          
          setpageArray([1,2,'...',pagesForCoins-5,pagesForCoins-4,pagesForCoins-3,pagesForCoins-2,pagesForCoins-1,pagesForCoins])
        }
        
        else{
         
          setpageArray([1,2,'...',pageFocus-1,pageFocus,pageFocus+1,'...',pagesForCoins-1,pagesForCoins])
          
        }
    }


    
    //function to move coin page forward
    const rightpage = ()=>{
      if(pageIndex*10 === pagesForCoins*10){
        setpageindex(1)
        
        setpageNavigator([0,10])
        
      }

      else if(pageIndex === pagesForCoins-1){
        setpageindex((pageIndex)=>pageIndex+1)
        
        setpageNavigator((pageNavigator)=>[pageNavigator[1],coinlength])
        
      }

      else{
        setpageindex((pageIndex)=>pageIndex+1)
        setpageNavigator((pageNavigator)=>[pageNavigator[0]+10,pageNavigator[1]+10])
        
      }
    }
      
  //function to move coin page backward
  const leftpage = ()=>{
    if(pageIndex === 1){
      setpageindex(pagesForCoins)
      const val = pagesForCoins*10 - coinlength
      const subtract = 10 - val 
      setpageNavigator([coinlength-subtract,coinlength])
      
    }
    else{
      setpageindex((pageIndex)=>pageIndex-1)
      
      setpageNavigator((pageNavigator)=>[pageNavigator[0]-10,pageNavigator[0]])
      
    }
  }

  //function to navigate coin searched for
  const gotoCoin = async(id)=>{
    try{
    if(userObject.token===''){
       const returnObj = await fetch(`https://apidev.coinexplore.io/api/coins/${id}`,
       {
         method: 'GET',
         
         headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 },
     })
     const dataHolder = await returnObj.json();
     const coin = dataHolder['coin']
     navigate(`/coin/${coin['name']}`,{state: coin})
    }
    else{
       if(userObject.exp*1000> new Date().getTime()){
         const returnObj = await fetch(`https://apidev.coinexplore.io/api/coins/${id}`,
         {
           method: 'GET',
           
           headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   Authorization: `Bearer ${userObject.token}`
                   },
       })
       const dataHolder = await returnObj.json();
       const coin = dataHolder['coin']
       navigate(`/coin/${coin['name']}`,{state: coin})
       }
       else{
         const returnObj = await fetch(`https://apidev.coinexplore.io/api/coins/${id}`,
         {
           method: 'GET',
           
           headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   },
       })
       const dataHolder = await returnObj.json();
       const coin = dataHolder['coin']
       navigate(`/coin/${coin['name']}`,{state: coin})
       }
     }}

     catch(error){
       setalertobj({...alertobj,...{message:'please, check your internet connections again',trigger:!alertobj.trigger,pass:true}})
     }
 }



  //function on clicking on coin page
  const clickPage = (numb)=>{
      if(isNaN(numb)){

      }
      else if(numb === pagesForCoins){
      setpageindex(numb)
      const val = pagesForCoins*10 - coinlength
      const subtract = 10 - val 
      setpageNavigator([coinlength-subtract,coinlength])
      }
      else{
        setpageindex(numb)
        const val  = numb*10
        setpageNavigator([val-10,val])

      }
  }

    
      //function for watchlist
      const coinToWatchlist = async(id,coin)=>{
        if(userObject.token===''){
          setalertobj({...alertobj,...{message:'Please, sign in first to add coin to watchlist.',trigger:!alertobj.trigger,pass:true}})
        
        }
      
        else{
      
          if(userObject.exp*1000> new Date().getTime()){
            if(coin['watchListDate']){
              
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
    
            if(dataHolder.success){
              setTriggerAfterVotes(!triggerAfterVotes)
            }
        
          }
        
    
          catch(error){
            setalertobj({...alertobj,...{message:'Please, wait for the next 12hours to vote again.',trigger:!alertobj.trigger,pass:true}})
          }
        }
      }
    
    


      return <div style={{width:'95%',minHeight:'100vh',paddingTop:'35px',margin:'10px auto',boxSizing:"border-box"}}>
                <div style={{marginTop:'35px'}}>
                  <p style={{textAlign:'center',color:'white',fontSize:overallwidth>'700px'?'35px':'25px',letterSpacing:"1.5px",marginBottom:'15px'}}>New Listings</p>
                  <div style={{margin:'15px auto',width:overallwidth>900?'30%':'80%',height:"40px",position:'relative'}}>
                  <div onClick={rolldownsearch} style={{width:'100%',adding:'7px',paddingLeft:'10px',boxSizing:'border-box',height:'100%',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}}>
                    <p style={{display:'flex',justifyContent:'left',paddingLeft:"15px",alignItems:'center',height:'100%',fontSize:'12px',color:'grey'}}>SEARCH COINEXPLORE</p> 
                    <p style={{height:'35px',width:'35px',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',right:'0px',bottom:'0px'}}><img src={alexisearch}/></p>  
                  </div>
                  {showmenu && <div className='searchcoinsmenunewlistings' ref={menuref}>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-around',boxSizing:'border-box'}}>
                      <p onClick={closeshowmenu} style={{width:'50px',marginTop:'15px',}}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></p>
                      <input  placeholder='SEARCH COINEXPLORE' onChange={changeSearch} type='search' value={searchvalue} style={{width:'70%',marginTop:'15px',marginRight:'25px',paddingLeft:'10px',height:'35px',letterSpacing:'1.5px',fontSize:'13px',boxSizing:'border-box',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}}/>
                    </div>
                    {coinShown && coinShown.slice(0,7).map(coin=><div onClick={ ()=>{gotoCoin(coin['id']);setshowmenu(false)}} style={{display:'flex',color:'white',justifyContent:"space-between",width:'80%',margin:'20px auto'}}>
                      <div style={{display:'flex',width:'60%',justifyContent:'left'}}>
                         <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={coin['logo']} alt='logocoin'/>
                                                 <p style={{marginLeft:'15px',fontSize:'17px'}}>{coin['name']}</p>
                                              </div>
                                              <p>{coin['symbol']}</p>
                                           </div>)}</div>}
                                           </div>
        
                <div style={{width:'90%',margin:'0px auto',marginTop:'-15px',boxShadow: '0px 0px 50px #0b1f36',borderRadius:'10px 10px 15px 15px'}}>
                  <div style={{width:'100%',height:'auto',borderRadius:'10px',margin:"30px auto",marginBottom:'0px',boxSizing:'border-box'}}>
                    <div className='tableheader'><div className='headerleft' ><p style={{display:overallwidth<=700?'none':"block"}}>S/N</p><p style={{width:'150px',textAlign:'center'}}>NAME</p></div> <div className='headerright'><p className='chain'>CHAIN</p> <p className='capRank'>MARKET-CAP</p> <p className='price'>PRICE</p>  <p className='launchhead'>LAUNCH-DATE</p> <p className='changehead'>CHANGE(24hrs)</p> <p className='voteheader'>VOTE</p> </div> <p className='starholder' > </p></div>  
                    { coins=== null ?<i class="fa fa-spinner fa-spin" style={{fontSize:'48px',color:'white'}}></i> :coins.map( coin => <div className='coinselector'  key={uuidv4()}>

                      <div className='tableleft'>
                        
                        <p style={{display:overallwidth<=700?'none':'block'}}>{pageNavigator[0] + coins.indexOf(coin)+1}</p>
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
                {pagesForCoins>=7 && <div style={{width:'30%',minWidth:'270px',margin:'30px auto',display:'flex',justifyContent:'space-around'}}><p style={{display:'flex',justifyContent:'center',alignItems:"center",cursor:'pointer'}} onClick={leftpage}>{backward}</p>{pageArray.map(coin=><p key={uuidv4()} style={{color: pageIndex===pageArray[pageArray.indexOf(coin)]?'white':'#BABABA',border:pageIndex===pageArray[pageArray.indexOf(coin)]?'1.5px solid #0B1F36':'0px',cursor:'pointer',padding:'3px 10px'}} onClick={()=>clickPage(coin)}>{coin}</p>)} <p style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}} onClick={rightpage}>{forward}</p></div>}
                </div>
                <GoToTop />
              </div>
}

export default NewlyAddedCoin