
import React, {useState, createContext} from 'react';


export const Statecontext = createContext();

export const StateHolder = (props)=> {
    const [coinheader,setcoinheader] = useState('first');
    const [tableposref,settableposref] = useState(null);
    const [currentlocale,setcurrentlocale] = useState('/');

    return(
        <Statecontext.Provider value={{currentlocale:[currentlocale,setcurrentlocale],coinheader:[coinheader,setcoinheader],tableposref:[tableposref,settableposref]}}>
            {props.children}
        </Statecontext.Provider>
    )
}

//coin={coinheader==='first'?coins: coinheader==='second'? coins.slice(0,3): coinheader==='third'? coins.slice(4,7): coins.slice(8,11)}