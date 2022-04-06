
import React, {useState, createContext} from 'react';


export const Statecontext = createContext();

export const StateHolder = (props)=> {
    const [coinheader,setcoinheader] = useState('first');

    return(
        <Statecontext.Provider value={{coinheader:[coinheader,setcoinheader]}}>
            {props.children}
        </Statecontext.Provider>
    )
}

//coin={coinheader==='first'?coins: coinheader==='second'? coins.slice(0,3): coinheader==='third'? coins.slice(4,7): coins.slice(8,11)}