"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { FaChevronDown, FaFacebook, FaInstagram } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileNav from "./MobileNav";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const Nav = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav className={`bg-[#fbd0da] h-[100px] ${montserrat.className} font-bold flex items-center`}>
      <div className="flex items-center justify-between w-full h-full 2xl:px-16">
        <Link href="/#home" className="flex items-center">
          <Image src={"/logo.png"} alt="logo" width={100} height={100}  className=" lg:ml-10 h-[80px]"/>
        </Link>
        {/* Desktop View */}
        <div className="items-center hidden w-full pl-10 justify-evenly lg:flex">
          <div className="flex items-center justify-between">
            <ul className="justify-center flex text-[#ef3b7a] items-center">
              <li className="mr-10 text-sm hover:text-[#fff]">
                <a href="/">Home</a>
              </li>
              <li className="mr-10 text-sm hover:text-[#fff]">
                <a href="/#about">About</a>
              </li>
              <li className="mr-10 text-sm hover:text-[#fff]">
                <a href="/#menu">Menu</a>
              </li>
              <li className="mr-10 text-sm hover:text-[#fff]">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2">
                    Pages
                    <span>
                      <FaChevronDown />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="hover:bg-transparent hover:text-[#ef3b7a]">
                      Service
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-transparent hover:text-[#ef3b7a]">
                      Pricing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-transparent hover:text-[#ef3b7a]">
                      FAQ
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-transparent hover:text-[#ef3b7a]">
                      Blog
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="mr-0 text-sm hover:text-[#fff]">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center ">
            <div className="flex items-center gap-5 mr-10">
              <a href="/" className="hover:text-white">
                <FaFacebook color="#ef3b7a" fill="#ef3b7a" size={20}  />
              </a>
              <a href="/" className="hover:text-white">
                <FaInstagram color="#ef3b7a" size={20}/>
              </a>
            </div>
            <Link href="/">
              <Button className="bg-[#ef3b7a] rounded-full px-7 flex items-center gap-2 font-normal hover:bg-white hover:text-[#ef3b7a]">
                Our Shops
                <span>
                  <ArrowRight size={20}  />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        {/* Mobile View */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
