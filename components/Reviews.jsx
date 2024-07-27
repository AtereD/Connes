"use client"
import React, {  } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Montserrat } from 'next/font/google'
import Autoplay from "embla-carousel-autoplay"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const Reviews = () => {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
      
    const reviewData=[
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum delectus vel provident architecto culpa incidunt consequuntur totam, qui quaerat accusantium, quas repellendus facere, possimus ad.",
            rating:"5.0",
            imgUrl:"/assets/george.jpg",
            name:"Lucas George",
            title:"Customer"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum delectus vel provident architecto culpa incidunt consequuntur totam, qui quaerat accusantium, quas repellendus facere, possimus ad.",
            rating:"4.0",
            imgUrl:"/assets/dinna.jpg",
            name:"Dinna Winston",
            title:"Customer"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum delectus vel provident architecto culpa incidunt consequuntur totam, qui quaerat accusantium, quas repellendus facere, possimus ad.",
            rating:"5.0",
            imgUrl:"/assets/lina.jpg",
            name:"Lina Navarro",
            title:"Customer"
        },
    ]
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating); // Number of full stars
        const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
    
        // Render full stars
        for (let i = 0; i < fullStars; i++) {
          stars.push(
            <p key={i} className="text-yellow-400 text-[16px]">
              {" "}
              &#9733;
            </p>
          );
        }
    
        // Render half star if applicable
        if (hasHalfStar) {
          stars.push(
            <p key="half" className="text-yellow-300 text-[16px]">
              &#9733;
            </p>
          );
        }
    
        // Render remaining empty stars (if any)
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
          stars.push(
            <p key={`empty-${i}`} className="text-gray-300 text-[16px]">
              &#9733;
            </p>
          );
        }
    
        return stars;
      };
      
  return (
    <section className="bg-[#fef5f6] lg:mt-20 p-14">
      <div className="container flex items-center justify-center ">
        <Carousel className="flex items-center justify-center w-full "  plugins={[plugin.current]}>
          <CarouselContent>
            {reviewData.map((review, index) => (
              <CarouselItem key={index}className="w-full">
                <div className="flex flex-col items-center justify-center w-full gap-10 px-10">
                    <p className="text-[#ac0f46] text-5xl">"</p>
                  <p className={`${montserrat.className} text-center`}>{review.text}</p>
                  <div className="flex items-center gap-1">
                      {renderStars(parseFloat(review.rating))}
                     
                    </div>
                    <img src={review.imgUrl} alt="review-img" className="rounded-full" width={50} height={50}/>
                    <div>
                    <p className={`${montserrat.className} text-[#ac0f46]`}>{review.name}</p>
                    <p className={`${montserrat.className} text-[#f7c2ce] text-center`}>{review.title}</p></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
