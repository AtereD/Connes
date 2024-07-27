import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const Products = () => {
  const product = [
    {
      title:"Ice Creams",
      rating:"4.5",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      img:"/assets/icecream.png",
      color:"bg-[#ffb8c9]",
      spanColor:"bg-[#f98ca6]"
    },
    {
      title:"Yoghurts",
      rating:"4.5",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      img:"/assets/yoghurt.jpeg",
      color:"bg-[#c1e297]",
      spanColor:"bg-[#add17c]"
    },
    {
      title:"Milkshakes",
      rating:"4.5",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      img:"/assets/milkshakes.png",
      color:"bg-[#f0d1a5]",
      spanColor:"bg-[#e9c087]"
    },
  ]
  return (
    <section className="bg-[#fef5f6] mt-[100px] pt-14" id='menu'>
      <div className="container w-full h-full mx-auto">
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <h3 className={`text-[#ef3b7a] font-semibold text-xl mb-2 ${montserrat.className}`}>
              Our Products
            </h3>
            <h3 className="text-4xl lg:text-5xl text-[#ac0f46] uppercase text-center">
              It's Not Cheating, <br/>It's eating healthy...
            </h3>
          </div>
          <div className="w-full px-1 md:px-4">
            <Carousel className="w-full py-10">
              <CarouselContent className="px-8">
                {product.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className=" md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 pt-40 ">
                      <Card className={`relative ${item.color} h-[500px] flex items-center rounded-[30px] w-[350px]`}>
                        <CardContent className="flex items-center justify-center p-6 aspect-square">
                        <span className={`absolute rounded-full inset-0 top-[-550px] left-[3%] translate-x-0 flex items-center justify-center `}>
                          <img src={item.img} alt="" width={150} height={100} className={`flex ${ index === 2 ? 'w-[250px]' : ''}`}
                          />
                          </span>
                          <div className="flex flex-col items-center justify-center gap-6 mt-14">
                            <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                            <p className={`${montserrat.className}`}>{item.rating}</p>
                            <p className={`text-center ${montserrat.className}`}>{item.text}</p>
                            <a href="/">
                              <Button className={`rounded-full bg-white text-[#ef3b7a] flex gap-3 items-center px-5 mt-6 hover:text-white hover:bg-[#ef3b7a] ${montserrat.className}`}>Order Now <spann>
                                <FaArrowRight/></spann></Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext />
            </Carousel>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex justify-between border-b border-b-[#ef3b7a] border-dashed">
              <div className="flex flex-col gap-1 p-3 pl-0">
              <h3 className="text-[#ac0f46] uppercase">Earthy Fruity</h3>
              <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet. consecteur adipiscing.</p>
              </div>
              <div className={`flex items-center text-[#fbd0da]`}>
                <p>$9</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-b-[#ef3b7a] border-dashed">
              <div className="flex flex-col gap-1 p-3 pl-0">
              <h3 className="uppercase te text-[#ac0f46]">Salty breeze</h3>
              <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet. consecteur adipiscing.</p>
              </div>
              <div className={`flex items-center text-[#fbd0da]`}>
                <p>$11</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-b-[#ef3b7a] border-dashed">
              <div className="flex flex-col gap-1 p-3 pl-0">
              <h3 className="uppercase text-[#ac0f46]">Mixed Fruit</h3>
              <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet. consecteur adipiscing.</p>
              </div>
              <div className={`flex items-center text-[#fbd0da]`}>
                <p>$9</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-b-[#ef3b7a] border-dashed">
              <div className="flex flex-col gap-1 p-3 pl-0">
              <h3 className="uppercase text-[#ac0f46]">Late Pumpkin</h3>
              <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet. consecteur adipiscing.</p>
              </div>
              <div className={`flex items-center text-[#fbd0da]`}>
                <p>$14</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-b-[#ef3b7a] border-dashed">
              <div className="flex flex-col gap-1 p-3 pl-0">
              <h3 className="uppercase text-[#ac0f46]">Lava Ginger</h3>
              <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet. consecteur adipiscing.</p>
              </div>
              <div className={`flex items-center text-[#fbd0da]`}>
                <p>$12</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-b-[#ef3b7a] border-dashed">
              <div className="flex flex-col gap-1 p-3 pl-0">
              <h3 className="uppercase text-[#ac0f46]">Black Reaper</h3>
              <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet. consecteur adipiscing.</p>
              </div>
              <div className={`flex items-center text-[#fbd0da]`}>
                <p>$21</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-b-[#ef3b7a] border-dashed">
              <div className="flex flex-col gap-1 p-3 pl-0">
              <h3 className="uppercase text-[#ac0f46]">Red Volcano</h3>
              <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet. consecteur adipiscing.</p>
              </div>
              <div className={`flex items-center text-[#fbd0da]`}>
                <p>$8</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-b-[#ef3b7a] border-dashed">
              <div className="flex flex-col gap-1 p-3 pl-0">
              <h3 className="text-[#ac0f46] uppercase">Slightly Salty</h3>
              <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet. consecteur adipiscing.</p>
              </div>
              <div className={`flex items-center text-[#fbd0da]`}>
                <p>$15</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-24">
            <div className="mb-10">
              <h3 className="text-[#ac0f46] uppercase text-3xl">Today's Special!</h3>
            </div>
            <div className="gap-10 lg:flex">
              <div className="flex flex-col items-center justify-center w-full gap-2 mb-4">
                <img src="/assets/blueberry.png" alt="" width={250} height={200} className="ease-in transform hover:scale-110"/>
                <h3 className="uppercase text-[#ac0f46] pt-2 ">Blueberry</h3>
                <p className={`text-center ${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur. Suscipit, ut!</p>
                <p className="text-[#fbd0da]">$1.20</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2 mb-4">
                <img src="/assets/capuccino.png" alt="" width={250} height={200} className="ease-in transform hover:scale-110"/>
                <h3 className="uppercase text-[#ac0f46] pt-2 ">Cappucino</h3>
                <p className={`text-center ${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur. Suscipit, ut!</p>
                <p className="text-[#fbd0da]">$1.35</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2 mb-4">
                <img src="/assets/mango.png" alt="" width={250} height={200} className="ease-in transform hover:scale-110"/>
                <h3 className="uppercase text-[#ac0f46] pt-2 ">Mango</h3>
                <p className={`text-center ${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur. Suscipit, ut!</p>
                <p className="text-[#fbd0da]">$1.40</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2 mb-4">
                <img src="/assets/pistacho.png" alt="" width={250} height={200} className="ease-in transform hover:scale-110"/>
                <h3 className="uppercase text-[#ac0f46] pt-2 ">Pistachio</h3>
                <p className={`text-center ${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur. Suscipit, ut!</p>
                <p className="text-[#fbd0da]">$1.10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
