import React, {useState} from 'react';
import './NewsPage.css';
import { useNavigate } from 'react-router-dom';


//newss['publishedAt']
export default function NewsPage({news}) {
  const numberofPages = Math.ceil(news.length/4)
  const navigate = useNavigate();
  const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
  return (
    <div style={{width:'90vw',margin:'30px auto',minHeight:'100vh',color:'white'}}>
        <div style={{color:"white",width:"100%",textAlign:"left",display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        {news.map(newss=><div className='newsItem' >
                             <div className = 'divForNewsImage' ><img style={{width:'100%',height:'100%',borderRadius:'13px'}} src={newss['urlToImage']} alt='image_for_news_page'/></div>
                             <div className='divForNewsContent' >
                                 <p style={{width:'100%',textAlign:'left',letterSpacing:'2px'}}>{newss['title']}</p>
                                 <p style={{width:'100%',textAlign:'left',letterSpacing:'2px',overflow:'hidden',fontFamily:'NexaTextLight'}}>{newss['description']}</p>
                                 <div style={{display:'flex',justifyContent:'flex',justifyContent:'space-between'}}>
                                     <p><strong>Date</strong>: {new Date(newss['publishedAt']).getDate()+'/'+new Date(newss['publishedAt']).getMonth()+'/2022'}</p>
                                     <a href={newss['url']}><p>Read Article</p></a>
                                 </div>
                             </div>
                        </div>)}
                      <div style={{display:'flex',justifyContent:'center'}}>{numberofPages}</div>  
    </div>
  )
}
