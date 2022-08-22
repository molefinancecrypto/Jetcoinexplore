import React, {useContext,useState} from 'react';
import { Statecontext } from '../CointoviewContext';
import './alert.css'

function Alert() {
    const[alertobj,setalertobj] = useContext(Statecontext).alertobj
  return (
    <div className='alertholder'>
            <div className='alertcontent'>
                {alertobj.message}
                
            </div>
    </div>
  )
}

export default Alert