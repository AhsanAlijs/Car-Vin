"use client"

import {
  Check,
  ChevronsRight,
  Clock2,
  FileText,
  Mail,
} from 'lucide-react';
import Navbar from '@/app/_components/navbar';

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., send data to an API)
    alert('Form submitted!');
  };
  return (
    <>
      <header id="header" className="flex w-full items-center text-white">
        <div className="max-w-screen-2xl mx-auto h-full w-full px-4">
          <Navbar />
        </div>
      </header>

      <div className="max-w-screen-2xl mt-20 mx-auto p-6">
        <div className="header text-center mb-10">
          <h1 className="text-4xl font-bold">Have Questions? Get In Touch!</h1>
          <p className="text-gray-600 mt-4">We're excited to hear from you and start something special together.</p>
        </div>

        <div className="flex items-center justify-evenly gap-10 max-md:flex-col border-b pb-4  ">
          {/* Form Container */}
          <div className="form-container w-2/3 max-sm:w-full ">
            <h2 className="text-2xl font-semibold mb-4">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="col-span-2 md:col-span-1 p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="col-span-2 md:col-span-1 p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                placeholder="Receipt Number (If available)"
                className="col-span-2 p-3 border border-gray-300 rounded"
              />
              <select className="col-span-2 p-3 border border-gray-300 rounded" required>
                <option value="">Select Reason</option>
                <option value="support">Support</option>
                <option value="inquiry">Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
              <textarea
                placeholder="Message"
                className="col-span-2 p-3 border border-gray-300 rounded h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="col-span-2 p-3 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="contact-details w-1/3 max-md:w-2/3 max-sm:w-full bg-gray-800 text-white p-6 rounded">
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-red-500 pb-2">
              Contact Details
            </h3>
            <p className="mb-4">For information and help, contact us via the following emails:</p>
            <p className="mb-2">
              <strong>Send Email:</strong>{' '}
              <a href="mailto:support@vinrecodes.com" className="text-red-500 hover:underline">
                support@vinrecodes.com
              </a>
            </p>
            <p className="mb-2">
              <strong>For More Info:</strong>{' '}
              <a href="mailto:info@vinrecodes.com" className="text-red-500 hover:underline">
                info@vinrecodes.com
              </a>
            </p>
            <p>
              <strong>Live Chat Support 24/7:</strong>{' '}
              <a href="#" className="text-red-500 hover:underline">Click Here</a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center mt-10 max-md:flex-col max-md:items-center max-md:justify-center gap-16">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <span className="p-6 border-2 border-red-600 text-red-600 rounded-full">
                <Clock2 size={40} />
              </span>
              <h4 className="text-lg font-semibold mb-2">Opening Hours</h4>
            </div>
            <p className="text-gray-600">Mon - Fri 9am - 5pm</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <span className="p-6 border-2 border-red-600 text-red-600 rounded-full">
                <Check strokeWidth={3} size={40} />
              </span>
              <h4 className="text-lg font-semibold mb-2">Our Support Center</h4>
            </div>
            <p className="text-gray-600">
              Iste natus error sit sed ut perspiciatis unde omnis voluptatem laudantium, totam rem aperiam.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <span className="p-6 border-2 border-red-600 text-red-600 rounded-full">
                <FileText size={40} />
              </span>
              <h4 className="text-lg font-semibold mb-2">Some Information</h4>
            </div>
            <p className="text-gray-600">
              Totam rem aperiam sed ut perspiciatis unde omnis iste natus error sit voluptatem laudantium.
            </p>
          </div>
        </div>

      </div>

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
