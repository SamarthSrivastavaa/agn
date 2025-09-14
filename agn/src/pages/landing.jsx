import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';

const Landing = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const stages = [
      { text: "idea", icon: "💡", color: "from-yellow-400 to-orange-500" },
      { text: "strategy", icon: "🎯", color: "from-blue-400 to-purple-500" },
      { text: "wireframing", icon: "✏️", color: "from-green-400 to-teal-500" },
      { text: "build & launch!", icon: "🚀", color: "from-pink-400 to-red-500" }
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
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const stages = [
    { text: "idea", icon: "💡", color: "from-yellow-400 to-orange-500" },
    { text: "strategy", icon: "🎯", color: "from-blue-400 to-purple-500" },
    { text: "wireframing", icon: "✏️", color: "from-green-400 to-teal-500" },
    { text: "build & launch!", icon: "🚀", color: "from-pink-400 to-red-500" }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-violet-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navbar Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-full bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
          <Navbar />
        </div>
      </div>
      
      {/* Main Hero Section */}
      <div className="relative z-10 min-h-[85vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-medium">Available for new projects</span>
              </div>

              {/* Main Headlines */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9]">
                  Best Software
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Solutions
                  </span>
                  <br />
                  To Drive Business
                  <br />
                  Forward
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  High-performance software designed to streamline operations and boost productivity for modern businesses.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 text-lg"
                >
                  <span className="flex items-center gap-3">
                    Book A Free Demo
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    See Our Work
                  </span>
                </button>
              </div>

              {/* Client Logos */}
              <div className="pt-8">
                <p className="text-gray-400 text-sm mb-6">Trusted by leading companies</p>
                <div className="flex flex-wrap items-center gap-8 opacity-60">
                  <div className="text-2xl font-bold text-white">Google</div>
                  <div className="text-2xl font-bold text-white">Microsoft</div>
                  <div className="text-2xl font-bold text-white">Amazon</div>
                  <div className="text-2xl font-bold text-white">Airbnb</div>
                  <div className="text-2xl font-bold text-white">FedEx</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Elements */}
            <div className="relative">
              {/* Main Video/Image Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white font-medium">Watch Our Process</p>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold px-4 py-2 rounded-2xl shadow-xl">
                  <span className="text-sm">96% Success Rate</span>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">UX</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">UX/UI Design</p>
                    <p className="text-gray-400 text-sm">96% Complete</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DEV</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Software Development</p>
                    <p className="text-gray-400 text-sm">Expert Level</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Stages Display */}
          <div className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-gray-400 text-lg">How we bring your ideas to life</p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="p-12">
                  {isVisible && stages[currentStage] && (
                    <div className="flex flex-col items-center justify-center transition-all duration-1000 ease-in-out">
                      <div className={`w-24 h-24 bg-gradient-to-r ${stages[currentStage].color} rounded-3xl flex items-center justify-center mb-8 shadow-2xl`}>
                        <span className="text-4xl">{stages[currentStage].icon}</span>
                      </div>
                      <h3 className="text-4xl sm:text-5xl font-black text-white text-center leading-tight mb-4">
                        {stages[currentStage].text}
                      </h3>
                      <div className="flex gap-2">
                        {stages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentStage ? 'bg-emerald-400' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;