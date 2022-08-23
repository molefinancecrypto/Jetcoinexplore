import React, {useContext,useState} from 'react';
import { Statecontext } from '../CointoviewContext';
import './alert.css'

function Alert({overallwidth}) {
    const[alertobj,setalertobj] = useContext(Statecontext).alertobj
  return (
    <div className={overallwidth<=700?'alertholdermobile':'alertholder'}>
            <div className='alertcontent'>
                {alertobj.message}
                
            </div>
    </div>
  )
}

export default Alert