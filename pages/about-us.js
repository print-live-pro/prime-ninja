import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head"
import CarouselImg1 from "../public/assets/carousel-img-1.jpg"
import Image from "next/image"
const About = () => {
  return (
    <>
      <Head>
        <title>Print Live Pro</title>
        <meta property="og:title" content="Print Live Pro" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
        ></script>
      </Head>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            {/* <p className="font-normal text-base leading-6 text-gray-600"> */}
    <h3>Welcome To <span id="W_Name1">Print Live Pro</span></h3>
    <p><span>Print Live Pro</span> is a Professional <span id="W_Type1">E Commerce</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">Service</span>, with a focus on dependability and <span id="W_Spec">Online</span>. We're working to turn our passion for <span id="W_Type3">Online Buyers</span> into a booming <a href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" rel="do-follow">online website</a>. We hope you enjoy our <span id="W_Type4">Online E commerce</span> as much as we enjoy offering them to you.</p>
<p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
<p>Thanks For Visiting Our Site<br/><br/>
<span>Have a nice day!</span></p>
            {/* </p> */}
          </div>
          <div className="w-full lg:w-8/12 ">
            <Image
              className="w-full h-full"
              src={CarouselImg1}
              alt="A group of People"
            />
          </div>
        </div>
        <section class="mt-10">
<div class="items-center lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24">
<div class="col-span-2 mb-8">
<p class="text-lg font-medium">Trusted Worldwide</p>
<h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Trusted by million users and thousands teams</h2>
<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect our customers.</p>
<div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
<div>
<a href="#" class="inline-flex items-center text-base font-medium hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
Explore Legality Guide
<svg class="w-5 h-5 ml-1" fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</div>
<div>
<a href="#" class="inline-flex items-center text-base font-medium hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
Visit the Trust Center
<svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</div>
</div>
</div>
<div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
<div>
<svg class="w-10 h-10 mb-2 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
<h3 class="mb-2 text-2xl font-bold dark:text-white">99.99% Availability 24/7</h3>
<p class="font-light text-gray-500 dark:text-gray-400">For Services, with minimum maintenance.</p>
</div>
<div>
<svg class="w-10 h-10 mb-2 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
<h3 class="mb-2 text-2xl font-bold dark:text-white">600+ Users</h3>
<p class="font-light text-gray-500 dark:text-gray-400">Trusted by many users around the world</p>
</div>
<div>
<svg class="w-10 h-10 mb-2 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
<h3 class="mb-2 text-2xl font-bold dark:text-white">100+ cities</h3>
<p class="font-light text-gray-500 dark:text-gray-400">Have used our services with convinience chareges.</p>
</div>
<div>
<svg class="w-10 h-10 mb-2 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
<h3 class="mb-2 text-2xl font-bold dark:text-white">5000+ Purchase</h3>
<p class="font-light text-gray-500 dark:text-gray-400">Transactions per day</p>
</div>
</div>
</div>
</section>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
            Taking the printer online was easy enough; all Jack had to do was scan the barcode on the product and he was good to go. The website was easy to navigate and he found the product he was looking for quickly. He clicked on the link to add the product to his cart and was taken to a page where he could enter his shipping information.
He filled out the form and clicked on the button to submit his order. The next page showed a confirmation of his order and provided a link to track the order. Jack clicked on the link and was taken to a page that showed the progress of his order.
Jack was happy with the online purchase and felt confident that he had made the right decision. The product arrived on time and he was able to start printing right away.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Jack
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  John
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
