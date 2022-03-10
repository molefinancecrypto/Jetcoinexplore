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
   const searchicon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>;

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
               <div className='logoandtitleholder'>
        
                  <div style={{height:"100%", textAlign:'center',display:'flex',alignItems:"center"}}>
                     <img src={logo} alt='Logo' style={{width:'40px',height:'40px'}}/>
                  </div>
                  <div className='coinexplore'>
                     <p style={{fontSize:'33px',textAlign:'left',letterSpacing:'1.5px'}}><strong style={{fontWeight:'1200px'}}>COIN</strong>EXPLORE</p>    
                  </div>  
               </div>     

               <div className = 'searchholder' >
     <div ref={menuref} style={{width:'100%',height:"35px",position:'relative'}}>
        <div onClick={rolldownsearch} style={{width:'100%',padding:'7px',paddingLeft:'10px',boxSizing:'border-box',height:'100%',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}}>
            <p style={{display:'flex',justifyContent:'left',alignItems:'center',height:'100%',fontSize:'12px',color:'grey'}}>SEARCH COINEXPLORE</p> 
            <p style={{height:'35px',width:'35px',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',right:'0px',bottom:'0px'}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></p>  
        </div>
        {showmenu && <div className='searchcoinsmenu' >
      <div style={{display:'flex',width:'100%',justifyContent:'space-around',boxSizing:'border-box'}}>
        <p onClick={closeshowmenu} style={{width:'50px',marginTop:'15px',}}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></p>
        <input  placeholder='SEARCH COINEXPLORE' onChange={changeSearch} type='search' value={searchvalue} style={{width:'70%',marginTop:'15px',marginRight:'25px',paddingLeft:'10px',height:'35px',letterSpacing:'1.5px',fontSize:'13px',boxSizing:'border-box',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}}/>
      </div>
                        {coinShown.map(coin=><div onClick={ ()=>{
    navigate(`/coin/${coin[Object.keys(coin)]['name']}`,{state: coin});setshowmenu(false)}} style={{display:'flex',color:'white',backgroundColor:'purple', justifyContent:"space-between",width:'80%',margin:'20px auto'}}>
                                              <div style={{display:'flex',width:'60%',justifyContent:'left',backgroundColor:'red'}}>
                                                 <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={coin[Object.keys(coin)]['img']} alt='logocoin'/>
                                                 <p style={{fontSize:'17px'}}>{coin[Object.keys(coin)]['name']}</p>
                                              </div>
                                              <p>{coin[Object.keys(coin)]['coin_id']}</p>
                                           </div>)}</div>}
        
     </div>
        
  </div>
         
         <div className='menuholder' >
              <input className="menuicon" type= "checkbox" id='menu' />
              <label className='open' for='menu'> 
                 <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
              </label>
              <label className='cancel' for='menu'> 
                 <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
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

  
  
     
  
  </div>;
}

export default Header;
