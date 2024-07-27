import React from 'react'
import { Montserrat } from "next/font/google";
import { Button } from "./ui/button";
import { LocateIcon, Mail, MapPin, Phone } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const Footer = () => {
  return (
    <footer className='bg-[#fbd0da] w-full h-full mt-20 '>
      <div className='container mx-auto'>
        <div className='flex flex-col w-full p-4'>
          <div className='w-full pb-10 border-b lg:justify-between lg:flex lg:items-center border-b-[#eeecec]'>
            <div className='text-2xl text-[#ef3b7a] uppercase lg:w-[1/2] lg:text-start mb-5 lg:mb-0 w-full text-center'>
              Subscribe To Our Newsletter
            </div>
            <div className={`flex  gap-2 ${montserrat.className} items-center justify-end lg:w-[1/2] w-full`}>
              <input type="email" name="email" placeholder='Your Email' className='pl-3 rounded-full bg-transparent text-white border h-[50px] lg:w-[450px] placeholder:text-[#ef3b7a] w-[1/2] border-[#eeecec]'/>
              <Button className="bg-white text-[#ef3b7a] hover:bg-[#ef3b7a] hover:text-[#fff] h-[50px] rounded-full px-4 lg:w-[150px] font-medium w-[1/2]">Subscribe</Button>
            </div>
          </div>
          <div className='lg:flex lg:justify-between border-b-[#eeecec] border-b md:pb-20 pb-14'>
            <div className='relative flex flex-col items-center lg:items-start'>
              <img src="/assets/connes.png" alt="logo" width={200} height={200} className=''/>
            </div>
            <div className='lg:gap-36 lg:pt-10 lg:flex lg:justify-around'>
              <div className='flex flex-col gap-1 mb-10 text-[#ef3b7a] lg:mb-0'>
                <h3 className='uppercase'>Get in Touch</h3>
                <ul className={`${montserrat.className}`}>
                  <li className='flex items-center gap-3 hover:text-[#ac0f46] mb-1'><span >
                      <MapPin color='#ac0f46' size={14}/>
                    </span>457 Morningview Lane NY</li>
                    <li className='flex items-center gap-3 hover:text-[#ac0f46] mb-1'><span>
                      <Mail color='#ac0f46' size={14}/>
                    </span>connes@mail.com</li>
                    <li className='flex items-center gap-3 hover:text-[#ac0f46] mb-1'><span>
                      <Phone color='#ac0f46' size={14}/>
                    </span>457 Morningview Lane NY</li>
                </ul>
              </div>
              <div className='flex flex-col gap-1 mb-10 text-[#ef3b7a] lg:mb-0'>
              <h3 className='uppercase'>Quicklinks</h3>
              <ul className={`${montserrat.className} `}>
                <li className='hover:text-[#ac0f46] mb-1'>Home</li>
                <li className='hover:text-[#ac0f46] mb-1'>About</li>
                <li className='hover:text-[#ac0f46] mb-1'>Menu</li>
                <li className='hover:text-[#ac0f46] mb-1'>FAQs</li>
                <li className='hover:text-[#ac0f46] mb-1'>Contact</li>
              </ul>
              </div>
              <div className='flex flex-col gap-1 text-[#ef3b7a]'>
              <h3 className='uppercase'>Opening Hours</h3>
              <ul className={`${montserrat.className} `}>
                <li className='hover:text-[#ac0f46] mb-1'>Mon - Fri: 09:00 - 18:00</li>
                <li className='hover:text-[#ac0f46] mb-1'>Saturday: 10:00 - 17:00</li>
                <li className='hover:text-[#ac0f46] mb-1'>Sunday: 10:00 - 17:00</li>
                <li className='hover:text-[#ac0f46] mb-1'>
                  <Button className='text-[#ef3b7a] bg-transparent hover:bg-transparent hover:text-[#ac0f46] border-b border-b-[#eeecec] p-0 m-0 hover:border-b-[#ac0f46]'>Our Shops <span><FaArrowRight/></span></Button>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className={`hidden py-4 text-[#ef3b7a] lg:justify-between lg:flex ${montserrat.className}`}>
            <h3>
              Copyright &copy; 2024 Connes.
            </h3>
            <ul className='flex gap-3'>
              <li className='hover:text-[#ac0f46]'>Privacy Policy</li>
              <li className='hover:text-[#ac0f46]'>Terms & Services</li>
            </ul>
          </div>
          <div className={`flex items-center justify-center lg:hidden text-[#ef3b7a] ${montserrat.className} py-2 flex-col-reverse`}>
          <h3>
              Copyright &copy; 2024 Connes.
            </h3>
            <ul className='flex gap-3'>
              <li className='hover:text-[#ac0f46]'>Privacy Policy</li>
              <li className='hover:text-[#ac0f46]'>Terms & Services</li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer