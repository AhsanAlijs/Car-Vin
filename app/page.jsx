import Image from "next/image";
import TestimonialCarousel from '@/app/_components/header/carousel';
import CarSearch from "./_components/header/car-search";
import {
  Award,
  Banknote,
  Cctv,
  Check,
  CircleCheckBig,
  ClipboardMinus,
  Dot,
  FileText,
  Gauge,
  HandCoins,
  History,
  IdCard,
  Package,
  Quote,
  Search,
  SearchCheck,
  ShieldCheck,
  Trash
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionHeader,
} from "@/app/_components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";
import logo1 from "@/app/_assets/home/black-book.webp";
import logo2 from "@/app/_assets/home/every-car-listed-logo.webp";
import logo3 from "@/app/_assets/home/kbb-logo.webp";
import logo4 from "@/app/_assets/home/nmvtis-logo.webp";
import man from "@/app/_assets/home/section4.png";
import woman from "@/app/_assets/home/section4-2.png";
import profile from "@/app/_assets/home/profile.webp";
import car1 from "@/app/_assets/home/car1.png";
import car2 from "@/app/_assets/home/car2.png";
import cartop from "@/app/_assets/home/car-top.webp";

export default function Home() {
  return (
    <>
      <header id="header" className="bg-hero flex h-full min-h-screen w-full items-center bg-cover bg-fixed bg-center bg-no-repeat text-white">
        <div className="max-w-screen-2xl mx-auto h-full w-full px-4">
          <Navbar />

          <div className="max-w-xl max-md:mx-auto">
            <h1 className="text-6xl font-bold max-md:text-5xl max-sm:text-4xl text-center">
              Get instant report
            </h1>

            <div className="flex justify-center items-center gap-4 w-full mt-2">
              <svg className="h-8 w-10"><use href="/country-flags.svg/#us" /></svg>
              <svg className="h-8 w-10"><use href="/country-flags.svg/#can" /></svg>
              <svg className="h-8 w-10"><use href="/country-flags.svg/#uk" /></svg>
              <svg className="h-8 w-10"><use href="/country-flags.svg/#nireland" /></svg>
            </div>

            <CarSearch />
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-screen-2xl mx-auto px-4 py-24">
          <div className="flex w-full gap-6 max-sm:gap-2 items-center justify-center  *:grayscale">
            <div className="w-full"><img src={logo4.src} alt="Logo" /></div>
            <div className="w-full"><img src={logo1.src} alt="Logo" /></div>
            <div className="w-full"><img src={logo2.src} alt="Logo" /></div>
            <div className="w-full"><img src={logo3.src} alt="Logo" /></div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 py-24">
          <div className="relative w-full min-h-[500px] h-full bg-cover bg-right bg-no-repeat rounded-md" style={{ backgroundImage: "url('/section2.jpg')" }}>
            <div className="w-full h-full min-h-[500px] text-neutral-700 flex items-center" style={{ background: 'linear-gradient(105deg, #fff 0%, #fff 45%, transparent 55%)' }}>
              <div>
                <h2 className="text-red-700 text-6xl font-bold">
                  Vin Recodes
                </h2>
                <p className="mt-6">
                  Purchase a vehicles reports
                </p>
                <p className="flex flex-col gap-2">
                  <span className="text-3xl font-medium text-red-700">$59.99</span>
                  <span>per report</span>
                </p>
                <p className="text-red-700 text-2xl font-medium">Limited time Offer!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="max-w-screen-2xl mx-auto px-4 py-24">
          <div className="text-center">
            <h3 className="max-sm:text-sm">Welcome to our website</h3>
            <h2 className="text-red-700 font-bold text-5xl max-sm:text-4xl">Our process</h2>

            <p className="mt-4">
              Access high-quality reports affordably through a VIN. Read how you will get reports
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-12 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center max-sm:gap-y-6">
            <div className="flex flex-col items-center max-w-80">
              <Search className="text-red-700" />
              <h4 className="mt-2 text-center text-lg text-red-700 uppercase font-medium">Search Vin</h4>
              <p className="mt-6 text-sm">
                Enter the Vehicle Identification Number (VIN) or US license plate for thorough research.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-80">
              <Package className="text-red-700" />
              <h4 className="mt-2 text-center text-lg text-red-700 uppercase font-medium">Choose Your Package</h4>
              <p className="mt-6 text-sm">
                Provide your contact details and complete process. Accept Terms & condition.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-80">
              <ClipboardMinus className="text-red-700" />
              <h4 className="mt-2 text-center text-lg text-red-700 uppercase font-medium">Purchase Your Report</h4>
              <p className="mt-6 text-sm">
                On successful payment you will be redirected to view your report.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-80">
              <ShieldCheck className="text-red-700" />
              <h4 className="mt-2 text-center text-lg text-red-700 uppercase font-medium">Verify Your Vehicle</h4>
              <p className="mt-6 text-sm">
                Successful payment you will received email. Please check your email inbox/junk/spam folder in 5 minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-24">
          <div className="grid grid-cols-2 gap-10 items-center max-sm:grid-cols-1">
            <div className="flex flex-col items-center">
              <Image className="rounded-full shadow-[0_0px_20px_2px_rgba(0,0,0,0.3)]" src={profile} alt="img" width={80} height={80} />
              <p className="text-xl mt-4 text-gray-500">Have any question?</p>
              <p className="text-2xl mt-4 font-medium text-red-700">
                support@vinrecodes.com
              </p>
            </div>

            <div className="overflow-hidden h-[220px] flex items-center justify-end w-full justify-self-end">
              <Image className="translate-x-44 hover:translate-x-0 transition duration-500 ease-in-out object-center" src={car1} width={800} height={200} alt="img" />
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-24 overflow-hidden">
          <div className="text-center">
            <h3 className="max-sm:text-sm">Each VIN History Report is Loaded with Comprehensive Information</h3>
            <h2 className="text-red-700 font-bold text-5xl max-sm:text-4xl">Our Services</h2>
          </div>

          <div className="grid grid-cols-8 max-md:grid-cols-6 max-sm:grid-cols-4 max-[468px]:grid-cols-2 gap-6 justify-items-center mt-12 max-w-screen-xl mx-auto">
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <History className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Title History
              </h4>

              <p className="mt-4 text-sm">
                Current and historical state DMV title details obtained from
                the National Motor Vehicle Title Information System (NMVTIS)
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <IdCard className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Registration Details
              </h4>

              <p className="mt-4 text-sm">
                This section outlines the current registration information for
                the vehicle and lists any previously reported registration
                events along with their respective dates.
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <Cctv className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Active and Recovered Theft
              </h4>

              <p className="mt-4 text-sm">
                Highlights instances when a vehicle has been reported as stolen, indicating either an ongoing theft (not yet located by law enforcement) or a recovered theft (found).
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <Award className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Warranty Details
              </h4>

              <p className="mt-4 text-sm">
                Details on factory warranties, including coverage for the
                drive train and safety systems, as reported by the vehicle's
                manufacturer.
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <Trash className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Junk / Salvage Details
              </h4>

              <p className="mt-4 text-sm">
                Up-to-date and historical information from junkyards,
                dismantlers, salvage auctions, and insurance companies offers
                insights into vehicles that might have experienced
                considerable damage, like being declared a total loss. It
                includes details such as the company name, date, type of
                damage, and final disposition
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <SearchCheck className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Title Brand Inspection
              </h4>

              <p className="mt-4 text-sm">
                Inspect over 70 current and historical title "brands,"
                covering negative classifications such as Junk, Salvage,
                Rebuilt, Flood Damage, and True Mileage Unknown. Title brands
                can indicate issues that affect the safety and value of your
                vehicle.
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <ShieldCheck className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Safety Recalls
              </h4>

              <p className="mt-4 text-sm">
                Comprehensive information on open and issued recalls from both
                the National Highway Traffic Safety Administration (NHTSA) and
                manufacturers. Includes details such as recall date,
                description, risk severity, guidance on driving or selling,
                and more.
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <HandCoins className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Open Liens
              </h4>

              <p className="mt-4 text-sm">
                Highlights any existing liens, indicating active loans from
                banks or finance companies that have not been fully settled.
                The report provides details such as the bank name and the date
                the loan was initiated, with data sourced from major
                automotive lenders.
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <Gauge className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Odometer Usage Record
              </h4>

              <p className="mt-4 text-sm">
                Access current and past odometer readings from DMV titles and various sources, revealing the evolution of mileage over time and potential signs of an odometer rollback.
              </p>
            </article>

            <div className="col-span-4 row-span-2 min-h-96 h-full w-full max-md:hidden">
              <div className="mx-auto relative w-full h-full min-h-96">
                <Image src={cartop} alt="car" width={""} height={""} className="absolute top-0 left-1/2 -translate-x-1/2 w-full object-cover translate-y-14 hover:-translate-y-0 transition-all ease-linear duration-300 max-w-96" />
              </div>
            </div>

            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <Banknote className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Vehicle Values
              </h4>

              <p className="mt-4 text-sm">
                Valuation details sourced from reputable providers offer
                insights into trade-in values, retail values, and other
                value ranges for various vehicle types, including cars and
                pickup trucks.
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <FileText className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Inspection Data
              </h4>

              <p className="mt-4 text-sm">
                Federal highway inspection records furnish details such as
                inspection dates, safety evaluations, driver-related
                issues, hazardous materials violations, and more.
              </p>
            </article>
            <article className="col-span-2 flex flex-col items-center">
              <div className="bg-red-700 p-4 rounded-full w-fit mx-auto text-white">
                <Check className="size-6" />
              </div>

              <h4 className="text-lg font-semibold mt-2">
                Additional Details
              </h4>

              <p className="mt-4 text-sm">
                Our reports encompass collision and damage data from
                select state and federal sources, NHTSA 5-star crash
                ratings, and comprehensive vehicle specifications derived
                from VIN decoding. We also provide information on vehicles
                available for sale and much more.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[linear-gradient(to_right,theme(backgroundColor.neutral.900)_50%,theme(backgroundColor.red.700)_50%,theme(backgroundColor.red.700)_100%)] max-sm:bg-[linear-gradient(to_bottom,theme(backgroundColor.neutral.900)_50%,theme(backgroundColor.red.700)_50%,theme(backgroundColor.red.700)_100%)] text-white">
          <div className="relative z-10 w-full min-h-48 grid grid-cols-2 max-sm:grid-cols-1">
            <div className="p-4 flex justify-between items-center max-lg:flex-col gap-4 max-w-2xl justify-self-end w-full">
              <img src={woman.src} alt="" className="order-first max-h-44" />
              <div>
                <p className="uppercase text-lg font-medium">Are you looking for a vehicle report?</p>
                <p className="mt-2">Search your VIN on our website</p>

                <a href="#header" className="px-4 py-2 text-sm  rounded-full text-red-700 mt-4 bg-white block w-max ">
                  Search
                </a>
              </div>
            </div>

            <div className="p-4 flex justify-between items-center max-lg:flex-col gap-4 max-w-2xl w-full">
              <img src={man.src} alt="" className="order-last max-h-44 max-lg:order-first" />
              <div>
                <p className="uppercase text-lg font-medium">Do you want to become a reseller?</p>
                <p className="mt-2">For any query</p>

                <button className="px-4 py-2 text-sm rounded-full text-red-700 mt-4 bg-white">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="max-w-screen-2xl mx-auto px-4 py-24">
          <div className="text-center">
            <h3 className="max-sm:text-sm">VIN recodes</h3>
            <h2 className="text-red-700 font-bold text-5xl max-sm:text-4xl">Our Management Team</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-12 items-center justify-center max-lg:grid-cols-1 justify-items-center">
            <div className="justify-self-center">
              <img src="/car-image.png" alt="" className="w-full max-w-md" />
            </div>

            <div className="max-w-xl">
              <h4 className="font-medium">
                Vin Recodes Products is founded by vehicle history data and automotive veterans with more than 70 years combined experience in the automotive market.
              </h4>

              <p className="mt-6">
                The founders adopted the NMVTIS data repository early on, becoming an authorized NMVTIS Consumer Access Provider in 2009.
                Vin Recodes Products utilizes real-time NMVTIS data, providing an affordable alternative to competitors.
                Our vehicle history check includes the latest DMV title information, salvage auction data, and insurance company total loss information, making Wheels History an approved service by the National Motor Vehicle Title Information System.
                With high-value data and analytics, Wheels History helps customers assess used vehicles more effectively, meeting the needs of dealers and other users.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-4 py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "linear-gradient(to right, #000000a9, #000000d3), url('/car-image2.jpg')" }}>
          <div className="text-center">
            <h3 className="text-white max-sm:text-sm">Check Out Our Packages</h3>
            <h2 className="text-red-700 font-bold text-5xl max-sm:text-4xl">Our Pricing</h2>
          </div>

          <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-4 mt-8 max-lg:grid-cols-1 justify-items-center">
            <article className="bg-white p-8 rounded-md max-w-96 w-full">
              <h4 className="font-bold text-xl text-center text-red-700 uppercase">
                Standard
              </h4>

              <p className="flex items-baseline justify-center mt-4">
                <span className="text-red-700 text-4xl font-bold">$59.99</span>
                <span className="">/per report</span>
              </p>

              <button className="bg-red-700 rounded-full px-8 py-2 text-white mx-auto block mt-4 text-sm shadow-md">
                Get report
              </button>

              <ul className="mt-8 flex flex-col gap-2 text-sm">
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Vehicle Specifications</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Vehicle Usage</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Market Value</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Transmission</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Service Recordes</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Owner History</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Vehicle Mileage</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Vehicle Check</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Damage Verfication</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Dot className="size-4 text-red-700" />
                  <span>HQ Car Images</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Dot className="size-4 text-red-700" />
                  <span>Aution</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Dot className="size-4 text-red-700" />
                  <span>Accident Record</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Dot className="size-4 text-red-700" />
                  <span>Sales History</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Dot className="size-4 text-red-700" />
                  <span>Inspection</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Dot className="size-4 text-red-700" />
                  <span>OEM Option & Package</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Dot className="size-4 text-red-700" />
                  <span>Detail Vehicles</span>
                </li>
              </ul>
            </article>
            <article className="bg-white p-8 rounded-md max-w-96 w-full">
              <h4 className="font-bold text-xl text-center text-red-700 uppercase">
                Extended
              </h4>

              <p className="flex items-baseline justify-center mt-4">
                <span className="text-red-700 text-4xl font-bold">$79.99</span>
                <span className="">/per report</span>
              </p>

              <button className="bg-red-700 rounded-full px-8 py-2 text-white mx-auto block mt-4 text-sm shadow-md">
                Get report
              </button>

              <ul className="mt-8 flex flex-col gap-2 text-sm">
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Vehicle Specifications</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Vehicle Usage</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Market Value</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Transmission</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Service Recordes</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Owner History</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Vehicle Mileage</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Vehicle Check</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Damage Verfication</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>HQ Car Images</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Aution</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Accident Record</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Sales History</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Inspection</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>OEM Option & Package</span>
                </li>
                <li className="flex gap-6 items-center">
                  <CircleCheckBig className="size-4 text-red-700" />
                  <span>Detail Vehicles</span>
                </li>
              </ul>
            </article>
            <article className="bg-white p-8 rounded-md max-w-96 w-full">
              <h4 className="font-bold text-xl text-center text-red-700 uppercase">
                Enterprise
              </h4>

              <p className="text-xl font-bold mt-4">
                Do you need more reports?
              </p>

              <p className="mt-2 text-sm">
                Unlimited search subscription, you can run as many VIN checks as you desire
              </p>

              <button className="bg-red-700 rounded-full px-8 py-2 text-white mx-auto block mt-4 text-sm shadow-md">
                Contact us
              </button>
            </article>
          </div>
        </section>

        <section id="why-choose-us" className="max-w-screen-2xl mx-auto px-4 py-24">
          <div className="text-center">
            <h3 className="max-sm:text-sm">VIN recodes</h3>
            <h2 className="text-red-700 font-bold text-5xl max-sm:text-4xl">Why Choose Us</h2>
          </div>

          <div className="grid w-full grid-cols-2 gap-4 mt-10 justify-items-center max-sm:grid-cols-1">
            <div className="max-w-xl">
              <p>
                Vin Recodes History Title and History Reports brings you great data, a dealer-friendly service, knowledgeable management and customer service team that cannot be matched.
              </p>

              <ul className="flex flex-col gap-2 mt-4">
                <li className="flex gap-4 items-center">
                  <Check strokeWidth={3} className="size-6 text-red-700 shrink-0" />
                  <span>Provides real-time title data from NMVTIS, a US government agency</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Check strokeWidth={3} className="size-6 text-red-700 shrink-0" />
                  <span>Data matches state DMVs. Most up-to-date data in market</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Check strokeWidth={3} className="size-6 text-red-700 shrink-0" />
                  <span>Better title, salvage and insurance total loss information indicating major damage</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Check strokeWidth={3} className="size-6 text-red-700 shrink-0" />
                  <span>Unique active theft, open recall, open lien and vehicle value data not available from other vendors</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Check strokeWidth={3} className="size-6 text-red-700 shrink-0" />
                  <span>Powerful dealer dashboard with batch reporting and printing capability</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Check strokeWidth={3} className="size-6 text-red-700 shrink-0" />
                  <span>Friendly terms and pricing that won’t lead you to spend more per report than you think you are</span>
                </li>
              </ul>

              <button className="bg-red-700 text-white rounded-full mt-6 flex py-2 px-4 gap-2 items-center">
                <span className="border-r border-white pr-2">
                  <FileText className="size-6" />
                </span>
                <span>View sample report</span>
              </button>
            </div>

            <div>
              <Image src={car2.src} width={900} height={430} className="w-full" />
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 py-24">
          <div className="text-center">
            <h3 className="max-sm:text-sm">What our happy clients say about us</h3>
            <h2 className="text-red-700 font-bold text-5xl max-sm:text-4xl">Our testimonial</h2>
          </div>

          <TestimonialCarousel>
            {testimonials.map((testimonial, i) => (
              <figure key={i} className="flex items-center justify-between w-full rounded-lg flex-col gap-4 shadow-lg select-none max-w-72 justify-self-center p-4">
                <Quote className="text-red-700 size-8 self-start" fill="#b91c1c" />

                <blockquote className="w-full text-sm">
                  {testimonial.text}
                </blockquote>

                <figcaption className="text-lg font-medium w-full text-red-700 max-sm:text-base text-right">
                  - {testimonial.name}
                </figcaption>
              </figure>
            ))}
          </TestimonialCarousel>
        </section>

        <section id="faqs" className="max-w-screen-2xl mx-auto px-4 py-24">
          <div className="text-center">
            <h3 className="max-sm:text-sm">Have a question? Please check our knowledgebase first.</h3>
            <h2 className="text-red-700 font-bold text-5xl max-sm:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="general">
              <TabsList className="flex justify-center max-md:flex-col max-md:h-auto max-md:max-w-full max-md:rounded-md items-center rounded-full *:font-normal *:uppercase max-w-max mx-auto mb-6">
                <TabsTrigger value="general" className="text-sm rounded-full data-[state=active]:bg-red-700 data-[state=active]:text-white">
                  Genenral Information
                </TabsTrigger>
                <TabsTrigger value="api" className="text-sm rounded-full data-[state=active]:bg-red-700 data-[state=active]:text-white">
                  API &amp; Subscriptions
                </TabsTrigger>
                <TabsTrigger value="dealer" className="text-sm rounded-full data-[state=active]:bg-red-700 data-[state=active]:text-white">
                  Dealer Program
                </TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Accordion type="single" collapsible className="max-w-screen-md mx-auto">
                  {faqs.general.map((faq, i) => <FAQAccordionItem heading={faq.heading} value={i+1} key={i}>{faq.content}</FAQAccordionItem>)}
                </Accordion>
              </TabsContent>
              <TabsContent value="api">
                <Accordion type="single" collapsible className="max-w-screen-md mx-auto">
                  {faqs.api.map((faq, i) => <FAQAccordionItem heading={faq.heading} value={i+1} key={i}>{faq.content}</FAQAccordionItem>)}
                </Accordion>
              </TabsContent>
              <TabsContent value="dealer">
                <Accordion type="single" collapsible className="max-w-screen-md mx-auto">
                  {faqs.dealer.map((faq, i) => <FAQAccordionItem heading={faq.heading} value={i+1} key={i}>{faq.content}</FAQAccordionItem>)}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="px-4 py-12 bg-red-700 text-white text-center">
          <div className="max-w-screen-lg mx-auto">
            <h2 className="font-bold text-5xl max-sm:text-4xl">Disclaimer</h2>
            <p className="mt-8">
              Dear valued customers in light of recent scams, we would like to inform you about an uptick in fraudulent SMS marketing falsely associated with our website. Please be aware that these messages have no connection to us. As authorized licensed resellers for the official NMVTIS data provider, we utilize only SEO and Social Media Marketing to drive traffic to our website, ensuring the provision of accurate and detailed reports. Thank you for your trust and loyalty.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

const testimonials = [
  {
    name: "John Doe",
    text: "I highly recommend Vinrecodes to anyone in need of a reliable and thorough vehicle history check. Their service exceeded my expectations, and I will definitely be using them again in the future!",
  },
  {
    name: "Michael Bean",
    text: "I highly recommend Vinrecodes to anyone in need of a reliable and thorough vehicle history check. Their service exceeded my expectations, and I will definitely be using them again in the future!",
  },
  {
    name: "Mellissa Doe",
    text: "It gave me all the information I needed to feel confident about my purchase. Thanks to their thorough and reliable service, I found the perfect car without any worries. Highly recommend.",
  },
  {
    name: "John Doe",
    text: "I can't thank Vehicle Report enough! Their detailed vehicle report helped me make a confident decision when buying my used car. It was thorough, easy to understand, and gave me all the information I needed. With their service, I found a great car without any worries. Highly recommend!",
  },
];

function FAQAccordionItem({ value, heading, children }) {
  return (
    <AccordionItem value={value}>
      <AccordionHeader asChild>
        <h4>
          <AccordionTrigger className="text-left">{heading}</AccordionTrigger>
        </h4>
      </AccordionHeader>
      <AccordionContent>
        {children}
      </AccordionContent>
    </AccordionItem>
  )
}

const faqs = {
  general: [
    {
      heading: "How extensive are your VIN reports?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Vin Reports</h4>
          <p>
            Our reports encompass crucial details such as Brand Records, Junk/Salvage/Total Loss status, Odometer Readings, Title Records, Prior Theft Records, and more. We provide comprehensive information to support your informed decision-making process!
          </p>
        </>
      ),
    },
    {
      heading: "Do you cover all vehicle makes?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">VIN Checker</h4>
          <p>
            Our VIN checker caters to all major makes and models of automobiles registered in the US, Europe, and Canada. Conduct a VIN search or use the License Plate to look up the vehicle.
          </p>
        </>
      ),
    },
    {
      heading: "What if I can't find any information?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Customer Service</h4>
          <p>
            Our proficient customer service team is available 24/7 to assist you in locating the information you need. Contact them at support@vinrecodes.com. If, for any reason, our search experts cannot find your information, we offer a refund!
          </p>
        </>
      ),
    },
    {
      heading: "How can I cancel my account?",
      content: (
        <>
          <p>
            Cancel your account by selecting the "Disable" option on your "My Account" page or reach out to our dedicated customer service at support@vinrecodes.com.
          </p>
        </>
      ),
    },
    {
      heading: "How many reports can I generate?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Unlimited Reports</h4>
          <p>
            With our unlimited search subscription, you can run as many VIN checks as you desire! Additionally, we offer the option to purchase extra premium data points per report for a nominal fee. For this, contact us at support@vinrecodes.com.
          </p>
        </>
      ),
    },
    {
      heading: "Is Your VIN Lookup Service Accurate and Reliable?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">VIN Lookup</h4>
          <p>
            Absolutely, our VIN Lookup service is highly trustworthy and precise. We derive our data from well-established public and private databases, ensuring the highest levels of accuracy and reliability in our service. We are also an authorized source for the American Association of Motor Vehicle Administrators' NMVTIS database, reinforcing the accuracy of our service.
          </p>
        </>
      ),
    },
  ],
  api: [
    {
      heading: "What is API for cars?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">API for cars</h4>
          <p>
            A car data API (Application Programming Interface) provides a standardized way for developers and automotive businesses to interact with vehicle-related data and gather information. It allows access to details such as vehicle make, model, year, manufacturer information, VIN (Vehicle Identification Number), mileage, fuel efficiency, and more.
          </p>
        </>
      ),
    },
    {
      heading: "What solutions for enterprise?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Enterprise Class technologies available for commercial and programmatic access.</h4>
          <p>
            Vin Recodes has successfully integrated with a diverse and complex customer base and has a deep understanding and history supporting custom client integrations.
          </p>
          <p>
            Vin Recodes works with the most trusted data sources and brands in the industry and across the country to provide real-time, robust, detailed, and accurate vehicle information. Wheel History Products provides a suite of customizable data services to auto, motorcycle and specialty vehicle dealers and dealership service centers as well as insurance agencies, financial institutions, lenders, auctions, fleet operators, affiliates, and resellers.
          </p>
        </>
      ),
    },
    {
      heading: "API Access",
      content: (
        <>
          <p>
            The Vin Recodes API allows companies in the automotive and specialty industries to programmatically leverage Vin Recodes' unique information and intelligence. Together with our trusted data partners, we have access to one of the largest automotive, motorcycle, and specialty vehicle databases with real-time access to over a billion records.
          </p>
          <p>
            Vin Recodes provides programmatic API access for a full range of VIN-based data including:
          </p>
          <ul className="list-disc list-inside">
            <li>DMV State Title</li>
            <li>Salvage Status</li>
            <li>Junk and Insurance Company Total Loss</li>
            <li>Lien</li>
            <li>Stolen and Recovered Vehicle Records</li>
            <li>Accident</li>
            <li>Inspection and Condition Reports</li>
            <li>Mechanical Condition Readings</li>
            <li>Vehicle Specifications</li>
            <li>Factory Build Data</li>
          </ul>
        </>
      ),
    },
  ],
  dealer: [
    {
      heading: "Dealerships",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Enhance Car Dealerships with Vehicle Data APIs</h4>
          <p>
            Are you a car dealership looking to elevate your dealership's website or mobile application to new heights? If so, you need to consider integrating vehicle data APIs into your website and mobile applications. These APIs can provide you with a wealth of information about vehicles, including their specifications, market value, history, and more.
          </p>
        </>
      ),
    },
    {
      heading: "How do I integrate the APIs into my website or application?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Integrate the APIs</h4>
          <p>
            Integrating our APIs into your website or application is a straightforward process. We provide comprehensive documentation and an advanced team to provide support and guide you through the integration steps whenever necessary.
          </p>
        </>
      ),
    },
    {
      heading: "Can I customize the API to match my dealership's branding?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Dealership's branding</h4>
          <p>
            Yes, our APIs can be customized to align with your dealership’s branding. You can seamlessly incorporate the APIs into your website or application, ensuring a consistent and branded experience for your customers. To customize your API, please contact us at support@vinrecodes.com.
          </p>
        </>
      ),
    },
    {
      heading: "Are the APIs compatible with different programming languages?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Programming Languages</h4>
          <p>
            Yes, our dealer service APIs are designed to be compatible with a wide range of programming languages. Whether you’re using Java, Python, PHP, React, or any other popular language, you can easily integrate our APIs into your existing technology stack.
          </p>
        </>
      ),
    },
    {
      heading: "How frequently is the data updated?",
      content: (
        <>
          <h4 className="text-base font-medium text-red-700 mb-2">Data Updates</h4>
          <p>
            We understand the importance of accurate and up-to-date data. Our APIs are continuously updated in real-time, ensuring that you have access to the most current and reliable dealership data about vehicles, market values, recalls, and more.
          </p>
        </>
      ),
    },
    {
      heading: "What security measures are in place to protect customer data?",
      content: (
        <>
          <p>
            Data security is a top priority for us. We employ industry-standard encryption protocols and follow best practices to safeguard customer data. Your dealership, customer, and mobile dealer data information are protected through secure transmission channels and stringent access controls.
          </p>
        </>
      ),
    },
  ]
}