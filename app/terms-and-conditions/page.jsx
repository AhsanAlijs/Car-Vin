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
                <nav>
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
          <h2 className='text-red-700 font-bold text-5xl max-sm:text-4xl'>Terms of Service</h2>
        </div>

        <div className='[&_p]:mt-2 mt-8 [&_p]:text-neutral-600 [&_h3]:mt-8 [&_h3]:text-3xl [&_h3]:font-bold [&_h4]:mt-4 [&_h4]:text-xl [&_h4]:font-medium'>
          <p>
            Welcome to vinrecodes.com, provided by VinRecodes . ("we," "us," or VinRecodes). These Terms of Service ("Terms") were created by VinRecodes to govern the operation and usage of our website(<span className='text-red-600' >https://vinrecodes.com/</span>), along with associated products, VinRecodes services, data, information, content, and materials (collectively, the "Services"). If you are accepting these Terms on behalf of a legal entity other than yourself, you represent and warrant that you have the full legal authority to bind such entity to these Terms.
          </p>

          <p>
            PLEASE CAREFULLY READ THESE TERMS. YOURS USE OF THE SERVICES CONSTITUTES YOUR ACCEPTANCE OF THESE TERMS. DO NOT USE THE SERVICES IF YOU ARE UNWILLING OR UNABLE TO BE BOUND BY THE TERMS.
          </p>

          <p>
            By using or visiting our Services, you agree to be bound by the Terms & Conditions, including the Binding Arbitration Clause and Class Action Waiver described in Section 20, and the Privacy Policy available at ( <span className='text-red-600'>https://vinrecodes.com/privacy-policy</span> ).
          </p>

          <p>
            We reserve the right to change, modify, add to, or otherwise alter these Terms of Service at any time. Changes to these terms shall be effective immediately upon posting on the Services. You agree to review these Terms periodically to be aware of such revisions. Your use of the Services after we post changes constitutes your acceptance of them
          </p>

          <h3>
            1. Services
          </h3>
          <p>
            Our Services enable users to search our extensive database for vehicle information. During vehicle searches, users can perform recall lookups, discover a vehicle's fair market value, or acquire vehicle history reports.
          </p>
          <p>
            We provide you with a personal, limited, non-exclusive license to access and use the Services for your personal, individual, non-commercial, and non-automated use only. You may not access or use the Services for any other purposes except as expressly allowed by these Terms of Service.
          </p>


          <h3>
            2. Registration
          </h3>

          <p>
            To use the Services, you are required to create an account with us ("Account"). You must be 18 years of age or older to use the Services and make any purchases. Any offers of sale are only intended for individuals who are eighteen (18) years of age or older. By using the Services or making purchases, you affirm that you are eighteen (18) years of age or older.</p>
          <p>
            You agree to provide true, current, complete, and accurate information as requested, and to promptly update this information if any changes occur. It is your responsibility to maintain the confidentiality of your password and oversee all activities, including those of any third party, conducted through your account, whether authorized by you or not. You agree to promptly inform Ledger Link Solution . of any suspected or actual unauthorized use of your account. You acknowledge that we will not, under any circumstances, be liable for any costs, losses, damages, or expenses arising from your failure to maintain the security of your password.
          </p>

          <h3>3. Prohibited Uses</h3>
          <p>
            In addition to other prohibitions outlined in the Terms & Conditions, you are expressly prohibited from using the Services or its related content: (a) for any unlawful or fraudulent purpose, including the use of fraudulent credit card information; (b) to solicit others to perform or participate in any unlawful or prohibited acts; (c) to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to engage in any form of discrimination or harassment based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information or impersonate another; (g) to upload or transmit viruses or any other type of malicious code; (h) to collect or track the personal information of others; (i) to engage in spamming, phishing, or any other form of unauthorized advertising or promotion; (j) for any damaging, obscene, or immoral purpose; (k) to interfere with or circumvent the security features of the website or Services; (l) to transmit any advertising or promotional material without authorization; (m) to systematically retrieve data or other content without written permission; (n) make unauthorized use of the Services; (o) use the Services to advertise or offer to sell goods and services; (p) engage in unauthorized framing or linking to the Services; (q) engage in any automated use of the system; (r) interfere with, disrupt, or create an undue burden on the website or the networks or services connected to the Services; (s) sell or transfer your profile; (t) use the Services to compete with us or for any revenue-generating endeavor; (u) decipher, decompile, disassemble, or reverse engineer any software; (v) copy or adapt the Services' software; (w) upload or transmit viruses, malicious code, or other disruptive material; (x) upload or transmit material that acts as an information collection or transmission mechanism; (y) use any automated system without authorization; or (z) in any way that breaches or violates our Terms & Conditions or Privacy Policy. We reserve the right to terminate your use of the Services for violating any of these prohibited uses.
          </p>
          <p>
            VinRecodes, Inc. reserves the right, though not obligated, to monitor the volume and purpose of your searches on the Services. We may restrict, limit, or deactivate your account if we identify usage beyond your personal rights. We also reserve the right to investigate your use of the Services, take appropriate legal action against violations of these Terms of Service or applicable law, and accept, reject, or modify any Services and Content. However, we assume no liability based on acceptance, rejection, modification, or failure to modify any Services or Content.
          </p>

          <h3>4. Intellectual Property</h3>
          <p>
            All content, features, and functionality available through our Services, including design, artwork, text, videos, software, images, and more ('Materials'), are the proprietary property of us, our affiliates, brand partners, or licensors, protected by U.S. and international intellectual property laws. We reserve all rights to the Materials, and they may not be modified, copied, distributed, reproduced, republished, downloaded, or sold without our prior written permission. You may download and print Materials for non-commercial, non-competitive uses, with intact copyright notices. This consent may be revoked at any time and does not include the right to republish Materials on the Internet or in any database. Systematic extraction of data from our Services is strictly prohibited.
          </p>
          <p>
            All trademarks, whether registered or unregistered, seen or accessible on our Services, are the property of VinRecodes or its licensors. They cannot be replicated, imitated, or utilized, in whole or in part, without the prior written consent of VinRecodes or its owners. Page headers, custom graphics, button icons, and scripts, identified as our service marks, trademarks, and/or trade dress, must not be copied or imitated without our prior written permission.
          </p>
          <h3>5. Purchase Options and Pricing</h3>

          <p>We provide various purchase options, including subscriptions and one-time payments, each offering distinct information. Current descriptions and pricing are accessible on the Services. We reserve the right to adjust prices and add or remove services or subscription options at any time, with changes taking effect upon renewal or additional service purchase.</p>

          <h3>6. Billing</h3>
          <h4>A. Fees</h4>
          <p>
            All fees for Services must be paid using a valid credit card, debit card, or other accepted payment methods. We will bill the fees to the Payment Account you provide. Third-party payment options are subject to their terms. If your Payment Account is insufficient or inaccurate, we may refuse service and suspend or terminate your subscription.
          </p>
          <p>
            If you purchase a single report or otherwise make a one-time billing package purchase, we will bill fees to your Payment Account on a one-time basis at the time of your order.
          </p>
          <p>
            Transactions will appear on your credit card statement as VinRecodes.
          </p>



          <h4>B. Subscription Fees</h4>
          For subscriptions, fees will be automatically billed to your Payment Account on a recurring monthly basis until canceled. No additional authorization is required for each recurring fee.

          <h3>7. Trials</h3>
          <p>We may provide access to free or paid trial uses of the Services. Opting for a paid trial will result in immediate billing to your Payment Account. Your subscription starts on the 'Next Billing Date,' as specified in your Order Confirmation and on your account's Account Details page. The monthly subscription fee will be recurrently billed to your Payment Account from that date until cancellation</p>

          <h3>8. Recurring Payment Subscriptions</h3>
          <p>
            AUTOMATIC RENEWAL FEES FOR RECURRING PAYMENT SUBSCRIPTION PLANS WILL BE AUTOMATICALLY CHARGED TO YOUR PAYMENT ACCOUNT.
          </p>

          <p>
            WE WILL AUTOMATICALLY RENEW YOUR SUBSCRIPTION ON A MONTHLY BASIS BEGINNING ON THE "NEXT BILLING DATE" IDENTIFIED IN YOUR ORIGINAL ORDER CONFIRMATION AND EVERY THIRTY (30) DAYS THEREAFTER (THE "AUTOMATIC RENEWAL DATE"). WE WILL PRESENT YOU WITH AN OPTION TO AUTHORIZE THESE PAYMENTS DURING THE SIGN-UP PROCESS, AND YOU ARE CHECKING THE BOX ON THE SIGN-UP PAGE DEMONSTRATES YOUR CONSENT TO SUBSCRIPTION BILLING. ON EACH RENEWAL DATE, YOUR PAYMENT ACCOUNT WILL BE CHARGED THE THEN CURRENT RATE FOR THE SUBSCRIPTION YOU SELECTED ON YOUR SERVICE ORDER. UPON PAYMENT, WE WILL SEND YOU AN ACKNOWLEDGEMENT VIA EMAIL OF THE PARTICULAR TERMS OF YOUR RECURRING PAYMENT PLAN, INCLUDING THE AUTOMATIC RENEWAL DATE, AND INSTRUCTIONS FOR CANCELLING YOUR SUBSCRIPTION TO AVOID AUTOMATIC RENEWAL.
          </p>

          <p>
            THEREAFTER, WE WILL ALSO SEND YOU AN AUTOMATIC RENEWAL DATE REMINDER AND PROVIDE YOU WITH NOTICE OF ANY CHANGE IN THE SUBSCRIPTION RATE OR MATERIAL CHANGES TO OTHER TERMS OF YOUR RECURRING PAYMENT PLAN, VIA EMAIL, AT LEAST FIVE (5) DAYS BEFORE THE AUTOMATIC RENEWAL DATE.
          </p>

          <p>
            YOU MAY CANCEL YOUR ACCOUNT AND SUBSCRIPTION AT ANY TIME. TO DO SO, (1) USE THE "CANCEL" OPTION ON THE ACCOUNT DETAILS PAGE OF YOUR ACCOUNT, (2) EMAIL US AT support@vinrecodes.com/. OUR CUSTOMER SERVICE DEPARTMENT IS OPEN AND AVAILABLE 24/7.
          </p>

          <p>
            PLEASE NOTE THAT SUBSCRIPTION FEES ARE BILLED MONTHLY IN ADVANCE, AND WE WILL NOT REFUND THE UNUSED PORTION OF YOUR MONTHLY SUBSCRIPTION. THEREFORE, YOU MUST CANCEL BEFORE THE AUTOMATIC RENEWAL DATE IN ORDER TO AVOID AUTOMATIC RENEWAL OF YOUR TRIAL/FULL PAID SUBSCRIPTION, AND THE ASSOCIATED MONTHLY SUBSCRIPTION FEES.
          </p>

          <h3>9. Customer Support</h3>
          Our Customer Support team is available to address your questions or concerns. If you have any issues with billing, you agree to contact our Customer Support team prior to contacting your bank. Contact Customer Support using our via email at support@vinrecodes.com/. Our Customer Service Department is open 24/7.

          <h3>10. Cancellation and Termination</h3>
          <h4>A. By You</h4>
          <p>
            You are solely responsible for correctly canceling your account. You can cancel it anytime by calling us or sending an email to the information provided in 'Contact Us.' The cancellation is effective immediately, but you remain responsible for any outstanding payments related to purchases made before cancellation. Additionally, after cancellation or termination of your account, you can still make one-time purchases on the Services.
          </p>

          <h4>B. By Us</h4>
          We reserve the right to terminate or restrict your account and/or access to the Services for any reason, or for no reason whatsoever. This includes, but is not limited to, situations where we deem your use unacceptable or if you violate any term of these Terms of Service. While we may provide a warning prior to termination or restriction, we are not obligated to do so. We shall not be liable to you or any third party for such termination or restriction of your account and/or access.

          <h4>C. Effects of Termination</h4>
          Upon termination of your Account, we may permanently delete it along with any user content linked to it. If your account remains inactive for twelve (12) or more months, we may consider it 'inactive' and permanently delete both the account and its associated data. The exercise of any remedy, including termination, will not prejudice any other remedies available to us under these Terms of Service. Sections of these Terms designed to survive termination, such as payment rights, use restrictions, indemnity obligations, confidentiality, warranty disclaimers, and liability limitations, will continue in effect.

          <h3>11. FCRA Notice</h3>
          LedgerLinkSolutions explicitly states that it does not compile background information for employment purposes and is not classified as a 'consumer reporting agency' under the Fair Credit Reporting Act (FCRA). The provided reports are not 'consumer reports' per the FCRA since they are not intended for any permissible purpose under the FCRA. The Services offer aggregated and publicly available information for personal and non-commercial use only. Users are strictly prohibited from using information from search results for discriminatory purposes, evaluating eligibility for credit, insurance, employment, housing, government licenses, or benefits, or affecting a consumer's economic or financial status. Any such use may result in liability under the FCRA, and users agree to indemnify and hold harmless LedgerLinkSolutions, Inc., its officers, directors, agents, employees, partners, affiliates, licensors, and data providers from any third-party claims arising from such usage.

          <h3>12. DPPA Notice</h3>
          You acknowledge that you may conduct a motor vehicle record search through the Services and access the results solely for purposes permitted under the Driver's Privacy Protection Act of 1994 (DPPA), 18 U.S.C. § 2721, et seq., as amended, and as supplemented or restricted by the laws, rules, and regulations of the relevant state (collectively, 'DPPA Laws'). You confirm awareness of and adherence to DPPA Laws' requirements and restrictions, conducting searches only for authorized purposes. Acknowledging that misuse may lead to criminal fines and civil liability, including damages and legal fees, you agree to indemnify and hold harmless LedgerLinkSolutions, Inc., its affiliates, subsidiaries, officers, directors, agents, employees, partners, licensors, and data providers from any third-party claims arising from your violation of DPPA Laws.

          <h3>13. Business Terms</h3>
          <p>
            This Section 13 pertains to users engaging in business-related use-cases, including API Integration. Alongside your obligations in these Terms, you agree that:
          </p>

          <h4>A.</h4>
          <p>
            You are granted a limited, revocable, nontransferable, and nonexclusive license to access and use the Services and Content solely for your business purposes, specifically for acquiring used vehicles primarily for retail sale;
          </p>

          <h4>B.</h4>
          <p>
            We make no representations about the quantity, sufficiency, or quality of Reports provided to you. Purchases of reports on the Services are non-cancellable, and fees paid are non-refundable. Unauthorized use of any reports that are not fully paid for is prohibited.
          </p>

          <h4>C.</h4>
          <p>
            You agree not to: (i) sell any Content or information derived from Content; (ii) systematically access or retrieve reports available on the Services, including, but not limited to, through the use of bots or spiders; (iii) provide any Content or information derived from any Content to any party for the purpose of resale or remarketing; or (iv) make any representation or provide any warranty to any person or entity regarding VinRecodes, the Services, and/or the Content that is inconsistent with the provisions hereof and the information contained on the Content (including all disclaimers).
          </p>

          <h3>14. Links to Third-Party Sites</h3>
          <p>
            The Services may include links to third-party websites and integrations with third-party services. We are not responsible for examining or evaluating the content or accuracy of these third-party websites and do not warrant or assume any liability for their materials or services. We disclaim any liability for harm or damages related to the purchase or use of goods, services, resources, or content through any other party's websites or platforms. Users are advised to review the policies and practices of third-party websites before engaging in any transactions. Any claims or concerns regarding third-party content or services should be directed to the respective third party.
          </p>

          <h3>15. Security</h3>
          <p>We employ commercially reasonable measures to deliver the Services; however, you acknowledge that no internet transmission or security method is entirely foolproof. We cannot guarantee that your information won't be misused by third parties. We are not liable for the circumvention of privacy settings or security features, and you agree that we bear no responsibility for the misuse, access, acquisition, deletion, or disclosure of your information.</p>

          <h3>16. Disclaimers</h3>
          <p>We gather data about most vehicles sold in the United States from publicly available sources. As we do not generate original reports, such as recall notices, vehicle histories, or market values, we cannot ensure the accuracy and completeness of the information on our Services. We do not guarantee that information, including recall details, is available for all vehicles. Our Services' information may not meet your expectations, and we disclaim any liability for its accuracy and completeness. It's your responsibility to assess the information's accuracy, completeness, and usefulness. For the latest recall activity, contact your vehicle manufacturer.</p>

          <p>The Services offer information to aid your vehicle-related decisions. We advise combining this information with your independent research for better decision-making. You bear full responsibility for your decisions and transactions made using the Services</p>

          <p>You acknowledge that not all vehicles may have available information, and we may lack access to some data accessible to other parties. There could be a delay between receiving certain information and its inclusion in our Services. In case of erroneous information, our sole obligation, upon written notification from you, is to correct the identified information.</p>

          <p>You agree and understand that, unless otherwise specified, unpaid preliminary results may differ from paid member searches or reports.</p>

          <p>For the latest records regarding any vehicle featured on the Services, please contact the relevant state or local office, agency, or department.</p>

          <p>LedgerLinkSolutions, Inc. is not affiliated with the United States Government or any federal or state government agency.</p>

          <h3>17. No Warranties</h3>
          <p>TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, LedgerLinkSolutions PROVIDES ALL SERVICES, CONTENT, AND INFORMATION "AS IS" AND "AS AVAILABLE" WITH ALL FAULTS AND DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR FREE, ACHIEVE THEIR INTENDED RESULTS, OR BE ACCURATE. TO THE FULLEST EXTENT POSSIBLE UNDER APPLICABLE LAWS, LedgerLinkSolutions DISCLAIMS ALL WARRANTIES, EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR OTHER VIOLATIONS OF RIGHTS. YOUR USE OF THE SERVICES IS SOLELY AT YOUR OWN RISK.</p>

          <p>THERE ARE NO WARRANTIES RELATING TO ANY OF THE INFORMATION POSTED ABOUT VEHICLES ON THE SERVICES.</p>

          <h3>18. Limitation of Liability</h3>
          <p>LEDGERLINKSOLUTIONS IS NOT RESPONSIBLE FOR ANY PROBLEMS OR TECHNICAL MALFUNCTION OF ANY WEBSITE, NETWORK, COMPUTER SYSTEMS, SERVERS, PROVIDERS, COMPUTER EQUIPMENT, OR SOFTWARE, OR FOR ANY FAILURE DUE TO TECHNICAL PROBLEMS OR TRAFFIC CONGESTION ON THE INTERNET OR LedgerLinkSolutions, INC. SYSTEMS, OR COMBINATION THEREOF, INCLUDING ANY INJURY OR DAMAGE TO USERS OR TO ANY COMPUTER OR OTHER DEVICE ON OR THROUGH WHICH VinRecodes OR DATA IS PROVIDED. UNDER NO CIRCUMSTANCES WILL WE BE LIABLE FOR ANY LOSS OR DAMAGE, INCLUDING PERSONAL INJURY OR DEATH, RESULTING FROM USE OF VinRecodes OR INFORMATION, OR FROM THE CONDUCT OF ANY USERS OF https://vinrecodes.com/ OR INFORMATION, WHETHER ONLINE OR OFFLINE, INCLUDING ANY PRIVACY OR SECURITY BREACHES.</p>

          <p>LEDGERLINKSOLUTIONS, ITS PARENTS, SUBSIDIARIES, OFFICERS, DIRECTORS, MANAGERS, SHAREHOLDERS, EMPLOYEES, AGENTS, CONTRACTORS, OR LICENSORS, WILL NOT BE LIABLE TO YOU FOR (I) LOST INCOME, LOST PROFITS, LOSS OF DATA, ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL OR CONSEQUENTIAL DAMAGES, OR CLAIMS OF THIRD PARTIES, (II) ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF OR RELIANCE UPON THE COMPLETENESS OR ACCURACY OF ANY INFORMATION MADE AVAILABLE VIA THE SERVICES. THESE LIMITATIONS OF LIABILITY FOR SUCH LOSSES WILL APPLY EVEN IF WE HAVE BEEN ADVISED OF OR SHOULD HAVE BEEN AWARE OF THEIR POSSIBILITY.</p>

          <p>OUR AGGREGATE LIABILITY ARISING UNDER OR WITH RESPECT TO YOUR USE OF THE SERVICES WILL IN NO EVENT EXCEED ONE HUNDRED US DOLLARS ($100.00).</p>

          <h3>19. Indemnification</h3>
          <p>You agree to indemnify, defend, and hold harmless LedgerLinkSolutions and its affiliates, subsidiaries, officers, directors, agents, employees, partners, licensors, and data providers, along with each of their respective members, officers, directors, employees, agents, shareholders, co-branders, content licensors, suppliers, contractors, attorneys, and other partners, from any and all liabilities, claims, expenses (including reasonable attorneys' fees), damages, suits, costs, demands, and judgments made by any third party. These claims may arise from or be related to (i) your use of the Services or any Information obtained through the Services, (ii) your violation of these Terms of Service, (iii) your violation or infringement of any laws or rights of another individual or entity, or (iv) any actual, prospective, or terminated sale or other transaction between you and a third party.</p>

          <h3>20. ARBITRATION CLAUSE AND CLASS ACTION WAIVER – IMPORTANT – PLEASE REVIEW AS THIS AFFECTS YOUR LEGAL RIGHTS</h3>
          <h4>A. Arbitration Notice</h4>
          <p>You and we agree that any dispute or claim arising from or related to the Services and/or these Terms of Service (except for Exempt Claims, as defined below) will be resolved by confidential binding arbitration, rather than in court. This process begins by providing Notice of the Dispute to the other party, offering an opportunity to discuss resolution within thirty (30) days of such Notice. The Notice should be sent to: 227 Lewis Wharf Boston, MA 02110, and must include a description of the nature and basis of the claims being asserted, along with the relief sought.</p>

          <p>If you and we are unable to resolve the claims described in the Notice within thirty (30) days after the Notice is sent, you or we may initiate arbitration proceedings. There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including injunctive and declaratory relief or statutory damages) and must follow the provisions of these Terms of Service as a court would. There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including injunctive and declaratory relief or statutory damages) and must follow the provisions of these End User Terms as a court would. YOU ACKNOWLEDGE THAT YOU ARE VOLUNTARILY AND KNOWINGLY FORFEITING YOUR RIGHT TO A TRIAL BY JURY AND TO OTHERWISE PROCEED IN A LAWSUIT IN STATE OR FEDERAL COURT.</p>

          <p>The Federal Arbitration Act and federal arbitration law apply to the arbitration proceedings, which will be administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules and the Supplementary Procedures for Consumer-Related Disputes. All filing, administration, and arbitrator fees will be governed by the AAA's rules.</p>

          <p>The arbitration will take place in the State of Massachusetts or at another mutually agreed location. If the arbitration involves a consumer, it will be held at a location convenient to the consumer. If the relief sought is valued at $10,000 or less, either you or we may choose to conduct the arbitration by telephone or based solely on written submissions. This choice will be binding, subject to the arbitrator's discretion to mandate an in-person hearing if circumstances warrant. Attendance at an in-person hearing may be made by telephone, unless the arbitrator specifies otherwise.</p>

          <p>The arbitrator will adjudicate all claims in accordance with the laws of the State of Massachusetts, including recognized principles of equity, and will respect all privileges acknowledged by applicable law. The arbitrator will also resolve questions regarding the interpretation, applicability, or enforceability of this arbitration clause, unless a party files an Exempt Claim (as defined below) in court. In such cases, the court presiding over the Exempt Claim will determine its status. The arbitrator's award will be confidential, conclusive, and binding, and the judgment based on the arbitrator's decision may be entered in any court with jurisdiction.</p>

          <p>Despite any provision in these Terms of Service, you and we agree that if we modify this Section in the future (except for changes to notice addresses or website links), such changes will not apply to any claim filed against us before the effective date of the change. Additionally, if we attempt to terminate this Section, such termination will only be effective 30 days after the version of these Terms of Service containing this Section is posted on the websites. Termination will not apply to any claim filed against us before the effective termination date.</p>

          <p>CLASS ACTION WAIVER. YOU AND WE AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. If for any reason a claim proceeds in court rather than in arbitration, we each waive any right to a jury trial. We also both agree that you or we may bring suit in court to enjoin infringement or other misuse of intellectual property rights.</p>

          <p>EXEMPT CLAIMS: You and the Company agree that the following two types of claims are not required to be submitted to an arbitration subject to the following conditions:</p>

          (1)You or we are not obligated to arbitrate a claim filed individually in small-claims court. However, if there is an appeal from small-claims court or a change in the claim that prevents small-claims court resolution, the claim must be addressed through arbitration under the terms of this Arbitration Provision.
          (2)You or we are not compelled to arbitrate a claim filed individually to enjoin infringement or other misuse of intellectual property rights. Such a claim may be pursued in any court with competent jurisdiction. Both parties acknowledge that infringement or other misuse of intellectual property rights may result in irreparable harm, and the prevailing party in such an action is entitled to recover costs and fees, including reasonable attorneys' fees.
          OPT OUT: You have the option to opt-out of the mandatory arbitration provision by submitting a written request within 60 calendar days of agreeing to this Arbitration Provision. You can do so by mail to 227 Lewis Wharf Boston, MA 02110, including your name, address, and the date of the correspondence. This is the sole method for opting out.

          Claims and Disputes Must be Filed Within One (1) Year

          <p>To the extent allowed by law, and without diminishing the impact of any disclaimers stated herein, any legal action or claim related to your use of the Services, including websites, mobile applications, or other Service-related products, services, or content, must be initiated within one (1) year of the occurrence of the claim or cause of action. This provision is applicable to you, as well as your heirs, successors, and assigns.</p>

          <h3>21. General Provisions</h3>
          <h4>A. Governing Law and Jurisdiction</h4>
          <p>These Terms of Service shall be governed by and interpreted in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of laws principles.</p>

          <h4>B. Entire Agreement</h4>
          <p>These Terms of Service constitute the entire agreement between you and us, governing your use of the Services and superseding any prior agreements, (including any previous versions of these Terms of Service).</p>

          <h4>C. No Agency</h4>
          <p>No agency, partnership, joint venture, employee-employer, or franchiser-franchisee relationship is intended or created by these Terms of Service.</p>

          <h4>D. Severability</h4>
          <p>If any part of these Terms of Service is deemed invalid or unenforceable, the affected portion will be interpreted to reflect, as closely as possible, the original intentions of the parties in accordance with applicable law. The remaining provisions will continue to be valid and enforceable.</p>

          <h4>E. No Waiver</h4>
          <p>Our failure to enforce any right or provision in these Terms of Service does not constitute a waiver of that provision or any other provision. No waiver of any provisions in these Terms of Service is considered a waiver of any other provision, whether similar or not, and no waiver constitutes a continuing waiver.</p>

          <h3>22. Contact Us</h3>
          <p>If you have any questions or concerns about these Terms of Service or wish to contact us for any other reason, please click here to contact us or email us at support@vinrecodes.com/,</p>
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
