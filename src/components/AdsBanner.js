import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import eth from '../images/Banner/ethereumBanner.jpg';
import defi from '../images/Banner/defiBanner.jpg';
import luno from '../images/Banner/lunoBanner.jpg';
import nft from '../images/Banner/nftBanner.jpg'

function AdsBanner() {
    
       const items = [<img alt="defi" style={{width:'100%',height:'120px',objectFit:'cover',borderRadius:'10px'}} src={defi}/>,
                    <img alt="eth" style={{width:'100%',height:'120px',objectFit:'cover',borderRadius:'10px'}} src={eth}/>,
                    <img alt="nft" style={{width:'100%',height:'120px',objectFit:'cover',borderRadius:'10px'}} src={nft}/>,
                    <img alt="luno" style={{width:'100%',height:'120px',objectFit:'cover',borderRadius:'10px'}} src={luno}/>]


     const responsive = {
         0: {
             items:1
         },
         800: {
             items:1
         }
     }

  return <div style={{backgroundColor:'#0f1c50',width:'80%',height:'120px',overflow:'hidden',boxSizing:"border-box",borderRadius:'15px',border:'0.5px solid #112836'}}>
      <AliceCarousel mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay items={items} />
      

  </div>
}

export default AdsBanner;
