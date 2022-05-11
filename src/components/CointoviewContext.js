import React, {useState, createContext} from 'react';



export const Statecontext = createContext();

export const StateHolder = (props)=> {
    const [coinheader,setcoinheader] = useState('first');
    const [currentlocale,setcurrentlocale] = useState('/');
    const  [triggerlength,settriggerlength] = useState(0);
    const  [triggerlengthban,settriggerlengthban] = useState(0);
    const [dayarr,setdayarr] = useState([]);
    const [dayarrban,setdayarrban] = useState([]);
    const [dayarrunik,setdayarrunik] = useState([]);
    const [dayarrbanunik,setdayarrbanunik] = useState([]);
    const [changepagebyfoot,setchangepagebyfoot] = useState(false);
    const [changefootcheck,setchangefootcheck] = useState('')
    

    return(
        <Statecontext.Provider value={{currentlocale:[currentlocale,setcurrentlocale],triggerlength:[triggerlength,settriggerlength]
        ,dayarrban:[dayarrban,setdayarrban],triggerlengthban: [triggerlengthban,settriggerlengthban],coinheader:[coinheader,setcoinheader],dayarr: [dayarr,setdayarr],
        dayarrunik:[dayarrunik,setdayarrunik],dayarrbanunik:[dayarrbanunik,setdayarrbanunik],changepagebyfoot:[changepagebyfoot,setchangepagebyfoot]
        ,changefootcheck:[changefootcheck,setchangefootcheck]}}>
            {props.children}
        </Statecontext.Provider>
    )
}

//coin={coinheader==='first'?coins: coinheader==='second'? coins.slice(0,3): coinheader==='third'? coins.slice(4,7): coins.slice(8,11)}