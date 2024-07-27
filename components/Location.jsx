import React from "react";
import { Montserrat } from "next/font/google";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const Location = () => {
  const locationData = [
    {
      state: "NEW YORK",
      location: "06 955 Rowe Trail, 95611",
      weekdays: "Monday - Friday",
      weekends: "Saturday - Sunday",
      weekdayTime: "10:00AM - 7:00PM",
      weekendTime: "9:00AM - 4:00PM",
      color: "bg-[#f98ca6]",
    },
    {
      state: "ANKENY",
      location: "0520 Celia Shore, 917-520",
      weekdays: "Monday - Friday",
      weekends: "Saturday - Sunday",
      weekdayTime: "10:00AM - 7:00PM",
      weekendTime: "9:00AM - 4:00PM",
      color: "bg-[#add17c]",
    },
    {
      state: "FELICIA",
      location: "392 Kunde Well, 708-706",
      weekdays: "Monday - Friday",
      weekends: "Saturday - Sunday",
      weekdayTime: "10:00AM - 7:00PM",
      weekendTime: "9:00AM - 4:00PM",
      color: "bg-[#e9c087]",
    },
    {
      state: "WEST VILLA",
      location: "232 Simeon Isle, 349-0594",
      weekdays: "Monday - Friday",
      weekends: "Saturday - Sunday",
      weekdayTime: "10:00AM - 7:00PM",
      weekendTime: "9:00AM - 4:00PM",
      color: "bg-[#f98ca6]",
    },
  ];
  return (
    <section className="mt-20">
      <div className={`container mx-auto`}>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center mb-14">
            <h3 className={`text-[#ef3b7a] font-semibold text-xl mb-2 ${montserrat.className}`}>
              Our Locations
            </h3>
            <h3 className="lg:text-5xl text-[#ac0f46]  uppercase text-center text-4xl">
              Good Icecreams <br /> every time
            </h3>
          </div>
          <div className={`grid gap-4 lg:grid-cols-4 md:grid-cols-2 ${montserrat.className}`}>
            {locationData.map((location, index) => (
              <div key={index}>
                <div className="flex flex-col gap-4 p-8 bg-white shadow-lg shadow-gray-400 rounded-2xl">
                  <div
                    className={`${location.color} rounded-lg p-3 text-white font-semibold text-[15px] w-[100px] ${index === 0 || index === 3 ? 'w-[60%]' : ''}`}
                  >
                    {location.state}
                  </div>
                  <p className="pb-4 border-b border-b-[#efd6e0] font-medium">
                    {location.location}
                  </p>
                  <div>
                    <h3 className="font-medium">{location.weekdays}</h3>
                    <h3 className="text-[#f98ca6] font-medium">
                      {location.weekdayTime}
                    </h3>
                  </div>
                  <div className="pb-4 border-b border-b-[#efd6e0]">
                    <h3 className="font-medium">{location.weekends}</h3>
                    <h3 className="text-[#f98ca6] font-medium">
                      {location.weekendTime}
                    </h3>
                  </div>
                  <Button className="bg-transparent text-[#ef3b7a] flex items-center gap-2 text-[15px] text-left justify-start w-full p-0 hover:bg-transparent hover:text-[#ef3b7a]">
                    View Location{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
