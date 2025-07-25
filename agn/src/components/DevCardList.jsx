import React from "react";

const devs = [
  {
    name: "Samarth Srivastava",
    email: "samarthsrivastava897@gmail.com",
    role: "Web dev",
  },
  {
    name: "Sarthak Harsh",
    email: "sarthakreigns247@gmail.com",
    role: "App dev",
  },
  {
    name: "Anurag Patel",
    email: "anuragpatel1101@gmail.com",
    role: "AI/ML",
  },
];

const DevCardList = ({ large, onSelect }) => (
  <div className={`bg-neutral-900 rounded-2xl shadow-lg w-full ${large ? 'h-[28rem] px-8 py-10 gap-8' : 'h-72 px-4 py-6 gap-4'} flex flex-col justify-center`}>
    {devs.map((dev, idx) => (
      <div
        key={idx}
        className={`flex items-center gap-6 p-3 rounded-xl hover:bg-neutral-800 transition cursor-pointer`}
        onClick={() => onSelect && onSelect(idx)}
      >
        <div className={`flex items-center justify-center rounded-full bg-white ${large ? 'w-20 h-20' : 'w-12 h-12'}`}>
          <svg width={large ? 44 : 28} height={large ? 44 : 28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#222"/>
            <path d="M16.5 7.5L7.5 16.5M7.5 7.5L16.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className={`text-white font-semibold ${large ? 'text-2xl' : 'text-lg'}`}>{dev.name}</span>
          <span className={`text-gray-300 ${large ? 'text-lg' : 'text-sm'}`}>{dev.email}</span>
          <span className={`text-gray-400 mt-1 ${large ? 'text-base' : 'text-xs'}`}>{dev.role}</span>
        </div>
      </div>
    ))}
  </div>
);

export default DevCardList; 