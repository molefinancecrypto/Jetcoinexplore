import { useEffect, useRef,useReducer,useState } from 'react';
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

  const [news, setnews] = useState('')
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
      <div className='Appsecond'>
      <Header />
      <div style={{minHeight:"calc(100%-10vh)"}}>
      <Routes >
      <Route path='/' element = {
      <div>

            <div className='banner' >
                {news &&  <Cryptonews news={news}/>}
                <AdsBanner />  
            </div>

      <div className='gainers'>TOP GAINERS</div>
      
          <PromotedCoin />
      
      
      {showMainAds && <div style={{position:'absolute',zIndex:'10000',top:'0px',left:'0px',bottom:'0px',minHeight:'100%',width:'100%',backgroundColor:'rgba(27, 26, 26, 0.46)'}}>
      <p ref={disref} className='biggestAds'>
        <p onClick={()=> setshowMainAds(false)} style={{backgroundColor:'white',width:'35px',height:'35px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></p>
        <p style={{lineSpacing:'2.5px',textAlign:'center',fontSize:'30px',color:'white',marginTop:'30px'}}>Advertise with us at coinExplore at very affordable rates</p>
      </p>
      </div>}
      <CoinsTable />
      </div>
      }/>
      <Route path='/coin/:coinpicked' element={<CoinFile/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/addcoin' element={<ListCoin/>} />
      <Route path='/newspage' element={<NewsPage news={news}/>} />


      </Routes>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


//key 3b2baf89ff384326b0244cd6f484611b