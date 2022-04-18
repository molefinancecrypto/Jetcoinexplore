import React,{useState,useEffect,useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';
import Calendar from 'react-calendar';
import { Statecontext } from '../CointoviewContext';


export default function BannerpromoAds() {

    const[dayarrban,setdayarrban] = useContext(Statecontext).dayarrban;
    const  [triggerlengthban,settriggerlengthban] = useContext(Statecontext).triggerlengthban;
    const [date, setDate] = useState('');
    const setter = (val) => {
        setdayarrban(()=>val);
        settriggerlengthban(prev=>prev-1);
        
      }
     
     
       const clickday = (e)=>{
        let changingday = `${e.getDate()}-${e.getMonth() + 1}-${e.getFullYear()}`
        if(dayarrban.includes(changingday)){
           let newarr = dayarrban;
         let idx = newarr.indexOf(changingday);
         newarr.splice(idx, 1);
         setter(newarr); 
        }
        else{
         setdayarrban(prev=> [...prev,changingday]);
         settriggerlengthban(prev=>prev+1)
         
         
        }    
     }
       
       const tileClassName = (data) => {
        const { _, date, view } = data;
     
        // Check if a date React-Calendar wants to check is on the list of dates to add class to
        if (view === 'month') {
            if (dayarrban.includes(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)) {
                
                
                
                return 'selectedclasstiles';
            }
        }
     }




  return (
    <div>
        <input type='file' />
        <p style={{width:'80%',margin:'5px auto',textAlign:'center'}}>Coin Unavailable? <NavLink to='/addcoin'>Add here</NavLink></p>
        <Calendar onChange={setDate} value={date} onClickDay={clickday} tileClassName={tileClassName}/>
    </div>
  )
}
