import React, {useState,useContext,useEffect,useRef} from 'react';
import './promotion.css';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Calendarcomp from './Calendarcomp';
import { Statecontext } from '../CointoviewContext';
import BannerpromoAds from './BannerpromoAds';
import GoToTop from '../Gototop';
import PopUpBanner from './PopUpBanner';


function Promoted({overallwidth}) {
    const navigate = useNavigate();
    const [headertoshow,setheadertoshow] = useContext(Statecontext).headertoshow;
  const [headerterms,setheaderterms] = useContext(Statecontext).headerterms
    const [promosec,setpromosec] = useState(false);
    const [banasec,setbanasec] = useState(false);
    const [popbanner,setpopbanner] = useState(false);
    const [customAd,setcustomAd] = useState(false);
    const [dayarr,setdayarr] = useContext(Statecontext).dayarr;
    const [triggerlength,settriggerlength] = useContext(Statecontext).triggerlength;
    const [orderarray,setorderarray] = useState([]);
    const [checker,setchecker] = useState(0);
    const [checkerban,setcheckerban] = useState(0);
    const [checkerpop,setcheckerpop] = useState(0);
    const [subtotal,setsubtotal] = useState(0);
    const [discount,setdiscount] = useState(0);
    const [total,settotal] = useState(0);
    const [paymentSector,setpaymentSector] = useState({main:false,crypto:false});
    const[dayarrban,setdayarrban] = useContext(Statecontext).dayarrban;
    const [dayarrunik,setdayarrunik] = useContext(Statecontext).dayarrunik;
    const [dayarrbanunik,setdayarrbanunik] = useContext(Statecontext).dayarrbanunik;
    const  [triggerlengthban,settriggerlengthban] = useContext(Statecontext).triggerlengthban;
    const [triggerlengthpop,settriggerlengthpop] = useContext(Statecontext).triggerlengthpop;
    const [ordermarginTop,setordermarginTop] = useContext(Statecontext).ordermarginTop;
    const[dayarrpopup,setdayarrpopup] = useContext(Statecontext).dayarrpopup;
    const[dayarrpopunik,setdayarrpopunik] = useContext(Statecontext).dayarrpopunik;
    const cart = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>;
    const promocalendarRef = useRef('');
    const leftholder = useRef('')
    const arrowDown = <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" fill="#FFFFFF"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>;
    const arrowTop = <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" fill="#FFFFFF"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>
    const deletesale = (specificarr)=>{
     if(specificarr['promo'] === 'promo'){
        let newarr = dayarr;
        let unikarray = dayarrunik;
        let indx = dayarr.indexOf(specificarr['date']); 
        newarr.splice(indx, 1);
        unikarray.splice(indx,1);
        setdayarrunik(unikarray)
        setdayarr(newarr);
        settriggerlength(prev=>prev-1);
        //setorderarray(orderarray.filter((_, i) => i !== indx ))
     }

     else if(specificarr['promo'] === 'banner'){
        //let newarr = orderarray;
        let tilearray = dayarrban;
        let unikarraybanner = dayarrbanunik;
        //let indx = orderarray.indexOf(specificarr);
        let ind = dayarrban.indexOf(specificarr['date']);
        //newarr.splice(indx, 1);
        unikarraybanner.splice(ind,1);
        tilearray.splice(ind, 1); 
        //setorderarray(newarr);
        setdayarrbanunik(unikarraybanner)
        setdayarrban(tilearray);
        settriggerlengthban(prev=>prev-1);
        
     }

     else{
        let tilearray = dayarrpopup;
        let unikarraypopup = dayarrpopunik;
        //let indx = orderarray.indexOf(specificarr);
        let ind = dayarrpopup.indexOf(specificarr['date']);
        //newarr.splice(indx, 1);
        unikarraypopup.splice(ind,1);
        tilearray.splice(ind, 1); 
        //setorderarray(newarr);
        setdayarrpopunik(unikarraypopup)
        setdayarrpopup(tilearray);
        settriggerlengthpop(prev=>prev-1);
     }
        
 }

const foreacharray = (items,identifier)=>{
    const foreachobj = {'date':items,price:'$100',promo:'promo',id:dayarrunik[identifier]};
    setorderarray([...orderarray,foreachobj])
    //console.log(orderarray)
    console.log('increment');
    
}

useEffect(()=>{
   if(checker===0 || checker+1 === triggerlength){
    setchecker(triggerlength);
    dayarr.forEach(element => {
        foreacharray(element,dayarr.indexOf(element))
    })
   }

   else if(checker-1 === triggerlength){
    setchecker(triggerlength);
    console.log('decrement trigger');
    setorderarray(orderarray.filter((element,i) => dayarrunik.includes(element.id) || dayarrbanunik.includes(element.id) || dayarrpopunik.includes(element.id)))
   }  
   console.log(orderarray)
},[triggerlength,checker,dayarr,dayarrban,dayarrbanunik,dayarrpopunik,dayarrunik,foreacharray,orderarray])

//useEffect for the banner section

const foreacharrayban = (items,identity)=>{
    const foreachobj = {'date':items,price:'$150',promo:'banner',id:dayarrbanunik[identity]};
    setorderarray([...orderarray,foreachobj])
    //console.log(orderarray)
    console.log('increment');
    
}    

useEffect(()=>{
   if(checkerban===0 || checkerban+1 === triggerlengthban){
    setcheckerban(triggerlengthban);
    dayarrban.forEach(element => {
        foreacharrayban(element,dayarrban.indexOf(element))
    })
   }

   else if(checkerban-1 === triggerlengthban){
    setcheckerban(triggerlengthban);
    console.log('decrement triggerban')
    //setdayarrban(dayarrban.filter((element, i) => dayarrban.includes(element['date']) ))
    setorderarray( orderarray.filter((element,i) => dayarrunik.includes(element.id) || dayarrbanunik.includes(element.id) || dayarrpopunik.includes(element.id)))
    // setorderarray(orderarray.filter((element, i) => orderarray.includes(element['date']) ))
        /*setorderarray([...orderarray,dayarrban])
        setorderarray(orderarray.filter((element, i) => dayarrban.includes(element['date']) ))*/
        
   }  
},[triggerlengthban,checkerban,dayarrban,dayarrbanunik,dayarrpopunik,dayarrunik,foreacharrayban,orderarray])


//useEffect for pop-up section

const foreacharraypop = (items,identity)=>{
    const foreachobj = {'date':items,price:'$225',promo:'pop-up',id:dayarrpopunik[identity]};
    setorderarray([...orderarray,foreachobj])
    //console.log(orderarray)
    console.log('increment');
    
}  


useEffect(()=>{
    if(checkerpop===0 || checkerpop+1 === triggerlengthpop){
     setcheckerpop
     
     (triggerlengthpop);
     dayarrpopup.forEach(element => {
         foreacharraypop(element,dayarrpopup.indexOf(element))
     })
    }
 
    else if(checkerpop-1 === triggerlengthpop){
     setcheckerpop(triggerlengthpop);
     console.log('decrement triggerpop')
     //setdayarrban(dayarrban.filter((element, i) => dayarrban.includes(element['date']) ))
     setorderarray( orderarray.filter((element,i) => dayarrunik.includes(element.id) || dayarrbanunik.includes(element.id) || dayarrpopunik.includes(element.id)))
     // setorderarray(orderarray.filter((element, i) => orderarray.includes(element['date']) ))
         /*setorderarray([...orderarray,dayarrban])
         setorderarray(orderarray.filter((element, i) => dayarrban.includes(element['date']) ))*/
         
    }  
 },[triggerlengthpop,checkerpop,dayarrbanunik,dayarrpopunik,dayarrpopup,dayarrunik,foreacharraypop,orderarray])

//region for cost calculator
const Calculator = (promoarr,bannerarr,poparr)=>{

    const promocalculation = (promo)=>{
        let promocost;
        if(promo.length >= 0 && promo.length<3){
            promocost = 0;
        }
        else if(promo.length>=3 && promo.length<7){
            promocost = (promo.length * 100 * 0.1)
        }
    
        else if(promo.length>=7 && promo.length<10){
            promocost = (promo.length * 100 * 0.15)
        }
        else if(promo.length>=10){
            promocost = (promo.length * 100 * 0.25)
        }
    
        return promocost;
    }
    
    const bannercalculation = (banner)=>{
        let bannercost;
        if(banner.length >=0 && banner.length<3){
            bannercost = 0;
        }
        else if(banner.length>=3 && banner.length<7){
            bannercost = (banner.length * 150 * 0.1)
        }
    
        else if(banner.length>=7 && banner.length<10){
            bannercost = (banner.length * 150 * 0.15)
        }
        else if(banner.length>=10){
            bannercost = (banner.length * 150 * 0.25)
        }
    
        return bannercost;
    }

    const popcalculation = (popper)=>{
        let popcost;
        if(popper.length >=0 && popper.length<3){
            popcost = 0;
        }
        else if(popper.length>=3 && popper.length<7){
             popcost = (popper.length * 225 * 0.1)
        }
    
        else if(popper.length>=7 && popper.length<10){
            popcost = (popper.length * 225 * 0.15)
        }
        else if(popper.length>=10){
            popcost = (popper.length * 225 * 0.25)
        }
    
        return popcost;
    }
    
    const totalfunc = (promo,banner,popper)=>{
        let totalcost;
        totalcost = (promo.length * 100) + (banner.length * 150) +(popper.length*225);
        return totalcost;
    }
    
    let discountfunc = ()=>{
        let discountvalue;
        let discountfirst = promocalculation(promoarr);
        let discountsecond = bannercalculation(bannerarr);
        let discountthird = popcalculation(poparr)
        discountvalue = discountfirst+discountsecond+discountthird;

        return discountvalue;
    }

    let realvalue = totalfunc(promoarr,bannerarr,poparr) - discountfunc()

    return [totalfunc(promoarr,bannerarr,poparr),discountfunc(),realvalue]
}

//function for moving order section
const bannermover = ()=>{
    if(promosec || popbanner){
        setpromosec(false)
        setpopbanner(false)
    }
    setbanasec(!banasec);
    setordermarginTop(0);
}

const promomover = ()=>{
    if(banasec || popbanner){
        setbanasec(false)
        setpopbanner(false)
    }
    setpromosec(!promosec);
    setordermarginTop(0)
}

const popupmover = ()=>{
    if(promosec || banasec){
        setpromosec(false)
        setbanasec(false)
    }
    setpopbanner(!popbanner)
    setordermarginTop(0)
}





//useEffect for cost calculation

   useEffect(()=>{
       /*let discountpromo;
       let discountbanner;

       let totalcost = (dayarr.length * 250) + (dayarrban.length * 350);
       setsubtotal(totalcost);
       const promo = promocalculation(discountpromo);
       const banner = bannercalculation(discountbanner);
       
        setdiscount(promo+banner);

        let total = subtotal-discount;

       console.log(total)
        settotal(subtotal-discount)*/
        const [subtotalvalue,discountvalue,totalvalue] = Calculator(dayarr,dayarrban,dayarrpopup);
        setsubtotal(subtotalvalue);
        setdiscount(discountvalue);
        settotal(totalvalue);
        
   },[triggerlength,triggerlengthban,triggerlengthpop,dayarr,dayarrban,dayarrpopup])
 
    
    const del = <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#FF0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>;
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
  return (
    <div style={{width:'96%',minHeight:'100vh',fontSize:overallwidth>900?'18px':'13px',color:'white',padding:overallwidth>900?'25px':'15px',paddingTop:"20px",boxSizing:'border-box',backgroundColor:'#071323',borderRadius:'15px',margin:'30px auto',border:'1px solid #0B1F36'}}>
        <div style={{color:"white",paddingLeft:'2.5%',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        <p style={{textAlign:'center',fontSize:overallwidth>900?'37px':'25px',letterSpacing:'1.5px',marginBottom:'20px',color:'white'}}>Advertise</p>
        <div style={{width:'95%',margin:'0px auto',display:'flex',justifyContent:"space-between",flexDirection:overallwidth>900?'row':'column'}}>
            <div ref={leftholder} style={{width:overallwidth>900?'65%':'100%',margin:overallwidth>900?'0px':'0px auto',padding:overallwidth>900?'30px':'10px',boxSizing:'border-box',height:'auto',background: 'linear-gradient(180deg, #040B15 15.79%, rgba(3, 13, 24, 0) 131.04%)',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                <div>
                    <p style={{textAlign:'center',fontSize:overallwidth>900?'30px':'20px',height:'40px'}}></p>
                    <div style={{width:overallwidth>900?'85%':'95%',height:'auto',transitionProperty:"height",transitionDuration:"0.45secs",margin:'5px auto',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                        <div className='classForPromo' ><p style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',boxSizing:'border-box'}} onClick={()=> promomover()}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box',fontSize:overallwidth>900?'20px':'11px'}}>Promoted Section &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:overallwidth>900?'13px':'9px',padding:overallwidth>900?'5px':'3px',borderRadius:'10px'}}>$250/day</span></span> <span style={{fontSize:'25px',cursor:'pointer'}} >{promosec?'-':'+'}</span></p>
                            {promosec && <div ref={promocalendarRef} style={{width:'100%',height:'auto'}}><Calendarcomp overallwidth={overallwidth} promosec={promosec}  leftholder={leftholder}/></div>}
                        </div>
                        <div className='classForBanner' style={{border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px'}} ><p style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',boxSizing:'border-box'}} onClick={()=> bannermover()}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box',fontSize:overallwidth>900?'20px':'11px'}}>Banner Ad &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:overallwidth>900?'13px':'9px',padding:overallwidth>900?'5px':'3px',borderRadius:'10px'}}>$350/day</span></span> <span style={{fontSize:'25px',cursor:'pointer'}} >{banasec?'-':'+'}</span></p>
                            {banasec && <div style={{width:'100%',height:'auto'}}><BannerpromoAds overallwidth={overallwidth} banasec={banasec}  leftholder={leftholder}/></div>}
                        </div>
                        <div style={{border:'2px solid #0B1F36',borderWidth:'0px 0px 1.5px'}}> <p style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',boxSizing:'border-box'}} onClick={()=> popupmover()}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box',fontSize:overallwidth>900?'20px':'11px'}}>Pop-Up Banner Ad &nbsp; &nbsp; <span style={{backgroundColor:'blue',fontSize:overallwidth>900?'13px':'9px',padding:overallwidth>900?'5px':'3px',borderRadius:'10px'}}>$350/day</span></span> <span style={{fontSize:'25px',cursor:'pointer'}} >{popbanner?'-':'+'}</span></p>
                            {popbanner && <div style={{width:'100%',height:'auto'}}><PopUpBanner overallwidth={overallwidth} popbanner={popbanner}  leftholder={leftholder}/></div>}
                        </div>
                        <div ><p style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',boxSizing:'border-box'}} onClick={()=> setcustomAd(!customAd)}><span style={{width:'100%',textAlign:'left',boxSizing:'border-box',fontSize:overallwidth>900?'20px':'11px'}}>Custom Ad &nbsp; &nbsp; </span> <span style={{fontSize:'25px'}}>{customAd?'-':'+'}</span></p>
                            {customAd && <div style={{width:'100%',height:'auto',textAlign:'center',padding:'10px',boxSizing:'border-box'}}>
                                            <p style={{width:'auto',padding:'7px',margin:'5px auto',boxSizing:'border-box',fontFamily:'NexaTextLight'}}>Please contact us with the details of your customized ad.</p>
                                            <p style={{width:'fit-content',padding:'10px',backgroundColor:"blue",borderRadius:'5px',margin:'5px auto',fontFamily:'NexaTextLight'}}>Contact Us</p>
                                         </div>}
                        </div>
                    </div>
                </div>
                <div>
                <p style={{textAlign:'center',fontSize:overallwidth>900?'30px':'20px',marginTop:'30px'}}>Discounts</p>
                
                <p style={{textAlign:'center',color:'#BABABA',width:overallwidth>900?'65%':'100%',fontSize:'15px',margin:'5px auto',marginBottom:'15px',fontFamily:'NexaTextLight'}}>Discounts are calculated based on total frequency of orders.
                                                                There are discounts available for 3+ days, 7+days and 14+ days.</p>
                <div style={{width:overallwidth>900?'80%':'100%',margin:'5px auto',borderRadius:'10px',border:'2px solid #0B1F36'}}>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}><span>3+ Days</span><span>10% Off</span></p>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}><span>7+ Days</span><span>15% Off</span></p>
                    <p style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px',marginBottom:'10px'}}><span>14+ Days</span><span>25% Off</span></p>
                </div>
                <p style={{textAlign:'center',color:'#BABABA',width:overallwidth>900?'65%':'100%',margin:'5px auto',marginTop:'15px',fontFamily:'NexaTextLight',fontSize:'15px'}}>NOTE: By completing any purchase or advertising request,you agree that there 
                                                                will be no refunds issued either in part or full, as expressly stated in our <p onClick={()=>{setheadertoshow(0);setheaderterms('Terms & Conditions')}}><Link to="/rulesandreg" style={{color:'rgb(176, 176, 240)'}}> Terms & Conditions</Link></p></p>
                </div>
            </div>
            <div  style={{width:overallwidth>900?'30%':'100%',margin:overallwidth>900?'0px':'30px auto',height:'100%'}}>
                <div style={{width:'100%',height:'auto',paddingBottom:'20px',paddingTop:'30px',boxSizing:'border-box',marginTop:overallwidth>900?ordermarginTop:'0px',background: 'linear-gradient(180deg, #040B15 15.79%, rgba(3, 13, 24, 0) 131.04%)',border:'2px solid #0B1F36',borderRadius:'10px'}}>
                    <p style={{textAlign:'center',fontSize:overallwidth>900?'30px':'20px',height:"40px"}}>Orders</p>

                    
                    <div style={{width:'90%',margin:'5px auto',height:'auto',boxSizing:'border-box',borderRadius:'10px',border:'2px solid #0B1F36',fontSize:'15px'}}>
                        <div style={{display:'flex',justifyContent:'space-around',width:'100%',padding:'7px',boxSizing:'border-box'}}><p style={{width:'10%',textAlign:'center'}}>#</p><div style={{width:'80%',display:'flex',justifyContent:'space-between'}}><p>Item(s)</p><p>Date</p><p>Price</p></div><p style={{width:'10%',textAlign:'center'}}> </p></div>
                        {orderarray!=[] && orderarray.map(sales=><div style={{display:'flex',justifyContent:'space-around',height:'30px',fontFamily:'NexaTextLight',fontSize:'15px'}}><p style={{width:'10%',textAlign:'center'}}>{orderarray.indexOf(sales)+1}</p><div style={{width:'80%',display:'flex',justifyContent:'space-between'}}><p>{sales['promo']}</p><p>{sales['date']}</p><p>{sales['price']}</p></div><p style={{width:'10%',textAlign:'center'}} onClick={()=>deletesale(sales)} >{del}</p></div>)}
                        <div style={{width:'100%',border:'2px solid #0B1F36',borderWidth:'1.5px 0px 0px'}}>
                            <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}><p style={{textAlign:'left',width:'50%',paddingLeft:'10px'}}>Subtotal</p> <p style={{textAlign:'right',width:'50%',paddingRight:'10px'}}>{`$${subtotal}`}</p></div>
                            <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}><p style={{textAlign:'left',width:'50%',paddingLeft:'10px'}}>Discount</p> <p style={{textAlign:'right',width:'50%',paddingRight:'10px'}}>{`$${discount}`}</p></div>
                            <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px',marginBottom:'10px'}}><p style={{textAlign:'left',width:'50%',paddingLeft:'10px'}}>Total</p> <p style={{textAlign:'right',width:'50%',paddingRight:'10px'}}>{`$${total}`}</p></div>
                        </div>
                    </div>
                    
                <div style={{fontSize:'15px'}}>
                    <div style={{width:overallwidth>900?'90%':'85%',fontFamily:'NexaTextLight',margin:'15px auto',padding:'10px',textAlign:'left',boxSizing:'border-box',borderRadius:'10px',border:'2px solid #0B1F36'}}>
                        <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}><p>Select payment method</p><p style={{fontSize:'35px',cursor:'pointer'}} onClick={()=>{setpaymentSector({...paymentSector,...{main:!paymentSector.main}})}}>{paymentSector.main? arrowDown :arrowTop}</p></div>
                        {paymentSector.main && <div style={{width:'100%',display:'flex',justifyContent:'space-between',flexDirection:'column',}}>
                            <div>
                                <p style={{paddingLeft:'5px',paddingRight:'5px',boxSizing:'border-box',display:'flex',justifyContent:'space-between',width:'100%'}}><span style={{textAlign:'left'}}>Crypto </span><span style={{textAlign:'right',cursor:'pointer'}} onClick={()=>{setpaymentSector({...paymentSector,...{crypto:!paymentSector.crypto}})}}>{paymentSector.crypto?'-':'+'}</span></p>
                                {paymentSector.crypto && <div><p style={{display:'flex', justifyContent:'space-between',paddingLeft:'5px',paddingRight:'5px',alignItems:'center'}}>
                                    <span style={{textAlign:'left',fontSize:'13px'}}>Address &nbsp;:</span>
                                    <input type='text' style={{height: '45px',boxSizing : 'border-box',backgroundColor:'#071323' ,outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',}} className='spanforp' value= '0x7a394F2d92d387393bCFD902464077559E87AaA0' />
                                    </p>
                                    <p style={{display:'flex', justifyContent:'space-between',alignItems:'center',paddingLeft:'5px',paddingRight:'5px'}}><span style={{textAlign:'left',fontSize:'13px'}}>Chain &nbsp;&nbsp;:</span><span style={{textAlign:'right'}}><input type='text' style={{height: '45px',boxSizing : 'border-box',backgroundColor:'#071323' ,outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',marginTop:'5px',textAlign:"center"}} className='spanforp' value= 'BSC' /></span></p>
                                    
                                    </div>}
                            </div>
                        </div>}
                        
                    </div>
                    <div style={{width:overallwidth>900?'90%':'85%',fontFamily:'NexaTextLight',margin:'15px auto',padding:'10px',boxSizing:'border-box',display:'flex',justifyContent:'space-around',borderRadius:'10px',border:'2px solid #0B1F36'}}><span style={{width:'15%',minWidth:'60px'}}>Name:</span> <input type='text' style={{width:'80%',boxSizing:'border-box',padding:'5px',backgroundColor:'transparent',color:'white',outline:'none',borderWidth:'0px 0px 0px'}}/></div>
                    <div style={{width:overallwidth>900?'90%':'85%',fontFamily:'NexaTextLight',margin:'15px auto',padding:'10px',boxSizing:'border-box',display:'flex',justifyContent:'space-around',borderRadius:'10px',border:'2px solid #0B1F36'}}><span style={{width:'15%',minWidth:'60px'}}>E-mail:</span> <input type='email' style={{width:'80%',boxSizing:'border-box',padding:'5px',backgroundColor:'transparent',color:'white',outline:'none',borderWidth:'0px 0px 0px'}}/></div>
                </div>
                <div style={{width:overallwidth>1100?'200px':'200px',boxSizing:'border-box',height:'30px',fontSize:'13px',margin:'0px auto',textAlign:overallwidth>900?'right':'center',display:'flex',alignItems:'center',padding:"5px",justifyContent:overallwidth>900?'space-around':"center",borderRadius:'10px',backgroundColor:'blue'}}><p style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{cart}</p> <p>Proceed with payment</p></div>
                </div>
            </div>
        </div>
        <GoToTop />
    </div>
  )
}

export default Promoted


/* import 'react-calendar/dist/Calendar.css' */