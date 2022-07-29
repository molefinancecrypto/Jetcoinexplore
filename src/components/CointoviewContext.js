import React, {useState, createContext} from 'react';
import { AllTime } from './coinholderFolder/AllTime';
import { TodayBest } from './coinholderFolder/TodayCoins';
import { NewListings } from './coinholderFolder/NewListings';
import { MarketCap } from './coinholderFolder/MarketCap';



export const Statecontext = createContext();

export const StateHolder = (props)=> {
    const [coinheader,setcoinheader] = useState('first');
    const [currentlocale,setcurrentlocale] = useState('/');
    const [triggerlength,settriggerlength] = useState(0);
    const [triggerlengthban,settriggerlengthban] = useState(0);
    const [dayarr,setdayarr] = useState([]);
    const [dayarrban,setdayarrban] = useState([]);
    const [dayarrunik,setdayarrunik] = useState([]);
    const [dayarrbanunik,setdayarrbanunik] = useState([]);
    const [changepagebyfoot,setchangepagebyfoot] = useState(false);
    const [changefootcheck,setchangefootcheck] = useState(false);
    const [ordermarginTop,setordermarginTop] = useState(0);
    const [watchlistArray, setwatchlistArray] = useState([]);
    const [alltime, setallTime] = useState(AllTime);
    const [todaybest, settodayBest] = useState(TodayBest);
    const [marketCap,setmarketCap] = useState(MarketCap);
    const [newlistings,setnewListings] = useState(NewListings)
    const [headertoshow,setheadertoshow] = useState(0)
    const [headerterms,setheaderterms] = useState('')
    const [userObject,setuserObject] = useState({userEmail:'',userUsername:'',token:'',exp:0})
    

    return(
        <Statecontext.Provider value={{currentlocale:[currentlocale,setcurrentlocale],triggerlength:[triggerlength,settriggerlength]
        ,dayarrban:[dayarrban,setdayarrban],triggerlengthban: [triggerlengthban,settriggerlengthban],coinheader:[coinheader,setcoinheader],dayarr: [dayarr,setdayarr],
        dayarrunik:[dayarrunik,setdayarrunik],dayarrbanunik:[dayarrbanunik,setdayarrbanunik],changepagebyfoot:[changepagebyfoot,setchangepagebyfoot]
        ,changefootcheck:[changefootcheck,setchangefootcheck],ordermarginTop:[ordermarginTop,setordermarginTop],watchlistArray:[watchlistArray,setwatchlistArray]
        ,alltime:[alltime, setallTime],todaybest:[todaybest, settodayBest],marketCap:[marketCap,setmarketCap],newlistings:[newlistings,setnewListings],headertoshow:[headertoshow,setheadertoshow],
        headerterms:[headerterms,setheaderterms],userObject:[userObject,setuserObject]}}>
            {props.children}
        </Statecontext.Provider>
    )
}

//coin={coinheader==='first'?coins: coinheader==='second'? coins.slice(0,3): coinheader==='third'? coins.slice(4,7): coins.slice(8,11)}