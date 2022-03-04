import React, {useState} from 'react';
import './NewsPage.css';
import { useNavigate } from 'react-router-dom';


//newss['publishedAt']
export default function NewsPage({news}) {
  const navigate = useNavigate();
  const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>;
  return (
    <div style={{width:'90vw',margin:'30px auto',minHeight:'100vh',color:'white'}}>
        <div style={{color:"white",width:"100%",textAlign:"left",display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer'}} onClick={()=> navigate('/')}><p>{homeIcon}</p>Back to main Page</div>
        {news.map(newss=><div style={{width:'90%',display:'flex',borderRadius:'10px',justifyContent:'space-between',padding:'30px',boxSizing:'border-box',height:'350px',margin:'20px auto',backgroundColor:'rgb(10, 24, 41)'}}>
                             <div style={{width:'35%',height:'100%'}}><img style={{width:'100%',height:'100%',borderRadius:'13px'}} src={newss['urlToImage']} alt='image_for_news_page'/></div>
                             <div style={{width:'50%',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'left'}}>
                                 <p style={{width:'100%',textAlign:'left',letterSpacing:'2px'}}><strong>Title</strong>: {newss['title']}</p>
                                 <p style={{width:'100%',textAlign:'left',letterSpacing:'2px'}}><strong>Description</strong>: {newss['description']}</p>
                                 <div style={{display:'flex',justifyContent:'flex',justifyContent:'space-between'}}>
                                     <p><strong>Date</strong>: {new Date(newss['publishedAt']).getDate()+'/'+new Date(newss['publishedAt']).getMonth()+'/2022'}</p>
                                     <a href={newss['url']}><p>Read Article</p></a>
                                 </div>
                             </div>
                        </div>)}
    </div>
  )
}
