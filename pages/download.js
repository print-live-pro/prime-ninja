import React, { useEffect } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head"
import Link from "next/link";

const Download = () => {
    useEffect(()=>{
        document.body.style.background = '#C7DBE6'
        return () => {
            document.body.style.background = 'transparent'
        }
    },[])
    return (
        <>
  <header class="max-w-screen-xl mx-auto my-4 flex items-center gap-8 border-grey">
    <div>
      <img src="./logo_copy.svg" class="w-[80px] h-[80px]" alt="logo" />
    </div>
    <div>
      <h1 class="prose text-3xl text-black">Customer Support - Software and Driver Downloads</h1>
    </div>
  </header>
  <div class="max-w-screen-xl mx-auto border-b-[2px] mb-4"></div>
  <main class="max-w-screen-xl mx-auto bg-blue-600 flex">
    <header class="p-4 text-white">
      <span class="opacity-50"> Identify &#62;</span> <span class=" text-white  opacity-100">Download &#62;</span><span
        class="opacity-50"> Install</span>
    </header>
  </main>
  <section class="mt-8 max-w-screen-xl mx-auto">
    <div class="flex space-x-80 mb-5
      ">
      <div class="prose text-3xl mb-2">
        Software & Driver: idenitfy your printer
      </div>
      <ul class="flex flex-nowrap flex-row-reverse space-x-4 space-x-reverse">

        <li> <img class="h-12" src="./Device_other.svg" alt=""/></li>
        <li><img class="h-12" src="./Device_desktop.svg" alt=""/></li>
        <li><img class="h-12" src="./Device_laptop.svg" alt=""/></li>
        <li><img class="h-12" src="./Device_printer.svg" alt=""/></li>
      </ul>
    </div>
    <hr class="mb-2" />
    <div class="flex">
      <div class="flex-1 p-4 border-r-2 border-grey">
        <p>Enter your product name</p>
        <div class="flex gap-8 py-10">
          <input type="text" className="flex-1 rounded border-black border opacity-50" placeholder="Example:Office Jet 8790" />
          <Link href="/error-product">
            <div className="bg-black text-white px-4 py-2 rounded cursor-pointer">
                Submit</div></Link>
        </div>
        <button type="button"
          class="inline-block text-black font-medium text-xs leading-tight text-hpblue underline rounded "
          data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
          Find Your Model Number ?
        </button>
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable"
          aria-modal="true" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
            <div
              class="modal-content border-none shadow-lg p-8 relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <img src="./printer_model_number.png" />
              <p class="border-t-2 pt-4">Look at the printer’s TOP or FRONT, you must get the written model number over
                there. The model number should look like this: “s2830dn”.</p>
            </div>
          </div>
        </div>

      </div>
      <div class="flex-1 p-4">
        <p>Examples of where to find your product name</p>
        <div id="carouselExampleControls" class="carousel slide relative " data-bs-ride="carousel">
          <div class="carousel-inner relative w-full overflow-hidden ">
            <div class="carousel-item active relative float-left w-full">
              <img  class="h-96" src="./Slide 16_9 - 2.png" className="block w-full" alt="Wild Landscape" />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img class="h-96" src="./Slide 16_9 - 1.png" className="block w-full" alt="Camera" />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img class="h-96" src="./Slide 16_9 - 3.png" className="block w-full" alt="Exotic Fruits" />
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <footer class="bg-black p-4">
    <div class="flex max-w-screen-xl mx-auto h-72 space-x-4 text-white justify-between pt-10 pb-10">
      <section>
        <div class="font-bold text-lg pb-4">Contact Info</div>
        <ul>
          <li class="pt-2">
            {/* <label class="font-semibold">PHONE:</label><span class="text-slate-500 hover:text-white">
              Toll free +1-844-801-5770 </span> */}
            </li>
          <li class="pt-2"><label class="font-semibold">EMAIL:</label><span
              class="text-slate-500 hover:text-white"> support@printlivepro.com</span></li>
          <li class="pt-2"><label class="font-semibold">ADDRESS:</label> <span
              class="text-slate-500 hover:text-white">297 K 15th St, Jock, FL 33704</span> </li>
        </ul>
      </section>
      <section>
        <div class="font-bold text-lg pb-4">My Account</div>
        <ul>
          <li class="text-slate-500 hover:text-white">
            <a href="https://www.printlivepro.com/privacy-policy">    Privacy Policy</a>
        </li>
          <li class="pt-2 text-slate-500 hover:text-white">
            <a href="https://www.printlivepro.com/terms-condition">    Refund and Return Policy </a>
        </li>
          <li class="pt-2 text-slate-500 hover:text-white">
            <a href="https://www.printlivepro.com/terms-condition">    Terms and Condition</a>
        </li>
          <li class="pt-2 text-slate-500 hover:text-white">
            <a href="https://www.printlivepro.com/disclaimer">    Disclaimer</a>
        </li>
        </ul>
      </section>
      <section>
        <div class="font-bold text-lg pb-4">Quick Links</div>
        <ul>
          <li class="text-slate-500 hover:text-white">
            <a href="https://www.printlivepro.com/">    Home</a>
        </li>
          <li class="pt-2 text-slate-500 hover:text-white">
            {/* <a href="https://smartapplianceonline.com/blog/">    Blog</a> */}
        </li>
          <li class="pt-2 text-slate-500 hover:text-white">
            <a href="https://www.printlivepro.com/about-us">    About Us</a>
        </li>
          <li class="pt-2 text-slate-500 hover:text-white">
            <a href="https://www.printlivepro.com/contact">    Contact Us</a>
        </li>
          <li class="pt-2 text-slate-500 hover:text-white">
            <a href="https://www.printlivepro.com/">    Shop</a>
        </li>
        </ul>
      </section>
    </div>
  </footer>
        </>
      );
}

export default Download