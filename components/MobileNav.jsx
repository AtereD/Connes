"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {  X } from "lucide-react";
import { FaBars, FaChevronDown, FaFacebook, FaInstagram } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const MobileNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="p-2 ">
      <div className="flex items-center gap-2 ">
            <Link href="/">
              <Button className="bg-[#ef3b7a] rounded-full px-5 flex items-center gap-2 font-normal hover:bg-white hover:text-[#ef3b7a] mr-1">
                Our Shops
                <span>
                  <ArrowRight size={20}  />
                </span>
              </Button>
            </Link>
        <FaBars
          className="text-[#ef3b7a]"
          size={25}
          onClick={handleNav}
        />
      </div>

      <div
        className={
          nav ? "lg:hidden fixed top-0 left-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "lg:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fff] p-10 ease-in duration-500 overflow-y-auto"
              : "fixed top-0 left-[-500%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <div>
                <Image
                  src={"/assets/connes (1).png"}
                  alt="logo"
                  width={80}
                  height={80}
                  className=""
                />
              </div>
              <div className="p-2 rounded-full shadow-lg cursor-pointer shadow-gray-400 ">
                <X
                  onClick={handleNav}
                  className="text-[#ef3b7a]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="font-normal">
              <Link href="/#home">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Menu</li>
              </Link>
                <li className="py-4 text-sm">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer">
                    Pages
                    <span>
                      <FaChevronDown />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="hover:bg-transparent hover:text-[#ef3b7a]">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-transparent hover:text-[#ef3b7a]">
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-transparent hover:text-[#ef3b7a]">
                      Team
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-transparent hover:text-[#ef3b7a]">
                      Subscription
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                </li>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-4 mr-5">
              <a href="/">
                <FaFacebook color="#ef3b7a" fill="#ef3b7a" size={20} />
              </a>
              <a href="/">
                <FaInstagram color="#ef3b7a" size={20} />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
