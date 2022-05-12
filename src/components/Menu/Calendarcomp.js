import React,{useState,useRef,useEffect,useContext} from 'react';
import './calendar.css';
import Calendar from 'react-calendar';
import { useNavigate, NavLink } from 'react-router-dom';
import alexisearch from '../alexi-icons/alexisearch.png';
import {CoinObj} from '../coinholder';
import { Statecontext } from '../CointoviewContext';


export default function Calendarcomp({overallwidth,promosec,leftholder}) {
  const navigate = useNavigate();
  const [showmenu,setshowmenu] = useState(false);
  const menuref = useRef();
  const [searchvalue,setsearchvalue] = useState('');
  const [coinShown, setcoinShown] = useState(CoinObj.slice(0,5));
  const [coinsToSearch, setcoinsToSearch] = useState('');
  const [dayarr,setdayarr] = useContext(Statecontext).dayarr;
  const [date, setDate] = useState('');
  const [dayarrunik,setdayarrunik] = useContext(Statecontext).dayarrunik;
  const [triggerlength,settriggerlength] = useContext(Statecontext).triggerlength;
  const [ordermarginTop,setordermarginTop] = useContext(Statecontext).ordermarginTop;
  const calendarRefPoint = useRef('');
  const mainholder = useRef('')
  
 const setter = (val,valunik) => {
   setdayarr(()=>val);
   settriggerlength(prev=>prev-1);
   setdayarrunik(()=>valunik)
   
 }

 useEffect(()=>{
    if(promosec && overallwidth>900){
       setordermarginTop(calendarRefPoint.current.offsetTop-leftholder.current.offsetTop)
    }
 },[promosec])

  const clickday = (e)=>{
   let changingday = `${e.getDate()}-${e.getMonth() + 1}-${e.getFullYear()}`
   let identifier = changingday+' '+'promo';
   if(dayarr.includes(changingday)){
      let newarr = dayarr;
      let unikarray = dayarrunik;
    let idx = newarr.indexOf(changingday);
    newarr.splice(idx, 1);
    unikarray.splice(idx,1)
    setter(newarr,unikarray); 
   }
   else{
    setdayarr(prev=> [...prev,changingday]);
    setdayarrunik(prev=> [...prev,identifier])
    settriggerlength(prev=>prev+1)
    
    
   }    
}
  
  const tileClassName = (data) => {
   const { _, date, view } = data;

   // Check if a date React-Calendar wants to check is on the list of dates to add class to
   if (view === 'month') {
       if (dayarr.includes(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)) {
           
           
           
           return 'selectedclasstiles';
       }
   }
}
  

  
  const coinToSearch = ()=>{
   return CoinObj.filter(coin => coin[Object.keys(coin)]['name'].toLowerCase().includes(searchvalue))
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


  return (<div ref={mainholder}>
<p style={{width:'80%',margin:'10px auto',color:'#BABABA',textAlign:'left',fontFamily:'NexaTextLight',fontSize:'15px'}}>The coin will be displayed on our ''Promoted Coins'' section, on our home page.</p>
<div className = 'searchholdercalendar' >
    
     <div  ref={menuref} style={{width:'90%',height:"35px",position:'relative'}}>
        <div onClick={rolldownsearch} style={{width:'100%',padding:'7px',paddingLeft:'10px',boxSizing:'border-box',height:'100%',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}}>
            <p style={{display:'flex',justifyContent:'left',alignItems:'center',height:'100%',fontSize:'12px',color:'grey'}}>{searchvalue===''? <p>SEARCH COINEXPLORE</p> :searchvalue }</p> 
            <p style={{height:'35px',width:'35px',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',right:'0px',bottom:'0px'}}><img src={alexisearch}/></p>  
        </div>
        {showmenu && <div className='searchcoinsmenucalendar' >
      <div style={{display:'flex',width:'100%',justifyContent:'space-around',boxSizing:'border-box'}}>
        <p onClick={closeshowmenu} style={{width:'50px',marginTop:'15px',}}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></p>
        <input  placeholder='SEARCH COINEXPLORE' onChange={changeSearch} type='search' value={searchvalue} style={{width:'70%',marginTop:'15px',marginRight:'25px',paddingLeft:'10px',height:'35px',letterSpacing:'1.5px',fontSize:'13px',boxSizing:'border-box',outline:'none',color:'white',border:"1px solid #02050a", borderRadius:'9px',backgroundColor:'#02050a'}}/>
      </div>
                        {coinShown.map(coin=><div onClick={ ()=>{
    setsearchvalue(coin[Object.keys(coin)]['name']);setshowmenu(false)}} style={{display:'flex',color:'white',justifyContent:"space-between",width:'80%',margin:'20px auto'}}>
                                              <div style={{display:'flex',width:'60%',justifyContent:'left'}}>
                                                 <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={coin[Object.keys(coin)]['img']} alt='logocoin'/>
                                                 <p style={{marginLeft:'15px',fontSize:'17px'}}>{coin[Object.keys(coin)]['name']}</p>
                                              </div>
                                              <p>{coin[Object.keys(coin)]['coin_id']}</p>
                                           </div>)}</div>}
        
     </div>
        
  </div>
  
  <p style={{width:'80%',margin:'0px auto',textAlign:'center',fontSize:'15px',fontFamily:'NexaTextLight'}}>Coin Unavailable? <NavLink to='/addcoin'>Add here</NavLink></p>
  <p  ref={calendarRefPoint} style={{width:overallwidth>900?'50%':'70%',margin:'20px auto',textAlign:'center',marginBottom:'5px'}}>AVAILABLE SLOTS</p>
    <Calendar onChange={setDate} value={date} onClickDay={clickday} tileClassName={tileClassName}/>
    
    
   
  <p style={{width:'85%', color:'#BABABA', margin:'20px auto', textAlign:'center',fontFamily:'NexaTextLight',fontSize:'15px'}}><span><strong>Placement :</strong></span> The coin would be displayed on the promoted coin section of outr home page, which in turn in creases visibility to thousands of visitors</p>
    </div>)
}




/*  
String: "class1 class2"
Array of strings: ["class1", "class2 class3"]
Function: ({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 3 ? 'wednesday
*/