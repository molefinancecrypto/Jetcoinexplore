import React,{useState,useEffect,useContext} from 'react';
import { Statecontext } from '../CointoviewContext';
import { useNavigate } from 'react-router-dom';
import './listcoin.css';
import GoToTop from '../Gototop';

function ListCoin() {
    const navigate = useNavigate();
    const [enlistCoinObj,setenlistCoinObj] = useState({
        name:"",
        symbol:"",
        price:"",
        marketcap:"",
        pricechangepct:"",
        launchDate:"",
        logo:"",
        description:"",
        chain:"",
        address:"",
        additionalInformation:"",
        socials:{
            website:"",
            telegram:"",
            twitter:"",
            discord:"",
            reddit:"",
            chart:"",
            email:"",
        }

    })


    //object on fields for border colour activator
    const [colorBorderObject,setcolorBorderObject] = useState({stageOne:true,stageTwo:true,stageThree:true,stageFour:true})
    
    const {name,symbol,price,marketcap,pricechangepct,logo,launchDate,description,chain,address,additionalInformation} = enlistCoinObj
    const {website,telegram,twitter,discord,reddit,chart,email} = enlistCoinObj.socials;
    const uploader = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"/></svg>;
    const [sliderposition,setsliderposition] = useState({left:0,info:'block',contracts:'none',Link:'none',addons:'none'})
    const backward = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>;
    const mainstar = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#FF0000"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>;
    const [windowidth,setwindowidth] = useState(1000);
    const [headertoshow,setheadertoshow] = useState(0);
    const [userObject,setuserObject] = useContext(Statecontext).userObject;
    const updateCoinObj = (event)=>{
        setenlistCoinObj({...enlistCoinObj,...{[event.target.name] : event.target.value}})
    }

    //styles for fields
    const filledfield = {

        height: '45px',
        boxSizing : 'border-box',
        paddingLeft:'10px',
        borderRadius:'10px',
        width:'100%',
        fontSize:'15px',
        backgroundColor:'#071323' ,
        color:'white',
        outline:'none',
        borderWidth:'0px 0px 0px',
        borderColor:'rgba(95, 94, 94, 0.698)',
        textAlign:'left',
        
    }


    const unfilledfield = {
        height: '45px',
        boxSizing : 'border-box',
        paddingLeft:'10px',
        borderRadius:'10px',
        width:'100%',
        fontSize:'15px',
        backgroundColor:'#071323' ,
        color:'white',
        borderWidth:'1.5px',
        borderColor:'red',
        textAlign:'left'
    }

    //styles for fields


    //submit button function
    const addnewCoin = async(event)=>{
        event.preventDefault()
        const addCoinCredentials = await fetch('https://apidev.coinexplore.io/api/users/coins/add', {
            method: 'POST',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userObject.token}`
                    },
            body: JSON.stringify({...enlistCoinObj,...{pricechangepct:enlistCoinObj.price}})
 });

    const addnewCoinObject = await addCoinCredentials.json();
    if(addnewCoinObject.success){
        alert('your coin has been listed succesfully.')
    }
    console.log(addnewCoinObject)
    }

    const updateCoinObjSocials = (event)=>{
        setenlistCoinObj({...enlistCoinObj,...{socials:{...enlistCoinObj.socials,...{[event.target.name] : event.target.value}}}})
    }

    const handleResize = ()=> {
        
        setwindowidth(window.innerWidth)

        }
      
    const headerList = [<p>Coin Information</p>,<p>Coin Contracts</p>,<p>Coin Links</p>,<p>Additional Informaton</p>]
    const step = [<p>step 1</p>,<p>step 2</p>,<p>step 3</p>,<p>step 4</p>]
  useEffect(() => {
    
    handleResize()
    window.addEventListener('resize', handleResize);
    
  
    return () => {
        window.removeEventListener('resize', handleResize)
      
  }
  })

    const info = (event)=>{
        event.preventDefault()
        setsliderposition({left:0,info:'block',contracts:'none',Link:'none',addons:'none'})
        if(windowidth<=900){
            setheadertoshow(0)
        }
    }
    const contracts = (event)=>{
        event.preventDefault()
        if(name===""||symbol===""||marketcap===""||price===""||launchDate===""||description===""){
            setcolorBorderObject({...colorBorderObject,...{stageOne:false}})
            alert('fill all fields')
        }
        else{
            setsliderposition({left:25,info:'none',contracts:'block',Link:'none',addons:'none'})
            setcolorBorderObject({...colorBorderObject,...{stageOne:true}})
            if(windowidth<=900){
                setheadertoshow(1)
            }
        }
        
    }
    const links = (event)=>{
        event.preventDefault()
        if(chain===''||address===''){
            setcolorBorderObject({...colorBorderObject,...{stageTwo:false}})
            alert('ensure you fill all fields')
        }
        else{
            setcolorBorderObject({...colorBorderObject,...{stageTwo:true}})
            setsliderposition({left:50,info:'none',contracts:'none',Link:'block',addons:'none'})
            if(windowidth<=900){
                setheadertoshow(2)
            }
        }
    }

    const addons = (event)=>{
        event.preventDefault()
        if(website===''){
            setcolorBorderObject({...colorBorderObject,...{stageThree:false}})
                alert('please fill-in website field')
        }
        else{
            setcolorBorderObject({...colorBorderObject,...{stageThree:true}})
            console.log(enlistCoinObj)
            setsliderposition({left:75,info:'none',contracts:'none',Link:'none',addons:'block'})
            if(windowidth<=900){
                setheadertoshow(3)
            }

        }
    }
  return <div className='listCoinMain'>
            <div style={{width:'100%',display:'flex',justifyContent:'left',flexDirection:'column'}}>
                <div style={{color:"white",paddingLeft:'2.5%',width:"100%",justifyContent:"left",display:"flex",boxSizing:"border-box",cursor:'pointer',fontSize:'20px'}} onClick={()=> navigate('/')}><p>{backward}</p>Back</div>
                <p className='enlist'><strong>Enlist Your Coin</strong></p>
            </div>
            <div style={{height:windowidth<=900?'auto':'80%',width:windowidth<=900?'100%':'95%',margin:'20px auto',border:'1px solid #112836',backgroundImage: 'linear-gradient(90.18deg, #040B15 35.76%, rgba(6, 17, 31, 10) 110.28%)',borderRadius:'7px',padding:'20px',boxSizing:'border-box'}}>
                {windowidth<=900?<div style={{width:'100%',position:'relative',textAlign:'center',fontSize:'17px',marginBottom:'20px',paddingTop:'25px'}}>{headerList[headertoshow]}<p style={{width:'auto',fontSize:'11px',padding:'5px',borderRadius:'5px',backgroundColor:'white',opacity:'0.4',color:'black',position:'absolute',top:'0px',left:'0px'}}>{step[headertoshow]}</p></div>:<div style={{display:'flex',position:'relative',border:'0.5px solid grey',borderWidth:'0px 0px 0.5px',paddingTop:'15px',paddingBottom:'15px',justifyContent:'space-around',height:'15%',alignItems:'center',width:'100%'}}>
                    <p style={{cursor:'pointer'}}>Coin Information</p>
                    <p  style={{cursor:'pointer'}}>Coin Contracts</p>
                    <p style={{cursor:'pointer'}}>Coin Links</p>
                    <p style={{cursor:'pointer'}}>Additional Informaton</p>
                    <div style={{position:'absolute',backgroundColor:'#062750',width:'25%',height:'1px',top:'100%',left:`${sliderposition.left}%`}}></div>
                </div>}

                <form autocomplete='off'>
                <div style={{width:'100%',marginTop:'40px',display:sliderposition['info']}}>
                    <div style={{width:'90%',margin:'25px auto',boxSizing:'border-box',height:'30%',display:windowidth<=900?'block':'flex',justifyContent:'space-around'}}>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px',marginTop:'-20px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Coin Name<sup class="asterix">*</sup></p>
                            <input name="name" value={enlistCoinObj.name} onChange={(event)=>{updateCoinObj(event)}} type='text' placeholder='Ex: Bitcoin' style={colorBorderObject.stageOne?filledfield:enlistCoinObj.name===""?unfilledfield:filledfield}/>
                        </section >
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px',marginTop:'-20px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Coin Symbol<sup class="asterix">*</sup></p>
                            <input name="symbol" value={enlistCoinObj.symbol} onChange={(event)=>{updateCoinObj(event)}} type='text' placeholder='Ex: BTC' style={colorBorderObject.stageOne?filledfield:enlistCoinObj.symbol===""?unfilledfield:filledfield}/>
                        </section>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Price</p>
                            <input name="price" value={enlistCoinObj.price} onChange={(event)=>{updateCoinObj(event)}} type='number' placeholder='Ex: $24.50' style={colorBorderObject.stageOne?filledfield:enlistCoinObj.price===""?unfilledfield:filledfield}/>
                        </section>
                    </div>
                    <div style={{width:'90%',margin:'25px auto',marginBottom:'0px',boxSizing:'border-box',height:'30%',display:windowidth<=900?'block':'flex',justifyContent:'space-around'}}>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Market Cap</p>
                            <input name="marketcap" value={enlistCoinObj.marketcap} onChange={(event)=>{updateCoinObj(event)}} type='number' placeholder='Ex: $20000BTC' style={colorBorderObject.stageOne?filledfield:enlistCoinObj.marketcap===""?unfilledfield:filledfield}/>
                        </section>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px',marginTop:'-20px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Launch Date<sup class="asterix">*</sup></p>
                            <input name="launchDate" value={enlistCoinObj.launchDate} onChange={(event)=>{updateCoinObj(event)}} type='date' style={colorBorderObject.stageOne?filledfield:enlistCoinObj.launchDate===""?unfilledfield:filledfield}/>
                        </section>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px',marginTop:'-20px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Logo<sup class="asterix">*</sup></p>
                            <div style={{width:'100%',backgroundColor:'#071323',borderRadius:'10px'}}>
                                <input  type='file' id='logo' name='logo' style={{height:'30px',display:'none',paddingLeft:'10px',boxSizing:'border-box',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:colorBorderObject.stageOne?'rgba(95, 94, 94, 0.698)':enlistCoinObj.symbol?'rgba(95, 94, 94, 0.698)':'red',textAlign:'left'}}/>
                                <p style={{width:'100%',textAlign:'center',padding:'5px',backgroundColor:'#02050a',borderRadius:'10px 10px 0px 0px',fontSize:'13px',boxSizing:'border-box'}}>LOGO (png file*)</p>
                                <label for='logo' style={{backgroundColor:'red',width:'100px',cursor:'pointer'}}>
                                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'60%',margin:'0px auto',padding:'20px'}}><p>{uploader}</p> <p style={{fontSize:'15px'}}>Upload max: 130 * 130</p></div>
                                </label>
                            </div>
                        </section>
                    </div>
                    <div style={{width:'90%',margin:'0px auto',boxSizing:'border-box',height:'20%',}}>
                        <section className='desc-style' style={{textAlign:'left',width:windowidth<=900?'100%':'40%'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Description</p>
                            <textarea  name="description" value={enlistCoinObj.description} onChange={(event)=>{updateCoinObj(event)}} style={colorBorderObject.stageOne?filledfield:enlistCoinObj.description===""?unfilledfield:filledfield}/>
                        </section>
                            
                    </div>
                    <div style={{width:'90%',textAlign:'right',margin:'0px auto',color:'white'}}><button onClick={(event)=>contracts(event)} style={{width:'150px',height:'40px',backgroundColor:'#02050a',outline:'none',border:'2px solid #02050a',borderRadius:'5px',color:'white'}}>Continue</button></div>
                </div>


                
                
                <div style={{width:'100%',height:windowidth<=900?'auto':'50vh',marginTop:'40px',position:'relative',display:sliderposition['contracts']}}>
                    <div style={{width:'90%',margin:'15px auto',boxSizing:'border-box',height:'30%',display:windowidth<=900?'block':'flex',justifyContent:'space-between'}}>
                        <section style={{textAlign:'left',width:windowidth<=900?'100%':'45%',height:'auto',marginBottom:windowidth<=900?'25px':'0px',marginTop:'-20px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Network/Chain<sup class="asterix">*</sup></p>
                            <select name="chain" value={enlistCoinObj.chain} onChange={(event)=>{updateCoinObj(event)}}  id="chain-select" style={colorBorderObject.stageTwo?filledfield:enlistCoinObj.chain===""?unfilledfield:filledfield}>
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
                        </section >
                        <section style={{textAlign:'left',width:windowidth<=900?'100%':'45%',height:'auto',marginBottom:windowidth<=900?'25px':'0px',marginTop:'-20px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'15px'}}>Address<sup class="asterix">*</sup></p>
                            <input name="address" value={enlistCoinObj.address} onChange={(event)=>{updateCoinObj(event)}} type='text' placeholder='Ex: BTC' style={colorBorderObject.stageTwo?filledfield:enlistCoinObj.address===""?unfilledfield:filledfield}/>
                        </section>
                        
                    </div>
                    <div style={{width:'90%',display:'flex',position:windowidth<=900?'static':'absolute',bottom:'15px',left:'5%',justifyContent:'space-between',margin:windowidth<=900?'0px auto':'0px auto',color:'white'}}>
                        <button onClick={info} style={{width:windowidth<=900?'80px':'150px',height:'40px',backgroundColor:'#02050a',outline:'none',border:'2px solid #02050a',borderRadius:'5px',color:'white'}}>Back</button>
                        <button onClick={links} style={{width:windowidth<=900?'80px':'150px',height:'40px',backgroundColor:'#02050a',outline:'none',border:'2px solid #02050a',borderRadius:'5px',color:'white'}}>Continue</button>
                    </div>
                </div>




                <div style={{width:'100%',height:windowidth<=900?'auto':'50vh',marginTop:'40px',position:'relative',display:sliderposition['Link']}}>
                    <div style={{width:'90%',margin:windowidth<=900?'25px auto':'7px auto',boxSizing:'border-box',height:'25%',display:windowidth<=900?'block':'flex',justifyContent:'space-between'}}>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px',marginTop:'-20px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Website<sup class="asterix">*</sup></p>
                            <input name="website" value={enlistCoinObj.socials.website} onChange={(event)=>{updateCoinObjSocials(event)}} type='text' placeholder='Ex: https://www.bitcoin.com' style={colorBorderObject.stageThree?filledfield:enlistCoinObj.socials.website===""?unfilledfield:filledfield}/>
                        </section >
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Telegram</p>
                            <input name="telegram" value={enlistCoinObj.socials.telegram} onChange={(event)=>{updateCoinObjSocials(event)}} type='text' placeholder='Ex: https://t.me/bitcoin' style={{height:'45px',boxSizing:'border-box',paddingLeft:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Audit Link</p>
                            <input type='text' placeholder='Ex: https://www.audit.com' style={{height:'45px',boxSizing:'border-box',paddingLeft:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section>
                    </div>
                    <div style={{width:'90%',margin:windowidth<=900?'25px auto':'7px auto',boxSizing:'border-box',height:'25%',display:windowidth<=900?'block':'flex',justifyContent:'space-between'}}>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Twitter Link</p>
                            <input name="twitter" value={enlistCoinObj.socials.twitter} onChange={(event)=>{updateCoinObjSocials(event)}} type='text' placeholder='Ex: https://www.twitter.com' style={{height:'45px',boxSizing:'border-box',paddingLeft:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section >
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Discord Link</p>
                            <input name="discord" value={enlistCoinObj.socials.discord} onChange={(event)=>{updateCoinObjSocials(event)}} type='text' placeholder='Ex: https://www.discord.com' style={{height:'45px',boxSizing:'border-box',paddingLeft:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Reddit Link</p>
                            <input name="reddit" value={enlistCoinObj.socials.reddit} onChange={(event)=>{updateCoinObjSocials(event)}} type='text' placeholder='Ex: https://www.reddit.com' style={{height:'45px',boxSizing:'border-box',paddingLeft:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section>
                    </div>
                    <div style={{width:'90%',margin:windowidth<=900?'25px auto':'7px auto',boxSizing:'border-box',height:'25%',display:windowidth<=900?'block':'flex',justifyContent:'space-between'}}>
                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Custom Chart Link</p>
                            <input name="chart" value={enlistCoinObj.socials.chart} onChange={(event)=>{updateCoinObjSocials(event)}} type='text' placeholder='Ex: https://www.chart.com' style={{height:'45px',boxSizing:'border-box',paddingLeft:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section >

                        <section style={{textAlign:windowidth<=900?'center':'left',width:windowidth<=900?'100%':'30%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}><p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px',width:'45%'}}>Other Links</p> <input type='text' placeholder='link description' style={{height:'25px',width:"45%",boxSizing:'border-box',paddingLeft:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/></div>
                            <input  type='text' placeholder='Ex: https://www.chart.com' style={{height:'45px',boxSizing:'border-box',paddingLeft:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section >
                        
                    </div>
                    <div style={{width:'90%',display:'flex',position:windowidth<=900?'static':'absolute',bottom:'15px',left:'5%',justifyContent:'space-between',margin:'0px auto',color:'white'}}>
                        <button onClick={contracts} style={{width:windowidth<=900?'80px':'150px',height:'40px',backgroundColor:'#02050a',outline:'none',border:'2px solid #02050a',borderRadius:'5px',color:'white'}}>Back</button>
                        <button onClick={addons} style={{width:windowidth<=900?'80px':'150px',height:'40px',backgroundColor:'#02050a',outline:'none',border:'2px solid #02050a',borderRadius:'5px',color:'white'}}>Continue</button>
                    </div>
                </div>




                <div style={{width:'100%',height:windowidth<=900?'auto':'50vh',marginTop:'40px',position:'relative',display:sliderposition['addons']}}>
                    <div style={{width:'90%',margin:windowidth<=900?'25px auto':'7px auto',boxSizing:'border-box',height:'25%',display:windowidth<=900?'block':'flex',justifyContent:'space-between'}}>
                        <section style={{textAlign:'left',width:windowidth<=900?'100%':'45%',height:'auto',marginBottom:windowidth<=900?'25px':'0px',marginTop:'-20px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Contact Mail<sup class="asterix">*</sup></p>
                            <input name="email" value={enlistCoinObj.socials.email} onChange={(event)=>{updateCoinObjSocials(event)}} type='text' placeholder='Ex: bitcoin@gmail.com' style={colorBorderObject.stageFour?filledfield:enlistCoinObj.socials.email===""?unfilledfield:filledfield}/>
                        </section >
                        <section style={{textAlign:'left',width:windowidth<=900?'100%':'45%',height:'auto',marginBottom:windowidth<=900?'25px':'0px'}}>
                            <p style={{textAlign:'left',color:'white',marginBottom:windowidth<=900?'5px':'10px'}}>Additional Information</p>
                            <textarea name="additionalInformation" value={enlistCoinObj.additionalInformation} onChange={(event)=>{updateCoinObj(event)}} placeholder='' style={{height:'100px',boxSizing:'border-box',paddingLeft:'10px',paddingTop:'10px',borderRadius:'10px',width:'100%',fontSize:'15px',backgroundColor:'#071323' ,color:'white',outline:'none',borderWidth:'0px 0px 0px',borderColor:'rgba(95, 94, 94, 0.698)',textAlign:'left'}}/>
                        </section>
                    </div>
                    <div style={{width:'90%',display:'flex',position:windowidth<=900?'static':'absolute',bottom:'15px',left:'5%',justifyContent:'space-between',margin:'0px auto',color:'white'}}>
                        <button onClick={links} style={{width:windowidth<=900?'80px':'150px',height:'40px',backgroundColor:'#02050a',outline:'none',border:'2px solid #02050a',borderRadius:'5px',color:'white'}}>Back</button>
                        <button  onClick={(event)=>addnewCoin(event)} style={{width:windowidth<=900?'80px':'150px',height:'40px',backgroundColor:'#02050a',outline:'none',border:'2px solid #02050a',borderRadius:'5px',color:'white'}}>Add Coin</button>
                    </div>
                </div>
                </form>
            </div>
            <GoToTop />
        
    </div>




  
}

export default ListCoin;



/* 

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


*/

const StyleOne = {

    height: '45px',
    boxSizing : 'border-box',
    paddingLeft:'10px',
    borderRadius:'10px',
    width:'100%',
    fontSize:'15px',
    backgroundColor:'#071323' ,
    color:'white',
    outline:'none',
    borderWidth:'0px 0px 0px',
    borderColor:'rgba(95, 94, 94, 0.698)',
    textAlign:'left'
        

}