import React from 'react';
import './swipethree.css';
import { CoinObj } from '../coinholder';
import { v4 as uuidv4 } from 'uuid';

function SwiperThree() {
  return <div style={{display:'flex',width:'950px'}}>
       
  {CoinObj.slice(8,12).map(val => <div key={uuidv4()} style={{display:'flex',justifyContent:'space-around',backgroundColor:'white',color:'black',width:"220px",height:'65px',marginTop:'15px',borderRadius:'10px',marginLeft:'7.5px',marginRight:'7.5px',padding:'7px',boxSizing:"border-box"}}>
                                          <div style={{height:'100%'}}>
                                              <div style={{width:'30px',height:'30px'}}>
                                                  <img className='imglogo' src={val[Object.keys(val)]['img']} />
                                              </div>
                                              <p style={{fontSize:'17px',marginTop:'3px',color:'black'}}>
                                                  <strong>{val[Object.keys(val)]['symbol']}</strong>
                                              </p>
                                         
                                         </div>
                                         <div style={{padding:'0px',color:'black',height:'100%'}}>
                                             <p style={{fontSize:'20px',marginTop:"0px",marginBottom:"0px"}}>launch</p>
                                             <p style={{marginTop:"7px"}}>{val[Object.keys(val)]['launch']}</p>
                                         </div>
                                         <div style={{display:'flex',alignItems:"center",justifyContent:'center',height:'100%',color:val[Object.keys(val)]['change'][0]==='+'?'green':'red'}}>{val[Object.keys(val)]['change']}</div>
                                      </div>)}
     
         

                                  
      
      </div>;
}

export default SwiperThree;
