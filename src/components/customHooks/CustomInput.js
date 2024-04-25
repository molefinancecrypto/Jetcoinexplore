
import React, {useState} from 'react'

function CustomInput({inputval}) {
    const [absoluteWidth,setAbsoluteWidth] = useState('100%');
    const [textposition, setTextposition] = useState('center')
    
    const ClickInput = ()=>{
        setAbsoluteWidth('auto');
        setTextposition('left')
    }
  return (
    <div style={{width:'400px',display:'flex',height:'60px',borderWidth:'0px 0px 1.5px',borderColor:'rgba(95, 94, 94, 0.698)',position:'relative',backgroundColor:"red"}}>
        <input type='text' style={{width:'100%',height:'100%',fontSize:'15px',backgroundColor:'transparent' ,color:'white',outline:'none',textAlign:'center',position:'absolute',borderWidth:'0px'}}/>
        <div style={{position:'absolute',zIndex:'3',height:'100%',backgroundColor:'yellow',left:'0px',bottom:'0px',width:absoluteWidth,textAlign:textposition}} onClick={ClickInput}>
            <p style={{color:'pink'}}>{inputval}</p>
        </div>
    </div>
  )
}

export default CustomInput