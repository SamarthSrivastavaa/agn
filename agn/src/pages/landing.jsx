import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';


const XLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle mr-2">
    <rect width="24" height="24" rx="6" fill="#222"/>
    <path d="M16.5 7.5L7.5 16.5M7.5 7.5L16.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Landing = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const stages = [
      { text: "idea" },
      { text: "strategy" },
      { text: "wireframing" },
      { text: "build & launch!" }
    ];

    const interval = setInterval(() => {
      setCurrentStage(prev => {
        if (prev < stages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isVisible]);

  const stages = [
    { text: "idea" },
    { text: "strategy" },
    { text: "wireframing" },
    { text: "build & launch!" }
  ];

  return (
    <div className="relative w-full h-[110vh] bg-gray-50 left-0 right-0 flex flex-col items-center justify-start overflow-hidden pt-0 m-0 p-0">
      <div className="w-full px-6 py-4 mb-6">
        <div className="w-full bg-white rounded-2xl shadow-lg p-4">
          <Navbar />
        </div>
      </div>
      <div className="w-full px-6 flex-1">
        <div className="relative w-full h-full bg-black rounded-t-3xl overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-[800px] h-[250px] z-10 pointer-events-none">
            <div className="w-full h-full rounded-b-full bg-gradient-to-b from-white/70 via-white/25 to-transparent blur-[60px] opacity-70" />
          </div>
          <div className="relative z-30 flex justify-center w-full mt-28 mb-10">
            <div className="flex items-center justify-between w-[370px] px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <div className="flex items-center">
                <XLogo />
                <span className="text-white font-medium text-base">Knock here!</span>
              </div>
              <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer" className="ml-4 px-3 py-1 rounded-xl bg-white/20 border border-white/20 flex items-center backdrop-blur-sm hover:bg-white/30 transition">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" className="inline-block">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute left-[280px] top-[170px] z-30">
            <div className="flex items-center justify-center w-20 h-20 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transform -rotate-6">
              <span className="text-white font-bold text-xl tracking-tight">
                &lt;/&gt;
              </span>
            </div>
          </div>

          <div className="absolute left-[450px] top-[400px] z-30">
            <div className="flex items-center justify-center w-20 h-20 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 6V12C3 16.4183 6.58172 20 11 20C15.4183 20 19 16.4183 19 12V6L12 2Z" stroke="white" strokeWidth="2" fill="none"/>
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
              </svg>
            </div>
          </div>
          <div className="absolute left-[280px] top-[580px] z-30">
            <div className="flex items-center justify-center w-20 h-20 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                <path d="M8 6L12 10L8 14M16 6L12 10L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="absolute right-[280px] top-[170px] z-30">
            <div className="flex items-center justify-center w-20 h-20 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transform rotate-6">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">TS</span>
              </div>
            </div>
          </div>
          <div className="absolute right-[450px] top-[400px] z-30">
            <div className="flex items-center justify-center w-20 h-20 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
            </div>
          </div>
          <div className="absolute right-[280px] top-[580px] z-30">
            <div className="flex items-center justify-center w-20 h-20 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transform -rotate-6">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">TW</span>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col items-center justify-start h-full text-center mt-4">
            <h1 className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight mb-2 drop-shadow-lg">
              This is where you
            </h1>
            <h1 className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 drop-shadow-lg">
              Get it Done!
            </h1>
            <div className="flex flex-col items-center gap-1 mt-10">
              <span className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                We help bring ideas to life with clean design, solid code, and real intent.
              </span>
              <span className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                So that 3AM idea you had? Let's launch it together.
              </span>
            </div>        
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                Our Works
              </button>
              <button className="px-8 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-200 border border-white/20">
                Reach Out
              </button>
            </div>
            <div className="w-full flex justify-center mt-40">
              <div className="w-full max-w-4xl min-h-[280px] bg-white/95 
                            border-l-3 border-r-3 border-b-3 border-white/30 
                            rounded-t-3xl rounded-b-2xl shadow-2xl 
                            backdrop-blur-md flex items-center justify-center">       
                {isVisible && stages[currentStage] && (
                  <div className="flex items-center justify-center transition-all duration-1000 ease-in-out">
                    <span className="text-black font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                      {stages[currentStage].text}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
