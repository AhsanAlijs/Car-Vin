import {
  ChevronsRight,
  Mail,
  Menu,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/_components/ui/sheet"

export default function TermsConditions() {
  return (
    <>
      <header id="header" className="flex w-full items-center text-white">
        <div className="max-w-screen-2xl mx-auto h-full w-full px-4">
          <div className="fixed top-0 left-1/2 -translate-x-1/2 px-4 py-8 w-full bg-black/40 backdrop-blur-sm z-50 max-md:py-4">
            <nav className="max-md:hidden">
              <ul className="flex gap-8 items-center justify-center hover:[&_a]:text-red-700 [&_a]:transition-colors">
                <li><a href="/#header">Home</a></li>
                <li><a href="/#process">Our process</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/#why-choose-us">Why choose us</a></li>
                <li><a href="/#contact-us">Contact</a></li>
              </ul>
            </nav>

            <Sheet>
              <SheetTrigger asChild>
                <button variant="outline" className="hidden max-md:block ml-auto">
                  <Menu className="size-8" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="hidden max-md:block">
                <nav className="">
                  <ul className="flex flex-col gap-8 items-center hover:[&_a]:text-red-700 [&_a]:transition-colors">
                    <li><a href="/#header">Home</a></li>
                    <li><a href="/#process">Our process</a></li>
                    <li><a href="/#pricing">Pricing</a></li>
                    <li><a href="/#why-choose-us">Why choose us</a></li>
                    <li><a href="/#contact-us">Contact</a></li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className='px-4 py-24 max-w-screen-xl mx-auto'>
        <div className="text-center">
          <h3 className="text-white max-sm:text-sm">Effective Date: <span className='italic' >Feb 1st, 2024</span></h3>
          <h2 className='text-red-700 font-bold text-5xl max-sm:text-4xl'>Privacy policy</h2>
        </div>

        <div className='[&_p]:mt-2 mt-8 [&_p]:text-neutral-600 [&_h3]:mt-8 [&_h3]:text-3xl [&_h3]:font-bold [&_h4]:mt-4 [&_h4]:text-xl [&_h4]:font-medium'>
          <p>Welcome to Vin Recodes , ("we," "us," or "Vin Recodes"). Vin Recodes, together with its affiliates and subsidiaries, has created this Policy to apply to all users and clients of our website (https://vinrecodes.com) and the associated products, services, data, information, and materials offered therein (collectively, the "Services").</p>

          <p>This Privacy Policy ("Policy") applies to your use of the Services and is part of and supplements the vinrecodes Terms of Service (the "Terms"), available here: https://vinrecodes.com/terms-of-service.</p>

          <p>PLEASE CAREFULLY READ THIS POLICY. YOUR USE OF THE SERVICES CONSTITUTES YOUR CONSENT TO THIS POLICY. DO NOT USE THE SERVICES IF YOU ARE UNWILLING OR UNABLE TO CONSENT TO THIS POLICY.</p>

          <p>We may revise this Policy at any time and such revision shall be posted here and accessible via this link: https://vinrecodes.com/privacy-policy. Any revision and/or addition to this Policy shall become effective and binding on you when you continue to use the Services on or after the effective date of such revision and/or addition.</p>

          <p>If you are a resident of California, Virginia, Colorado, Connecticut, or Utah, you may be entitled to certain individual rights under the California Consumer Privacy Act of 2018 (as amended by the California Privacy Rights Act of 2020 ("CPRA")) (collectively, "CCPA"), Virginia Consumer Data Protection Act ("VCDPA"), Colorado Privacy Act ("CPA"), Connecticut Act Concerning Personal Data Privacy and Online Monitoring ("CTDPA"), or Utah Consumer Privacy Act ("UCPA"). Please see the Notice to Certain Residents of Data Subject Rights Section of our Privacy Policy for your rights and how to exercise them for users located in California, Virginia, Colorado, Connecticut, and Utah only.</p>

          <h3>1. Information We Collect</h3>

          <p>When you use the Services, we may collect the following categories of personal information about you, which are described in more detail below: (A) personal information we request from you; (B) personal information we automatically collect; and (C) personal information we may receive from third parties. All of the information listed in (A)-(C) above, are detailed below, and hereinafter referred to as "Information".</p>

          <h4>A. Information You Provide</h4>

          <p>In using our Services, you may provide us with Information, including, without limitation:</p>

          <p>Individual identifiers such as name, email address, physical billing address, phone number, business name, demographic information you choose to provide such as age or date of birth, a photograph of you when you choose to upload it, or information about your vehicle, including your Vehicle Identification Number (VIN);</p>

          <p>Payment and transaction information such as credit card number, name, CVV code, date of expiration;</p>

          <p>Communications with us, preferences, and other Information you provide to us such as any messages, opinions and feedback that you provide to us, your user preferences (such as in receiving updates or marketing information), and other Information that you share with us when you contact us directly (such as for customer support services); and
            Additional Information as otherwise described to you at the point of collection or pursuant to your consent.</p>

          <h4>B. Information We May Automatically Collect About You</h4>

          <p>Our Services may automatically collect certain personal Information about you. We use this personal Information to help us design our Services to better suit our users' needs. This personal Information may include:</p>

          <p>IP address, which is the number associated with the service through which you access the Internet, like your ISP (Internet service provider);</p>

          <p>Date and time of your visit or use of our Services;</p>

          <p>Domain server from which you are using our Services;</p>

          <p>Type of computer, web browsers, search engine used, operating system, or platform you use;</p>

          <p>Data identifying the web pages you visited prior to and after visiting our website or use of our Services;</p>

          <p>Your movement and activity within the website, which is aggregated with other information;</p>

          <p>Geographic data such as country or region; and</p>

          <p>Mobile device information, including the type of device you use, operating system version, and the device identifier (or "UDID").</p>

          <h3>1. Usage of Cookies and Other Network Technologies</h3>
          <ol >
            <li>Cookies. Cookies are small digital files that are transferred to your computer or smartphone's hard drive when you visit a website or click on a URL. Most web browsers automatically accept cookies. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting, you may be unable to access certain parts of our Services. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Services.</li>
            <li>Flash Cookies. We may use local shared objects, also known as Flash cookies, to store your preferences such as volume control or display content based upon what you view on our site to personalize your visit. Third parties, with whom we partner to provide certain features or to display advertising based upon your browsing activity, use Flash cookies to collect and store information. Flash cookies are different from browser cookies because of the amount of, type of, and how data is stored. Cookie management tools provided by your browser will not remove Flash cookies.</li>
            <li>Web Beacons. Website pages may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit us, for example, to count users who have visited those pages and for other related statistics (for example, recording the popularity of certain content and verifying system and server integrity). We also use these technical methods to analyze the traffic patterns, such as the frequency with which our users visit various parts of the Services. These technical methods may involve the transmission of Information either directly to us or to a third party authorized by us to collect Information on our behalf. Our Services may use retargeting pixels from Google, Facebook, and other ad networks. We may also use web beacons in HTML emails that we send to determine whether the recipients have opened those emails and/or clicked on links in those emails.</li>
            <li>Analytics. Analytics are tools we use, such as Google Analytics, to help provide us with information about traffic to our website and use of our Services, which Google may share with other services and websites who use the collected data to contextualize and personalize the ads of its own advertising network. Learn more about Google's Privacy Policy here: https://policies.google.com/privacy?hl=en-US. You can opt out of having your activity on our Services made available to Google Analytics by installing the Google Analytics opt-out add-on for your web browser by visiting: https://tools.google.com/dlpage/gaoptout for your web browser.</li>
            <li>Mobile Application Technologies. If you access our website and Services through a mobile device, we may automatically collect Information about your device, your phone number, and your physical location.</li>
          </ol>

          <p>Our use of online tracking technologies may be considered a "sale" or "sharing" under certain laws. To the extent that these online tracking technologies are deemed to be a "sale" or "sharing" under certain laws, you can opt out of these online tracking technologies by submitting a request here.</p>

          <h3>2. Do Not Track Notice</h3>

          <p>Many modern web browsers give you the option to send a "Do Not Track" signal to the websites you visit, indicating that you do not wish to be tracked. At this time, the Services do not specifically respond to "Do Not Track" signals.</p>

          <p>We encourage you to review the privacy policies of our third-party advertisers and analytics service providers to learn about your choices about Information they collect from you. In addition, the Network Advertising Initiative offers information about some of the Internet advertising companies we may use, including how to opt out of interest-based advertising they deliver. For all the details, including how to turn on Do Not Track, visit www.donottrack.us.</p>

          <h4>C. Information We Receive from Third Parties</h4>

          <p>Third-Party Websites. We may collect additional personal Information about you from third-party websites to help us provide services to you, help prevent fraud, and for marketing and advertising purposes.</p>

          <p>Please keep in mind that when you provide Information to us on a third-party website, the Information you provide may be separately collected by the third-party website.</p>

          <p>The Information we collect is covered by this Privacy Policy, and the Information the third-party website collects is subject to the third-party website's privacy practices. We encourage you to be aware when you leave our Services and to read the privacy policies of other sites that may collect your Information.</p>

          <h3>2. How We Use Your Information</h3>

          <h4>A. Use and Purpose of Processing Your Information</h4>

          <p>We use and process your Information for things that may include, but are not limited to, the following:</p>

          <p>To operate and improve the Services and products and content therein;</p>

          <p>To create and maintain an account for you to allow you to purchase and use the services we make available on the Services;</p>

          <p>To provide you with information, products, or services that you request from us, or that may be of interest to you;</p>

          <p>To understand and analyze information related to the number and type of visitors that browse and use the Services;</p>

          <p>To respond to your comments, inquiries and questions and provide customer services;</p>

          <p>To deliver a more personalized experience based on your preferences;</p>

          <p>To send administrative information to you, for example, information regarding the Services and changes to our terms, conditions, and policies. Because this information may be important to your use of the Services, you may not opt out of receiving these communications;</p>

          <p>For general or targeted marketing and advertising purposes, including sending you promotional material or special offers on our behalf or on behalf of our marketing partners and/or their respective affiliates and subsidiaries and other third parties, provided that you have not already opted out of receiving such communications;</p>

          <p>To manage, improve, and foster relationships with third-party service providers, including vendors, suppliers, and parents, affiliates, subsidiaries, and business partners;</p>

          <p>To maintain, improve, customize, or administer the Services, perform business analyses, or other internal purposes to improve the quality of our business, the Services, resolve technical problems, or improve security or develop other products and services;</p>

          <p>To comply with our Terms;</p>

          <p>For analytics for business purposes and business intelligence;</p>

          <p>To comply with any applicable laws and regulations and respond to lawful requests; and/or</p>

          <p>For any other purposes disclosed to you at the time we collect your Information and/or pursuant to your consent.</p>

          <h2>B. Information Sharing or Disclosure</h2>

          <p>We may share and/or disclose your personal Information as set forth in this Policy in the following circumstances:</p>

          <p>With Your Consent. We may share personal Information with your consent.</p>

          <p>For Legal and Administrative Reasons. We may disclose your personal Information without notice: (i) as may be required by law (e.g., in response to a court order or subpoena, or in response to a law enforcement agency request); (ii) to protect our organization or others from injury (e.g., when we believe that someone is causing, or is about to cause, injury to or interference with the rights or property of another); (iii) as necessary to comply with applicable law; (iv) to enforce or apply our Terms.</p>

          <p>Third-Party Service Providers. We may share your personal Information with persons or organizations with whom we contract to carry out internal and external site operations or as necessary to render the Services. Additionally, we may also exchange personal Information with third parties for fraud protection and credit risk reduction.</p>

          <p>Aggregate Sharing. We may share anonymous, deidentified aggregate Information with third parties, including affiliated and non-affiliated organizations such as advertisers.</p>

          <p>Business Transfers. Finally, we may transfer your personal Information to our successor-in-interest in the event of an acquisition, sale, merger, or bankruptcy. In the event we go through a business transition, such as a merger, acquisition by another company, or sale of all or a portion of its assets, any personal Information we have on record will likely be among the assets transferred. The transferred personal Information will remain subject to the provisions of this Policy as it is updated from time to time.</p>

          <p>Information Shared with our Subsidiaries and Affiliates. We may share your personal Information with our subsidiaries and affiliates. If you do not want us to share your personal Information with our subsidiaries and affiliates, please email us at support@vinrecodes.com.</p>

          <h3>3. Links To Third-Party Sites</h3>

          <p>Occasionally, at our discretion, we may link to third-party sites or content on third-party sites not owned or controlled by us. We may do this for the convenience of you and other users of the Services, but we do not have control over the operation of these third-party websites. This Policy applies only to personal Information collected by our Services. Third-party sites have their own privacy practices and may or may not publish separate and independent Policies. We have no responsibility or liability for the privacy and security practices and activities of these third-party sites. Links to any of these third-party sites do not constitute or imply an endorsement or recommendation by us of the third-party site and/or content.</p>

          <p>If you visit a third-party site that is linked to our Services, you should review the privacy policies posted on these third-party sites before providing any personal information.</p>

          <h3>4. Information Security and Storage</h3>

          <p>We use commercially reasonable measures to provide the Services. However, you acknowledge that no security safeguards or method of transmission over the Internet are completely secure, and although we believe the measures implemented by us reduce the likelihood of security problems to a level appropriate to the type of data involved, we cannot guarantee the security of your personal Information transmitted to or from our Services. Any transmission of personal Information is at your own risk. We do not guarantee that your personal Information will not be misused by third parties. We are not responsible for the circumvention of any privacy settings or security features. You agree that we will not have any liability for misuse, access, acquisition, deletion, or disclosure of your personal Information.</p>

          <p>The safety and security of your personal Information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Services, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.</p>

          <p>If you believe that your personal Information has been accessed or acquired by an unauthorized person, you must promptly Contact Us so that we can quickly take necessary measures.</p>

          <h3>5. Data Retention</h3>

          <p>We store personal information for as long as reasonably required for its purpose or for any additional period required or allowed by applicable law (if any). The length of time for which we retain personal information depends on the purposes for which we collected and use it and/or as required to comply with applicable laws. In accordance with our routine record keeping, we may delete certain records that contain Information you have submitted to us. We are under no obligation to store such Information indefinitely and disclaim any liability arising out of, or related to, the destruction of such Information.</p>

          <h3>6. Your Choices</h3>

          <h4>A. Notifications and Alerts</h4>

          <p>If you choose to make purchases on the Services or provide your email address to us, you agree that we may contact you by email as set forth herein, including by sending a welcome email including information about your purchase and account. We will also periodically send you alerts regarding updated results for searches you have previously conducted, and updated information about the subject of your search.</p>

          <h3>1. Notification Opt In</h3>

          <p>We may offer you the ability to opt in to receive marketing communications from us about new or upcoming products or services, and promotional materials and offers from us as well as from our subsidiaries, marketing partners, advertisers, and other third parties we may partner with. We may offer these notifications via email, via browser notifications, or both. You may opt out of receiving these notifications as described below.</p>

          <h3>2. Email Notification Opt Out</h3>

          <p>If you no longer wish to receive marketing or promotional communications from us, you may opt out of receiving them as instructed in each email. Be advised that you may not opt out of receiving administrative email notifications from us related to technical support or customer services requests, billing and subscription issues, search alerts, or changes to the Terms or Policy.</p>

          <h3>3. Browser Push Notification Opt Out</h3>

          <p>BBy using our Services, you agree that we may provide browser push notifications. We may use a third party to provide these push notifications, which the third party will receive certain information related to you, including your IP address, your device identifier, and your geolocation. As part of these push notifications, the third party may provide advertisements and/or information related to our Services to you on other related websites</p>

          <p>If you no longer wish to receive browser push notifications, you may opt out of receiving them by using the instructions at the following links:</p>

          <p>Google Chrome/Android Phone users: https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en.</p>

          <p>Microsoft Edge users: https://www.windowscentral.com/how-manage-web-notifications-edge-windows-10.</p>

          <p>Firefox users: https://sendpulse.com/knowledge-base/push-notifications/general/enable-disable-push-notifications-mozilla-firefox.</p>

          <p>Opera users: https://davescomputertips.com/how-to-manage-desktop-notifications-in-opera/.</p>

          <p>Safari users: https://support.apple.com/guide/safari/manage-website-notifications-sfri40734/mac.</p>

          <p>Additional information: https://www.makeuseof.com/tag/disable-notifications-chrome-firefox-safari/.</p>

          <h4>B. Opting Out of Direct Marketing</h4>

          <p>To exercise choices regarding the marketing information you receive, you may also review the following links:</p>

          <p>You may opt out of tracking and receiving tailored advertisements on your mobile device by some mobile advertising companies and other similar entities by downloading the App Choices app at https://youradchoices.com/appchoices.</p>

          <p>You may opt out of receiving permissible targeted advertisements by using the NAI Opt-out tool available at http://optout.networkadvertising.org/?c=1 or visiting About Ads at http://optout.aboutads.info.</p>

          <p>You can opt out of having your activity on our Services made available to Google Analytics by installing the Google Analytics opt-out add-on for your web browser by visiting: https://tools.google.com/dlpage/gaoptout for your web browser.</p>

          <h3>7. Accessing, Correcting, or Deleting Your Information</h3>

          <p>To the extent state laws provide users with certain data subject rights, those rights may be honored by Vin Recodes following proper authentication and verification. Please see the Contact Us section for more information</p>

          <h3>8. Geographic Location of Data Storage and Processing</h3>

          <p>The Services collect personal Information and processes and stores that personal Information in databases located in the United States. If you are visiting the Services from a country outside the United States, you should be aware that you may transfer personal Information about yourself to the United States, and that the data protection laws of the United States may not be as comprehensive as those in your own country. By visiting the Services and submitting any personal Information you consent to the transfer of such personal Information to the United States.</p>

          <h3>9. Notice to Certain Residents of Data Subject Rights</h3>

          <h4>A. Notice to California Residents</h4>

          <p>To the extent any California data privacy law applies to the collection of your Information, this supplemental section of our Privacy Policy outlines the rights that California residents may have, and how they can exercise those rights. This notice applies solely to California residents. We provide the supplemental section below to comply with the California Consumer Privacy Act (as amended by the California Privacy Rights Act) (referred to collectively hereinafter as CCPA) and any terms defined in the CCPA have the same meaning when used below.</p>

          <h4>1. Your Rights under CCPA</h4>

          <p>Right to Know and Access Specific Information. You have the right to request that we disclose certain information to you about our collection and use of your Information over the past twelve (12) months. Once we receive and confirm a verifiable consumer request from you, we will disclose to you, to the extent permitted by law:</p>

          <p>The categories of Information we collected about you, and whether we sell or share your information to third parties.</p>

          <p>The specific pieces of Information we hold about you.</p>

          <p>The categories of personal information sold within the last 12 (twelve) months.</p>

          <p>The categories of sources from which Information about you is collected.</p>

          <p>Our business or commercial purpose for collecting, selling, or sharing your Information.</p>

          <p>The categories of third parties with whom your Information is sold, shared, or disclosed for a business purpose.</p>

          <p>You have the right to request that the Information described above be provided to you in a portable and readily usable format, to the extent technically feasible ("data portability").</p>

          <p>Deletion Request Rights. You have the right to request that we delete the Information that we collected from you, subject to certain exceptions. To the extent that we can delete your Information, once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your Information, unless an exception applies.</p>

          <p>Right to Correct Inaccurate Information. To the extent that we may maintain inaccurate personal Information, you have the right to request that we correct such inaccurate personal information taking into account the nature of the personal Information and the purposes of the processing of the personal Information. Once we receive and verify your verifiable consumer request, we will use commercially reasonable efforts to correct your personal Information.</p>

          <p>Sale and Sharing of Personal Information and the Right to Opt Out. You have the right to opt out of the processing of your Information for the following purposes:</p>

          <p>Sale of your Information.</p>

          <p>Sharing of your Information for cross-context behavioral advertising.</p>

          <p>The use of online tracking technologies may be considered a "sale" or "sharing" under California law. To the extent that these online tracking technologies are deemed to be a "sale" or "sharing" under California law, you may opt out of these online tracking technologies by submitting a request here.</p>

          <p>Right to Non-Discrimination. You have a right to not be discriminated against in the Services or quality of Services you receive from us for exercising your rights. We may not, and will not, treat you differently because of your data subject request activity. As a result of your data subject request activity, we may not and will not deny goods or Services to you, charge different rates for goods or Services, provide a different level quality of goods or Services, or suggest that we would treat you differently because of your data subject request activity.</p>

          <p>Right to Disclosure of Direct Marketers. You have a right to the categories and names/addresses of third parties that have received personal Information for their direct marketing purposes upon simple request, and free of charge.</p>

          <p>You may make an authenticated consumer request exercising your Right to Know and Access Specific Information including Right to Know what Personal Information is being Sold or Shared or under the CCPA twice within a twelve (12) month period. To exercise the rights described above, see the Exercising Your Rights section below.</p>

          <h4>2. Authorized Agent</h4>

          <p>To the extent permitted by applicable law, we may charge a reasonable fee to comply with your request.</p>

          <h4>B. Notice to Virginia Residents</h4>

          <p>To the extent any Virginia data privacy law applies to the collection of your Information, this supplemental section of our Privacy Policy outlines the individual rights guaranteed to Virginia residents and how to exercise those rights and applies solely to Virginia residents. We provide the supplemental section below to comply with the Virginia Consumer Data Protection Act ("VCDPA") and any terms defined in the VCDPA have the same meaning when used below.</p>

          <h4>1. Your Rights under VCDPA</h4>

          <p>Subject to certain exceptions you may be entitled to the following rights:</p>

          <p>Right to Access & Data Portability. You have the right to request that we disclose certain information to you about our collection and use of your Information at any time. Once we receive and confirm an authenticated consumer request from you, we will, subject to certain exceptions:</p>

          <p>Disclose whether we are processing your Information.</p>

          <p>Provide you with access to your Information.</p>

          <p>Where the processing is carried out by automated means, and subject to certain exceptions, you have the right to request and obtain a copy of your Information that you previously provided to us in a portable and, to the extent technically feasible, readily usable format that allows you to transmit the Information to another data controller without hindrance.</p>

          <p>Right to Correct Inaccurate Information. To the extent that we may maintain inaccurate Information, you have the right to request that we correct such inaccurate Information taking into account the nature of the personal Information and the purposes of the processing of the personal Information. Once we receive and verify your authenticated consumer request, we will use commercially reasonable efforts to correct your Information.</p>

          <p>Right to Delete. You have the right to request that we delete certain of your Information provided by or obtained about you. To the extent that we can delete your Information, once we receive and confirm your authenticated consumer request, we will delete (and direct our service providers to delete) your Information, subject to certain exceptions.</p>

          <p>Targeted Advertising, Profiling, and the Right to Opt Out. You have the right to opt out of the processing of your Information for the following purposes:</p>

          <p>Targeted advertising.</p>

          <p>Profiling in furtherance of decisions that produce legal or similarly significant effects concerning you.</p>

          <p>Right to Appeal. You have the right to appeal our denial of any request you make under this section. To exercise your right to appeal, please submit an appeals request via the information in the Contact Us section below. Within sixty (60) days of receipt of your appeal, we will inform you in writing of any action taken or not taken in response to your appeal, including a written explanation of the reasons for the decisions. If we deny your appeal, you may contact the Virginia Office of the Attorney General by:</p>

          <p>Contacting Online: https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint</p>

          <p>Calling:</p>

          <p>If calling from Virginia, call the Consumer Protection Hotline.</p>

          <p>If calling from the Richmond area or from outside Virginia, call the Consumer Protection Hotline</p>

          <p>Right to Non-Discrimination. You have a right to not be discriminated against in the Services or quality of Services you receive from us for exercising your rights. We will not discriminate against you for exercising any of your rights in this section including denying goods or Services, charging different prices or rates for goods or Services, or providing a different level of quality of goods and Services. However, we may offer a different price, rate, level, quality, or selection of goods or Services, including offering goods or Services for no fee, if you have exercised your right to opt out or the offer is related to your voluntary participation in a bona fide loyalty, rewards, premium features, discounts, or club card program.</p>

          <p>You may make an authenticated consumer request under the VCDPA twice within a twelve (12) month period. To exercise the rights described above, see the Exercising Your Rights section below.</p>

          <h4>2. Additional Information</h4>

          <p>To the extent permitted by applicable law, we may charge a reasonable fee to comply with your request.</p>

          <h4>C. Notice to Colorado Residents</h4>

          <p>To the extent any Colorado data privacy law applies to the collection of your Information, this supplemental section of our Privacy Policy outlines the individual rights guaranteed to Colorado residents and how to exercise those rights and applies solely to Colorado residents. We provide the supplemental section below to comply with the Colorado Privacy Act ("CPA") and any terms defined in the CPA have the same meaning when used below.</p>

          <h4>1. Your Rights under CPA</h4>

          <p>Subject to certain exceptions you may be entitled to the following rights:</p>

          <p>Right to Access & Data Portability. You have the right to request that we disclose certain information to you about our collection and use of your Information at any time. Once we receive and confirm an authenticated consumer request from you, we will, subject to certain exceptions:</p>

          <p>Disclose whether we are processing your Information.</p>

          <p>Provide you with access to your Information where we process it.</p>

          <p>Where exercising your right to access, you have the right to request and obtain a copy of your Information that you previously provided to us in a portable and, to the extent technically feasible, readily usable format that allows you to transmit the Information to another data controller without hindrance ("data portability").</p>

          <p>Right to Correct Inaccurate Information. To the extent that we may maintain inaccurate personal Information, you have the right to request that we correct such inaccurate personal Information taking into account the nature of the personal Information and the purposes of the processing of the personal Information. Once we receive and verify your authenticated consumer request, we will use commercially reasonable efforts to correct your personal Information.</p>

          <p>Right to Delete. You have the right to request that we delete certain of your Information provided by or obtained about you. To the extent that we can delete your Information, once we receive and confirm your authenticated consumer request, we will delete your Information, subject to certain exceptions.</p>

          <p>Targeted Advertising, Profiling, and the Right to Opt Out. You have the right to opt out of the processing of your Information for the following purposes:</p>

          <p>Targeted advertising.</p>

          <p>Profiling in furtherance of decisions that produce legal or similarly significant effects concerning you.</p>

          <p>Right to Appeal. You have the right to appeal our denial of any request you make under this section. To exercise your right to appeal, please submit an appeals request via the information in the Contact Us section below. Within forty-five (45) days of receipt of your appeal, we will inform you in writing of any action taken or not taken in response to your appeal, including a written explanation of the reasons for the decisions. If you have concerns regarding the results of your appeal, you may contact the Colorado Office of the Attorney General by:</p>

          <p>Contacting Online: https://complaints.coag.gov/s/contact-us</p>

          <p>You may make an authenticated consumer request free of charge under the CPA once within a twelve (12) month period. We reserve the right to charge a reasonable fee for a second or subsequent request within the same twelve (12) month period. To exercise the rights described above, see the Exercising Your Rights section below.</p>

          <h4>2. Sensitive Data</h4>

          <p>We do not process sensitive data including sensitive data inferences.</p>

          <h4>3. Authorized Agent</h4>

          <p>You may use an authorized agent to submit verifiable consumer requests on your behalf. An authorized agent is a natural person or a business entity that you have authorized to act on your behalf. If you use an authorized agent, we will require: (1) proof of written permission for the authorized agent to make requests on your behalf, and identity verification from you; or (2) proof of power of attorney pursuant to Colo. Rev. Stat. § 15-14-705. We may deny a request from an authorized agent that does not submit proper verification proof.</p>

          <h4>D. Notice to Connecticut Residents</h4>

          <p>To the extent any Connecticut data privacy law applies to the collection of your Information, this supplemental section of our Privacy Policy outlines the individual rights guaranteed to Connecticut residents and how to exercise those rights and applies solely to Connecticut residents. We provide the supplemental section below to comply with the Connecticut Act Concerning Personal Data Privacy and Online Monitoring ("CTDPA") and any terms defined in the CTDPA have the same meaning when used below.</p>

          <h4>1. Your Rights under CTDPA</h4>

          <p>Subject to certain exceptions you may be entitled to the following rights:</p>

          <p>Right to Access & Data Portability. You have the right to request that we disclose certain information to you about our collection and use of your Information at any time. Once we receive and confirm an authenticated consumer request from you, we will, subject to certain exceptions:</p>

          <p>Disclose whether we are processing your Information.</p>

          <p>Provide you with access to your Information where we process it.</p>

          <p>Where the processing is carried out by automated means, and subject to certain exceptions, you have the right to request and obtain a copy of your Information that you previously provided to us in a portable and, to the extent technically feasible, readily usable format that allows you to transmit the Information to another data controller without hindrance.</p>

          <p>Right to Correct Inaccurate Information. To the extent that we may maintain inaccurate personal Information, you have the right to request that we correct such inaccurate personal Information taking into account the nature of the personal Information and the purposes of the processing of the personal Information. Once we receive and verify your authenticated consumer request, we will use commercially reasonable efforts to correct your personal Information.</p>

          <p>Right to Delete. You have the right to request that we delete certain of your Information provided by or obtained about you. To the extent that we can delete your Information, once we receive and confirm your authenticated consumer request, we will delete (and direct our service providers to delete) your Information, subject to certain exceptions.</p>

          <p>Targeted Advertising, Profiling, and the Right to Opt Out. You have the right to opt out of the processing of your Information for the following purposes:</p>

          <p>Targeted advertising.</p>

          <p>Profiling in furtherance of decisions that produce legal or similarly significant effects concerning you.</p>

          <p>Right to Non-Discrimination. You have a right to not be discriminated against in the Services or quality of Services you receive from us for exercising your rights. We will not discriminate against you for exercising any of your rights in this section including denying goods or Services, charging different prices or rates for goods or Services, or providing a different level of quality of goods and Services. However, we may offer a different price, rate, level, quality, or selection of goods or Services, including offering goods or services for no fee, if you have exercised your right to opt out or the offer is related to your voluntary participation in a bona fide loyalty, rewards, premium features, discounts, or club card program.</p>

          <p>Right to an Appeal. You have the right to appeal our denial of any request you make under this Section. To exercise your right to appeal, please submit appeals request to us by either:</p>

          <p>Emailing us at support@vinrecodes.com</p>

          <p>Within sixty (60) days of receipt of your appeal, we will inform you in writing of any action taken or not taken in response to your appeal, including a written explanation of the reasons for the decisions. If we deny your appeal, you may contact the Connecticut Office of the Attorney General by:</p>

          <p>Contacting Online: https://www.dir.ct.gov/ag/complaint/e-complaint.aspx?CheckJavaScript=1</p>

          <p>Calling: The Consumer Assistance Unit at (860) 808-5420.</p>

          <p>You may make an authenticated consumer request under the CTDPA once within a twelve (12) month period. To exercise the rights described above, see the Exercising Your Rights section below.</p>

          <h4>2. Authorized Agent</h4>

          <p>You may use an authorized agent to submit verifiable consumer requests on your behalf. An authorized agent is a natural person or a business entity that you have authorized to act on your behalf. If you use an authorized agent, we will require: (1) proof of written permission for the authorized agent to make requests on your behalf, including through technology means, and identity verification from you; or (2) proof of power of attorney. We may deny a request from an authorized agent that does not submit proper verification proof.</p>

          <h4>3. Additional Information</h4>

          <p>To the extent permitted by applicable law, we may charge a reasonable fee to comply with your request.</p>

          <h4>E. Notice to Utah Residents</h4>

          <p>To the extent any Utah data privacy law applies to the collection of your Information, this supplemental section of our Privacy Policy outlines the individual rights guaranteed to Utah residents and how to exercise those rights and applies solely to Utah residents. We provide the supplemental section below to comply with the Utah Consumer Privacy Act ("UCPA") and any terms defined in the UCPA have the same meaning when used below.</p>

          <h4>1. Your Rights under UCPA</h4>

          <p>Subject to certain exceptions you may be entitled to the following rights:</p>

          <p>Right to Access & Data Portability. You may have the right to request that we disclose certain information to you about our collection and use of your Information at any time. Once we receive and confirm an authenticated consumer request from you, we will, subject to certain exceptions:</p>

          <p>Disclose whether we are processing your Information.</p>

          <p>Provide you with access to your Information where we process it.</p>

          <p>Where the processing is carried out by automated means, and subject to certain exceptions, you have the right to request and obtain a copy of your Information that you previously provided to us in a portable and, to the extent technically feasible, readily usable format that allows you to transmit the Information to another data controller without hindrance ("data portability").</p>

          <p>Right to Delete. You have the right to request that we delete certain of your Information provided by or obtained about you. To the extent that we can delete your Information, once we receive and confirm your authenticated consumer request, we will delete (and direct our service providers to delete) your Information, subject to certain exceptions.</p>

          <p>Right to Non-Discrimination. We will not discriminate against you for exercising any of your rights in this section including denying goods or Services, charging different prices or rates for goods or Services, or providing a different level of quality of goods and services.</p>

          <p>Targeted Advertising, and Right to Opt Out. You have the right to opt out of the processing of your Information for targeted advertising.</p>

          <p>You may make an authenticated consumer request free of charge under the UCPA once within a twelve (12) month period. We reserve the right to charge a reasonable fee for a second or subsequent request within the same twelve (12) month period. To exercise the rights described above, see the Exercising Your Rights section below.</p>

          <h3>10. Exercising Your Data Subject Rights</h3>

          <p>To exercise any of the rights described above, please submit a verifiable consumer request to us via the methods described below. The verifiable consumer request must:</p>

          <p>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected Information, or an authorized representative; and</p>

          <p>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</p>

          <p>To help protect your privacy and maintain security, if you request access to or deletion of your Information, we will take steps and may require you to provide certain information to verify your identity before granting you access to your Information or complying with your request. In addition, if you ask us to provide you with specific pieces of Information, we may require you to sign a declaration under penalty of perjury that you are the consumer whose Information is the subject of the request. Only you or your authorized agent may make a verifiable consumer request related to your Information. If you designate an authorized agent to make a request on your behalf, we may require you to provide the authorized agent written permission to do so and to verify your own identity directly with us (as described above). You may also make a verifiable consumer request on behalf of your minor child.</p>

          <p>Email us: {" "}	support@vinrecodes.com</p>

          <p>Visit: {" "}	https://vinrecodes.com/</p>

          <h3>11. Children's Information</h3>

          <p>This Services are not intended for use by persons under the age of eighteen (18). We do not knowingly collect any Information from anyone under thirteen (13) years old. In the event that we discover that a person under the age of thirteen (13) (or a higher threshold where applicable) has provided Information to us, we will take steps to comply with any applicable legal requirement to remove such personal Information.</p>

          <p>Contact us if you believe that we have mistakenly or unintentionally collected Information from a child under the age of thirteen (13).</p>

          <h3>12. Difficulty Accessing Our Privacy Policy</h3>

          <p>Individuals with disabilities who are unable to usefully access our Privacy Policy online may contact us to inquire how they can obtain a copy of our policy in another, more easily readable format.</p>

          <h3>13. Contact Us</h3>

          <p>If you have any questions or concerns about this Policy or any vinrecodes product or service offered by Vin Recodes, please click here to contact us on live chat, or email us at</p>

          <p>support@vinrecodes.com</p>
        </div>
      </main>

      <footer id="contact-us" className="bg-neutral-800 mt-6 ">
        <section className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-center gap-12 p-16 max-lg:flex-col max-lg:items-center max-lg:justify-center   ">
            {/* section1 */}
            <div className=" flex items-start gap-6 flex-col w-full " >
              <img
                src="https://vinrecodes.com/public/images/vinrecodeslogo.png"
                alt="logo"
                className="w-40"
              />
              <p className="text-sm text-white" >
                We provide you a history report of your vehicle, we are Sales
                Partner Been Verified which is an Authorized Data Provider.
              </p>
              <p className="flex gap-2">
                <span>
                  <Mail color="red" />
                </span>
                <span className="text-sm text-white">info@vinrecodes.com</span>
              </p>
              <p className="flex gap-2">
                <span>
                  <Mail color="red" />
                </span>
                <span className="text-sm text-white">support@vinrecodes.com</span>
              </p>
              <p className="text-sm font-medium text-white" >Supported Payments</p>
              <div className="grid grid-cols-2 w-fit gap-2 mt-0">
                <img
                  src="https://vinrecodes.com/public/images/clients/visa.svg"
                  alt=""
                />
                <img
                  src="https://vinrecodes.com/public/images/clients/mastercard.svg"
                  alt=""
                />
                <img
                  src="https://vinrecodes.com/public/images/clients/amex.svg"
                  alt=""
                />
              </div>
            </div>
            {/* section1 */}

            {/* Section 2 */}
            <div className="flex items-start flex-col gap-10 w-full" >
              <p className="text-sm font-medium text-white">Useful Links</p>
              <ul className="flex items-start flex-col gap-8 text-white text-sm">
                <li className="flex items-center gap-2">
                  <span>
                    <ChevronsRight />
                  </span>
                  Vinrecodes
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <ChevronsRight />
                  </span>{" "}
                  Pricing{" "}
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <ChevronsRight />
                  </span>{" "}
                  Contact Us{" "}
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <ChevronsRight />
                  </span>{" "}
                  Terms & Conditions{" "}
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <ChevronsRight />
                  </span>{" "}
                  Privacy Policy{" "}
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <ChevronsRight />
                  </span>{" "}
                  Refund Policy{" "}
                </li>
              </ul>
            </div>
            {/* Section 2 */}

            {/* section 3 */}
            <div className="flex items-start flex-col gap-4 w-full " >
              <img
                src="https://vinrecodes.com/public/images/clients/1c.png"
                alt="de"
                className="w-56"
              />
              <p className="font-medium text-white text-sm" >Vin Recodes Products is an Approved NMVTIS Data Provider.</p>
              <img
                src="https://vinrecodes.com/public/images/clients/dvlabg.png"
                alt=""
                className="w-40"
              />
              <div className="font-medium text-white text-sm" >
                <p>Vin Recodes Products is an Approved DVLA Data Provider.</p>
                <p>
                  All logos, trademarks and registered trademarks presented are
                  the property of their respective owners.
                </p>
              </div>
            </div>
            {/* section 3 */}

            {/* section 4 */}
            <div className="flex items-start flex-col gap-10 w-full max-lg:w-auto" >
              <p className="text-sm font-medium text-white" >keep in touch</p>
              <p className="font-medium text-white text-sm">
                Keep up on our always evolving products features and technology.
                Enter your e-mail and subscribe to our newsletter.
              </p>
              <form className="flex flex-col items-center w-full justify-center gap-4">
                <input type="text" placeholder="Enter Your Name" className="px-6 py-2 w-full" />
                <input type="email" placeholder="Enter Your Email" className="px-6 py-2 w-full" />
                <textarea className="w-full"></textarea>
                <input type="submit" value="Send" className=" p-2 cursor-pointer bg-red-700 text-white w-full " />
              </form>
            </div>
            {/* section 4 */}
          </div>
        </section>
      </footer>
    </>
  );
}
