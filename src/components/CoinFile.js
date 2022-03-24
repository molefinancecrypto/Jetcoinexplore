import React from 'react';
import { ParticularCoin } from '../contextfolder/Coindata';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
import CoinsTable from './Mainpage/CoinsTable';
import './coinfile.css';
import FadeIn from 'react-fade-in';


function CoinFile() {
    const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>;
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
    const {selector} = ParticularCoin();
    const { coinpicked } = useParams();
    let navigate = useNavigate();
    const location = useLocation();
    const dat = location.state;
    const data = dat[Object.keys(dat)]
  return <section style={{background: 'linear-gradient(180deg, #05101C 0%, #040B15 100%)',marginTop:"10px"}}>
         <FadeIn delay={1000}>
         <div style={{color:"white",paddingLeft:'10%',paddingTop:'20px',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
             <section className='holderdiv' >
                <div className='firstdivindiv' >
                    <section>
                        <p><img style={{height:'80px',width:'80px',borderRadius:"50%"}}src={data['img']}/></p>
                        <p style={{color:'white'}}>{data['name']}</p>
                        <p style={{color:'grey'}}>${data['symbol']}</p>
                    </section>
                    <section style={{width:'90%',margin:'0px auto'}}>
                        <p style={{color:'white',textAlign:'left'}}>Network:&nbsp;&nbsp; <span style={{color:'grey'}}>Binance Smart Chain Contract</span></p>
                        <p style={{color:'white',textAlign:'left'}}>Contract Address:&nbsp;&nbsp; <span style={{color:'grey'}}>Binance Smart Chain Contract&nbsp;</span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></p>
                    </section>
                    <section style={{width:'90%',margin:'0px auto',display:"flex",justifyContent:'space-between'}}>
                        <div >
                            <p style={{color:'grey'}}>price &nbsp;&nbsp;&nbsp;<span style={{color:data['change'][0]==='+'?'green':'red'}}>{data['change']}</span></p>
                            <p style={{color:'white'}}>$0.45676734</p>

                        </div>
                        <div style={{width:'0.5px',height:'100%',backgroundColor:"grey"}}>''</div>
                        <div style={{display:"flex",justifyContent:'space-around',width:'40%'}}>
                        
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-twitter" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-facebook" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-telegram" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-reddit" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                        
                        </div>
                    </section>
                    <section style={{width:'90%',margin:'0px auto',display:"flex",justifyContent:'space-between'}}>
                        <div>
                            <p style={{color:'grey'}}>Market Cap</p>
                            <p style={{color:'white'}}>${data['market_cap_rank']}</p>

                        </div>
                        <div style={{width:'0.5px',height:'100%',backgroundColor:"grey"}}>''</div>

                        <div>
                            <p style={{color:'grey'}}>Launch Date</p>
                            <p style={{color:'white'}}>{data['launch']}</p>

                        </div>
                    </section>

                    <section style={{width:'100%',height:'50px',jutifyContent:"center"}}>
                        <div style={{width:'15%',margin:'0px auto',height:'100%',border:'2px solid white',borderRadius:"15px",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
                            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg></p>
                            <p style={{color:'white'}}>0</p>
                        </div>
                    </section>
                </div>

                <div className='seconddivindiv' >
                    <p style={{textAlign:'center',marginTop:'45px',fontSize:'30px',backgroundColor:'#081728',width:'100%',height:'60px',color:'white'}}>Description</p>
                    <p style={{width:'80%',margin:'40px auto',color:'white',textAlign:'center'}}>The Newest kitty member on BSC! join our community on, we will spread our memes to the moon! the best women dev in BSC experienced team with succesful projects</p>
                </div>
             </section>
         
         </FadeIn>
         <div style={{marginTop:'40px'}}></div>
         <CoinsTable />
         </section>;
}

export default CoinFile;



/*
   <div style={{textAlign:'center',height:'100%',color:'white',display:'flex',flexDirection:'column',justifyContent:'center'}}><div><img style={{height:'200px',width:'200px'}}src={data['img']}/></div><p>{data['name']}</p></div>
             <div className='textholdercoinfile' ><p>SYMBOL : {data['symbol']}</p><p>MARKET CAP-RANK : {data['market_cap_rank']}</p><p>LAUNCH-DATE : {data['launch']}</p><p>CHANGE : <span style={{color:data['change'][0]==='+'? 'green':'red'}}>{data['change']}</span></p></div>
         </div>
         <p className='clicktovote' onClick={()=> navigate('/signup')}>Click To Vote</p>

*/