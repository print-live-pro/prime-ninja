import Image from "next/image"
import React from "react"
import { CarouselImg1, CarouselImg2, CarouselImg3 } from "../../public/assets"

const Hero = () => {
  return (
    <div className="h-90vh">
      <div
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
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl text-white font-bold">Home Printer</h5>
              <p className="text-white">
                Print, Scan, and Copy Documents, files, project utilities. 
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-[86vh]">
            <Image src={CarouselImg2} className="w-[100vw] object-cover" alt="lg printer" />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl text-white font-bold">Office Printer</h5>
              <p className="text-white">
                  Copy, Scan, Fax documents to share with colleagues.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-[86vh]">
            <Image src={CarouselImg3} className="w-[100vw] object-cover" alt="dell printer3" />
            <div className="carousel-caption hidden md:block absolute text-center">
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
      </div>
    </div>
  )
}

export default Hero
