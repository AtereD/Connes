import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaArrowRight, FaPhone } from 'react-icons/fa'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const Hero = () => {
  return (
    <div className='w-full h-screen text-center mb-[100px] bg-[#fbd0da]'>
      <div className='container w-full mx-auto  bg-[] h-full items-center justify-center grid lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center w-full p-2'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-[#ed2067] text-xl lg:text-left text-center mb-3'>CONNES ICE CREAMS</h3>
          <h1 className='text-center lg:text-left text-[#222] lg:text-6xl text-4xl md:text-5xl font-semibold'>ICECREAMS THAT'S OUT OF THIS WORLD</h1>
          </div>
          <div className='flex items-center justify-center w-full gap-3 text-center lg:text-left lg:justify-start mt-14'>
          <Link href="/">
              <Button className={`bg-[#ef3b7a] rounded-full px-7 flex items-center gap-2 font-normal ${montserrat.className}`}>
                Our Menu
                <span>
                  <FaArrowRight color="#ffffff" size={20} />
                </span>
              </Button>
            </Link>
            <Link href="/">
              <Button className={`bg-[#fff] rounded-full px-7 flex items-center gap-2 text-[#ef3b7a] ${montserrat.className}`}>
               Contact
                <span>
                  <FaPhone color="#ef3b7a" size={20} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center w-full mt-10 lg:'>
        <div className='flex items-center justify-center  bg-[#f7a0b4] rounded-full lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] hover:scale-110 duration-300 ease-in'>
          <Image alt="" src={"/assets/cone.png"} width={500} height={500} className='flex w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]' />
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero