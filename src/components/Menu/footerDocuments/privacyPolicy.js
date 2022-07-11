import { Link } from 'react-router-dom'
import React, {useContext} from 'react'
import { Statecontext } from '../../CointoviewContext'
import GoToTop from '../../Gototop'
function PrivacyPolicy() {
    const [headerterms,setheaderterms] = useContext(Statecontext).headerterms
  return (
    <div style={{padding:'20px',height:'100%',fontFamily:'NexaTextLight',overflow:"hidden"}}>
        <div style={{marginBottom:"50px"}}>
            <p style={{textAlign:'left',fontSize:'30px',fontFamily: "NexaTextBold"}}>Privacy Policy</p>
            <div style={{marginTop:'20px'}}>
                <p style={{textAlign:'left',margin:'20px auto'}}>Coinexplore ("we", "our", or "us") can be reached at <Link to='/'>support@coinexplore.io</Link>; one of our top objectives is protecting our visitors' privacy. Using Coinexplore you, as a User, can submit and promote your cryptocurrency coins/tokens. You can also vote for your favorite coins/tokens and check the most voted for coins/tokens on the Platform. In addition, you can create and share a Watchlist of your favorite coins/tokens. You can access our Platform via our Website: coinexplore.iot. The use of the Platform and our Website collectively: our Services.
                </p>
                <p style={{textAlign:'left',margin:'20px auto'}}>This is our Privacy Policy. In this document we explain what kind of Personal Data we collect via our Services. We also explain what role we have in the processing of Personal Data, how long we retain them and what rights you have as a data subject. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
                <p style={{textAlign:'left',margin:'20px auto'}}>This Privacy Policy only applies to our online activities and is applicable to visitors to our website in relation to information shared and/or collected in Coinexplore. This policy does not apply to any information gathered offline or through channels other than this website.
                </p>
                <p style={{textAlign:'left',margin:'20px auto'}}>By accessing or using our Site (or any of our Site Services), listing your event on our Site, or signing up for any of our services or products, you hereby accept these Website Terms of Use, our Privacy Policy, Listing Terms and Conditions, Coinexplore Disclaimer, and any other terms of service that may be implemented from time to time in relation to our Site (collectively, the "Agreement").</p>
                <p style={{textAlign:'left',margin:'20px auto'}}>Coinexplore maintains the right, in its sole discretion, to alter any part of the Agreement (including this Terms of Use) at any time without prior notice to you, and you acknowledge that it is your obligation to check for updated terms of the Agreement on our Website on a regular basis. In any case, by continuing to use any portion of our Site and/or any of our Site Services, you will be deemed to have accepted all revisions to the Agreement that Coinexplore may adopt from time to time. If you do not want to be bound by the Agreement, do not use any component of the Site or Site Services, and immediately discontinue any access to and use of our Site, Site Services, products, and services.
                </p>
            </div>
            <div style={{marginTop:'50px'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>1 &nbsp;&nbsp;&nbsp;Legal Capacity & Access
                </p> 
                <div style={{marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>1.1</p>  
                    <p style={{textAlign:'left',margin:'10px auto'}}>By accessing our Site and continuing to access our Site and/or Site Services, you represent that you are above 18 years of age, and legally capable of entering into and being bound by contracts, including but not limited to the Agreement.</p>
                    <p style={{textAlign:'left',margin:'10px auto'}}>We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Coinexplore does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to <Link to='/contactUs' style={{backgroundColor:'yellow',color:'black',padding:'3px',cursor:'pointer'}}>contact us</Link> immediately and we will do our best efforts to promptly remove such information from our records.</p>
                </div> 
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>1.2</p>  
                    <p style={{margin:'10px auto'}}>In the event that you are accessing our Site and/or Site Services on behalf of any incorporation, partnership, association, organization or any other entity type (“Entity”), your continued access of our Site and/or Site Services shall constitute your representation to us that you have been duly authorized by such Entity to use our Site and our Site Services, perform any transactions or activities thereon, and to therefore bind your Entity to the Agreement and to any such transactions or activities that you have performed. Accordingly, when the term “you” is used herein this Website Terms of Use, “you” shall refer not only to you the actual user as an individual, but also the Entity that you are representing, and therefore both you and the Entity are jointly and severally bound under the Agreement. Accordingly, you also hereby undertake that the Entity which you represent is capable of and agreeable to being bound by the Agreement.</p>
                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>1.3</p>  
                    <p style={{margin:'10px auto'}}>In the event that you submit a form or query to us, or you register with us an account (whether in your personal capacity or on behalf of the Entity that you represent), you undertake to ensure that all information you provide to us thereto registration is accurate and updated, and will promptly notify us via email to support@coinexplore.io in the event of any changes to such information.
                    </p>
                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>1.4</p>  
                    <p style={{margin:'10px auto'}}>In the event that you register an account with us, you are fully responsible for ensuring that your account login and passwords are kept strictly confidential and secure, as all activities conducted via your account shall be deemed as all acts duly performed and/or authorized by you without the requirement for any further verifications on our part. Should you become aware of any security breaches or unauthorized access to your account, you must notify us immediately via email to support@coinexplore.io. Nonetheless, you agree that you will be fully responsible for all acts and transactions (including but not limited to postings, Activity Uploads (as defined in the <span onClick={()=>{setheaderterms('Terms & Conditions')}} style={{backgroundColor:'yellow',color:'black',padding:'3px',cursor:'pointer'}}>Terms & Conditions</span>), listings, and usage of any of our Site Services that take place via your account prior to your aforesaid notification of security breach to us, and you undertake to honor and see to completion all such acts and transactions that has happened under your account (regardless of whether you have specifically authorized such acts or transactions).
                    </p>
                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>1.5</p>  
                    <p style={{margin:'10px auto'}}>Should you (whether directly by yourself or indirectly via your request to us) upload, post, publish, or transmit any information on or via our Site, or you communicate with any other users of our Site, you agree to be fully responsible for all such posts and communications. Accordingly, you undertake to only use the Site in a legal and considerate manner, not to misuse or abuse the Site or its other users, including but not limited to not causing any defamation, harassment, sedition, collecting data of other users for your own purposes, and introducing virus, trojans or hacks. In the event that you misuse or abuse the Site, we shall be fully entitled to suspend or ban your account, and/or remove your information from our Site without any prior notice or liability to you. Nonetheless, you agree that we shall not be liable for any posts or communications by third parties that offend you, although we will sincerely look into any complaints in relation to such posts or communications that you communicate to us in writing.
                    </p>
                </div>
            </div> 
            <div style={{marginTop:'50px'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>2 &nbsp;&nbsp;&nbsp;Updates & Modifications
                </p>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>2.1</p>  
                    <p style={{margin:'10px auto'}}>You agree that it is your responsibility to regularly check our Website Terms of Use, our Privacy Policy, Terms & Conditions to keep yourself updated of any changes or modifications.</p>
                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>2.2</p>  
                    <p style={{margin:'10px auto'}}>You agree that the terms of our Agreement may be amended, modified, varied or revised from time to time without any prior notice to you, and your continued use of our Site and/or Site Services following any such changes constitutes your agreement to be fully bound by our amended terms. The date that appears at the commencement of each relevant terms and conditions constitutes the latest version of such terms and conditions that is in force and binding on you as part of the Agreement.
                    </p>
                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>2.3</p>  
                    <p style={{margin:'10px auto'}}>You agree that we are entitled to howsoever modify, vary, expand, suspend, interrupt, terminate, cancel or discontinue any services or products or accessibility to any feature or part of our Site and/or Site Services at any time in our sole discretion without any prior notice or liability to you, even if you have a registered account with us.
                    </p>
                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>2.4</p>  
                    <p style={{margin:'10px auto'}}>Certain of our Site Services incorporate or require the use of third party products and services. Therefore your use of such third party products and services will be subject to the respective third party’s terms and conditions and privacy policies, which you agree is your responsibility to regularly review from time to time to determine their acceptability to you before you use such third party products and services.</p>
                </div>
            </div> 
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>3 &nbsp;&nbsp;&nbsp;Information We Collect
                </p>
                <p style={{margin:"15px auto"}}>When you use our platform, Apps, or associated tools or services, we may collect the following kinds of personal information from you as needed:
                </p>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>3.1 &nbsp;&nbsp;&nbsp;Information We Collect from You
                    </p>
                    
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>If you create an account on the Platform, we process the following Personal Data:
                        </p>
                        <ul style={{marginLeft:'30px'}}>
                          <li>Name;</li>
                          <li>E-mail address;</li>
                          <li>Password;</li>
                          <li>Coins/tokens you added to your Watchlist;</li>
                          <li>Coins/tokens you promoted or voted for on the Platform.</li>
                        </ul>
                    </div>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>If you promote a token/coin on the Platform or use Banner Ad Spots, we process the following Personal Data (Contact/payment details):
                        </p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>(Company) name,</li>
                            <li>E-mail address and other necessary contact information (e.g. phone number and (company) address)
                            </li>
                            <li>Invoice details
                            </li>
                            <li>Bank account number, IBAN and BIC code, Crypto wallet address
                            </li>
                        </ul>
                    </div>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>If you engage with us via one of our email addresses, social media channels or Telegram channel, we process the following Personal Data:</p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>The contact information you share when contacting us (e.g. your name, e-mail address, social media username, bio, Telegram name) and</li>
                            <li>The content of the correspondence or post you share with us.</li>
                        </ul>
                        <p>If you subscribe to our newsletter:</p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Name</li>
                            <li>E-mail address</li>
                        </ul>
                    </div>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>In every newsletter there is a link via which you can unsubscribe.</p>
                    </div>
                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>3.2 &nbsp;&nbsp;&nbsp; Information We Collect from Third Parties</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>Information we receive about you from third parties such as our business and affiliate partners and authorized service providers which may include:</p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Updated contact information</li>
                            <li>Demographic information</li>
                            <li>Interests</li>
                            <li>Purchase history</li>

                        </ul>
                        <p style={{margin:'10px auto'}}>All of which we may add to your account or profile and use for market research and analysis.</p>

                    </div>

                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>3.3 &nbsp;&nbsp;&nbsp;Information We Collect Automatically</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>When you install any of our apps or use our platform, we automatically collect the following types of information from your device:</p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>IP address</li>
                            <li>Device type</li>
                            <li>Unique device identification numbers</li>
                            <li>Internet browser-type (such as Firefox, Safari, Chrome, and Internet Explorer)</li>
                            <li>Internet Service Provider</li>
                            <li>Operating System</li>
                            <li>Mobile carrier</li>
                            <li>How your device has interacted with our online services, including the pages accessed, links clicked, trips viewed, and features used, along with associated dates and times</li>
                            <li>Details of any referring website or exit pages, as well as general geographic location (such as at the country or city-level)</li>
                            
                        </ul>
                        <p style={{margin:'10px auto'}}>All of which we may add to your account or profile and use for market research and analysis.</p>
                    </div>
                </div>
                <div style={{textAlign:'left',marginTop:'15px'}}>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>3.4 &nbsp;&nbsp;&nbsp;Mandatory information</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>When you engage our Services, it may be legally or contractually required that you provide us with certain Personal Data, as indicated. For example, we need your name, email address and password to create an account for you. Where you do not provide us with such information, this will usually imply that we will not be able to provide you with specific Services or perform part of our agreement with you.</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>4 &nbsp;&nbsp;&nbsp;How We Use Your Information</p>
                <p style={{margin:"15px auto"}}>We use your personal information for various purposes described below, which depend on the site you visit or the app you use.</p>

                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>4.1 &nbsp;&nbsp;&nbsp;Use of Online Sites, Apps, and Services</p>
                    <div style={{margin:'15px auto'}}>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Register your account and provide you with access to your account and our Platform;</li>
                            <li>Allow you to create and share (via a public link) a Watchlist with your favorite coins and tokens;</li>
                            <li>Allow you to vote for coins/tokens.</li>
                            <li>We may process these Personal Data to perform our contract with you, i.e. with respect to the use of the Platform.</li>
                            <li>Create, maintain, and update user accounts on our platform and authenticate you as a user</li>
                            <li>Handle, check and administer payments from or to you/your company;</li>

                        </ul>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>4.2 &nbsp;&nbsp;&nbsp;Communications and Marketing</p>
                    <div style={{margin:'15px auto'}}>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Respond to your posts and comments and to answer/handle your questions and feedback;</li>
                            <li>Support you in using our Services;</li>
                            <li>Improve our Services as a result of the posts, comments, questions and feedback received from you.</li>
                            <li>We may process this data, because you voluntarily made such information public and because we have a legitimate interest to contact and assist you based on your input and to improve our Services as a result of that.</li>
                            <li>Market our products and services, optimize such marketing to be more relevant to you, and measure and analyze the effectiveness of our marketing and promotions</li>
                            <li>Administer promotions like contests, sweepstakes, and similar giveaways</li>
                            <li>Send you our newsletter</li>
                            <li>Keep you informed on all our (future) Services.</li>
                            <li>We may process these data, if you gave us your consent to do so (by subscribing via our Website).</li>
                            <li>We may send our Users – who paid for our Services – newsletters, because we have a legitimate interest to do so.</li>

                        </ul>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>4.3 &nbsp;&nbsp;&nbsp;Other Business Purposes and Compliance</p>
                    <div style={{margin:'15px auto'}}>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Conduct surveys, market research, and data analytics</li>
                            <li>Maintain, improve, research, and measure the effectiveness of our sites and apps, activities, tools, and services</li>
                            <li>Monitor or record calls, chats, and other communications with our customer service team and other representatives, as well as platform communications between or among partners and users for quality control, training, dispute resolution, and as described in this Privacy Policies</li>
                            <li>Create aggregated or otherwise anonymized or de-identified data, which we may use and disclose without restriction where permissible</li>
                            <li>Promote security, verify identity of our customers, prevent and investigate fraud and unauthorized activities, defend against claims and other liabilities, and manage other risks</li>
                            <li>Comply with applicable laws, protect our and our users’ rights and interest, defend ourselves, and respond to law enforcement, other legal authorities, and requests that are part of a legal process</li>
                            <li>Comply with applicable security and anti-terrorism, anti-bribery, customs and immigration, and other such due diligence laws and requirements</li>
                            <li>Operate our business using lawful business purposes and as permitted by law</li>
                            <li>Maintain our list of accounts receivable and outstanding invoices;</li>
                            <li>Included in our administration on behalf of the tax authorities.</li>
                            <li>We may process these data, because this is necessary to perform our contract with you or the company you work for. In the latter case, we have a legitimate interest to process Personal Data about you in order to effectively perform the contract with the company you work for.</li>
                            <li>We may also process these data because we are legally obligated to administer for (and share some of these data with) tax authorities</li>

                        </ul>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>4.4 &nbsp;&nbsp;&nbsp;Lawful Bases for Processing</p>
                    <div style={{margin:'15px auto'}}>
                        <ul style={{marginLeft:'30px'}}>
                            <li>We will collect personal information from you only (i) where the personal information is necessary to perform a contract with you (e.g.,  process payments, or create an account at your request), (ii) where the processing is in our legitimate interests and not overridden by your rights (as explained below), or (iii) where we have your consent to do so (e.g., sending you marketing communications where consent is required). In some cases, we will have a legal obligation to collect personal information from you such as where it is necessary to use your transaction history to complete our financial and tax obligations under the law.</li>
                            <li>If we ask you to provide personal information to comply with a legal requirement or to perform a contract with you, we will make this clear at the relevant time and advise you whether the provision of your personal information is mandatory or not (as well as of the possible consequences if you do not provide your personal information).</li>
                            <li>Certain countries and regions allow us to process personal information on the basis of legitimate interests. If we collect and use your personal information in reliance on our legitimate interests (or the legitimate interests of any third-party), this interest will typically be to operate or improve our platform and communicate with you as necessary to provide our services to you, for security verification purposes when you contact us, to respond to your queries, undertaking marketing, or for the purposes of potentially detecting or preventing illegal activities. </li>
                            <li>We may in some cases use automated decision-making, for example, in relation to assessing fraudulent transactions or suspicious activity on our site. As part of this processing, automated decisions may be made by putting your personal information into a system and the decision is calculated using automatic processes. If you pose a fraud risk, this may affect your ability to book on our site. You may have rights in relation to automated decision making, including the ability to request a manual decision-making process instead or contest a decision based solely on automated processing. If you want to know more about your data protection rights, please see the Your Rights and Choices section below.</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>5 &nbsp;&nbsp;&nbsp;Sharing Information</p>
                <div>
                    <p style={{margin:'10px auto'}}>We process Personal Data. Personal Data means all information by which a person can be directly or indirectly identified. Under the General Data Protection Regulation (GDPR) we are the so-called Controller of your Personal Data. If you have questions about the processing of your Personal Data, you can always contact us through the contact details listed at the bottom of this Privacy Policy.</p>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}> 5.1&nbsp;&nbsp;&nbsp;Third-Party Service Providers</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>We share personal information with third-parties in connection with the delivery of services to you and the operation of our business (for example, to provide credit card processing, customer service, business analytics, and fraud prevention and compliance services, and to serve you with advertising tailored to your interests). These third-party service providers are required to protect personal information we share with them and may not use any directly identifying personal information other than to provide services we contracted them for. They are not allowed to use the personal information we share for purposes of their own direct marketing (unless you have separately consented with the third-party under the terms provided by the third-party).</p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Processors
                                <ul style={{marginLeft:'30px'}}>
                                    <li>We use third parties (Processors) who support us in providing our Services. Within this context these Processors receive Personal Data from us which they process on our behalf. For instance, we use Processors for building and maintaining our Website and Platform, sending our newsletters and hosting our data.</li>
                                    <li>These Processors may only use or disclose the data collected and processed by us within the scope of our instructions to them and under no circumstances for other purposes. We enter into a data processing agreement with all of our Processors.</li>
                                </ul>
                            </li>
                            <li>We may also share your Personal Data with external controllers in the following cases:
                                <ul style={{marginLeft:'30px'}}>
                                    <li>Payment provider: Payments for our paid Services will be processed by [Mollie/Adyen/other] and the specific third-party payment provider that you choose, such as Visa, MasterCard, Maestro, PayPal, or Apple Pay.</li>
                                    <li>Tax authorities: We are legally obliged to include (some of) the Personal Data in our financial administration, which must be shared with the national tax authority. The tax authority will process these Personal Data in accordance with its own privacy policies.</li>
                                </ul>
                            </li>
                        </ul>
                        <p style={{margin:'10px auto'}}>If you join our Telegram channel, your username and the content of the correspondence is also shared with all other members of the Telegram channel.</p>
                        <p style={{margin:'10px auto'}}>Apart from the above, we will not share your Personal Data with third parties, unless we are legally obliged to do so.</p>
                    </div>
                    
                    
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}> 5.2&nbsp;&nbsp;&nbsp;Business Partners and Offers</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>If we promote a program or offer a service or product in conjunction with a third-party business partner, we will share your information with that partner to assist in marketing or to provide the associated product or service.  In most of those cases, the program or offer will include the name of the third-party business partner, either alone or with ours, or you will be redirected to the website of that business with notice. An example of such a business-partner relationship would be a third-party loyalty program for which you could earn points by completing a booking on our platform.</p>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}> 5.3&nbsp;&nbsp;&nbsp;Other Third-Parties</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>When you access certain features like Facebook’s “Like” button or a single sign-on that allows you to login with your social media credentials to our online services, you will share information with the third-party, like a social media company, such as the fact that you have visited or interacted with us. In the European Economic Area (EEA), Switzerland, and United Kingdom (UK) we will not load social media sharing or sign-on buttons on our website unless and until you accept our use of cookies and similar technologies. For more information, see our Cookie Policies, included in this Privacy Policies. The third-party provider may combine this information with other information they have about you. The personal information shared will be governed by the third-party provider’s privacy policy (including any personal information we may access via the third-party provider). The third-party providers should inform you about how you can modify your privacy settings on their site.</p>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}> 5.4&nbsp;&nbsp;&nbsp;Legal Rights and Obligations</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>We may disclose your personal information to enforce our policies, or where we are permitted (or believe in good faith that we are required) to do so by applicable law, such as in response to a request by a law enforcement or governmental authority, in connection with actual or proposed litigation, or to protect and defend our property, people and other rights or interests. We may also share your personal information pursuant to a subpoena or other legal request, or as necessary to remit certain taxes in the course of processing payments as required by law or legal process.</p>
                    </div>
                </div>
                
            </div>
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>6 &nbsp;&nbsp;&nbsp;How We Store Your Information</p>
                <div>
                    <p style={{margin:'10px auto'}}>We will retain your personal information in accordance with all applicable laws, for as long as it may be relevant to fulfill the purposes set forth in this Privacy Policies, unless a longer retention period is required or permitted by law. We will deidentify, aggregate, or otherwise anonymize your personal information if we intend to use it for analytical and other purposes or trend analysis over longer periods of time.
                    The criteria we use to determine our retention periods include:
                    </p>
                    <ul style={{marginLeft:'30px'}}>
                        <li>The duration of our relationship with you, including any open accounts you may have with Coinexplore companies, or recent bookings or other transactions you have made on our platform</li>
                        <li>Whether we have a legal obligation related to your personal information, such as laws requiring us to keep records of your transactions with us</li>
                        <li>Whether there are any current and relevant legal obligations affecting how long we will keep your personal information, including contractual obligations, litigation holds, statutes of limitations, and regulatory investigations</li>
                    </ul>
                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>7 &nbsp;&nbsp;&nbsp;Third party websites</p>
                <div>
                    <p style={{margin:'10px auto'}}>You may find advertising or other (hyper)links on our Website that link to the websites, products and services of partners, suppliers, advertisers, sponsors, licensors or other third parties. We do not control the content or the links that appear on these websites and we are not responsible for the practices employed by websites linked to or from our Website. In addition, these websites, products and services, including their content and links, may be constantly changing. Browsing and interaction on any other website, including websites that are linked to or from our Website, are subject to the terms and policies of that website.</p>
                    <p style={{margin:'10px auto'}}>Coinexplore Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
                </div>
            </div>
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>8 &nbsp;&nbsp;&nbsp;Security</p>
                <div>
                    <p style={{margin:'10px auto'}}>We want you to feel confident about using our platform and all associated tools and services, and we are committed to taking appropriate steps to protect the information we collect. While no company can guarantee absolute security, we do take reasonable steps to implement appropriate physical, technical, and organizational measures to protect the personal information that we collect and process.</p>
                </div>
            </div>
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>9 &nbsp;&nbsp;&nbsp;Your Rights and Choices</p>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}> 9.1</p>
                    <div style={{margin:'15px auto'}}>
                        <ul style={{marginLeft:'30px'}}>
                            <li>You can control our use of certain cookies by following the guidance in our Cookie Policies in this Privacy Policies.</li>
                            <li>You can access, amend or update the accuracy of your information at any time by either logging into your account or contacting us</li>
                            <li>If you no longer wish to receive marketing and promotional emails, you may unsubscribe by clicking the ‘unsubscribe’ link in the email. You can also log into your account to change communication settings (not available for all Coinexplore companies) or contact us here. Please note that if you choose to unsubscribe from or opt out of marketing emails, we may still send you important transactional and account-related messages from which you will not be able to unsubscribe</li>
                            <li>For our mobile apps, you can view and manage notifications and preferences in the settings menus of the app and of your operating system</li>
                            <li>If we are processing your personal information on the basis of consent, you may withdraw that consent at any time by contacting us. Withdrawing your consent will not affect the lawfulness of any processing that occurred before you withdrew consent and it will not affect our processing of your personal information that is conducted in reliance on a legal basis other than consent</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}> 9.2</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:"10px auto"}}>Certain countries and regions provide their residents with additional rights relating to personal information. These additional rights vary by country and region and may include the ability to:</p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Request a copy of your personal information</li>
                            <li>Request information about the purpose of the processing activities</li>
                            <li>Delete your personal information</li>
                            <li>Object to our use or disclosure of your personal information</li>
                            <li>Restrict the processing of your personal information</li>
                            <li>Opt-out of the sale of your personal information</li>
                            <li>Port your personal information</li>
                            <li>Request information about the logic involved in our automated decision-making used in our fraud prevention practices and the result of such decisions</li>
                        </ul>
                        <p style={{margin:'10px auto'}}>For questions about privacy, your rights and choices, and in order to make a request to amend or update your information, please contact us <Link to='/contactUs' style={{backgroundColor:'yellow',color:'black',padding:'3px',cursor:'pointer'}}>here</Link>.</p>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}> 9.3</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>In addition to the above rights, you may have the right to complain to a data protection authority about our collection and use of your personal information. However, we encourage you to contact us first so we can do our best to resolve your concern. You may submit your request to us using the information in the Contact Us section. We respond to all requests we receive from individuals wanting to exercise their personal data protection rights in accordance with applicable data protection laws.</p>
                    </div>
                </div>

            </div>
        
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>10 &nbsp;&nbsp;&nbsp;International Data Transfer</p>
                <div>
                    <p style={{margin:'10px auto'}}></p>
                    <p style={{margin:'10px auto'}}></p>
                    <p style={{margin:'10px auto'}}></p>
                    <p style={{margin:'10px auto'}}></p>
                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>11 &nbsp;&nbsp;&nbsp;Non-Interference</p>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>11.1</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>You undertake that you shall not howsoever mine data from, scrape, interfere or attempt to interfere with any part of our Site or Site Services, disrupt accessibility to our Site (or any part thereof), or bypass any security measures that we may include with our Site and/or Site Services, including but not limited to the utilization of any screen-scraper, hacks, spider, robot, virus, worms or other means to access or attack our Site or Site Services for any purpose without our prior written consent.</p>
                    </div>

                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>12 &nbsp;&nbsp;&nbsp;Advertising Partners</p>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>12.1</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>Some of the advertisers on our site may use cookies and web beacons. Each of our advertising partners has their own Privacy Policy for their policies on user data.</p>
                        <ul style={{marginLeft:"30px"}}>
                            Google
                            <li>https://policies.google.com/technologies/ads</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>12.2&nbsp;&nbsp;&nbsp;Advertising Partners Privacy Policies</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>Third-party ad servers or ad networks may use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Coinexplore.com, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                        <p style={{margin:'10px auto'}}>Note that Coinexplore has no access to or control over these cookies that are used by third-party advertisers.</p>
                    </div>
                </div>
          
            </div> 
            <div style={{marginTop:'50px',textAlign:"left"}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>13 &nbsp;&nbsp;&nbsp;Indemnification</p>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>13.1</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>You agree to fully indemnify, defend and hold Coinexplore and its shareholders, directors, officers, employees, representatives, agents, subcontractors, and licensors harmless from and against any and all claims, damages, costs and expenses, including but not limited legal fees and settlement payments on a full indemnity (solicitor-client) basis arising from or related to your breach of any of the provisions herein this Website Terms & Conditions, our Privacy Policy, any other service provisions of the Agreement, your use of our Site, our Site Services, our Content and/or Updates.</p>

                    </div>
                </div>
                <div>
                    <p style={{fontSize:'20px',margin:'10px auto'}}>13.2</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>For the avoidance of doubt, regardless of the indemnification received by Coinexplore from you, we shall have full authority and charge over our own defense, legal actions, and settlement proceedings in relation to any third party claims without any reference to you.</p>

                    </div>
                </div>
            
            </div> 
        </div>
        <div>
            <p style={{textAlign:'left',fontSize:'30px',fontFamily: "NexaTextBold"}}>Cookie Policies</p>

            <div style={{marginTop:'50px',textAlign:'left'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>1 &nbsp;&nbsp;&nbsp;Types of Cookies and Similar Technologies</p> 
                <div style={{marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>1.1&nbsp;&nbsp;&nbsp;Cookies</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>Cookies are small pieces of text sent as files to your computer or mobile device when you visit most websites. Cookies may be delivered by us (first party cookies) or delivered by a third-party partner or supplier (third-party cookies). Cookies are either session cookies or persistent cookies. Session cookies enable sites to recognize and link the actions of a user during a browsing session and expire at the end of each session. Persistent cookies help us recognize you as an existing user and these cookies are stored on your system or device until they expire, although you can delete them before the expiration date.</p>
                    </div>  

                </div>
                <div style={{marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>1.2&nbsp;&nbsp;&nbsp;Other Similar Technologies</p>
                    <div style={{margin:'15px auto'}}>
                        <ul style={{marginLeft:'30px'}}>
                            <li><strong>Web beacons, gifs, and clear gifs</strong>&nbsp;&nbsp;are tiny graphics, each with a unique identifier that are embedded invisibly on sites and in emails. Web beacons allow us to know if a certain page was visited or if ad banners on our sites and other sites are effective. We also use web beacons in our HTML-based emails to let us know whether our emails have been opened by recipients, which helps us to gauge the effectiveness of certain communications, promotions, and marketing campaigns.</li>
                            <li><strong>Proximity based beacons</strong>&nbsp;&nbsp;send one-way signals over very short distances, to communicate with associated mobile apps installed on your phone. They can notify you, for example, about experiences related to your trip and can alert you to related deals or promotions. Beacons communicate with your device only when you are in close proximity and only if you have given consent within the relevant mobile application.</li>
                            <li><strong>Pixels</strong>&nbsp;&nbsp;are small objects embedded into a web page that are not visible to the user. We use pixels to deliver cookies to your computer, facilitate the log-in process, monitor the activity on our sites, and deliver online advertising.</li>
                            <li><strong>Tags</strong>&nbsp;&nbsp;are small pieces of HTML code that tell your browser to request certain content generated by an ad server. We use tags to show you relevant advertising and promotions.</li>
                            <li><strong>Scripts</strong>&nbsp;&nbsp;are pieces of JavaScript code that launch automatically when certain webpages load, to determine whether users view associated advertisements.</li>
                            <li><strong>Local Storage Objects,</strong>&nbsp;&nbsp;such as HTML 5, are used to store content and preferences. Third-parties with whom we partner to provide certain features on our site to display advertising based upon your web browsing activity use Local Storage Objects to collect and store information.</li>
                        </ul>
                        <p style={{margin:'10px auto'}}>All of the technologies described above will be collectively referred to in this Cookie Policies as “cookies”.</p>

                    </div>
                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:'left'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>2 &nbsp;&nbsp;&nbsp;Coinexplore’s Use of Cookies</p> 
                <div style={{marginTop:'15px'}}>
                    <p style={{margin:'10px auto'}}>At Coinexplore, we use cookies for a number of reasons, including to:</p>
                    <ul style={{marginLeft:'30px'}}>
                        <li>Manage your current login session</li>
                        <li>Help us improve your experience when visiting our sites</li>
                        <li>Fulfill transactions and ensure our sites perform as intended</li>
                        <li>Remember your preferences, such as language, region, or currency</li>
                        <li>Provide you with relevant advertising and analyze performance of the ads</li>
                        <li>Enable you to return to previous travel searches</li>
                        <li>Identify errors on our sites</li>
                        <li>Help with data protection and potentially detect and investigate malicious or fraudulent activity</li>
                        <li>Help us understand traffic to our site, including time and date of the visit, time and date of the last visit, and other information</li>
                        <li>Analyze how well our sites are performing</li>
                    </ul>

                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:'left'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>3 &nbsp;&nbsp;&nbsp;Types of Information Collected by Cookies</p> 
                <div style={{marginTop:'15px'}}>
                    <p style={{margin:'10px auto'}}>The types of information that we collect through cookies include:</p>
                    <ul style={{marginLeft:'30px'}}>
                        <li>IP address</li>
                        <li>Device ID</li>
                        <li>Viewed pages</li>
                        <li>Browser type</li>
                        <li>Browsing information</li>
                        <li>Operating system</li>
                        <li>Internet Service Provider</li>
                        <li>Whether you have responded to, or interacted with, an advertisement</li>
                        <li>Referring or referred links or URLs</li>
                        <li>Features used and activities engaged in on our sites and in our apps</li>
                    </ul>
                    <p style={{margin:'10px auto'}}>See the Categories of Personal Information We Collect section above for more information on what types of information are collected automatically.</p>

                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:'left'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>4 &nbsp;&nbsp;&nbsp;Types and Functions of Cookies</p> 
                <div style={{marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>4.1&nbsp;&nbsp;&nbsp; Essential Cookies</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>Certain cookies are required or “essential” for our sites to function as intended. Essential cookies are necessary for you to navigate our site and use certain features like logging in to your account and managing your bookings. These cookies are also used to remember security settings that allow access to particular content. Lastly, we use essential cookies to collect information on which web pages visitors go to most, so we can improve our online services. You are not able to opt out of essential cookies.</p>

                    </div>
                </div>
                <div style={{marginTop:'15px'}}>
                    <p style={{fontSize:'20px',textAlign:'left'}}>4.2&nbsp;&nbsp;&nbsp;Other Types of Cookies</p>
                    <div style={{margin:'15px auto'}}>
                        <p style={{margin:'10px auto'}}>We also use other types of cookies to make our site engaging and useful to you:</p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Functional Cookies<ul style={{marginLeft:'30px'}}><li>We want to make sure when you visit our site, your preferences (such as your preferred language), settings, and previous searches are remembered. Functional cookies enhance your experience on any Coinexplore company’s site.</li></ul></li>
                            <li>Analytics Cookies<ul style={{marginLeft:'30px'}}><li>We use analytics cookies to understand our site’s performance and how it is used, including the number of visitors, how long you stay on the site, and which parts of the site you visit. We can see details about how visitors interacted with the site, like the number of clicks visitors made on a given page, their mouse movements and scrolling activity, the search words visitors used, and the text visitors enter into various fields</li></ul></li>
                            <li>Test different designs and features for our site</li>
                            <li>Monitor how our visitors reach our sites</li>
                            <li>Determine effectiveness of our advertising</li>
                            <li>Improve our services, including your experience on our site</li>

                        </ul>
                        <p style={{margin:'10px auto'}}>For analytics, our third-party service providers may use cookies to perform their services and may combine the information that they collect about you on our sites with other information that they have collected. For example, we use Google analytics cookies to monitor the performance of our sites. Our ability to use and share information collected by Google Analytics about your visit to our sites is restricted by the Google Analytics Terms of Use and the Google Privacy Policy. This Cookie Policies does not cover such third-parties’ use of your information.</p>
                        <p style={{margin:'10px auto'}}>Some analytics cookies can perform tasks essential and/or functional to online services like enabling site improvements and testing changes on a site.</p>
                        <ul style={{marginLeft:'30px'}}>
                            <li>Advertising Cookies. Coinexplore and our third-party advertising partners may use advertising cookies to show you advertisements both on and off our sites that are based on your interests. We may allow third-parties to collect information about your online activities through cookies to perform their services and may combine the information that they collect about you on our sites with other information that they have collected. These third-parties include business partners who collect information when you view or interact with one of (1) their advertisements on our sites or (2) our advertising or booking information on their sites and advertising networks, which collect information about your interests when you view or interact with one of the advertisements or tracking mechanisms they place on many different sites on the Internet. Our partners may make assumptions about your interests, characteristics, or preferences and add you to groups based on those assumptions in order to show you tailored advertisements. Coinexplore does not have access to the cookies these third-parties may use to collect information about your interests, and the information practices of these third-parties are not covered by this Cookie Policies, part of our Privacy Policies.</li>
                            <ul style={{marginLeft:'30px'}}>
                                <li>Google DoubleClick DART Cookie
                                    <ul style={{marginLeft:'30px'}}>
                                        <li>Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, you may choose to decline the use of DART cookies by visiting the Google Ad and content network Privacy Policy at the following URL - https://policies.google.com/technologies/ads </li>
                                    </ul>
                                </li>
                            </ul>

                        </ul>
                    </div>
                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:'left'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>5 &nbsp;&nbsp;&nbsp;How To Manage Your Cookies</p> 
                <div style={{marginTop:'15px'}}>
                    <p style={{margin:'10px auto'}}>You can set or amend your web browser controls to accept or refuse cookies whenever you like, but please remember if you do choose to reject cookies, your access to some of the functionality and areas of our site may be restricted. You may delete the cookies yourself in your internet browser.</p>
                    <p style={{margin:'10px auto'}}>If you don’t want cookies to be sent to your device at all, you may change this via the cookie settings in your internet browser. Please keep in mind that some of the functions and services on the Website might not function (as good) without cookies.</p>
                    <div style={{marginTop:'15px'}}>
                        <p style={{fontSize:'20px',textAlign:'left'}}>5.1&nbsp;&nbsp;&nbsp;Do-Not-Track Signals and Similar Mechanisms</p>
                        <div style={{margin:'15px auto'}}>
                            <p style={{margin:'10px auto'}}>Some web browsers may transmit "do-not-track" signals to sites with which the browser communicates. Because of differences in how web browsers incorporate and activate this feature, it is not always clear whether users intend for these signals to be transmitted, or whether users are even aware of them. Participants in the leading Internet standards-setting organization that is addressing this issue are in the process of determining what, if anything, sites should do when they receive such signals. We currently do not take action in response to these signals. If and when a final standard is established and accepted, we will reassess our sites’ responses to these signals and make appropriate updates to these Cookie Policies.</p>
                        </div>

                    </div>

                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:'left'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>6 &nbsp;&nbsp;&nbsp;Contact Us</p> 
                <div style={{marginTop:'15px'}}>
                    <p style={{margin:'10px auto'}}>If you have any questions or concerns about our use of your personal information, or wish to inquire about our personal handling practices, please contact us <Link to='/contactUs' style={{backgroundColor:'yellow',color:'black',padding:'3px',cursor:'pointer'}}>here</Link>.
.For more information about the data controller and/or Representative for personal information we process, please click <Link to='/contactUs' style={{backgroundColor:'yellow',color:'black',padding:'3px',cursor:'pointer'}}>here</Link>.</p>
                </div>

            </div>
            <div style={{marginTop:'50px',textAlign:'left'}}>
                <p style={{textAlign:'left',fontSize:'25px'}}>7 &nbsp;&nbsp;&nbsp;Updates to Privacy Policies</p> 
                <div style={{marginTop:'15px'}}>
                    <p style={{margin:'10px auto'}}>We may update this Policies in response to changing laws or technical or business developments. If we propose to make any material changes, we will notify you by means of a notice on this page. You can see when this Privacy Policies was last updated by checking the last updated date displayed at the top of this Policies.</p>
                </div>

            </div>


        </div>
        <GoToTop />
    </div>
  )
}

export default PrivacyPolicy