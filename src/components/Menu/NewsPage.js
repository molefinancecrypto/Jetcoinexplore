import React, {useEffect, useState} from 'react';
import './NewsPage.css';
import { useNavigate } from 'react-router-dom';
import { Newsjson } from '../Newsapi';


//newss['publishedAt']
export default function NewsPage() {
  const numberofPages = Math.ceil(Newsjson.length/4);
  const [pagenumber,setpagenumber] = useState(1);
  const [verticalscroll,setverticalscroll] = useState();
  const[showscroller,setshowscroller] = useState(false);
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
  const scrolltotop = () => {
    window.scrollTo({top:0,behavior:'smooth'});
  }


  const topdistance = ()=>{
  setverticalscroll(window.scrollY);

  if(verticalscroll>100){
    setshowscroller(true)
  }
  else{
    setshowscroller(false)
  }

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

  useEffect(() => {
    
    topdistance()
    window.addEventListener('scroll', topdistance);
    
  
    return () => {
        window.removeEventListener('scroll', topdistance)
      
  }})
  

  const navigate = useNavigate();
  if (newstoshow) {return (
    <div style={{width:'90vw',margin:'30px auto',minHeight:'100vh',color:'white'}}>
      {console.log(window.innerHeight)}
        <div style={{color:"white",width:"100%",textAlign:"left",display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        <p style={{width:'90%',margin:'30px auto',textAlign:'center',fontSize:'35px'}}>News Feed</p>
        <div style={{width:'90%',margin:'20px auto',minHeight:'100vh',paddingTop:'90px',backgroundColor:'#071323',border:'1px solid #0B1F36',display:"flex",flexDirection:'column',justifyContent:'space-between',paddingTop:'35px'}}>
          <div style={{width:'90%',margin:'0px auto',marginTop:"35px",border:'1px solid #0B1F36',backgroundImage: 'linear-gradient(90.18deg, #040B15 35.76%, rgba(0, 38, 82, 0) 110.28%)'}}>
            {newstoshow[pagenumber-1][`${pagenumber}`].map(newss=><div className='newsItem' >
        
                             <div className='divForNewsContent' >
                                 <p className='title'>{newss['title']}</p>
                                 <p className='description' >{newss['description']}</p>
                                 <div style={{display:'flex',justifyContent:'flex',justifyContent:'space-between'}}>
                                     
                                     <div style={{width:'100%',textAlign:'center',display:'flex',justifyContent:'center'}}><a href={newss['url']} style={{textDecoration:'none'}}><p style={{backgroundColor:'#05101C',borderRadius:'20px',color:'white',width:'200px',textDecoration:'none',height:'60px',display:'flex',justifyContent:'center',alignItems:'center'}}>Read Article</p></a></div>
                                 </div>
                             </div>
                             <div  className = 'divForNewsImage' >
                               <img style={{width:'100%',height:'75%',borderRadius:'13px',border:'1px solid #003D84'}} src={newss['urlToImage']} alt='image_for_news_page'/>
                               <p style={{textAlign:'center',marginTop:"15px"}}><strong>Date</strong>: {new Date(newss['publishedAt']).getDate()+'/'+new Date(newss['publishedAt']).getMonth()+'/2022'}</p>
                             </div>
                        </div>)}
                        </div>
                        {newstoshow && <div style={{display:'flex',justifyContent:'center',margin:'40px 0px'}}>
                        <div style={{width:'35%',height:'40px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                          <p onClick={leftpage} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{backward}</p>
                          {newstoshow.map(news => <p  onClick={ ()=> setpagenumber(parseInt(Object.keys(news)))} style={{paddingLeft:'10px',borderRadius:pagenumber==Object.keys(news)?'5px':'0px',border:pagenumber==Object.keys(news)?'1px solid white':'0px solid white', paddingRight:'10px',fontSize:'25px',cursor:'pointer'}}>{Object.keys(news)}</p>)}
                          <p onClick={rightpage} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{forward}</p>
                        </div>
                      </div>}  
        </div>
                        
    {showscroller && <div onClick={scrolltotop} style={{position:'fixed',top:'85vh',boxShadow: '10px 2px 15px black',zIndex:'20000',right:'20px',display:'flex',alignItems:'center',justifyContent:'center',width:'35px',height:'35px',backgroundColor:'white',borderRadius:'50%'}}><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59"/><polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"/></g></g></svg></div>}               
    </div>
  ) }
  else{
  return<li><i class="fa-li fa fa-spinner fa-spin"></i>List icons</li>}
}
