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
