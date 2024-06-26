import React, {useRef} from 'react';
import "./cryptonews.css";
import { v4 as uuidv4 } from 'uuid';

function Cryptonews({news,windowidth}) {
       
       const scrollRef = useRef();
       const itemRef = useRef();
       const forward = <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg> 
       const backward = <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#808080"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
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
          {news.map(newss => <div key={uuidv4()} ref={itemRef} className='detailPerNews'>
            <a href={newss['url']} className='urlHoldingNews'><div className='individualNewsBlock'>
                <img src={newss['urlToImage']} style={{height:'78%', width:'100%',borderRadius:'8px'}} alt="newsimage" />
                                
                <p style={{color:"white",overflow:'hidden',height:'20%',padding:'5px',boxSizing:'border-box'}}>{newss['title']}</p>
            </div></a>
          </div>)}
        </div>
      </div>

  </div>
}

export default Cryptonews;



 
