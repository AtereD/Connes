"use client"
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaCheckCircle, FaPlayCircle } from 'react-icons/fa'
import Link from 'next/link'
import { Button } from './ui/button'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const About = () => {
  const videoLink = "https://web.facebook.com/YogurberryNigeria/videos/yogurberry/5077115492373751/?_rdc=1&_rdr";

  const handlePlayClick = (event) => {
    event.preventDefault();
    window.location.href = videoLink;
  };
  
  return (
    <div className={`mt-24 lg:mt-0`} id="about">
      <div className='container w-full h-full mx-auto mt-10'>
        <div className='items-center w-full gap-10 lg:flex'>
          <div>
            <div>
            <div className='relative'>
            <Image alt="" src={"/assets/img3.jpg"} width={500} height={500} className='w-full rounded-xl lg:w-[500px]' />
            <span className='absolute inset-0 -left-20 -top-20 '>
            <Image alt="" src={"/assets/img4.png"} width={150} height={100} className='' />
            </span>
            <span className='absolute inset-x-0 lg:right-0 lg:left-[400px] lg:-bottom-12 hidden md:flex md:-bottom-10 md:left-[360px]'>
            {/* <a href={videoLink} onClick={handlePlayClick} className='relative block' target="_blank">
                  <Image alt="" src={"/assets/img5.jpg"} width={250} height={200} className='rounded-full w-[500px] md:w-auto' />
                  <FaPlayCircle className='absolute inset-0 m-auto text-white cursor-pointer animate-pulse' size={50} />
                </a> */}
            </span>
            </div>
            </div>
          </div>
          <div className='mt-6 lg:w-1/2 lg:mt-0'>
            <h3 className={`text-[#ef3b7a] font-semibold text-xl ${montserrat.className}`}>About Us</h3>
            <h3 className='text-3xl text-[#d41343] font-bold'>The Next Generation of Ice Cream</h3>
            <p className={`my-2 ${montserrat.className}`}>Etiam suscipit, odio nec sagittis imperdiet, quam ante ullamcorper nisl, sed tincidunt ligula nibh ac libero. Praesent et tempor tortor, non aliquet leo. Nunc dolor mi, consectetur id quam nec.</p>
            <div className={`gap-5 mt-3 lg:flex ${montserrat.className}`}>
              <ul className='flex flex-col gap-2 mb-2'>
                <li className='flex items-center gap-1'>
                  <span>
                    <FaCheckCircle color="#ffa5ba"/>
                  </span>
                  Maecenas sit amet eleifend</li>
                  <li className='flex items-center gap-1'>
                  <span>
                    <FaCheckCircle color="#ffa5ba"/>
                  </span>
                  Maecenas sit amet eleifend</li>
                  <li className='flex items-center gap-1'>
                  <span>
                    <FaCheckCircle color="#ffa5ba"/>
                  </span>
                  Maecenas sit amet eleifend</li>
              </ul>
              <ul className='flex flex-col gap-2'>
              <li className='flex items-center gap-1'>
                  <span>
                    <FaCheckCircle color="#ffa5ba"/>
                  </span>
                  Maecenas sit amet eleifend</li>
                  <li className='flex items-center gap-1'>
                  <span>
                    <FaCheckCircle color="#ffa5ba"/>
                  </span>
                  Maecenas sit amet eleifend</li>
                  <li className='flex items-center gap-1'>
                  <span>
                    <FaCheckCircle color="#ffa5ba"/>
                  </span>
                  Maecenas sit amet eleifend</li>
              </ul>
            </div>
            <div className='w-full mt-5'>
          <Link href="/">
              <Button className={`bg-[#d41343] rounded-full px-7 flex items-center gap-2 ${montserrat.className}`}>
                Learn more
                <span>
                  <FaArrowRight color="#ffffff" size={20} />
                </span>
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About