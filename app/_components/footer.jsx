import { ChevronsRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact-us" className="bg-neutral-800">
        <section className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-center gap-12 p-16 max-lg:flex-col max-lg:items-center max-lg:justify-center   ">
            <div className=" flex items-start gap-6 flex-col w-full" >
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
  )
}