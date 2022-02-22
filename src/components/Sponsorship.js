import React from 'react';
import "./sponsorship.css"
import AliceCarousel from 'react-alice-carousel';


function Sponsorship({news}) {
    
       const item = news.map(news => <div className='sponsorshipinner'>
           <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'80%',margin:'0px auto'}}><img src={news['urlToImage']} style={{height:'90%', width:'100%'}}/></div>
           <p style={{color:"white"}}>{news['title']}</p>
       </div>)

const items = item;
     const responsive = {
         0: {
             items:1
         },
         800: {
             items:3
         }
     }

  return <div className='sponsorshipwrapper' >
      <AliceCarousel mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      
      responsive={responsive}
      autoPlay items={items} />
      

  </div>
}

export default Sponsorship;

const handleDragStart = (e) => e.preventDefault();

 
