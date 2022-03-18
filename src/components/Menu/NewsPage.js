import React, {useEffect, useState} from 'react';
import './NewsPage.css';
import { useNavigate } from 'react-router-dom';
import { Newsjson } from '../Newsapi';


//newss['publishedAt']
export default function NewsPage() {
  const numberofPages = Math.ceil(Newsjson.length/4);
  const [pagenumber,setpagenumber] = useState(1);
  const forward = <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg> 
  const backward = <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
  const[newstoshow,setnewstoshow] = useState()
  let newArray = [];
  const funcFornews = ()=>{
    let idholder = 0;
    for(let i =0; i<Newsjson.length; i += 4){
      let newsobj = Newsjson.slice(i,i+4);
      idholder++;
      let id = `${idholder}`
      let innerobj = {};
      innerobj[id] = newsobj
      newArray.push(innerobj)
    }
  setnewstoshow(newArray)
  }

  const rightpage = ()=>{
    if(pagenumber===numberofPages){
      setpagenumber(1)
    }
    else{
      setpagenumber(pagenumber+1)
    }
  }

  const leftpage = ()=>{
    if(pagenumber===1){
      setpagenumber(numberofPages)
    }
    else{
      setpagenumber(pagenumber-1)
    }
  }

  useEffect(()=>{
    funcFornews() 
  },[])

  

  const navigate = useNavigate();
  if (newstoshow) {return (
    <div style={{width:'90vw',margin:'30px auto',minHeight:'100vh',color:'white'}}>
        <div style={{color:"white",width:"100%",textAlign:"left",display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        {newstoshow[pagenumber-1][`${pagenumber}`].map(newss=><div className='newsItem' >
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
                        
                      {newstoshow && <div style={{display:'flex',justifyContent:'center'}}>
                        <div style={{width:'60%',display:'flex',justifyContent:'space-around'}}>
                          <p onClick={leftpage} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{backward}</p>
                          {newstoshow.map(news => <p  onClick={ ()=> setpagenumber(parseInt(Object.keys(news)))} style={{paddingLeft:'10px',borderRadius:pagenumber==Object.keys(news)?'5px':'0px',border:pagenumber==Object.keys(news)?'1px solid white':'0px solid white', paddingRight:'10px',fontSize:'25px',cursor:'pointer'}}>{Object.keys(news)}</p>)}
                          <p onClick={rightpage} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{forward}</p>
                        </div>
                      </div>}  
    </div>
  ) }
  else{
  return<li><i class="fa-li fa fa-spinner fa-spin"></i>List icons</li>}
}
