import React, {useState,useRef,useEffect,useContext} from 'react';
import logo from '../images/coinexploreTwo.png';
import './header.css';
import { useNavigate,NavLink } from 'react-router-dom';
import avatar from '../icons/avatar.svg';
import { Statecontext } from './CointoviewContext';
import {Link} from 'react-router-dom';
import {CoinObj} from './coinholder';
import alexisearch from './alexi-icons/alexisearch.png';
import Alert from './Menu/Alert';



function Header({overallwidth}) {
   const navigate = useNavigate();
   const [showhamburger, setshowhamburger] = useState(true);
   const [showmenu,setshowmenu] = useState(false);
   const menuref = useRef();
   const [showLogout, setshowLogout] = useState(false);
   const [currentlocale,setcurrentlocale] = useContext(Statecontext).currentlocale;
   const[alertobj,setalertobj] = useContext(Statecontext).alertobj
   const [searchvalue,setsearchvalue] = useState('')
   const [coinShown, setcoinShown] = useState(CoinObj.slice(0,5));
   const [coinsToSearch, setcoinsToSearch] = useState('');
   const open = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>;
   const close = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>;
   const dropdown = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/></svg>;
   const dropup = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14l5-5 5 5H7z"/></svg>;
   const [userObject,setuserObject] = useContext(Statecontext).userObject;
   const mobilemenuref = useRef();
   const coinToSearch = ()=>{
     return CoinObj.filter(coin => coin[Object.keys(coin)]['name'].toLowerCase().includes(searchvalue))
  }
  const avatar = <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="48" width="48"><path d="M11.1 35.25q3.15-2.2 6.25-3.375Q20.45 30.7 24 30.7q3.55 0 6.675 1.175t6.275 3.375q2.2-2.7 3.125-5.45Q41 27.05 41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 3.05.95 5.8t3.15 5.45ZM24 25.5q-2.9 0-4.875-1.975T17.15 18.65q0-2.9 1.975-4.875T24 11.8q2.9 0 4.875 1.975t1.975 4.875q0 2.9-1.975 4.875T24 25.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.775t4.3-6.35q2.725-2.725 6.375-4.3Q19.9 4 24 4q4.15 0 7.775 1.575t6.35 4.3q2.725 2.725 4.3 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.3 6.375-2.725 2.725-6.35 4.3Q28.15 44 24 44Zm0-3q2.75 0 5.375-.8t5.175-2.8q-2.55-1.8-5.2-2.75-2.65-.95-5.35-.95-2.7 0-5.35.95-2.65.95-5.2 2.75 2.55 2 5.175 2.8Q21.25 41 24 41Zm0-18.5q1.7 0 2.775-1.075t1.075-2.775q0-1.7-1.075-2.775T24 14.8q-1.7 0-2.775 1.075T20.15 18.65q0 1.7 1.075 2.775T24 22.5Zm0-3.85Zm0 18.7Z"/></svg>;

  const ndate = new Date()
  //setcoinsToSearch()
/* 
  if(tableposref !== ' ')
   {  console.log('a');
   console.log(tableposref.current.offsetTop);
      ScrollToref(); 
   }
*/


   useEffect(
      ()=>{
         const registeredUserObject = JSON.parse(window.localStorage.getItem('userDetails'));
         console.log(registeredUserObject)
         console.log('a')
         //console.log(registeredUserObject.exp < new Date().getTime())
         if(registeredUserObject){
            console.log('b')

            if(registeredUserObject.exp*1000 > new Date().getTime()){
               console.log('c')
               const userDetail = JSON.parse(window.localStorage.getItem('userDetails'));
            const {access_token,username,email,exp} = userDetail;
            setuserObject({...userObject,...{userEmail:email,userUsername:username,token:access_token,exp}})
            }
            else{
               console.log('d')
               setuserObject({...userObject,...{userEmail:'',userUsername:'',token:'',exp: 0}})
               window.localStorage.removeItem('userDetails')
            }
            
         }
         else{
            console.log('e')
            setuserObject({...userObject,...{userEmail:'',userUsername:'',token:'',exp:0}})
            window.localStorage.removeItem('userDetails')
         }
      },[userObject.token,showLogout])
   

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


//useEffect to trigger alert messages
useEffect(()=>{
   if(alertobj.message!==''){

      //setalertobj({...alertobj,...{pass:true}})
      console.log('trial a')
      
      const time = setTimeout(() =>{setalertobj({...alertobj,...{pass:false}});console.log('trial b')} , 5000);
      
      
       return(()=>clearTimeout(time))
      }
       
      
},[alertobj.trigger])
   
   const changeSearch = (e)=>{
      setsearchvalue(e.target.value)
   }

   const closeshowmenu = ()=>{
      setshowmenu(false)
   }

   const rolldownsearch = ()=> {
      setshowmenu(true)
      
   }



   const gotoCoin = async(id)=>{
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
       }
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


   useEffect(
      ()=>{
         let checkwhereclicked = (event)=>{
           
            if(!mobilemenuref.current.contains(event.target)){
               setshowLogout(false)
            }
         }
         document.addEventListener('mousedown',checkwhereclicked);

         return ()=>{
            document.removeEventListener('mousedown',checkwhereclicked)
         }
      }
   )


  return <div className='headerwrapper'>
            {alertobj.pass && <Alert />}
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
                        {coinShown.map(coin=><div onClick={ ()=>{gotoCoin(coin['id'])}} style={{display:'flex',color:'white',justifyContent:"space-between",width:'80%',margin:'20px auto'}}>
                                              <div style={{display:'flex',width:'60%',justifyContent:'left'}}>
                                                 <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={coin['logo']} alt='logocoin'/>
                                                 <p style={{marginLeft:'15px',fontSize:'17px'}}>{coin['name']}</p>
                                              </div>
                                              <p>{coin['symbol']}</p>
                                           </div>)}</div>}
        
     </div>
        
  </div>
         
         <div className='menuholder'>
              {showhamburger?<div  onClick={()=>{setshowhamburger(false) }}>{open}</div>:
              <div className='divforcanceler'>
                   
                  <div className='menuSector' >
                     <div onClick={()=>{setshowhamburger(true)}} style={{position:'absolute',top:'12px',right:'5px'}}>{close}</div> 
                     
                     <div style={{position:'absolute',textAlign:'left',height:'50%',display:'flex',justifyContent:'space-around',top:'20%',left:'20px',flexDirection:'column',color:"white"}}>
                     <p style={{textAlign:'left',fontFamily:'NexaTextLight',display:userObject.token===''?'none':'block',marginBottom:'30px'}}>{`Welcome to CoinExplore ${userObject.userEmail}`}</p>   
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/addcoin' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>Add Coin</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/promoted' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>Advertise</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/newspage' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>News</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/contactUs' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none'}}}>Contact Us</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/signin' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none',display:userObject.token===''?'block':'none'}}}>Sign In</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/signup' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none',display:userObject.token===''?'block':'none'}}}>Register</NavLink>
                        <NavLink onClick={()=>{setshowhamburger(true) }} to='/userwatchlist' style={({isActive})=>{ return{color: isActive?'grey':'white',textDecoration:'none',display:userObject.token===''?'none':'block'}}}>Watchlist</NavLink>
                        <span onClick={()=>{window.localStorage.removeItem('userDetails');setshowLogout(!showLogout);setshowhamburger(true) }} style={{ color: 'white',display:userObject.token===''?'none':'block',cursor:'pointer'}}>Log Out</span>
                     </div>
                  
                  </div>  
              </div>}
           </div>   

           

    <ul className={userObject.token===''?"lister":"listerWithToken"}>
       <li className='list'><Link to="/addcoin" style={{color:"white",textDecoration:"none"}}>Add Coin</Link></li>
       <li className='list'><Link to="/promoted" style={{color:"white",textDecoration:"none"}}>Advertise</Link></li>
       <li className='list'><Link to="/newspage" style={{color:"white",textDecoration:"none"}}>News</Link></li>
       <li className='list'><Link to="/contactUs" style={{color:"white",textDecoration:"none"}}>Contact Us</Link></li>
       <p style={{width:'0.5px',height:"33px",backgroundColor:"white",margin:'0px 5px'}}></p>
       <li className='list'><Link to="/signin" style={{color:"white",textDecoration:"none",display:userObject.token===''?'block':'none'}}>Sign In</Link></li>
       <li className='list'><Link to="/signup" style={{color:"white",textDecoration:"none",display:userObject.token===''?'block':'none'}}>Register</Link></li>
       <div ref={mobilemenuref} style={{display:userObject.token===''?'none':'block',position:'relative',marginRight:'10px'}}>
         <p onClick={()=>setshowLogout(!showLogout)}>{avatar}</p>
         <div style={{position:'absolute',display:showLogout?'block':'none',right:'0px',top:'48px',width:'420px',color:"white",fontFamily:'NexaTextLight',padding:"5px",paddingTop:'15px',boxSizing:'border-box',height:'140px',borderRadius:'10px',border:'2px solid #0B1F36',backgroundColor:'#05101c',zIndex:'5'}}>
               <p style={{textAlign:'left'}}>{`Welcome to CoinExplore ${userObject.userEmail}`}</p>
               
               <p onClick={()=>{window.localStorage.removeItem('userDetails');setshowLogout(!showLogout)}} style={{marginTop:'15px',textAlign:'left',cursor:'pointer'}}>Log Out</p>
               <p onClick={()=>{navigate('/userwatchlist');setshowLogout(!showLogout)}} style={{marginTop:'15px',textAlign:'left',cursor:'pointer'}}>Watchlist</p>
         </div>
      </div>
    </ul>
  </div>

 
  </div>;
}

export default Header;
