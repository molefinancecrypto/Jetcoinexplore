import React , {useContext} from 'react'
import { Statecontext } from '../../CointoviewContext'
import {useNavigate,Link} from 'react-router-dom'
import GoToTop from '../../Gototop'

function TermsHolder() {
    const [headerterms, setheaderterms] = useContext(Statecontext).headerterms
    return (
        <div style={{padding:'20px',height:'100%',fontFamily:'NexaTextLight'}}>
            <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>Terms & Conditions</p>
    
            <p style={{margin:'20px auto',textAlign:'left'}}>This Terms & Conditions (“Agreement”), along with our <span onClick={()=>setheaderterms('Privacy Policy')} style={{cursor:'pointer',color:'rgb(176, 176, 240)',padding:"2px"}}>Privacy & Cookie Policy</span> , constitutes a legally binding agreement made between you, whether personally or on behalf of an entity (“user” or “you”) and Coinexplore and its affiliated companies, Websites, applications and tools (collectively, Coinexplore, “we” or “us” or “our”), concerning your access to and use of <Link to='/' style={{color:'rgb(176, 176, 240)'}}>https://www.coinexplore.io</Link>  (‘’Website’’) as well as any other media form, media channel, mobile website or mobile application related or connected thereto (collectively, the “Sites”). The Sites provide the following service: Coinexplore is a media and news website covering cryptocurrencies, NFTs, and more. (“Services”). Supplemental terms and conditions or documents that may be posted on the Sites from time to time, are hereby expressly incorporated into this Agreement by reference.
            </p>
    
            <p style={{margin:'20px auto',textAlign:'left'}}>The information on the Sites is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation, or where such distribution or use would be subject to any registration requirement within such jurisdiction or country. Users who choose to access the Sites from other areas do so at their own risk and are solely responsible for complying with local laws, if and to the extent that local laws apply.
            </p>
    
            <p style={{margin:'20px auto',textAlign:'left'}}>
            All minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Sites. If you are a minor, you must have your parent or guardian read and agree to this Agreement prior to you using the Sites. Anyone under the age of 13 are not permitted to register for the Sites or use the Services.
    
    
            </p>
    
            <p style={{margin:'20px auto',textAlign:'left'}}>
            You accept and agree to be bound by this agreement by acknowledging such
    acceptance during the registration process (if applicable) and also by continuing to use the sites. If you do not agree to abide by this agreement, or to modifications that we may make to this agreement in the future, do not use or access or continue to use or access our services or the sites.
    
            </p>
            <p style={{margin:'20px auto',textAlign:'left'}}>
            Coinexplore maintains the right, in its sole discretion, to alter any part of the Agreement (including these Terms & Conditions) at any time without prior notification to you, and you acknowledge that it is your obligation to check for updated terms of the Agreement on our Website on a regular basis. In any case, by continuing to use any portion of our Site and/or any of our Site Services, you will be deemed to have accepted all revisions to the Agreement that Coinexplore may adopt from time to time. If you do not want to be bound by the Agreement, do not use any component of the Site or Site Services, and immediately discontinue any access to and use of our Site, Site Services, products, and services.
            </p>
    
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    1 &nbsp; &nbsp; &nbsp;CoinExplore provides the following Services 
               
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>1.1</p>
                    <p style={{textAlign:'left'}}>
                    We offer a Platform where any (legal or natural) person can submit a cryptocurrency project by using the submission form on the website. A person who submits a coin will be hereinafter referred to as a Lister. Submitted Coins instantly become visible on the New Listings Page. Coins will initially be placed in the category “New” on the Website.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>1.2</p>
                    <p style={{textAlign:'left'}}>
                    Coinexplore offers the possibility for any normal person to become a Voter. A Voter may vote on a Submitted Coin. To become a Voter, it is mandatory to create an Account on the Website. Voters can upvote Submitted Coins once these are listed. Submitted Coins with more than 360 votes will appear in the categories “All Time” and “Today” on the Website. Listers and Voters will hereinafter also be referred to as a ‘’User’’ or ‘’Users’’.
    
                    </p> 
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>1.3</p>
                    <p style={{textAlign:'left'}}>
                    Coinexplore offers advertising services through, among other things, banners on the Website and promoted spots for Submitted Coins.
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>1.4</p>
                    <p style={{textAlign:'left'}}>
                    Coinexplore does not verify any Submitted Coins, Listers or Voters. Coin listings on the Website are for informational purposes only. We do not provide any financial advice, act as financial services provider or broker, or in any other way aid in the formation of any transactions in cryptocurrency or otherwise.
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>1.5</p>
                    <p style={{textAlign:'left'}}>
                    The market for the digital assets, including but not limited to cryptocurrency as listed on the Website, is still new and uncertain. Unlike most currencies or assets, which are backed by governments or other legal entities, or by other commodities such as gold or silver, digital assets are a unique type of asset, backed by technology and trust. Digital assets are an as-yet autonomous and largely unregulated global system of digital asset service providers and individuals. Investors put their trust in a digital, decentralized and partially anonymous system that relies on peer-to-peer networking and cryptography to maintain its integrity. Consequently, market prices for digital assets can be highly volatile and unpredictable. Whether the future market price for a digital asset will move up or down is a speculation and unknowable and digital assets may even become worthless. There is no central bank or other third party that can take corrective measures to protect the value of a digital asset. The User is aware of this market risk and should be cautious about digital assets. Moreover, the cryptocurrency listed on the Website could potentially be Scams, i.e. designed to either by object or effect induce market participants to invest financial resources that will not be recoverable once investments are made. Each User is responsible to Do Your Own Research <span onClick={()=>{setheaderterms('dyor')}} style={{padding:"3px",cursor:'pointer',color:'rgb(176, 176, 240)'}}>(DYOR)</span> regarding any information, specifically regarding cryptocurrency, listed on the Website.
    
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>1.6</p>
                    <p style={{textAlign:'left'}}>
                    The use of any the Services provided by Coinexplore is conditioned upon User’s and acceptance of and compliance with these Terms.
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    2 &nbsp; &nbsp; &nbsp;Content on the platform 
               
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>2.1</p>
                    <p style={{textAlign:'left'}}>
                    Content added, created, uploaded, submitted, distributed, posted, or otherwise obtained through the Platform and/or Website by Users, including content that is added to the Platform and/or Website in connection with Users linking their accounts to third party websites and services, is collectively referred to as User Generated Content.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>2.2</p>
                    <p style={{textAlign:'left'}}>
                    The Platform and/or Website offered by Coinexplore contains content which consists of both User Generated Content and content uploaded by Coinexplore (Coinexplore Content, collectively with User Generated Content referred to as the Content).
    
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    3 &nbsp; &nbsp; &nbsp;User Representations 
               
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>3.1</p>
                    <p style={{textAlign:'left'}}>
                    The User may not access or use the Platform, Website and/or Services of Coinexplore for any other purpose other than for which Coinexplore makes it available. The Platform, Website and/or Services may not be used in connection with any commercial endeavors, except those that are endorsed and approved by Coinexplore. When the User uses our Services, the User hereby represents and warrants to refrain from:
                        
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>a.&nbsp;&nbsp;&nbsp;Using the Platform, Website and/or Services in any way that this is or may be damaging to the Website, Platform, or Coinexplore;
                    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>b.&nbsp;&nbsp;&nbsp;Using the Platform, Website and/or Services in a way that impacts Users’ access to the Website;
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>c.&nbsp;&nbsp;&nbsp;Uploading any information to the Platform and/or Website that is false or incorrect;
    
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>d.&nbsp;&nbsp;&nbsp;Using the Platform, Website and/or Services contrary to applicable laws and regulations;
    
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>e.&nbsp;&nbsp;&nbsp;Attempting to impersonate another User or person or using the username of another User; and
    
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>f.&nbsp;&nbsp;&nbsp;Engaging in any automated use of the Website, such as using data mining, robots, automated voting, or similar data gathering and extraction tools.
    
    
                    </p>
                    <p style={{textAlign:"left",margin:"10px auto"}}>
                    By using the Coinexplore Services, you represent and warrant that:
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>a.&nbsp;&nbsp;&nbsp;Provide true, accurate, current and complete information about yourself as prompted by the Sites' registration form and 
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>b.&nbsp;&nbsp;&nbsp;Maintain and promptly update registration data to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Sites (or any portion thereof).
    
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>3.2</p>
                    <p style={{textAlign:'left'}}>
                    We may invite you to chat or participate in blogs, message boards, online forums and other functionality and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute or broadcast content and materials to our Sites and/or to or via the Sites' forms, emails, chat agents, pop ups, including, without limitation, text, writings, video, audio, photographs, graphics, comments, suggestions or personally identifiable information or other material
    
                    </p>
                    <p style={{textAlign:"left",margin:"10px auto"}}>
                    When the User creates or makes available Content, the User hereby represents and warrants that:
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>a.&nbsp;&nbsp;&nbsp;The Content does not in any way induce persons to enter into transactions that by object, effect or otherwise lead to (practically) irretrievable loss of invested money or digital assets such as cryptocurrency other than as a result of market fluctuations.
    
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>b.&nbsp;&nbsp;&nbsp;The creation, distribution, transmission, public display and performance, accessing, downloading and copying of the Content does not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret or moral rights of any third party
    
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>c.&nbsp;&nbsp;&nbsp;The Content does not infringe any intellectual property rights, including without limitation copyrights, patents or trademark rights of any third party;
    
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>d.&nbsp;&nbsp;&nbsp;The Content is not obscene, lewd, lascivious, filthy, violent, harassing, fraudulent libelous or slanderous or otherwise objectionable (as determined by Coinexplore), and does not ridicule, mock disparage, intimidate, or abuse anyone; and
    
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>e.&nbsp;&nbsp;&nbsp;The Content does not otherwise violate, or link to material that violates any provision of these Terms or any applicable law or regulation.
    
    
                    </p>
                    <p style={{marginLeft:'15px',textAlign:"left"}}>f.&nbsp;&nbsp;&nbsp;The Content does not contain material that solicits personal information from anyone under 18 or exploit people under the age of 18 in a sexual or violent manner, and does not violate any federal or state law concerning child pornography or otherwise intended to protect the health or well-being of minors;
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>3.3</p>
                    <p style={{textAlign:'left'}}>
                    We reserve the right to remove or reclaim or change a user name you select if we determine appropriate in our discretion, such as when the user name is obscene or otherwise objectionable or when a trademark owner complains about a username that does not closely relate to a user's actual name.
    
                    </p>
                </div>
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    4 &nbsp; &nbsp; &nbsp;Access and Interference
    
               
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>4.1 </p>
                    <p style={{textAlign:'left'}}>
                    Coinexplore does not actively monitor, screen and/or edit the Content on the Platform and/or Website.
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>4.2</p>
                    <p style={{textAlign:'left'}}>
                    If any User finds that any Content on the Platform or Website infringes applicable legal and regulatory provisions, in particular in case of clearly illegal content (e.g. defaming, denigrating or infringing upon intellectual property rights), the User shall notify Coinexplore by sending a notice to <Link to='/' style={{color:'rgb(176, 176, 240)'}}>support@coinexplore.io</Link> . In such case, the User must provide Coinexplore with all information necessary to enable us to identify the Content in question and take further actions if necessary, such as:
    
                    </p>
                </div>
                <p style={{marginLeft:'15px',textAlign:"left"}}>a.&nbsp;&nbsp;&nbsp;Description of the (User Generated) Content in dispute and the precise location;
                
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>b.&nbsp;&nbsp;&nbsp;The reasons why the (User Generated) Content should be removed, preferably including the legal and factual basis; and/or
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>c.&nbsp;&nbsp;&nbsp;Name and other available information of the User who uploaded the User Generated Content.</p>
    
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>4.3</p>
                    <p style={{textAlign:'left'}}>
                    Coinexplore has the right to remove and/or block certain User Generated Content without reason and without prior notice after receipt of a notice request. In the event a User uploads User Generated Content that infringes Clause 3.2 .
    
                    </p>
                </div>
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    5 &nbsp; &nbsp; &nbsp;Third Party Websites and Content
                </p>
                <p style={{textAlign:'left'}}>
                    The Website contains links to other websites ("Third Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software and other content or items belonging to or originating from third parties (the "Third Party Content"). Such Third Party Websites and Third Party Content are not investigated, monitored or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third Party accessed through the Sites or any Third Party Content posted on, available through or installed from the Sites, including the content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in the Third Party Websites or the Third Party Content. The User accesses third party websites at their own risk. These other websites are not under Coinexplore’s control, and the User acknowledges that we are not responsible or liable for the content, functions, accuracy, legality, appropriateness, or any other aspect of such websites or resources. If you decide to leave the Sites and access the Third Party Websites or to use or install any Third Party Content, you do so at your own risk and you should be aware that our terms and policies no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any websites to which you navigate from the Sites or relating to any applications you use or install from the Sites. Any purchases you make through Third Party Websites will be through other websites and from other companies, and Coinexplore takes no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. The inclusion of any such link does not imply endorsement by Coinexplore of or any association with third-party operators. The User further acknowledges and agrees that Coinexplore will not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party website or resource.
    
                </p>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    6 &nbsp; &nbsp; &nbsp;Advertisements and Paid Promotions
    
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>6.1</p>
                    <p style={{textAlign:'left'}}>  
                    We offer banner advertisement spots and promoted coin spots (collectively referred to as Paid Promotions). Coinexplore is not responsible for the Paid Promotions that are submitted on the Website.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>6.2</p>
                    <p style={{textAlign:'left'}}> 
                    Any listing of cryptocurrency can be listed in the top promoted coin section, subject to payment of a fee. For the avoidance of doubt, the listings shown in the top promoted list are not verified by Coinexplore. We may delete these listings from this section and/or the Website at any time and without prior notice after receipt of a notice request (see clause 4).
    
                    </p>
                </div>
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    7 &nbsp; &nbsp; &nbsp;Payments and Refunds
    
    
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>7.1 &nbsp;&nbsp;Payments
                    </p>
                    <p style={{textAlign:'left'}}>
                    We may provide a complimentary trial or sample of our products or services. The duration of the free trial period, as well as all other information of the offer, will be made available on our Sites. If you want to sample our free choices, please read them thoroughly first. For our Services, we will bill you using Cryptocurrency Assets. By using our paid choices, you agree to pay all charges at the then-current pricing for any products or services purchased by you or others using your billing account, and you permit us to charge your chosen payment provider for any such purchases. You accept to pay using the payment method you've chosen. If you order a product or service that is subject to recurring charges, you consent to us billing your payment method on a recurring basis without your prior agreement for each recurring charge until you cancel the applicable product or service. We reserve the right to fix any inaccuracies or pricing mistakes that it makes, even if payment has already been requested or accepted. We will add sales tax to the purchase price if we believe it necessary. Prices are subject to change at any time.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>7.2 &nbsp;&nbsp;Refund and Return
                    </p>
                    <p style={{textAlign:'left'}}>
                    All sales are final and no refunds shall be issued.
    
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    8 &nbsp; &nbsp; &nbsp;Account
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>8.1
                    </p>
                    <p style={{textAlign:'left'}}>
                    In order to vote on Submitted Coins via the Platform and/or Website, Coinexplore requires the prospective Voter to register and create an account with Coinexplore. To create an Account, the prospective Voter must, among other things, provide an email address and choose a password.
                    any third party nor others that do not have the authority to represent prospective Voter. The prospective Voter guarantees that any third party that uses its Account is authorized to represent the prospective Voter. If the prospective Voter suspects that its Account’s security has been breached, the prospective Voter shall report this immediately to support@coinexplore.io .
    
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>8.2
                    </p>
                    <p style={{textAlign:'left'}}>
                    The prospective Voter is fully responsible for non-disclosure of its Login Credentials and the use of its Account to unauthorized people or entities. The prospective Voter may not allow use of its Account by any third party nor others that do not have the authority to represent prospective Voter. The prospective Voter guarantees that any third party that uses its Account is authorized to represent the prospective Voter. If the prospective Voter suspects that its Account’s security has been breached, the prospective Voter shall report this immediately to <Link to='/' style={{color:'rgb(176, 176, 240)'}}>support@coinexplore.io</Link> . 
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>8.3
                    </p>
                    <p style={{textAlign:'left'}}>
                    The prospective Voter shall only provide correct and complete information when creating an Account on the Platform. The prospective Voter is responsible for the accuracy of the data in their Account.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>8.4
                    </p>
                    <p style={{textAlign:'left'}}>
                    The Voter may request to cancel/terminate its Account by contacting Coinexplore. Coinexplore may need to retain certain information as required by law or as necessary for its business purposes. For more information about the processing of personal data, please see the <span onClick={()=>{setheaderterms('Privacy Policy')}} style={{color:'rgb(176, 176, 240)',padding:"3px",cursor:'pointer'}}>Privacy & Cookie Policy</span>.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>8.5
                    </p>
                    <p style={{textAlign:'left'}}>
                    After receipt of a notice request, Coinexplore may always, at its own discretion, suspend, block, or delete the Account of the Voter. The Voter is not entitled to any compensation by Coinexplore in connection with the suspension, blocking or deletion of the Account by Coinexplore and the Voter hereby waives any right to any compensation of damages.
    
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    9 &nbsp; &nbsp; &nbsp;Disclaimers
    
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>9.1</p>
                    <p style={{textAlign:'left'}}>
                    The Website and/or Platform Content is solely for informational purposes. Nothing on the Website or Platform should be construed as an offering of any currency, coin, crypto, NFT, or other financial instrument, or as investment advice or investment recommendations (such as whether to purchase a currency or instrument) or a recommendation of an investment strategy by Coinexplore.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>9.2</p>
                    <p style={{textAlign:'left'}}>
                    Coinexplore does not verify any Content, including but not limited to cryptocurrency/coin listings, and thus Submitted Coins listed on the Website could potentially be designed to either induce or induce persons to invest money, cryptocurrency, or other valuables that will be irretrievably lost, or to defraud persons in any other way (i.e., Scams). It is the Users' entire obligation to conduct their own research on Submitted Coins. Coinexplore disclaims all culpability for any losses incurred as a result of these Scams. Coinexplore may opt to prohibit or remove Submitted Coins or other Content only after receiving a notice.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>9.3</p>
                    <p style={{textAlign:'left'}}>
                    The Content on the Website and/or Platform is insufficient to constitute the basis of an investment strategy, and the User shall not rely on it as such. No Content on the Platform and/or Website is targeted to a person, entity, or group of individuals' specific needs.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>9.4</p>
                    <p style={{textAlign:'left'}}>
                    Coinexplore makes no predictions about the future or expected value of any Submitted Coin, currency, asset, or other investment. Coinexplore does not promote or suggest any type of investment strategy.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>9.5</p>
                    <p style={{textAlign:'left'}}>
                    The User understands that the Content on the Website and/or the Platform is given to Coinexplore by unrelated third-party suppliers. Coinexplore does not check the Content for accuracy, completeness, or reliability, and does not represent or guarantee the Content's accuracy, completeness, reliability, or any other aspect. Coinexplore may opt to prohibit or remove Content only after receiving a notice.
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>9.6</p>
                    <p style={{textAlign:'left'}}>
                    The Platform and/or Website Content may contain inaccuracies or errors. Coinexplore makes no guarantees about the accuracy, completeness, timeliness, security, availability, or integrity of the Services or any Content, and expressly disclaims all liability for any errors or other inaccuracies in the Services and/or the Content. Coinexplore makes no claims regarding the suitability of the Services or any Content.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>9.7</p>
                    <p style={{textAlign:'left'}}>
                    The Service and Content are provided "as is," with no warranties expressed or implied. Coinexplore makes no warranties or representations that the Website and/or Platform, or any email provided by Coinexplore, are free of malicious components or Scams. Coinexplore expressly disclaims any warranties and conditions, express or implied, with regard to the Website, Platform, Service, and Content.
    
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    10 &nbsp; &nbsp; &nbsp;Limitation of Liability
    
    
                </p>
    
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>10.1</p>
                    <p style={{textAlign:'left'}}>
                    The User agrees to the following limitation of liability with respect to the use of the Platform, Website and Services:
                    </p>
                </div>
                <p style={{marginLeft:'15px',textAlign:"left"}}>a.&nbsp;&nbsp;&nbsp;Coinexplore excludes liability for any damages suffered as a result of the use of the Platform, Website or the Content provided thereon, to the fullest extent permitted by applicable law.
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>b.&nbsp;&nbsp;&nbsp;Coinexplore has no influence on the data and information that is transmitted between Users or the Content on the Platform and/or Website. Therefore, Coinexplore is not liable for this data and information. Coinexplore is also not liable for any data or information that is incomplete or inaccurate as a result of such transmission or that is transmitted wrongly.
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>c.&nbsp;&nbsp;&nbsp;The User understands that all information posted on the Platform and/or Website is the sole responsibility of the person from which such information originated. The User understands that Submitted Coins potentially could be Scams. Voting on and purchasing such coins will be the sole responsibility of the User. The User acknowledges that all the Content accessed by it using the Platform and/or Website is at its own risk and that the User will be solely responsible and liable for any damage or loss to itself or any other party resulting therefrom. Coinexplore will not be liable for any errors or omissions in such information or the Content. Coinexplore cannot guarantee the identity of any other Listers nor Voters with whom the User may interact in the course of using the Platform and/or Website
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>d.&nbsp;&nbsp;&nbsp;If, for whatever reason, Coinexplore is liable for any damage to the User, its liability will be limited to an amount of USD 100 or to the amount the insurance company of Coinexplore disburses in that specific case, whichever is lower.
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>10.2</p>
                    <p style={{textAlign:'left'}}>
                    The User is at all times obliged to perform those acts reasonably required to limit or prevent (possible) loss and damage to one of the other Parties to this Agreement, regardless of whether this Party will be liable for such (possible) loss or damage.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>10.3</p>
                    <p style={{textAlign:'left'}}>
                    A claim will in any case lapse if Coinexplore is not notified in writing of the claim within one (1) year of the discovery of an event or circumstance that gives rise to or could give rise to liability.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>10.4</p> 
                    <p style={{textAlign:'left'}}>
                    Nothing in these Terms will exclude or limit the liability of Coinexplore if this cannot be excluded or limited under the applicable law, such as in the case of intent or gross fault by Coinexplore.
    
                    </p>   
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>10.5</p> 
                    <p style={{textAlign:'left'}}>
                        In no event shall Coinexplore or its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, revenue, or data, arising from your use of the Coinexplore Services, even if we have advised you of the possibility of such damages. Regardless of anything included herein to the contrary, our responsibility to you for any cause whatsoever and regardless of the form of action will at all times be limited to the amount paid, if any, by you to Coinexplore Services during the three (3) months preceding such cause of action arising. Certain state laws prohibit the exclusion or restriction of certain damages, as well as limitations on implied warranties. If these laws apply to you, you may be exempt from some or all of the foregoing disclaimers or limitations, and you may have additional rights.
    
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    11 &nbsp; &nbsp; &nbsp; Indemnification
    
    
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>11.1</p> 
                    <p style={{textAlign:'left'}}>
                    Users, particularly Listers, agree to indemnify, defend, and hold Coinexplore harmless from any third-party claims, liability, damages, and/or costs (including, but not limited to, attorney fees) arising from use of the Services, Platform, and/or Website, violation of the Terms, or infringement or violation of any intellectual property or other right of any person or entity by Users.
    
                    </p>
    
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>11.2</p> 
                    <p style={{textAlign:'left'}}>
                    Coinexplore retains the right to assume sole defense and control of any issue that would otherwise be subject to indemnification by the User, in which case the User will help and cooperate with Coinexplore in asserting any applicable defenses.
    
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    12 &nbsp; &nbsp; &nbsp; Intellectual Property
    
    
    
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>12.1</p> 
                    <p style={{textAlign:'left'}}>
                    Coinexplore is the exclusive owner of all intellectual property rights vesting in and relating to the Services and the Platform, Website, Coinexplore Content if created by Coinexplore), documents and materials related thereto, such as – but not limited to – patents, patent applications, trademarks, trademark applications, database rights, service marks, trade names, copyrights, trade secrets, licenses, domain names, know-how, property rights and processes (Intellectual Property Rights).
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>12.2</p> 
                    <p style={{textAlign:'left'}}>
                    Coinexplore grants the User a non-transferrable, non-sublicensable, non-exclusive and revocable license intended for fair use of the Coinexplore Content, Services, the Website and the Platform.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>12.3</p> 
                    <p style={{textAlign:'left'}}>
                    The User will not reproduce, resell, or distribute the above license, unless Coinexplore explicitly has given prior written consent to do so.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>12.4</p>
                    <p style={{textAlign:'left'}}>
                    The User guarantees to be the exclusive owner of all Intellectual Property Rights to the information that the User shares with Coinexplore or on the Platform and/or Website. Coinexplore will be granted a non-exclusive license by the User to use any materials provided by the User to Coinexplore. Coinexplore may also use this information in communications and advertisements in all media for the range offered by Coinexplore. The User guarantees to be authorized to grant this license to Coinexplore, without infringing applicable legislation and regulations or the rights of third parties.
    
                    </p>
                </div>
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    13 &nbsp; &nbsp; &nbsp; Miscellaneous
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>13.1</p>
                    <p style={{textAlign:'left'}}>
                    No omission or delay on the side of Coinexplore in exercising any right, power, or remedy under these Terms shall affect, impair, or be regarded as a waiver of such right, power, or remedy. Any single or partial exercise of such right, power, or remedy shall not prevent any subsequent or future exercise of such right, power, or remedy, or the exercise of any other right, power, or remedy.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>13.2</p>
                    <p style={{textAlign:'left'}}>
                    Coinexplore reserves the right to unilaterally modify or replace these Terms at any time if Coinexplore finds this reasonably necessary and useful.
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>13.3</p>
                    <p style={{textAlign:'left'}}>
                    If any term of these Terms is found to be unenforceable or invalid, it will be restricted or removed to the greatest degree possible so that the remainder of these Terms remain in full force and effect and remain enforceable. Any such unenforceable or invalid provision shall be substituted or deemed to be replaced by a valid and enforceable provision, the meaning of which shall be as near to the intent of the invalid provision as practicable
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>13.4</p>
                    <p style={{textAlign:'left'}}>
                    Unless otherwise specified, any notices to Coinexplore must be sent via email to the address mentioned in the contact information below. Any notices to the User shall be sent to the email address supplied during the registration process, or to any other address specified by either party. Unless the sending party is told that the email address is invalid, notice is presumed to be given twenty-four (24) hours after the email is sent. Coinexplore may also send notices via conventional mail.
    
                    </p>
                </div>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>13.5</p>
                    <p style={{textAlign:'left'}}>
                    All provisions of these Terms that, by their nature, should survive termination will do so, including, but not limited to, ownership provisions, warranty disclaimers, indemnification, and liability limitations.
    
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    14 &nbsp; &nbsp; &nbsp; Contribution License
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>14.1</p>
                    <p style={{textAlign:'left'}}>
                    By posting Contributions to any part of the Sites, or making them accessible to the Sites by linking your account to any of your social network accounts, you automatically grant, and you represent and warrant that you have the right to grant, to Coinexplore an unrestricted, unconditional, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part) and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, such Contributions, and to grant and authorize sublicenses of the foregoing. The use and distribution may take place in any media format and via any media channel. This use and distribution license extends to any form, media, or technology now known or later developed, and includes our use of your name, company name, and franchise name, as applicable, as well as any trademarks, service marks, trade names and logos, personal and commercial photographs you give. We makes no claim to ownership of your Contributions; rather, subject to the rights given to us in this Agreement, you retain complete ownership of all of your Contributions including any intellectual property rights or other proprietary rights associated with your Contributions.We will never use your contribution in a way that violates your rights and will always treat your personal information legally and with your permission.
    
                    </p>
                    <p style={{textAlign:'left',marginTop:'15px'}}>
                    In our sole and absolute discretion, we reserve the right to I edit, redact, or otherwise change any Contributions, (ii) re-categorize any Contributions to place them in more appropriate locations, or (iii) prescreen or delete any Contributions that are determined to be inappropriate or otherwise in violation of this Agreement.By uploading your Contributions to the Sites, you hereby grant Coinexplore a personal, limited, non-transferable, perpetual, non-exclusive, royalty-free, fully-paid license to access, download, print, and otherwise use your Contributions for internal purposes only, and not for distribution, transfer, sale, or commercial exploitation of any kind.
    
    
                    </p>
                </div>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    15 &nbsp; &nbsp; &nbsp; Submissions
    
                </p>
                <p style={{textAlign:'left',marginTop:'15px'}}>
                You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information about the Sites or the Coinexplore Services provided by you to Coinexplore are non-confidential, and Coinexplore (or any designee of Coinexplore) shall be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you.
    
                </p>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    16 &nbsp; &nbsp; &nbsp; Prohibited Activities
                </p>
                <p style={{textAlign:'left',marginTop:'15px'}}>
                You may not use or use the Sites for any purpose other than those specified by Coinexplore. The Sites may not be used for any commercial purposes other than those expressly sponsored or permitted by Coinexplore. The following activities are prohibited, but are not limited to:
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>a.&nbsp;&nbsp;&nbsp;
                Attempting to circumvent any Sites security measures designed to prevent or restrict access to the Sites or any element of the Sites
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>b.&nbsp;&nbsp;&nbsp;
                Attempting to impersonate another user or person, or using another user's login, is an illegal or tortious act.
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>c.&nbsp;&nbsp;&nbsp;
                Deciphering, decompiling, disassembling, or reverse engineering any of the software that comprises or forms a part of the Sites
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>d.&nbsp;&nbsp;&nbsp;
                Removing the copyright or other proprietary rights notice from any Site's content 
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>e.&nbsp;&nbsp;&nbsp;
                Engaging in any automated use of the system, such as data mining, robots, or similar data gathering and extraction technologies
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>f.&nbsp;&nbsp;&nbsp;
                Using or launching, developing, or distributing any automated system, including, without limitation, any spider, robot (or "bot"), cheat utility, scraper, or offline reader that accesses the Sites, or using or launching any unauthorized script or other software, except as a result of standard search engine or Internet browser usage.
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>g.&nbsp;&nbsp;&nbsp;
                Harassing, harassing, intimidating, or threatening any of Coinexplore employees or agents involved in providing any aspect of our Services to you 
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>h.&nbsp;&nbsp;&nbsp;
                Interfering with, disrupting, or imposing an unreasonable strain on the Sites or the networks or services connected to the Sites
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>i.&nbsp;&nbsp;&nbsp;
                Making any illegal use of our Services, such as collecting user usernames and/or email addresses for the purpose of sending unsolicited email, or creating user accounts through automated means or under false pretenses.
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>j.&nbsp;&nbsp;&nbsp;
                Using the Sites in a way that violates any and all applicable laws and regulations
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>k.&nbsp;&nbsp;&nbsp;
                Using our Services in any attempt to compete with Coinexplore or to provide services as a service bureau
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>l.&nbsp;&nbsp;&nbsp;
                Using any information obtained from the Sites to harass, abuse, or injure someone else
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>m.&nbsp;&nbsp;&nbsp;
                Attempting to learn sensitive account information such as passwords by tricking, deceiving, or misleading the Coinexplore and other users
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>n.&nbsp;&nbsp;&nbsp;
                Systematic retrieval of data or other content from the Sites for the purpose of creating or compiling, directly or indirectly, a collection, compilation, database, or directory without explicit authorization from Coinexplore is prohibited.
    
                </p>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    17 &nbsp; &nbsp; &nbsp; Site Management
                </p>
                <p style={{textAlign:'left',marginTop:'15px'}}>
                Coinexplore reserves the right but does not have the obligation to:
    
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>a.&nbsp;&nbsp;&nbsp;
                Monitor the Sites for violations of this Agreement; Take appropriate legal action against anyone who, in Coinexplore's sole discretion, violates this Agreement, including reporting such user to law enforcement authorities;
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>b.&nbsp;&nbsp;&nbsp;
                In Coinexplore's sole discretion and without limitation, refuse, restrict access to or availability of, or disable (to the extent technologically feasible) any user's contribution or any portion thereof that may violate this Agreement.
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>c.&nbsp;&nbsp;&nbsp;
                In Coinexplore's sole discretion and without limitation, notice, or liability, remove from the Sites or otherwise disable all files and content that are excessive in size or are in any way burdensome to Coinexplore's systems;
                </p>
                <p style={{marginLeft:'15px',textAlign:"left"}}>d.&nbsp;&nbsp;&nbsp;
                Otherwise manage the Sites in a manner designed to protect Coinexplore's and others' rights and property and to facilitate the proper functioning of the Sites.
    
                </p>
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                    18 &nbsp; &nbsp; &nbsp; Term And Termination
    
                </p>
                <div>
                    <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>18.1</p>
                    <p style={{textAlign:'left'}}>
                    We may modify this Agreement from time to time. Any and all changes to this Agreement will be posted on the Sites and revisions will be indicated by date. You agree to be bound to any changes to this Agreement when you use the Services after any such modification becomes effective.
    
                    </p>
                    <p style={{textAlign:'left',marginTop:'20px'}}>
                    Coinexplore may also, in its discretion, choose to alert all users with whom it maintains email information of such modifications by means of an email to their most recently provided email address. It is therefore important that you regularly review this Agreement and keep your contact information current in your account settings to ensure you are informed of changes. You agree that you will periodically check the Sites for updates to this Agreement and you will read the messages we send you to inform you of any changes. Modifications to this Agreement shall be effective after posting.
    
                    </p>
                    <p style={{textAlign:'left',marginTop:'20px'}}>
                    Coinexplore reserves the right at any time to modify or discontinue, temporarily or permanently, the Services (or any part thereof) with or without notice. You agree that we shall not be liable to you or to any third party for any modification, suspension or discontinuance of our Services.
    
                    </p>
                    <div>
                        <p style={{textAlign:'left',marginBottom:'10px',marginTop:'20px'}}>18.2 &nbsp;&nbsp;&nbsp;Corrections
                        </p>
                        <p style={{textAlign:'left'}}>
                        Occasionally there may be information on the Sites that contains typographical errors, inaccuracies or omissions that may relate to service descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies or omissions and to change or update the information at any time, without prior notice.
    
                        </p>
                    </div>
    
                </div>
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                    <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                        19 &nbsp; &nbsp; &nbsp; Queries, Remarks and Suggestions
                    </p>
                    <p style={{textAlign:'left',marginTop:'20px'}}>
                    Coinexplore wants to offer its Users optimum Services. For any queries, remarks, or suggestions, please contact Coinexplore by sending an email to contact@coinexplore.io.
    
                    </p>
                    <p style={{textAlign:'left',marginTop:'20px'}}>
                    In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at support@coinexplore.io.
                    </p>            
    
            </div>
            <div style={{margin:'30px auto',boxSizing:'border-box'}}>
                    <p style={{textAlign:'left',fontSize:'25px',fontFamily: "NexaTextBold"}}>
                        20 &nbsp; &nbsp; &nbsp;  Intellectual Property Rights
                    </p>
                    <p style={{textAlign:'left',marginTop:'20px'}}>
                    The content on the Sites (“Coinexplore Content”) and the trademarks, service marks and logos contained therein (“Marks”) are owned by or licensed to Coinexplore, and are subject to copyright and other intellectual property rights under United States and foreign laws and international conventions.
                    </p>
                    <p style={{textAlign:'left',marginTop:'20px'}}>
                    Coinexplore Content, includes, without limitation, all source code, databases, functionality, software, Sites' designs, audio, video, text, photographs and graphics. All Coinexplore graphics, logos, designs, page headers, button icons, scripts and service names are registered trademarks, common law trademarks or trade dress of Coinexplore in the United States and/or other countries.
    
                    </p>
                    <p style={{textAlign:'left',marginTop:'20px'}}>
                    Coinexplore trademarks and trade dress may not be used, including as part of trademarks and/or as part of domain names, in connection with any product or service in any manner that is likely to cause confusion and may not be copied, imitated, or used, in whole or in part, without the prior written permission of the Coinexplore.
                    </p>
                    <p style={{textAlign:'left',marginTop:'20px'}}>
                    Coinexplore Content on the Sites is provided to you “AS IS” for your information and personal use only and may not be used, copied, reproduced, aggregated, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the respective owners. Provided that you are eligible to use the Sites, you are granted a limited license to access and use the Sites and the Coinexplore Content and to download or print a copy of any portion of the Coinexplore Content to which you have properly gained access solely for your personal, non-commercial use. Coinexplore reserves all rights not expressly granted to you in and to the Sites and Coinexplore Content and Marks.
    
                    </p>
    
            </div>
            <GoToTop />
        </div>
      )
    }
    

export default TermsHolder