import React, {useState,useContext,useEffect,useLayoutEffect} from 'react';
import './promotion.css';
import {useNavigate} from 'react-router-dom';
import Calendarcomp from './Calendarcomp';
import { Statecontext } from '../CointoviewContext';
import BannerpromoAds from './BannerpromoAds';


function Promoted() {
    const navigate = useNavigate();
    const [promosec,setpromosec] = useState(false);
    const [banasec,setbanasec] = useState(false);
    const [dayarr,setdayarr] = useContext(Statecontext).dayarr;
    const [triggerlength,settriggerlength] = useContext(Statecontext).triggerlength;
    const [orderarray,setorderarray] = useState([]);
    const [checker,setchecker] = useState(0);
    const [checkerban,setcheckerban] = useState(0);
    const[dayarrban,setdayarrban] = useContext(Statecontext).dayarrban;
    const  [triggerlengthban,settriggerlengthban] = useContext(Statecontext).triggerlengthban;
    const cart = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>;

 const deletesale = (specificarr)=>{
     if(specificarr['price'] === '$250'){
        let newarr = dayarr;
        let indx = orderarray.indexOf(specificarr);
        newarr.splice(indx, 1);
        setdayarr(newarr);
        settriggerlength(prev=>prev-1);
        console.log('promo');
        //setorderarray(orderarray.filter((_, i) => i !== indx ))
     }

     else if(specificarr['price'] === '$350'){
        let newarr = orderarray;
        let tilearray = dayarrban;
        let indx = orderarray.indexOf(specificarr);
        let ind = dayarrban.indexOf(specificarr);
        newarr.splice(indx, 1);
        tilearray.splice(ind, 1);
        //setorderarray(newarr);
        setdayarrban(tilearray);
        settriggerlengthban(prev=>prev-1);
        
        console.log('banner');
     }
        
 }


const foreacharray = (items)=>{
    const foreachobj = {'date':items,price:'$250',promo:'promo spot'};
    setorderarray([...orderarray,foreachobj])
    //console.log(orderarray)
    console.log('increment');
    
}    

useEffect(()=>{
   if(checker===0 || checker+1 === triggerlength){
    setchecker(triggerlength);
    dayarr.forEach(element => {
        foreacharray(element)
    })
   }

   else if(checker-1 === triggerlength){
    setchecker(triggerlength);
    console.log('decrement')
        setorderarray(orderarray.filter((element, i) => dayarr.includes(element['date']) || dayarrban.includes(element['date']) ))
   }  

},[triggerlength])




//useEffect for the banner section

const foreacharrayban = (items)=>{
    const foreachobj = {'date':items,price:'$350',promo:'banner spot'};
    setorderarray([...orderarray,foreachobj])
    //console.log(orderarray)
    console.log('increment');
    
}    

useEffect(()=>{
   if(checkerban===0 || checkerban+1 === triggerlengthban){
    setcheckerban(triggerlengthban);
    dayarrban.forEach(element => {
        foreacharrayban(element)
    })
   }

   else if(checkerban-1 === triggerlengthban){
    setcheckerban(triggerlengthban);
    console.log('decrement')
    //setdayarrban(dayarrban.filter((element, i) => dayarrban.includes(element['date']) ))
    setorderarray(orderarray.filter((element, i) => dayarr.includes(element['date']) || dayarrban.includes(element['date'])))
    // setorderarray(orderarray.filter((element, i) => orderarray.includes(element['date']) ))
        /*setorderarray([...orderarray,dayarrban])
        setorderarray(orderarray.filter((element, i) => dayarrban.includes(element['date']) ))*/
   }  

},[triggerlengthban])

   
 
    
    const del = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FF0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>;
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
  return (
    <div style={{width:'90%',minHeight:'100vh',color:'white',padding:'30px 30px',boxSizing:'border-box',backgroundColor:'#071323',borderRadius:'20px',margin:'30px auto',border:'2px solid #0B1F36'}}>
        <div style={{color:"white",paddingTop:'10px',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        <p style={{textAlign:'center',fontSize:'37px',letterSpacing:'1.5px',margin:'20px 0px',color:'white'}}>Promotion</p>
        <div style={{width:'100%',display:'flex',justifyContent:"space-between"}}>
            <div style={{width:'65%',padding:'30px',boxSizing:'border-box',height:'auto',background: 'linear-gradient(180deg, #040B15 15.79%, rgba(3, 13, 24, 0) 131.04%)',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                <div>
                    <p style={{textAlign:'center',fontSize:'30px'}}>Advertise</p>
                    <div style={{width:'85%',height:'auto',margin:'10px auto',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                        <div style={{border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px',}}><p style={{width:'100%',display:'flex',justifyContent:'space-between',padding:'10px',boxSizing:'border-box'}}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box'}}>Promoted Section &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:'13px',padding:'5px',borderRadius:'10px'}}>$250/day</span></span> <span style={{fontSize:'25px',cursor:'pointer'}} onClick={()=> setpromosec(!promosec)}>{promosec?'-':'+'}</span></p>
                            {promosec && <div style={{width:'100%',height:'auto'}}><Calendarcomp /></div>}
                        </div>
                        <div style={{border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px'}}><p style={{width:'100%',display:'flex',justifyContent:'space-between',border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px',padding:'10px',boxSizing:'border-box'}}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box'}}>Banner Ad &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:'13px',padding:'5px',borderRadius:'10px'}}>$3000/day</span></span> <span style={{fontSize:'25px',cursor:'pointer'}} onClick={()=> setbanasec(!banasec)}>{banasec?'-':'+'}</span></p>
                            {banasec && <div style={{width:'100%',height:'auto'}}><BannerpromoAds /></div>}
                        </div>
                        <p style={{width:'100%',display:'flex',justifyContent:'space-between',border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px',padding:'10px',boxSizing:'border-box'}}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box'}}>Custom Ad &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:'13px',padding:'5px',borderRadius:'10px'}}>Contact us</span></span> <span style={{fontSize:'25px'}}>+</span></p>
                    </div>
                </div>
                <div>
                <p style={{textAlign:'center',fontSize:'30px',marginTop:'30px'}}>Discounts</p>
                
                <p style={{textAlign:'center',color:'#BABABA',width:'80%',margin:'5px auto'}}>Discounts are calculated based on total frequency of orders.
                                                                There are discounts available for 3+ days, 7+days and 14+ days.</p>
                <div style={{width:'80%',margin:'5px auto',borderRadius:'10px',border:'2px solid #0B1F36'}}>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}><span>3+ Days</span><span>10% Off</span></p>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}><span>7+ Days</span><span>20% Off</span></p>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}><span>14+ Days</span><span>30% Off</span></p>
                </div>
                <p style={{textAlign:'center',color:'#BABABA',width:'80%',margin:'5px auto',marginTop:'15px'}}>NB: By completing any purchase or advertising request,you agree that there 
                                                                will be no refunds issued either in part or full, as expressly stated in our <a href="#">Terms & Conditions</a></p>
                </div>
            </div>
            <div style={{width:'30%',height:'100%'}}>
                <div style={{width:'100%',height:'auto',paddingBottom:'20px',paddingTop:'30px',boxSizing:'border-box',background: 'linear-gradient(180deg, #040B15 15.79%, rgba(3, 13, 24, 0) 131.04%)',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                    <p style={{textAlign:'center',fontSize:'30px',height:"40px"}}>Orders</p>

                    
                    <div style={{width:'90%',margin:'5px auto',height:'auto',boxSizing:'border-box',borderRadius:'10px',border:'2px solid #0B1F36'}}>
                        <div style={{display:'flex',justifyContent:'space-around',marginBottom:'15px',width:'100%',padding:'7px',boxSizing:'border-box'}}><p style={{width:'10%',textAlign:'center'}}>#</p><div style={{width:'80%',display:'flex',justifyContent:'space-between'}}><p>Item(s)</p><p>Date</p><p>Price</p></div><p style={{width:'10%',textAlign:'center'}}> </p></div>
                        {orderarray!=[] && orderarray.map(sales=><div style={{display:'flex',justifyContent:'space-around',height:'30px'}}><p style={{width:'10%',textAlign:'center'}}>{orderarray.indexOf(sales)+1}</p><div style={{width:'80%',display:'flex',justifyContent:'space-between'}}><p>{sales['promo']}</p><p>{sales['date']}</p><p>{sales['price']}</p></div><p style={{width:'10%',textAlign:'center'}} onClick={()=>deletesale(sales)} >{del}</p></div>)}
                        <div style={{width:'100%',border:'0.5px solid #0B1F36',borderWidth:'0.5px,0px,0px'}}>
                            <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}><p style={{textAlign:'left',width:'50%',paddingLeft:'10px'}}>Subtotal</p> <p style={{textAlign:'right',width:'50%',paddingRight:'10px'}}>$0</p></div>
                            <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}><p style={{textAlign:'left',width:'50%',paddingLeft:'10px'}}>Discount</p> <p style={{textAlign:'right',width:'50%',paddingRight:'10px'}}>$0</p></div>
                            <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}><p style={{textAlign:'left',width:'50%',paddingLeft:'10px'}}>Total</p> <p style={{textAlign:'right',width:'50%',paddingRight:'10px'}}>$0</p></div>
                        </div>
                    </div>
                    
                <div>
                    <div style={{width:'90%',margin:'15px auto',padding:'10px',textAlign:'left',borderRadius:'10px',border:'2px solid #0B1F36'}}>Select payment method</div>
                    <div style={{width:'90%',margin:'15px auto',padding:'10px',textAlign:'left',borderRadius:'10px',border:'2px solid #0B1F36'}}>Name:</div>
                    <div style={{width:'90%',margin:'15px auto',padding:'10px',textAlign:'left',borderRadius:'10px',border:'2px solid #0B1F36'}}>E-mail:</div>
                </div>
                <div style={{width:'60%',height:'30px',marginLeft:'35%',textAlign:'right',display:'flex',alignItems:'center',justifyContent:'space-around',borderRadius:'10px',backgroundColor:'blue'}}><p style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{cart}</p> <p>Proceed with payment</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promoted


/* import 'react-calendar/dist/Calendar.css' */