import React from 'react'
import GoToTop from '../../Gototop'

function DyorHolder() {
    return (
        <div style={{textAlign:'left',padding:'20px',height:'100%',fontFamily:'NexaTextLight'}}>
          <p style={{fontSize:'30px',fontFamily: "NexaTextBold"}}>Do Your Own Research (DYOR)</p>
          <div style={{margin:'25px auto'}}>
            <p style={{margin:"10px auto"}}>The crypto world is full of opportunities, especially among new tokens with smaller marketcaps, the upside potential is often much larger than that of BTC or ETH. Everyone hopes to find the next Dogecoin that will increase 100x within a month.</p>
            <p style={{margin:"10px auto"}}>However, there are a lot of risks to consider when investing in smaller projects. Many projects appear to be very promising at first, but turn out to be scams just days later. As a smart investor, always apply DYOR - Do Your Own Research prior to investing.</p>
            <p style={{margin:"10px auto"}}>What should you look for when DYOR? How can you avoid common scams and rug pulls when investing?</p>
            <p style={{margin:"10px auto"}}>This document will show you a few tips & tricks that you can apply to avoid many scams that happen every day. Even when applying these tips, investing is not risk free - but after reading this, you will have the ability to spot and avoid scams much faster.</p>
            <p style={{margin:"10px auto"}}>Without reviewing the contract's solidity code, you can never have complete assurance about how a currency operates or whether it is a hoax. Investing early in crypto coin projects entails incurring significant financial risks.</p>
            <p style={{margin:"10px auto"}}>That being said, if you still want to give it a shot, here are a few reasonable things to do before participating in a presale or purchasing a new crypto coin.</p>
            <p style={{margin:"10px auto"}}>Warning: There is absolutely no financial advice on this or on any other pages of this website.</p>
          </div>
          <div style={{marginTop:'50px'}}>
                    <p style={{textAlign:'left',fontSize:'25px'}}>1 &nbsp;&nbsp;&nbsp;Methods to check for scams projects</p> 
                    <div style={{marginTop:'15px'}}>
                        <p style={{fontSize:'20px',textAlign:'left'}}>1.1&nbsp;&nbsp;&nbsp;Main Aspects</p>
    
                        <div style={{margin:'20px auto'}}>
                          <p style={{margin:'10px auto'}}>Tokens (BEP-20, ERC-20, and so on) are simply smart contracts with which you interact. The token's logic, transaction tax system, swap protocol, and total supply, are included in these smart contracts.</p>
                          <p style={{marginLeft:'30px'}}>a.&nbsp;&nbsp;&nbsp;Scam contracts can be detected with tools like http://www.bscheck.eu . They look for common scams and issues like:</p>
                          <div style={{marginLeft:'30px'}}>
                            <p style={{marginLeft:'30px'}}>i.&nbsp;&nbsp;&nbsp;If the code is a Honeypot you can buy but you can’t sell.</p>
                            <p style={{marginLeft:'30px'}}>ii.&nbsp;&nbsp;&nbsp;If the owner(s) of the Smart Contract didn’t renounce ownership they can later change the smart contract, introducing additional possible fraud code.</p>
                            <p style={{marginLeft:'30px'}}>iii.&nbsp;&nbsp;&nbsp;If the developers hold a large amount of coins/tokens, they can dump them on the market and clear all liquidity.</p>
                            <p style={{marginLeft:'30px'}}>iv.&nbsp;&nbsp;&nbsp;If liquidity is burned or the dev still owns the LP (Liquidity Pool) tokens they can pull the liquidity any time.</p>
                            <p style={{marginLeft:'30px'}}>v.&nbsp;&nbsp;&nbsp;If there are big whales with a high percentage(%) of tokens they could instantly dump the entire token value.</p>
                          </div>
                        </div>
    
                    </div>
                    <div style={{marginTop:'15px'}}>
                        <p style={{fontSize:'20px',textAlign:'left'}}>1.2&nbsp;&nbsp;&nbsp;Security Audits</p>
    
                        <div style={{margin:'20px auto'}}>
                          <p style={{margin:'15px auto'}}>To begin with, security audits are very important to check but you also need to verify the audits legitimacy too. However, most new coins have not been audited so you will need to do your own research.</p>
                          <p style={{margin:'15px auto'}}>Smart contracts can be really hard to read, and scams can be well hidden. Luckily, there are companies like Techrate and CertiK  that provide a paid service for checking smart contracts. Here you can find all the smart contract audits that they did: https://github.com/TechRate/Smart-Contract-Audits </p>
                          <p style={{margin:'15px auto'}}>Look for security audits of companies like these and verify they are real. This adds a lot of legitimacy to the project, and takes away a lot of scam opportunities via the smart contract.</p>
                          <p style={{margin:'15px auto'}}>Audits by companies like TechRate and CertiK add a lot of legitimacy to a project.</p>
                        </div>
    
                    </div>
                    <div style={{marginTop:'15px'}}>
                        <p style={{fontSize:'20px',textAlign:'left'}}>1.3&nbsp;&nbsp;&nbsp;Investigate Website, Social Channels</p>
    
                        <div style={{margin:'20px auto'}}>
                          <p style={{margin:'10px auto',textAlign:'left'}}>1.3.1</p>
                          <div style={{margin:'10px auto'}}>On Coinexplore , you can see all the social channels of a project, if submitted. Have a look at the project’s website, see if all the information like smart contract matches with their other channels. Scams often put less effort into a good looking website with a lot of information than real projects. If the website is just one page with the smart contract and a telegram link, be careful.</div>
                          <p style={{margin:'10px auto',textAlign:'left'}}>1.3.2</p>
                          <div style={{margin:'10px auto'}}>Next, check the Telegram group, Twitter account, potentially Discord server and Reddit activity. Is there a lot of interaction? Does the Telegram group have a decent amount of users online compared to total users in the group? Check to see whether the number of members in the tg group is manipulated. This is evident when the number of online members is compared to the overall number of members. If a Telegram group has 8000 members but only 100 are online, chances are it is botted; you should avoid these groups as well. Same goes for Twitter, if they have a lot of followers but hardly any interaction on their tweets, also be careful.</div>
                        </div>
    
                    </div>
                    <div style={{marginTop:'15px'}}>
                        <p style={{fontSize:'20px',textAlign:'left'}}>1.4&nbsp;&nbsp;&nbsp;Bscscan.com</p>
                        <div style={{margin:'20px auto'}}>
                            <p>Check the "Holder" tab to see what proportion the top holders have; if a wallet has more over 10%, you may want to reconsider investing. This wallet might sell all of their coins, which would have a significant (usually negative) influence on the market. This can also generate panic, causing everyone to sell whatever they have.</p>
                        </div>
                    </div>
                    <div style={{marginTop:'15px'}}>
                        <p style={{fontSize:'20px',textAlign:'left'}}>1.5&nbsp;&nbsp;&nbsp;Utilizing Poocoin for Scams</p>
                        <div>
                            <p style={{marginBottom:'10px'}}>1.5.1</p>
                            <p>This website allows you to scan two specific frauds. Check the LP box for a red warning notice that says anything like "liquidity is not locked, the dev may remove everything if they desire." In such a scenario, this coin may be a future rugpull, and you should flee.</p>
                        </div>
                        <div style={{margin:'15px auto'}}>
                            <p style={{marginBottom:'10px'}}>1.5.2</p>
                            <p>You may also look for honeypots on Poocoin. Under the graph, you can see all of the sell and purchase orders, and you can see if various addresses can sell. Honeypot is a specific scam in which the developer has set a rule that only permits specific wallet addresses to sell, thus if you only see purchase orders and a few sell orders (typically massive dumps), you should probably avoid it.</p>
                        </div>
    
                    </div>
                    <div style={{marginTop:'15px'}}>
                        <p style={{fontSize:'20px',textAlign:'left'}}>1.6&nbsp;&nbsp;&nbsp;Analyzing Locked Liquidity</p>
                        <div style={{margin:'15px auto'}}>
                          <p style={{marginBottom:'10px'}}>1.6.1</p>
                          <p>Rug pulls, from what I've observed, are the most typical trick. A rug pull occurs when the liquidity of a token traded on a decentralized exchange (DEX) such as Uniswap or PancakeSwap gets "drawn" away. As a result, investors are unable to buy or sell the token, rendering it useless.</p>
                          <div style={{margin:'20px auto'}}>
                            <p style={{margin:'10px auto'}}><strong>How does liquidity work?</strong></p>
                            <div style={{marginLeft:'30px'}}>
                              <p>-&nbsp;&nbsp;&nbsp;Liquidity can be offered by anybody, however it is frequently provided by token developers. For example, in order to offer liquidity for the token combination BNB/SAFEMOON, the SafeMoon developers can transfer a large number of BNB + SAFEMOON to PancakeSwap. When users trade on PancakeSwap, they either add some BNB and receive SAFEMOON in exchange (they purchase SAFEMOON with BNB), or they add some SAFEMOON and receive some BNB (they sell SAFEMOON with BNB).</p>
                              <p>-&nbsp;&nbsp;&nbsp;As a result, this liquidity is essential for anyone to trade on a DEX such as PancakeSwap or Uniswap. When liquidity is given, the provider is compensated with LP tokens. These tokens serve as "evidence" that they hold a share of the liquidity pool, and they can trade them for their stake in the liquidity pool, in our example, receiving BNB + SAFEMOON in return.</p>
                              <p>-&nbsp;&nbsp;&nbsp;Now think what would happen if the liquidity provider lost access to the LP tokens; then the liquidity cannot be removed, and investors can continue trading.</p>
    
                            </div>
    
                          </div>
    
                        </div>
                        <div style={{margin:'15px auto'}}>
                          <p style={{marginBottom:'10px'}}>1.6.2</p>
                          <p>Token devs have two options of eliminating the chance of pulling away liquidity by:</p>
                          <div style={{margin:'20px auto',marginLeft:'30px'}}>
                            <p>a.&nbsp;&nbsp;&nbsp;Burning Liquidity</p>
                            <div style={{margin:'15px auto'}}>Developers can temporarily lock their LP tokens into a smart contract, preventing them from accessing them for 6 months, for example. You can view which tokens use the DeepLock liquidity locker, what percentage of the token supply is locked, and for how long at https://deeplock.io/safe . You can also inquire with the token developers of the token you're interested in regarding their locked liquidity; they should be able to give proof.</div>
                            <p>b.&nbsp;&nbsp;&nbsp;Locking liquidity</p>
                            <div style={{margin:'15px auto'}}>Token developers should burn their LP tokens to a burn address because it is the most secure and trustworthy method. For example, a common burn address is 0x000...00dead. As proof, you might request that the developers send LP tokens to this (or a similar) address. This prevents them from redeeming their LP tokens and removing liquidity.</div>
                          </div>
    
                        </div>
                    </div>
                    <div style={{marginTop:'15px'}}>
                        <p style={{fontSize:'20px',textAlign:'left'}}>1.7&nbsp;&nbsp;&nbsp;Additional</p>
                        <div style={{margin:'15px auto'}}>
                          <p style={{marginBottom:'10px'}}>1.7.1</p>
                          <p>When developers are not Doxxed can indicate a scam project. The term "doxxed" refers to someone's identity being revealed. Although it is sometimes used negatively, bitcoin doxxed devs are a good thing. This means the token developers revealed their true identities and faces, which can be a symbol of trust. Be cautious, as they may be using forged identities.</p>
                        </div>
                        <div style={{margin:'15px auto'}}>
                          <p style={{marginBottom:'10px'}}>1.7.2</p>
                          <p>Use Your Common Sense - In the end, a project may tick all of the boxes but still be a hoax. Please exercise caution and common sense when investing. If anything appears to be too good to be true, such as a project offering 100 percent BNB returns in a week, it almost always is.</p>
                        </div>
    
                    </div>
    
    
          </div>
         <GoToTop /> 
          
        </div>
      )
    }

export default DyorHolder