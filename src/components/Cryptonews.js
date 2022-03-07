import React, {useRef,useEffect,useState} from 'react';
import "./cryptonews.css";
import { v4 as uuidv4 } from 'uuid';



function Cryptonews({news,windowidth}) {
       
       const scrollRef = useRef();
       const itemRef = useRef();
       const forward = <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg> 
       const backward = <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
       const forwardScroll = ()=>{
        scrollRef.current.scrollLeft = scrollRef.current.scrollLeft+itemRef.current.offsetWidth
     
       }

       const backwardScroll = ()=>{
        
           scrollRef.current.scrollLeft = scrollRef.current.scrollLeft-itemRef.current.offsetWidth;
          
       }


      

       //{console.log(itemRef.current.offsetWidth)}
       //{width:news.length*426

  return <div className='newswrapper' >
      <p className='forward'onClick={forwardScroll} >{forward}</p>
      <p className='backward' onClick={backwardScroll}>{backward}</p>
      <div ref={scrollRef} style={{height:"100%",overflowX:'hidden',scrollBehavior:'smooth'}}>
      <div  style={{width: news.length*windowidth, height:'100%',display:'flex',paddingTop:'5px',boxSizing:'border-box'}}>
          
          {news.map(newss => <div key={uuidv4()} ref={itemRef} className='detailPerNews' >
        
                                <div style={{width:'80%',height:'95%',backgroundColor:'#071323',border:'0.5px solid #112836',padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between',borderRadius:'15px'}}>
                                <img src={newss['urlToImage']} style={{height:'78%', width:'100%',borderRadius:'15px'}}/>
                                
                                <p style={{color:"white"}}>{newss['title']}</p>
                                </div>
          </div>)}
      </div>
      </div>

  </div>
}

export default Cryptonews;



 
