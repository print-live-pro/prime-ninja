import React, { useEffect } from 'react'
import { Tooltip } from 'react-tooltip'
import "react-tooltip/dist/react-tooltip.css";

const DownloadError = () => {

    useEffect(()=>{
        setTimeout(function () {
            var loader = document.querySelector('#svgLoaderCircle'),
              percentagetext = document.querySelector('#svgPercentageText'),
              copyFiles = document.querySelector('.copyFiles'),
              installOS = document.querySelector('.installOS'),
              config = document.querySelector('.config'),
              progress = 820,
              percentage = 0;

            setInterval(function () {
              //   loader.setAttribute("stroke-dashoffset", progress);
              percentagetext.innerHTML = percentage + "%";
              if (percentage <= 30) {
                copyFiles.classList.add('active');
                copyFiles.children[0].innerHTML = percentage + "%";
                installOS.classList.remove('active');
                installOS.classList.remove('done');
                installOS.children[0].innerHTML = "";
                config.classList.remove('active');
                config.classList.remove('done');
                config.children[0].innerHTML = "";
              }
              if (percentage >= 31 && percentage <= 75) {
                copyFiles.classList.remove('active');
                copyFiles.classList.add('done');
                copyFiles.children[0].innerHTML = "";
                installOS.classList.add('active');
                installOS.children[0].innerHTML = percentage + "%";
                config.classList.remove('active');
                config.children[0].innerHTML = "";
              }
              if (percentage >= 76) {
                copyFiles.classList.remove('active');
                copyFiles.children[0].innerHTML = "";
                installOS.classList.remove('active');
                installOS.classList.add('done');
                installOS.children[0].innerHTML = "";
                config.classList.add('active');
                config.children[0].innerHTML = percentage + "%";
              }
              if (percentage !== 99) {
                loader.setAttribute("stroke-dashoffset", progress);

                percentage++;
              }

              if (percentage === 99) {
                  setTimeout(() => {
                    document.getElementsByClassName("error-show")[0].style.display = "none";
                    document.getElementsByClassName("error-show-banner")[0].style.display = "block";
                //   $('.install').css("display", "none");
                //   $('.main-content').css('display','block');
                //   $("#error-show").css("display", "block");
                
                }, 2000)
              }
              progress = +progress - 8.19;
              if (progress < 0) {
                progress = 820;
              }
              if (percentage > 100) {
                percentage = 0;
              }

            }, 400);

          }, 1000);
    },[])
  return (
    <div id="full-screen">
    <section class="h-[100vh] install flex flex-col error-show">
    <h1 className='text-white'>Installing Driver</h1>
    <h2>Your printer would be ready after installing.
      Sit back and relax</h2>
    <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 300">
      <circle cx="150" cy="150" r="130" stroke="#888" stroke-width="5" fill="transparent" class="fade-in-out" />
      <circle cx="50" cy="150" r="130" stroke="#0087E5" stroke-width="5" fill="transparent"
        transform="rotate(-90 100 100)" stroke-dasharray="820" stroke-dashoffset="820" id="svgLoaderCircle" />
      <text x="150" y="150" id="svgPercentageText" dominant-baseline="mathematical" alignment-baseline="middle"
        text-anchor="middle" fromtime="0" totime="100" fill="white" font-size="80">0%</text>
    </svg>
    <footer>
      <ul>
        <li class="copyFiles">Copying files
          <span class="percent" fromtime="0" totime="25">
          </span>
        </li>
        <li class="installOS">Installing features and drivers
          <span class="percent" fromtime="26" totime="75">
          </span>
        </li>
        <li class="config">Configuring setting
          <span class="percent" fromtime="76" totime="100">
          </span>
        </li>
      </ul>
    </footer>
  </section>
  <div className='error-show-banner hidden text-white'>
  <section class="relative max-w-screen-xl mx-auto h-full">
      <div class="relative">
        <img src="./error_banner.jpg" class="w-full rounded" alt=""/>
        <div class="font-bold text-black top-0 left-0 absolute md:p-8 p-4">
          <span class="text-xl font-bold">Installing...</span>
          <br/>
          <span class="text-[16px] font-medium">Fatal Error occurred during installation.</span>
        </div>

        <div className="text-center absolute top-[20%] left-[50%]"  style={{transform:"translateX(-50%)", minWidth:"1200px",}}>
          <div class="flex justify-center items-center">
            <img src="./print_clipart.png" class="w-[150px]"/>

          </div>
          <h1 class="text-black text-lg mt-4">Printer Driver installation has been failed due to fatal error <a class="text-blue underline cursor-pointer" id="my-element">"C0000022"</a> preventing product dirver installation.</h1>
          <h1 className="text-black mt-[80px] mb-[20px] text-2xl text-center">Please Contact HP Customer Support or Chat with Us.</h1>
          <h1 className="text-black text-2xl text-center">Tool Free(USA/CA): <a href="tel:+1-844-557-0415" className='underline text-blue-500'>+1-844-557-0415</a></h1>
          <div class="text-black text-[14px] text-center">
            <a class="bg-blue text-white px-8 py-2 rounded-lg" href="javascript:$zopim.livechat.window.show();">Please Connect</a>
          </div>
        </div>
        <div class="absolute bottom-[20px] left-[150px] text-white opacity-80" style={{zIndex: 9999}}>
          24 X 7 HP Assistance
        </div>
        <div class="clip-path-2 absolute bottom-[0px] left-[0px] z-50 w-[80%] h-[400px]"></div>
        <img src="./plus_added.png" alt="Plus Added Icon" class="w-24 h-24 absolute bottom-4 left-4 z-50"/>
      </div>
        {/* <img class="h-[500px] block mr-auto ml-auto relative" src="./error image.png" alt=""/>  */}
    </section>
  </div>
  <Tooltip anchorId="my-element"
        variant="info"
        content="C0000022 error may be triggered by an untrustworthy third party application, malware or virus, which injected mailicious codes into the OS and corrupted boot configuration data." />
  </div>
  )
}

export default DownloadError