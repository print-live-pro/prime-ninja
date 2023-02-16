import Image from "next/image"
import Link from "next/link";
import React from "react"
import { CarouselImg1, CarouselImg2, CarouselImg3 } from "../../public/assets"
import plusAdded from "../../public/plus_added.png";

const Hero = () => {
  return (
    <div className="w-[80vw] mx-auto">
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-[100vw] h-[86vh]">
            <Image src={CarouselImg1} className="w-[100vw] object-cover" alt="hp printer" />
            <div className="carousel-caption hidden md:block absolute left-0 text-center">
              <h5 className="text-xl text-white font-bold">Home Printer</h5>
              <p className="text-white">
                Print, Scan, and Copy Documents, files, project utilities. 
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-[86vh]">
            <Image src={CarouselImg2} className="w-[100vw] object-cover" alt="lg printer" />
            <div className="carousel-caption hidden md:block absolute left-0 text-center">
              <h5 className="text-xl text-white font-bold">Office Printer</h5>
              <p className="text-white">
                  Copy, Scan, Fax documents to share with colleagues.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-[86vh]">
            <Image src={CarouselImg3} className="w-[100vw] object-cover" alt="dell printer3" />
            <div className="carousel-caption hidden md:block absolute  text-center">
              <h5 className="text-xl text-white font-bold">Wireless Printer</h5>
              <p className="text-white">
                connect printer wireless and do stuff smoothly.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    <section class="mt-4">
      
      <div class="flex rounded">
        <div class="bg-blue-600 relative flex-1 flex flex-col">
          <div class="w-[90%] top-[10%] absolute right-0 flex-1 flex gap-8 text-white text-5xl font-bold ">
            <div class="w-[100px] rounded-full">
              <Image src={plusAdded} className={'w-[100px]'} style={{transform:"scale(1.01)"}} alt=""/>
              {/* <img style="transform: scale(1.01);" class="w-[100px]" src="./plus_added.png" alt=""/> */}
              </div>
            <div>
            Exclusive Support
            Expert Instant<br/>
            <span class="font-bold text-3xl">Chat us to speak with a live support expert.</span>
          </div>
          </div>
           {/* <div class="gradient-1 w-[100%] h-[100px] flex-0.5"></div>
                    <div class="gradient-1 w-[100%] flex-0.5 h-[100px]"></div>  */}
          <div class="p-8 absolute border-2 border-black bg-white w-[90%] top-[50%] right-0 rounded-lg">
            <div class="flex gap-4">
              <svg class="!opacity-50 border-2 border-black w-[50px] h-[50px] p-1 rounded-full"
                xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="128" cy="140" r="40" fill="none" stroke="#000000" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></circle>
                <path d="M196,116a59.8,59.8,0,0,1,48,24" fill="none" stroke="#000000" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></path>
                <path d="M12,140a59.8,59.8,0,0,1,48-24" fill="none" stroke="#000000" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></path>
                <path d="M70.4,216a64.1,64.1,0,0,1,115.2,0" fill="none" stroke="#000000" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></path>
                <path d="M60,116A32,32,0,1,1,91.4,78" fill="none" stroke="#000000" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></path>
                <path d="M164.6,78A32,32,0,1,1,196,116" fill="none" stroke="#000000" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></path>
              </svg>
              <div class="prose-lg text-3xl font-bold flex-1">Please contact to our live chat agent for instant support
              </div>
            </div>
            <ul>
              <li><span class="text-2xl">&#x2022;</span> Get fast and complimentary support by calls our experts. We
                want to help!
                 </li>          
              </ul>
            <div>
                  <h2 className='text-3xl font-bold text-center mt-10 mb-5'>Toll Free (USA/CA): +1-844-557-0415</h2>
            </div>
            <div class="text-blue-600 text-center">
            <Link href="/download"><div className="w-[400px] mx-auto bg-blue-600 p-2 px-10 shadow text-white mt-2 rounded no-underline cursor-pointer">CLICK HERE FOR PRINTER SETUP</div></Link>
            </div>
          </div>
        </div>
        <div class="relative bg-blue-600">
          <img src="./cover_photo.webp" class="flip-img h-[45vh] clip-path" alt="cover image" />
        </div>
      </div>
    </section>
    
    <section class="mt-[20vh]">
      <div class="flex gap-4 items-stretch flex-wrap">
        <div class="flex-1">
          <img src="./printer.webp" class="rounded-lg h-[200px] w-full object-cover" alt="Picture" />
        </div>
        <div class="p-4 py-8 flex-1 flex flex-col justify-between">
          <h1>How to setup your printer</h1>
          <p>
            Click Printer Setup for step by step guidance on how to setup
            configure and register your printer.
          </p>
          <div class="mt-4">
            <Link href="/download">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">Printer Setup</div></Link>
          </div>
        </div>
      </div>
    </section>
    <hr class="mt-12 mb-8" />
//     <section>
//       <div class="flex items-cente mb-4">
//         <Link href="/contact-us">
//           <div className="p-8 border-r-2 box-border border-2 border-l-transparent border-t-transparent border-b-transparent flex-1 cursor-pointer hover:border-2 hover:border-black hover:rounded-lg">
//           <figure class="flex flex-col items-center">
//             <img src="./download.png" class="icon" alt="Download Icon"/>
//             <figcaption class="mt-2 font-thin tracking-wider">
//               Download Drivers
//             </figcaption>
//           </figure>
//           </div>
//         </Link>
//         <Link href="/contact-us">
//           <div className="p-8 border-r-2 box-border border-2 border-l-transparent border-t-transparent border-b-transparent flex-1 cursor-pointer hover:border-2 hover:border-black hover:rounded-lg">
//           <figure class="flex flex-col items-center">
//             <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000"
//               viewBox="0 0 256 256">
//               <rect width="256" height="256" fill="none"></rect>
//               <circle cx="128" cy="128" r="88" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="16">
//               </circle>
//               <line x1="128" y1="128" x2="167.6" y2="88.4" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></line>
//               <line x1="104" y1="8" x2="152" y2="8" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></line>
//             </svg>
//             <figcaption class="mt-2 font-thin tracking-wider">
//               Check Warranty Status
//             </figcaption>
//           </figure>
//           </div>
//         </Link>
//         {/* <!-- <button onclick="zChat.sendChatMsg('hello', function(err) { console.log(err) });">Chat Open</button> --> */}
//         <Link href="/contact-us">
//           <div className="p-8 border-r-2 box-border border-2 border-l-transparent border-t-transparent border-b-transparent flex-1 cursor-pointer hover:border-2 hover:border-black hover:rounded-lg">
//           <figure class="flex flex-col items-center">
//             <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000"
//               viewBox="0 0 256 256">
//               <rect width="256" height="256" fill="none"></rect>
//               <path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></path>
//               <path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></path>
//               <path
//                 d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z"
//                 fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
//             </svg>
//             <figcaption class="mt-2 font-thin tracking-wider">
//               Contact Us
//             </figcaption>
//           </figure>
//           </div>
//         </Link>
//         <Link href="javascript:$zopim.livechat.window.show();" class="p-8 flex-1">
//           <div className="p-8 border-r-2 box-border border-2 border-l-transparent border-t-transparent border-b-transparent flex-1 cursor-pointer hover:border-2 hover:border-black hover:rounded-lg">
//           <figure class="flex flex-col items-center">
//             <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000"
//               viewBox="0 0 256 256">
//               <rect width="256" height="256" fill="none"></rect>
//               <circle cx="128" cy="140" r="40" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></circle>
//               <path d="M196,116a59.8,59.8,0,0,1,48,24" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></path>
//               <path d="M12,140a59.8,59.8,0,0,1,48-24" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></path>
//               <path d="M70.4,216a64.1,64.1,0,0,1,115.2,0" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></path>
//               <path d="M60,116A32,32,0,1,1,91.4,78" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></path>
//               <path d="M164.6,78A32,32,0,1,1,196,116" fill="none" stroke="#000000" stroke-linecap="round"
//                 stroke-linejoin="round" stroke-width="16"></path>
//             </svg>
//             <figcaption class="mt-2 font-thin tracking-wider">
//               Ask Our Virtual Agent
//             </figcaption>
//           </figure>
//           </div>
//         </Link>
//       </div>
//     </section>
    <hr class="mt-4 mb-8" />
    <h6 class="text-center prose text-3xl my-12">Find Your Solution Below</h6>
    <section class="flex gap-4 items-stretch mb-10">
      <div class="flex-1 flex flex-col p-2 items-center justify-between">
        <img src="./window_logo.jpeg" class="h-[80px] w-full object-contain" />
        <div class="mt-4 prose-slate text-md text-center gap-2 flex flex-col mb-4">
          <h1 class="text-2xl">Scan/Printer Stopped working after upgrading to windows 11?</h1>
          <p class="text-lg">Try these troubleshooting steps to fix the scan and/or print issues.</p>
        </div>
        <div>
          <Link href="/download">
            <div className="!inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
            Fix Scan/Print
            </div>
          </Link>
        </div>
      </div>
      <div class="flex-1 flex flex-col p-2 items-center justify-between">
        <div class="text-center">
          <svg class="mx-auto h-[80px] opacity-20" xmlns="http://www.w3.org/2000/svg" width="192" height="192"
            fill="#000000" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <circle cx="128" cy="128" r="96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="16"></circle>
            <circle cx="128" cy="180" r="12"></circle>
            <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="#000000" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="16"></path>
          </svg>
        </div>
        <div class="mt-4 prose-slate text-md text-center gap-2 flex flex-col mb-4">
          <h1 class="text-2xl">Instant Link Support</h1>
          <p class="text-lg">Need Help with Instant Link? Find solution and helpful tips on our Instant link Support
            page.</p>
        </div>
        <div>
          <Link href="/download">
            <div className="!inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
            Get Support
            </div>
          </Link>
        </div>
      </div>
      <div class="flex-1 flex flex-col p-2 items-center justify-between">
        <img src="./printer.jpg" class="h-[80px] w-full object-cover" />
        <div class="mt-4 prose-slate text-md text-center gap-2 flex flex-col mb-4">
          <h1 class="text-2xl">Scan/Printer Stopped working after upgrading to windows 11?</h1>
          <p class="text-lg">Use this Windows automated tool to diagnose and fix printer offline and print jobs stuck in
            queue.</p>
        </div>
        <div>
          <Link href="/download">
            <div className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
            Print and Scan Doctor
            </div>
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
