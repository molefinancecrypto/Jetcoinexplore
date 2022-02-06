import React, {useState,useContext, createContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { CoinObj } from '../components/coinholder';

        const Coindata = createContext();

        export function ParticularCoin(){
            return useContext(Coindata)
            
         } 

        export function ParticularcoinHolder({children}){
            const[selector,setselector] = useState();
            const[votevalidation, setvotevalidation] = useState(false)
            
            const value = {selector, setselector,votevalidation,setvotevalidation}
         return <Coindata.Provider value={value}>
             {children}
         </Coindata.Provider>;
        }