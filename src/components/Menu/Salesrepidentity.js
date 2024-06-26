import React from 'react';
import { useLocation } from 'react-router-dom';

function Salesrepidentity({showprofile}) {
    const location = useLocation();
    const data = location.state;

  return (
    <div style={{paddingTop:'30px',color:'white',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',boxSizing:'border-box'}}>
        <div style={{height:'50%'}}>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 24 24" width="80px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg></p>
            <p style={{fontSize:'25px',letterSpacing:'1.5px'}}>{showprofile?data.name:'jeff'}</p>
            <p style={{color:'grey'}}>Sales rep admin</p>
        </div>
        
        <div style={{height:'50%',marginTop:'25px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        
        <div style={{width:"60px",height:'60px',borderRadius:'10px',background: '#05101c',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-telegram" style={{fontSize:"50px",color:'grey'}} aria-hidden="true"></i></div>
        <div style={{width:"60px",height:'60px',borderRadius:'10px',background: '#05101c',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',display:'flex',justifyContent:'center',alignItems:"center"}}><i class="fa fa-envelope-o" style={{fontSize:"50px",color:'grey'}} aria-hidden="true"></i></div>
        </div>
    </div>
  )
}

export default Salesrepidentity