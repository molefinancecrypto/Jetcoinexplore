import React from 'react';
import "./sponsorship.css"
import AliceCarousel from 'react-alice-carousel';


function Sponsorship({news}) {
    
       const item = news.map(news => <div style={{height:'200px', width:'220px',backgroundColor:'rgb(0,0,24)',textAlign:'center'}}>
           <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'90%',height:'80%',margin:'0px auto'}}><img src={news['urlToImage']} style={{height:'90%', width:'100%'}}/></div>
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

  return <div style={{backgroundColor:'#0f1c50',width:'40%',height:'260px',padding:'20px',boxSizing:"border-box",borderRadius:'10px',marginLeft:'20px'}}>
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

 
