import React from 'react';
import { ParticularCoin } from '../contextfolder/Coindata';
import { useParams,useNavigate } from 'react-router-dom';
import CoinsTable from './Mainpage/CoinsTable';
import './coinfile.css';
import FadeIn from 'react-fade-in';


function CoinFile() {
    const {selector} = ParticularCoin();
    const { coinpicked } = useParams();
    const data = selector[Object.keys(selector)];
    let navigate = useNavigate()
  return <section>
         <FadeIn delay={1000}>
         <div className='coinfileheader' >
             <div style={{textAlign:'center',height:'100%',color:'white',display:'flex',flexDirection:'column',justifyContent:'center'}}><div><img style={{height:'200px',width:'200px'}}src={data['img']}/></div><p>{data['name']}</p></div>
             <div className='textholdercoinfile' ><p>SYMBOL : {data['symbol']}</p><p>MARKET CAP-RANK : {data['market_cap_rank']}</p><p>LAUNCH-DATE : {data['launch']}</p><p>CHANGE : <span style={{color:data['change'][0]==='+'? 'green':'red'}}>{data['change']}</span></p></div>
         </div>
         <p className='clicktovote' onClick={()=> navigate('/signup')}>Click To Vote</p>
         <p>{coinpicked}</p>
         </FadeIn>
         <CoinsTable />
         </section>;
}

export default CoinFile;
