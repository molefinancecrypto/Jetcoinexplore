import React from 'react';
import { ParticularCoin } from '../contextfolder/Coindata';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
import CoinsTable from './Mainpage/CoinsTable';
import './coinfile.css';
import FadeIn from 'react-fade-in';
import GoToTop from './Gototop';
import { PromotedCoin } from './Mainpage/CoinsTable';


function CoinFile({overallwidth}) {
    const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>;
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
    const {selector} = ParticularCoin();
    const { coinpicked } = useParams();
    let navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const arrowforvote = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>;

    /*background: 'linear-gradient(180deg, #05101C 0%, #040B15 100%)'*/ 
  return <section style={{backgroundColor:'#05101c',marginTop:"15px",height:'auto',borderRadius:'15px',width:'100%',boxSizing:'border-box'}}>
         <FadeIn delay={1000}>
         <div style={{color:"white",paddingLeft:'10%',paddingTop:'20px',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
             <section className='holderdiv' >
                <div className='firstdivindiv' >
                    <section>
                        <p><img style={{height:'80px',width:'80px',borderRadius:"50%"}}src={data['logo']}/></p>
                        <p style={{color:'white'}}>{data['name']}</p>
                        <p style={{color:'grey'}}>${data['symbol']}</p>
                    </section>
                    <section style={{width:'100%',margin:'0px auto'}}>
                        <p style={{color:'white',textAlign:'left'}}>Network:&nbsp;&nbsp; <span className='spanforp' >{data['chain']}</span></p>
                        <p style={{color:'white',textAlign:'left',marginTop:'20px',overflow:'hidden'}}>Contract Address:&nbsp;&nbsp; <span className='spanforp'>{data['address']}&nbsp;</span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></p>
                    </section>
                    <section className='sectionwithicons' >
                        
                        <div style={{width:'35%',textAlign:'left'}}>
                            <p style={{color:'white'}}>Launch Date</p>
                            <p style={{color:'grey'}}>{data['launchDate']}</p>

                        </div>
                        <div className='barguy' >''</div>
                        <div className='logosholder' >
                        
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-twitter" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-facebook" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-telegram" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-reddit" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                        
                        </div>
                    </section>
                    <section className='sectionwithicons'>
                        <div style={{width:'35%',textAlign:'left'}}>
                            <p style={{color:'white'}}>Market Cap</p>
                            <p style={{color:'grey'}}>${data['marketcap']}</p>

                        </div>
                        <div className='barguy'>''</div>

                        <div style={{width:'60%',textAlign:'right'}}>
                            <p style={{color:'white'}}>price &nbsp;&nbsp;&nbsp;<span style={{color:data['pricechangepct']>0?'green':'red'}}>{data['pricechangepct']}%</span></p>
                            <p className='valueindolls' >${data['price']}</p>

                        </div>
                    </section>

                    <section style={{width:'100%',height:'50px',display:'flex',alignItems:'center',justifyContent:"center"}}>
                    <div style={{width:'75px',height:"20px",paddingBottom:'27px',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
                        <p  style={{fontSize:'15px',color:"white"}}>{data['totalVotes']}</p>
                    </div> 
                    </section>
                </div>

                <div className='seconddivindiv' >
                    <p style={{marginTop:'45px',fontSize:'30px',backgroundColor:'#081728',width:'100%',height:'60px',color:'white',display:"flex",alignItems:'center',justifyContent:"center"}}>Description</p>
                    <p style={{width:'80%',margin:'40px auto',color:'white',textAlign:'center'}}>{data['description']}</p>
                </div>


             </section>


             <section className='coinformobile' >
                <div className='firstdivindiv' >
                    <section>
                        <p><img style={{height:'80px',width:'80px',borderRadius:"50%"}}src={data['logo']}/></p>
                        <p style={{color:'white'}}>{data['name']}</p>
                        <p style={{color:'grey'}}>${data['symbol']}</p>
                    </section>

                    <div className='logosholdermobile' >
                        
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-twitter" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-facebook" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-telegram" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                            <div style={{width:"40px",height:'40px',borderRadius:'10px',background: '#081728',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-reddit" style={{fontSize:"30px",color:'grey'}} aria-hidden="true"></i></div>
                        
                        </div>
                    <section style={{width:'90%',margin:'0px auto'}}>
                        <p style={{color:'white',textAlign:'left'}}>Network:&nbsp;&nbsp; <span className='spanforp' >{data['chain']}</span></p>
                        <p style={{color:'white',textAlign:'left',marginTop:'20px'}}>Contract Address:&nbsp;&nbsp; <span className='spanforp'>{data['address']}&nbsp;</span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></p>
                    </section>
                    <section className='sectionwithiconsmobile' >
                        
                        <div>
                            <p style={{color:'white',textAlign:'left'}}>Launch Date</p>
                            <p style={{color:'grey',textAlign:'left'}}>{data['launchDate']}</p>

                        </div>
                        
                        
                    </section>
                    <section className='sectionwithiconsmobile'>
                        <div>
                            <p style={{color:'white',textAlign:'left'}}>Market Cap</p>
                            <p style={{color:'grey',textAlign:'left'}}>${data['marketcap']}</p>

                        </div>
                        

                        <div >
                            <p style={{color:'white',textAlign:'left',marginTop:'20px'}}>price &nbsp;&nbsp;&nbsp;<span style={{color:data['pricechangepct']>0?'green':'red'}}>{data['pricechangepct']}</span></p>
                            <p className='valueindolls' >${data['price']}</p>

                        </div>
                    </section>

                    <div className='seconddivindivmobile' >
                    <p style={{marginTop:'45px',fontSize:'30px',border:'2px solid #081728',borderWidth:'0px 0px 2px',width:'100%',height:'60px',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>Description</p>
                    <p style={{width:'80%',margin:'40px auto',color:'white',textAlign:'center'}}>{data['description']}</p>
                </div>

                <section style={{width:'100%',height:'50px',display:'flex',alignItems:'center',justifyContent:"center"}}>
                    <div style={{width:'75px',height:"20px",paddingBottom:'27px',borderRadius:'12px',border:'2px solid #FFFFFF',backgroundColor:'transparent'}}>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center'}} >{arrowforvote}</p>
                        <p  style={{fontSize:'15px',color:"white"}}>{data['totalVotes']}</p>
                    </div> 
                    </section>
                </div>

                


             </section>
         
         </FadeIn>
         <div style={{marginTop:'40px'}}></div>
         <div className='gainers'>PROMOTED COINS</div>
         <PromotedCoin overallwidth={overallwidth}/>
         <GoToTop />
         </section>;
}

export default CoinFile;



/*
   <div style={{textAlign:'center',height:'100%',color:'white',display:'flex',flexDirection:'column',justifyContent:'center'}}><div><img style={{height:'200px',width:'200px'}}src={data['img']}/></div><p>{data['name']}</p></div>
             <div className='textholdercoinfile' ><p>SYMBOL : {data['symbol']}</p><p>MARKET CAP-RANK : {data['market_cap_rank']}</p><p>LAUNCH-DATE : {data['launch']}</p><p>CHANGE : <span style={{color:data['change'][0]==='+'? 'green':'red'}}>{data['change']}</span></p></div>
         </div>
         <p className='clicktovote' onClick={()=> navigate('/signup')}>Click To Vote</p>

*/