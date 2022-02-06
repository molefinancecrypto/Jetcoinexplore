import React from 'react';
import "./sponsorship.css"
import AliceCarousel from 'react-alice-carousel';
import fblogo from "../images/sponsorImages/facebbok.png"
import instalogo from "../images/sponsorImages/instagram.png";
import lenovologo from "../images/sponsorImages/lenovo.png";
import masterlogo from "../images/sponsorImages/master_card.jpg";
import twitterlogo from "../images/sponsorImages/twitter.png";
import uberlogo from "../images/sponsorImages/uber.png";
import youtubelogo from "../images/sponsorImages/youtube.png";


function Sponsorship() {
     const responsive = {
         0: {
             items:2
         },
         800: {
             items:4
         }
     }

  return <div style={{backgroundColor:'#0f1c50',width:'100%',height:'200px',padding:'20px',boxSizing:"border-box"}}>
      <AliceCarousel mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay items={items} />
      

  </div>;
}

export default Sponsorship;

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={fblogo} onDragStart={handleDragStart} alt='facebook'/>,
  <img src={instalogo} onDragStart={handleDragStart} />,
  <img src={lenovologo} onDragStart={handleDragStart} />,
  <img src={masterlogo} onDragStart={handleDragStart} />,
  <img src={twitterlogo} onDragStart={handleDragStart} />,
  <img src={uberlogo} onDragStart={handleDragStart} />,
  <img src={youtubelogo} onDragStart={handleDragStart} />,
];
