import React from "react";
import Slide1 from "../public/Slide 16_9 - 2.png";
import Slide2 from "../public/Slide 16_9 - 1.png";
import Slide3 from "../public/Slide 16_9 - 3.png";
import Logo from "../public/logo_copy.svg";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const ContactUs = () => {
    const handlesubmit = (event) => {
      event.preventDefault();
      console.log('hh')
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone_number = document.getElementById("number").value;
        const product_name = document.getElementById("product").value;
        const issues = document.getElementById("issues").value;
        var messageChat = `Name: ${name},
            Email: ${email},
            Phone Number: ${phone_number},
            Product Name: ${product_name},
            Issues: ${issues}`;
            console.log(messageChat);
            zE('webWidget', 'chat:send', messageChat);
        // navigator.clipboard.writeText(messageChat);
      };
  return (
    <>
        <Script  id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=72553e6c-8911-4ffc-afb4-92cedfafb6a0" />
    <div>
        <header
      className="max-w-screen-xl mx-auto my-4 flex items-center gap-8 border-grey"
    >
      <div>
        <Link href="/">
        <Image src={Logo} className="w-[80px] h-[80px] cursor-pointer" alt="Logo"/>
        </Link>
      </div>
      <div>
        <h1 className="prose text-3xl text-black">
          Customer Support - Contact Us Live Support
        </h1>
      </div>
    </header>
    <div className="max-w-screen-xl mx-auto border-b-[2px] mb-4"></div>
    <main className="max-w-screen-xl mx-auto bg-blue-600 flex">
      <header className="p-4 text-white">
        <span className="font-bold"> Contact Us &#62;</span>
         <span className=" text-white  opacity-100">Download &#62;</span><span
            className="opacity-50"> Install</span>
      </header>
    </main>
      <section className="max-w-screen-xl mx-auto flex justify-between py-12 gap-8">
        <form className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <label className="flex-[0.3]">Name:</label>
              <input
                id="name"
                type="text"
                className="flex-1 border border-gray-300 rounded-md p-4"
                placeholder="Please Type Name"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="flex-[0.3]">Email:</label>
              <input
                id="email"
                type="email"
                className="flex-1 border border-gray-300 rounded-md p-4"
                placeholder="Please type email"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="flex-[0.3]">Phone Number:</label>
              <input
                id="number"
                type="number"
                className="flex-1 border border-gray-300 rounded-md p-4"
                placeholder="Please type number"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="flex-[0.3]">Product Name:</label>
              <input
                id="product"
                type="text"
                className="flex-1 border border-gray-300 rounded-md p-4"
                placeholder="Please type product name"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="flex-[0.3]">Issues:</label>
              <textarea
                id="issues"
                className="flex-1 border border-gray-300 rounded-md p-4"
                placeholder="Please type issues"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="float-right"
                onClick={handlesubmit}
              >
                <div className="bg-blue-600 w-48 !py-2 rounded-lg text-white text-lg">
                  Submit
                </div>
              </button>
            </div>
          </div>
        </form>
        <div className="flex-1">
          <div className="prose text-3xl mb-6">Let's get you some help</div>
          <div className="text-md prose">
            Sign in and identify your product to see available support.
          </div>
          <div className="text-md prose">
            Some contact options require an active warranty.
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <Image
                src={Slide1}
                className="block w-full h-96"
                alt="Wild Landscape"
              />
              </div>
              <div className="carousel-item relative float-left w-full">
                <Image
                className="h-96 block w-full h-96"
                src={Slide2}
                alt="Camera"
              />
              </div>
              <div className="carousel-item relative float-left w-full">
                <Image
                className="h-96 block w-full"
                src={Slide3}
                alt="Exotic Fruits"
              />
              </div>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleControls"
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
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black p-4">
        <div className="flex max-w-screen-xl mx-auto h-72 space-x-4 text-white justify-between pt-10 pb-10">
          <section>
            <div className="font-bold text-lg pb-4">Contact Info</div>
            <ul>
              <li className="pt-2">
                {/* <label className="font-semibold">PHONE:</label><span className="text-slate-500 hover:text-white">
                Toll free +1-844-801-5770 </span> */}
              </li>
              <li className="pt-2">
                <label className="font-semibold">EMAIL:</label>
                <span className="text-slate-500 hover:text-white">
                  {" "}
                  support@printlivepro.com
                </span>
              </li>
              <li className="pt-2">
                <label className="font-semibold">ADDRESS:</label>{" "}
                <span className="text-slate-500 hover:text-white">
                  297 K 15th St, Jock, FL 33704
                </span>{" "}
              </li>
            </ul>
          </section>
          <section>
            <div className="font-bold text-lg pb-4">My Account</div>
            <ul>
              <li className="text-slate-500 hover:text-white">
                <a href="https://www.printlivepro.com/privacy-policy">
                  {" "}
                  Privacy Policy
                </a>
              </li>
              <li className="pt-2 text-slate-500 hover:text-white">
                <a href="https://www.printlivepro.com/terms-condition">
                  {" "}
                  Refund and Return Policy{" "}
                </a>
              </li>
              <li className="pt-2 text-slate-500 hover:text-white">
                <a href="https://www.printlivepro.com/terms-condition">
                  {" "}
                  Terms and Condition
                </a>
              </li>
              <li className="pt-2 text-slate-500 hover:text-white">
                <a href="https://www.printlivepro.com/disclaimer">
                  {" "}
                  Disclaimer
                </a>
              </li>
            </ul>
          </section>
          <section>
            <div className="font-bold text-lg pb-4">Quick Links</div>
            <ul>
              <li className="text-slate-500 hover:text-white">
                <a href="https://www.printlivepro.com/"> Home</a>
              </li>
              <li className="pt-2 text-slate-500 hover:text-white">
                {/* <a href="https://smartapplianceonline.com/blog/">    Blog</a> */}
              </li>
              <li className="pt-2 text-slate-500 hover:text-white">
                <a href="https://www.printlivepro.com/about-us"> About Us</a>
              </li>
              <li className="pt-2 text-slate-500 hover:text-white">
                <a href="https://www.printlivepro.com/contact"> Contact Us</a>
              </li>
              <li className="pt-2 text-slate-500 hover:text-white">
                <a href="https://www.printlivepro.com/"> Shop</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
    </>
  );
};

export default ContactUs;
