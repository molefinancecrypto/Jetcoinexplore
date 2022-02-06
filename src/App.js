import Header from './components/Header';
import './App.css';
import Sponsorship from './components/Sponsorship';
import SwiperOne from './components/Mainpage/SwiperOne';
import SwiperTwo from './components/Mainpage/SwiperTwo';
import SwiperThree from './components/Mainpage/SwiperThree';
import CoinsTable from './components/Mainpage/CoinsTable';
import fireemoji from './emoji/fire_emoji.png';
import {  Routes, Route, Navigate} from 'react-router-dom';
import CoinFile from './components/CoinFile';
import Signin from './components/userAuthorization/Signin';
import Signup from './components/userAuthorization/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element = {<Navigate replace to="/coin" />}/>
      <Route path='/coin' element = {
      <div>

      <Sponsorship />

      <div style={{marginTop:'30px',fontSize:'25px',color:"white"}}><img style={{width:"25px",height:'25px'}} src={fireemoji} alt="fire"/> PROMOTED COINS</div>
      <div style={{width:'85%',maxWidth:'950px',padding:'10px',overflowX:'auto',overflowY:'hidden',whiteSpace:'nowrap',margin:'0px auto',borderRadius:'20px',backgroundColor:"rgb(0, 0, 24)"}}>   
          <SwiperOne />
          <SwiperTwo />
          <SwiperThree />
      </div>
      <CoinsTable />
      </div>
      }/>
      <Route path='/coin/:coinpicked' element={<CoinFile/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />

      </Routes>
      <div style={{width:'100%',marginTop:'30px',textAlign:'center'}}>
        <p style={{fontFamily: "'Dongle', sans-serif", fontFamily: "'Satisfy', cursive",fontSize:'45px',color:'rgb(0, 0, 24)'}}>Partners With</p>
        <div style={{display:"flex",width:'80%',maxWidth:'450px',marginTop:'45px',justifyContent:'space-around',margin:'0px auto',fontSize:'33px',color:'white',fontFamily:"'Dongle', sans-serif"}}><p>Elon-Musk</p><p>Bill- Gates</p><p>The Glaziers</p></div>
      </div> 
    </div>
  );
}

export default App;
