import React, {useState,useRef,useEffect} from 'react';
import logo from '../images/coinexploreTwo.png';
import './header.css';
import { useNavigate } from 'react-router-dom';
import avatar from '../icons/avatar.svg';
import {Link} from 'react-router-dom';
import {CoinObj} from './coinholder';


function Header() {
   const navigate = useNavigate();
   const [showhamburger, setshowhamburger] = useState(false);
   const [showmenu,setshowmenu] = useState(false);
   const menuref = useRef();
   const [searchvalue,setsearchvalue] = useState('')
   const [coinShown, setcoinShown] = useState(CoinObj.slice(0,5));
   const [coinsToSearch, setcoinsToSearch] = useState('');

  const coinToSearch = ()=>{
     return CoinObj.filter(coin => coin[Object.keys(coin)]['name'].toLowerCase().includes(searchvalue))
  }

  //setcoinsToSearch()

   useEffect(
      ()=>{
         let newvar = coinToSearch();
         console.log(coinsToSearch)
         if(newvar.length>5){
            console.log(newvar.slice(0,5))
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
               <div className='logoandtitleholder' style={{display:'flex',justifyContent:'left',fontFamily: "'Dongle', sans-serif"}}>
        
                  <div style={{height:"100%", textAlign:'center',display:'flex',alignItems:"center"}}>
                     <img src={logo} alt='Logo' style={{width:'40px',height:'40px'}}/>
                  </div>
                  <div style={{height:"100%", textAlign:'center',display:'flex',alignItems:"center"}}>
                     <p style={{fontSize:'47px',textAlign:'left'}}>COIN<span style={{color:'#708AF4'}}>EXPLORE</span></p>    
                  </div>  
                  </div>     


         
         <div className='menuholder' >
              <input className="menuicon" type= "checkbox" id='menu' />
              <label className='open' for='menu'> 
                 <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
              </label>
              <label className='cancel' for='menu'> 
                 <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
              </label>
              <div className='hambugholder'>
                 <ul>
                    <li className='hamburgli'>Home</li>
                    <li className='hamburgli'><Link to="/signin" style={{color:"white",textDecoration:"none"}}>Sign In</Link></li>
                    <li className='hamburgli'><Link to="/newspage" style={{color:"white",textDecoration:"none"}}>News</Link></li>
                    <li className='hamburgli'>Contact Us</li>
                    <li className='hamburgli'><Link to="/addcoin" style={{color:"white",textDecoration:"none"}}>Add Coin</Link></li>
                 </ul>
              </div> 
           </div>   

    <ul className="lister">
       <li className='list'><Link to="/addcoin" style={{color:"white",textDecoration:"none"}}>Add Coin</Link></li>
       <li className='list'>Promote</li>
       <li className='list'><Link to="/newspage" style={{color:"white",textDecoration:"none"}}>News</Link></li>
       <li className='list'>Contact Us</li>
       <p style={{width:'0.5px',height:"33px",backgroundColor:"white",margin:'0px 5px'}}></p>
       <li className='list'><Link to="/signin" style={{color:"white",textDecoration:"none"}}>Sign In</Link></li>
       <li className='list'><Link to="/signup" style={{color:"white",textDecoration:"none"}}>Register</Link></li>
       <img src= {avatar} style={{width:'30px',height:"30px"}}/>
    </ul>
  </div>

  
  <div className = 'searchholder' >
     <div ref={menuref} style={{width:'100%',height:"35px",position:'relative'}}>
        <input onClick={rolldownsearch} placeholder='search for coins' onChange={changeSearch} type='search' value={searchvalue} style={{width:'100%',height:'100%',outline:'none',color:'white', borderRadius:'9px',backgroundColor:'rgb(6, 16, 28)'}}/>
        {showmenu && <div className='searchcoinsmenu' >
                        {coinShown.map(coin=><div onClick={ ()=>{
    navigate(`/coin/${coin[Object.keys(coin)]['name']}`,{state: coin});setshowmenu(false)}} style={{display:'flex',color:'white', justifyContent:"space-between",width:'90%',margin:'20px auto'}}>
                                              <div style={{display:'flex',width:'60%'}}>
                                                 <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={coin[Object.keys(coin)]['img']} alt='logocoin'/>
                                                 <p style={{fontSize:'17px'}}>{coin[Object.keys(coin)]['name']}</p>
                                              </div>
                                              <p>{coin[Object.keys(coin)]['coin_id']}</p>
                                           </div>)}</div>}
        
     </div>
        
  </div>
     
  
  </div>;
}

export default Header;
