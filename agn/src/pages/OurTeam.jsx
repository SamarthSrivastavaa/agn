import React, { useState, useEffect } from "react";
import DevCardList from "../components/DevCardList";
import InfoCard from "../components/InfoCard";

const devs = [
  {
    name: "Samarth Srivastava",
    email: "samarthsrivastava897@gmail.com",
    college: "IIIT Sonepat",
    twitter: "https://twitter.com/SamarthS_1101",
    jobTitle: "Web dev",
    owner: "Samarth Srivastava",
    status: "Available",
    linkedin: "https://linkedin.com/in/samarthsrivastava897",
  },
  {
    name: "Sarthak Harsh",
    email: "sarthakreigns247@gmail.com",
    college: "IIIT Sonepat",
    twitter: "https://twitter.com/SarthakHarsh",
    jobTitle: "App dev",
    owner: "Sarthak Harsh",
    status: "Available",
    linkedin: "https://linkedin.com/in/sarthakHarsh",
  },
  {
    name: "Anurag Patel",
    email: "anuragpatel1101@gmail.com",
    college: "IIT Kanpur",
    twitter: "https://twitter.com/yourhandle",
    jobTitle: "AI-ML",
    owner: "Anurag Patel",
    status: "Available",
    linkedin: "https://linkedin.com/in/anuragpatel1101",
  },
];

const OurTeam = () => {
  const [selectedDev, setSelectedDev] = useState(devs[0]);

  useEffect(() => {
    setSelectedDev(devs[0]);
  }, []);

  return (
    <div className="w-full px-6 flex-1">
      <div className="relative w-full h-full bg-black overflow-hidden">
        <div className="flex flex-col justify-start items-start p-16 ml-10 mt-24">
          <h1 className="text-white font-bold font-poppins text-[7rem] leading-none tracking-[0.165em]">Our</h1>
          <h1 className="text-white font-bold font-poppins text-[7rem] leading-none tracking-[0.165em]">Team</h1>
          <div className="mt-4 w-64 h-3 bg-white rounded-full"></div>
        </div>
        <div className="grid grid-cols-4 gap-12 w-full px-24 mb-24 items-center">
          <div className="flex flex-col justify-start items-start max-w-md">
            <p className="text-2xl text-gray-400 leading-relaxed">
              We are a team of 3 devs highly passionate about developing great experiences for our clients <br />
            </p>
            <p className="mt-6 text-gray-300 text-2xl">
              All you gotta do is drop us the idea :)
            </p>
          </div>
          <DevCardList large onSelect={idx => setSelectedDev(devs[idx])} />
          <div className="col-span-2 h-[28rem] flex items-center justify-center">
            <InfoCard {...selectedDev} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
