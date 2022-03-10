import React from 'react';
import { useNavigate } from 'react-router-dom';
import './listcoin.css';

function ListCoin() {
    const navigate = useNavigate()
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
  return <div className='listCoinMain'>

<div style={{color:"white",width:"100%",textAlign:"left",display:"flex",padding:"15px",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
        <p style={{textAlign:"left",padding:'25px',fontSize:'25px',letterSpacing:"2px",marginBottom:'25px'}}><strong>Enlist Your Coin</strong></p>
        <div className='rightandLeftholder' >
            <div className='lefthandList'>
                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Coin Name</p>
                    <input type="text" spellCheck='false' placeholder="Bitcoin"  style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Coin Symbol</p>
                    <input type="text" spellCheck='false' placeholder="BTC"  style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Market Cap</p>
                    <input type="text" spellCheck='false' placeholder="$135467"  style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Price </p>
                    <input type="text" spellCheck='false' placeholder="$146"  style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Description </p>
                    <input type="text"  spellCheck='false' style={{height:'250px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}></input> 

                </div>

                <div style={{width: '70%', marginBottom: '20px',textAlign:"left"}}>
       
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Launch Date </p>
                    <input type="date"  spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'80%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}></input> 

                </div>

                <div style={{width: '65%', marginBottom: '20px',textAlign:"left"}}>
       
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Network/Chain </p>
                    <select name="pets" id="pet-select" style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}>
                        <option value="">Enter Chain</option>
                        <option value="ADA">ADA</option>
                        <option value="Algorand">Algorand</option>
                        <option value="Avalanche">Avalanche</option>
                        <option value="Binance Smart Chain">Binance Smart Chain</option>
                        <option value="BitcoinClone">BitcoinClone</option>
                        <option value="Cronos">Cronos</option>
                        <option value="DeepOnion">DeepOnion</option>
                        <option value="Enecuum">Enecuum</option>
                        <option value="Ethereum">Ethereum</option>
                        <option value="Fantom">Fantom</option>
                        <option value="Gnosis">Gnosis</option>
                        <option value="goldfish">Goldfish</option>
                        <option value="Kucoin Community Coin">Kucoin Community Coin</option> 
                        <option value="parrot">Parrot</option>  
                        <option value="Solana">Solana</option>
                        <option value="spider">Spider</option>
                    </select>

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Address </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Total Supply </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Price </p>
                    <select name="pets" id="pet-select" style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}>
                        <option value="Listed">Listed</option>
                        <option value="pre-sale">Pre-sale</option>
                    </select>


                </div>
            </div>
            <div className='righthandList'>
                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Website Link </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Audit Link </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Telegram Link </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Twitter Link </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Discord Link </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Reddit Link </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Coin Logo </p>
                    <input type="file" spellCheck='false' style={{height:'75px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Custom Chart Link </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

                <div className='divforListInput'>
                    <p style={{textAlign:"left",marginBottom:'10px',letterSpacing:'2px'}}>Contact Mail </p>
                    <input type="text" spellCheck='false' style={{height:'35px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'rgb(6, 16, 28)' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'center'}}></input> 

                </div>

            </div>

        </div>

        <div style={{ margin:'50px auto',marginTop:'50px',width:'50%'}} ><input type='button' className='buttonForSign' value={'Add Coin'} ></input></div>

    </div>
  
}

export default ListCoin;