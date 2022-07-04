import { useEffect, useRef,useReducer,useState} from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import CoinsTable from './components/Mainpage/CoinsTable';
import {  Routes, Route} from 'react-router-dom';
import CoinFile from './components/CoinFile';
import Signin from './components/userAuthorization/Signin';
import Signup from './components/userAuthorization/Signup';
import ListCoin from './components/Menu/ListCoin';
import {PromotedCoin} from './components/Mainpage/CoinsTable';
import AdsBanner from './components/AdsBanner';
import Cryptonews from './components/Cryptonews';
import NewsPage from './components/Menu/NewsPage';
import Footer from './components/Mainpage/Footer';
import { Newsjson } from './components/Newsapi';
import Salesrep from './components/Menu/Salesrep';
import Salesrepidentity from './components/Menu/Salesrepidentity';
import Getlocation from './components/Getlocation';
import Promoted from './components/Menu/Promoted';
import Watchlist from './components/Menu/Watchlist';
import ContactUs from './components/Menu/ContactUs';
import RulesandReg from './components/Menu/RulesandReg';
import NewlyAddedCoin from './components/Menu/NewlyAddedCoin';


/*
const NewsApi = async ()=>{
    const NewsData = await fetch('https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=3b2baf89ff384326b0244cd6f484611b')
    const Data = await NewsData.json();
    if(Data['status'] === 'ok'){
      setnews(Data['articles'])
      console.log(news)
    }
    
*/

function App() {

  const [news, setnews] = useState('');
  const [windowidth,setwindowidth] = useState('');
  const [mainpadbottom,setmainpadbottom] = useState(0);
  const [overallwidth,setoverallwidth] = useState();
  const userlocation = useLocation();


  const handleResize = ()=> {
    setoverallwidth(window.innerWidth)
    if(window.innerWidth>1100){
      let a  = window.innerWidth*0.2667
      setwindowidth(a)
    }

    else if( window.innerWidth<=1100 && window.innerWidth>560){
      let b = window.innerWidth*0.40005;
      setwindowidth(b)
    }

    else if(window.innerWidth<560){
      let c = window.innerWidth*0.80 ;
      setwindowidth(c)
    }

  
    
  
}


//useEffect for window resize

useEffect(() => {
    
  handleResize()
  window.addEventListener('resize', handleResize);
  

  return () => {
      window.removeEventListener('resize', handleResize)
    
}
})


/*
useEffect for padding bottom
*/
useEffect(() => {
    
  rfheight()
  window.addEventListener('resize', rfheight);
  

  return () => {
      window.removeEventListener('resize', rfheight)
    
}
})

 /* const NewsApi = async ()=>{
    const NewsData = await fetch('https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=3b2baf89ff384326b0244cd6f484611b')
    const Data = await NewsData.json();
    if(Data['status'] === 'ok'){
      setnews(Data['articles'])
      console.log(news)
    }
    
}*/

useEffect(
   ()=>{
       /*NewsApi() */    
       setnews(Newsjson)
  },[])  


  
  const disref = useRef();
  const [showMainAds, setshowMainAds] = useState(false);
  const refooter = useRef();

const rfheight = ()=>{

  let newPadding = refooter.current.offsetHeight+25;
  setmainpadbottom(newPadding)
}
  
  useEffect(
    () =>{
      setTimeout(
        () =>{
          setshowMainAds(true)
        },3000
      )
    },
    []) 


  return (
    <div className="App">
      <div className='Appsecond' style={{position:'relative',height:'100%',paddingBottom: '40px'}}>
      <Header overallwidth={overallwidth}/>
      <div style={{height:"calc(100%-50px)"}}>
      <Routes >
      <Route path='/' element = {
      <div>

            <div className='banner' >
                {windowidth &&  <Cryptonews news={news} windowidth={windowidth}/>}
                <AdsBanner />  
            </div>

      <div className='gainers'>PROMOTED COINS</div>
      
          <PromotedCoin overallwidth={overallwidth}/>
      
      
      {showMainAds && <div style={{position:'absolute',zIndex:'10000',top:'0px',left:'0px',bottom:'0px',minHeight:'100%',width:'100%',backgroundColor:'rgba(27, 26, 26, 0.46)'}}>
      <p ref={disref} className='biggestAds'>
      
        <p onClick={()=> setshowMainAds(false)} style={{backgroundColor:'white',width:'35px',height:'35px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></p>
        <p  className='mainadContent' >Advertise with us at coinExplore at very affordable rates</p>
      </p>
      </div>}
      <CoinsTable overallwidth={overallwidth}/>
      </div>
      }/>
      <Route path='/coin/:coinpicked' element={<CoinFile overallwidth={overallwidth}/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/addcoin' element={<ListCoin/>} />
      <Route path='/newspage' element={<NewsPage />} />
      <Route path='/salesrep' element={<Salesrep/>} >
      
        <Route path=':salesperson' element={<Salesrepidentity/>}/>

      </Route>
      <Route path='/contactUs' element={<ContactUs overallwidth={overallwidth}/>}/>
      <Route path='/promoted' element={<Promoted overallwidth={overallwidth}/>} />
      <Route path='/watchlist' element={<Watchlist overallwidth={overallwidth}/>} />
      <Route path='/rulesandreg' element={<RulesandReg overallwidth={overallwidth}/>} />
      <Route path='/newlyadcoins' element={<NewlyAddedCoin overallwidth={overallwidth}/>} />


      </Routes>
      </div>
      </div>
        <div ref={refooter} style={{minHeight: '35vh',backgroundColor:'#071321',width:'100%'}}>
          <Footer />
        </div>
        <Getlocation />
    </div>
  );
}

export default App;


//key 3b2baf89ff384326b0244cd6f484611b