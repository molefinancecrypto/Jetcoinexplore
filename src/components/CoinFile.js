import React from 'react';
import { ParticularCoin } from '../contextfolder/Coindata';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
import CoinsTable from './Mainpage/CoinsTable';
import './coinfile.css';
import FadeIn from 'react-fade-in';


function CoinFile() {
    const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>;
    const {selector} = ParticularCoin();
    const { coinpicked } = useParams();
    let navigate = useNavigate();
    const location = useLocation();
    const dat = location.state;
    const data = dat[Object.keys(dat)]
  return <section style={{backgroundColor:'rgb(6, 16, 28)',marginTop:"0px"}}>
         <FadeIn delay={1000}>
         <div style={{color:"white",width:"100%",textAlign:"left",display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer'}} onClick={()=> navigate('/')}><p>{homeIcon}</p>Back to main Page</div>
         <div className='coinfileheader' >
         
             <div style={{textAlign:'center',height:'100%',color:'white',display:'flex',flexDirection:'column',justifyContent:'center'}}><div><img style={{height:'200px',width:'200px'}}src={data['img']}/></div><p>{data['name']}</p></div>
             <div className='textholdercoinfile' ><p>SYMBOL : {data['symbol']}</p><p>MARKET CAP-RANK : {data['market_cap_rank']}</p><p>LAUNCH-DATE : {data['launch']}</p><p>CHANGE : <span style={{color:data['change'][0]==='+'? 'green':'red'}}>{data['change']}</span></p></div>
         </div>
         <p className='clicktovote' onClick={()=> navigate('/signup')}>Click To Vote</p>
         
         </FadeIn>
         <div style={{marginTop:'40px'}}></div>
         <CoinsTable />
         </section>;
}

export default CoinFile;
