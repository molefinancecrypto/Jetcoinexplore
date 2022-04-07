import React, {useState,useRef,useEffect,useContext} from 'react';
import logo from '../images/coinexploreTwo.png';
import './header.css';
import { useNavigate,NavLink } from 'react-router-dom';
import avatar from '../icons/avatar.svg';
import { Statecontext } from './CointoviewContext';
import {Link} from 'react-router-dom';
import {CoinObj} from './coinholder';
import alexisearch from './alexi-icons/alexisearch.png';



function Header({overallwidth}) {
   const navigate = useNavigate();
   const [showhamburger, setshowhamburger] = useState(true);
   const [showmenu,setshowmenu] = useState(false);
   const menuref = useRef();
   const tableposref = useContext(Statecontext).tableposref[0];
   const [currentlocale,setcurrentlocale] = useContext(Statecontext).currentlocale;
   const [searchvalue,setsearchvalue] = useState('')
   const [coinShown, setcoinShown] = useState(CoinObj.slice(0,5));
   const [coinsToSearch, setcoinsToSearch] = useState('');
   const [showtableselectdrop, setshowtableselectdrop] = useState('false');
   const [tablemobile,settablemobile] = useState('first');
   const [coinheader,setcoinheader] = useContext(Statecontext).coinheader;
   const liner = <span style={{width:'100%',height:'100%',borderRadius:'20px'}}></span>;
   const open = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>;
   const close = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>;
   const dropdown = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/></svg>;
   const dropup = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14l5-5 5 5H7z"/></svg>;
   const coinToSearch = ()=>{
     return CoinObj.filter(coin => coin[Object.keys(coin)]['name'].toLowerCase().includes(searchvalue))
  }

  //setcoinsToSearch()
/* 
  if(tableposref !== ' ')
   {  console.log('a');
   console.log(tableposref.current.offsetTop);
      ScrollToref(); 
   }
*/

const showtable = ()=>{
   setshowtableselectdrop(!showtableselectdrop)
}
  const headertable = (choice)=>{
   window.scrollTo({top:tableposref.current.offsetTop,behavior:'smooth'})
    setcoinheader(choice); 
  }

  const headertablemobile = (choice)=>{
   window.scrollTo({top:tableposref.current.offsetTop,behavior:'smooth'})
    settablemobile(choice);
    setcoinheader(choice);
    setshowtableselectdrop(!showtableselectdrop) 
  }


   useEffect(
      ()=>{
         let newvar = coinToSearch();
         console.log(coinsToSearch)
         if(newvar.length>5){
            setcoinShown(newvar.slice(0,5))
         }
         else if(newvar.length<=5 &&newvar.length != 0){
   
            setcoinShown(newvar)
         }
   
         else if(searchvalue == ''){
            setcoinShown(CoinObj.slice(0,5))
         }
      },[searchvalue])

   const changeSearch = (e)=>{
      setsearchvalue(e.target.value)
      
   }

   const closeshowmenu = ()=>{
      setshowmenu(false)
   }

   const rolldownsearch = ()=> {
      setshowmenu(true)
      
   }

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

  return <div className='headerwrapper'>
            <div className='headercontainer'>
               <div  onClick={()=> navigate('/')} className='logoandtitleholder'>
        
                  <div style={{height:"100%", textAlign:'center',display:'flex',alignItems:"center"}}>
                     <img src={logo} alt='Logo' style={{width:'40px',height:'40px'}}/>
                  </div>
                  <div className='coinexplore'>
                     <p style={{fontSize:'33px',textAlign:'left',letterSpacing:'1.5px'}}><strong style={{fontWeight:'1200px'}}>COIN</strong><span style={{fontFamily:'NexaTextLight'}}>EXPLORE</span></p>    
                  </div>  
               </div>     

               <div className = 'searchholder' >
     <div ref={menuref} style={{width:'100%',height:"35px",position:'relative'}}>
        <div onClick={rolldownsearch} style={{width:'100%',padding:'7px',paddingLeft:'10px',boxSizing:'border-box',height:'100%',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}}>
            <p style={{display:'flex',justifyContent:'left',alignItems:'center',height:'100%',fontSize:'12px',color:'grey'}}>SEARCH COINEXPLORE</p> 
            <p style={{height:'35px',width:'35px',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',right:'0px',bottom:'0px'}}><img src={alexisearch}/></p>  
        </div>
        {showmenu && <div className='searchcoinsmenu' >
      <div style={{display:'flex',width:'100%',justifyContent:'space-around',boxSizing:'border-box'}}>
        <p onClick={closeshowmenu} style={{width:'50px',marginTop:'15px',}}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></p>
        <input  placeholder='SEARCH COINEXPLORE' onChange={changeSearch} type='search' value={searchvalue} style={{width:'70%',marginTop:'15px',marginRight:'25px',paddingLeft:'10px',height:'35px',letterSpacing:'1.5px',fontSize:'13px',boxSizing:'border-box',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}}/>
      </div>
                        {coinShown.map(coin=><div onClick={ ()=>{
    navigate(`/coin/${coin[Object.keys(coin)]['name']}`,{state: coin});setshowmenu(false)}} style={{display:'flex',color:'white',justifyContent:"space-between",width:'80%',margin:'20px auto'}}>
                                              <div style={{display:'flex',width:'60%',justifyContent:'left'}}>
                                                 <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={coin[Object.keys(coin)]['img']} alt='logocoin'/>
                                                 <p style={{marginLeft:'15px',fontSize:'17px'}}>{coin[Object.keys(coin)]['name']}</p>
                                              </div>
                                              <p>{coin[Object.keys(coin)]['coin_id']}</p>
                                           </div>)}</div>}
        
     </div>
        
  </div>
         
         <div className='menuholder'>
              {showhamburger?<div  onClick={()=>{setshowhamburger(false) }}>{open}</div>:
              <div className='divforcanceler'>
                   
                  <div style={{position:'absolute',top:'0px',right:'0px',height:'100vh',width:'70%',backgroundColor:'#05101c'}}>
                     <div onClick={()=>{setshowhamburger(true)}} style={{position:'absolute',top:'12px',right:'5px'}}>{close}</div>    
                     <div style={{position:'absolute',textAlign:'left',height:'50%',display:'flex',justifyContent:'space-around',top:'20%',left:'20px',flexDirection:'column',color:"white"}}>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/addcoin' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>Add Coin</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>Promote</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/newspage' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>News</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>Contact Us</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/signin' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>Sign In</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/signup' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>Register</NavLink>
                     </div>
                  
                  </div>  
              </div>}
           </div>   

           

    <ul className="lister">
       <li className='list'><Link to="/addcoin" style={{color:"white",textDecoration:"none"}}>Add Coin</Link></li>
       <li className='list'>Promote</li>
       <li className='list'><Link to="/newspage" style={{color:"white",textDecoration:"none"}}>News</Link></li>
       <li className='list'>Contact Us</li>
       <p style={{width:'0.5px',height:"33px",backgroundColor:"white",margin:'0px 5px'}}></p>
       <li className='list'><Link to="/signin" style={{color:"white",textDecoration:"none"}}>Sign In</Link></li>
       <li className='list'><Link to="/signup" style={{color:"white",textDecoration:"none"}}>Register</Link></li>
       
    </ul>
  </div>

 <div style={{display:currentlocale==='/'?'block':'none',fontSize:'17px',color:'grey',letterSpacing:'1.5px',position:'relative',marginTop:'10px',height:'auto',paddingBottom: overallwidth<=900?'10px':'0px'}}>
   <div style={{display:overallwidth<=900?'none':'flex',justifyContent:'space-around'}}>
    <p style={{color: coinheader === 'first'?'white':'grey',position:'relative',display:'flex',flexDirection:'column',paddingBottom:'10px',cursor:'pointer'}} onClick={()=>headertable('first')}><span>Today's Best</span> <span style={{display:coinheader==='first'?'block':'none',position:'absolute',bottom:'0px',width:'100%',height:'5px',backgroundColor:'#062750'}}>{liner}</span> </p> 
    <p style={{color: coinheader === 'second'?'white':'grey',position:'relative',display:'flex',flexDirection:'column',paddingBottom:'10px',cursor:'pointer'}} onClick={()=>headertable('second')}><span>All Time Best</span> <span style={{display:coinheader==='second'?'block':'none',position:'absolute',bottom:'0px',width:'100%',height:'5px',backgroundColor:'#062750'}}>{liner}</span> </p> 
    <p style={{color: coinheader === 'third'?'white':'grey',position:'relative',display:'flex',flexDirection:'column',paddingBottom:'10px',cursor:'pointer'}} onClick={()=>headertable('third')}><span>New Listings</span> <span style={{display:coinheader==='third'?'block':'none',position:'absolute',bottom:'0px',width:'100%',height:'5px',backgroundColor:'#062750'}}>{liner}</span> </p> 
    <p style={{color: coinheader === 'fourth'?'white':'grey',position:'relative',display:'flex',flexDirection:'column',paddingBottom:'10px',cursor:'pointer'}} onClick={()=>headertable('fourth')}><span>By Market Cap</span> <span style={{display:coinheader==='fourth'?'block':'none',position:'absolute',bottom:'0px',width:'100%',height:'5px',backgroundColor:'#062750'}}>{liner}</span> </p>
   </div> 
   
   <div style={{position: 'relative',width:'80%',height:'auto',display: overallwidth<=900?'block':'none',backgroundColor: 'rgb(6, 16, 28)',borderRadius: '10px',padding: '4px',border: '0.1px solid #112836',margin: '10px auto',boxSizing: 'border-box'}}>
            <div style={{display:'flex',justifyContent:'space-around',color:'white'}}><p style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{tablemobile==='first'? 'Today Best': tablemobile==='second'?'All Time Best': tablemobile==='third'?'New Listings': 'By Market-Cap'}</p> <p onClick={showtable}>{showtableselectdrop?dropdown : dropup}</p></div>
            <div style={{boxSizing:'border-box',fontSize:'17px',color:'grey', display:showtableselectdrop?'none':'block',position:'absolute',width:'100%',height:'auto',zIndex:'90',top:'35px',left:'0px',padding:'10px',boxShadow: '10px 2px 15px black',backgroundColor: 'rgb(6, 16, 28)',borderRadius:'10px'}}>
               <p style={{cursor:'pointer'}} onClick={()=>headertablemobile('first')}>Today Best</p>
               <p style={{cursor:'pointer'}} onClick={()=>headertablemobile('second')}>All time Best</p>
               <p style={{cursor:'pointer'}} onClick={()=>headertablemobile('third')}>New Listings</p>
               <p style={{cursor:'pointer'}} onClick={()=>headertablemobile('fourth')}>By Market Cap</p>
            </div> 
            
      
   </div>  
   </div>
  </div>;
}

export default Header;
