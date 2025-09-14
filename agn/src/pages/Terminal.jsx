import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const terminalLines = [
    { text: "Welcome to TECHNEON Terminal", type: "header" },
    { text: "Initializing development environment...", type: "info" },
    { text: "✓ React.js framework loaded", type: "success" },
    { text: "✓ Node.js runtime active", type: "success" },
    { text: "✓ TypeScript compiler ready", type: "success" },
    { text: "✓ Tailwind CSS configured", type: "success" },
    { text: "✓ Development server running on port 3000", type: "success" },
    { text: "", type: "empty" },
    { text: "System Status: ONLINE", type: "status" },
    { text: "Ready to build amazing applications!", type: "ready" },
    { text: "", type: "empty" },
    { text: "$ _", type: "cursor" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < terminalLines.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isVisible, terminalLines.length]);

  const getLineStyle = (type) => {
    switch (type) {
      case 'header':
        return 'text-emerald-400 font-bold text-lg';
      case 'info':
        return 'text-blue-400';
      case 'success':
        return 'text-green-400';
      case 'status':
        return 'text-yellow-400 font-semibold';
      case 'ready':
        return 'text-cyan-400 font-semibold';
      case 'cursor':
        return 'text-white animate-pulse';
      case 'empty':
        return 'text-transparent';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div id="terminal" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">DEVELOPMENT TERMINAL</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Our Development
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Environment</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience our development process in real-time. Watch as we build, test, and deploy your applications.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800/50 px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">techneon@terminal:~$</div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-sm leading-relaxed min-h-[500px]">
            {terminalLines.slice(0, currentLine + 1).map((line, index) => (
              <div key={index} className={`${getLineStyle(line.type)} mb-1`}>
                {line.type === 'success' && <span className="text-green-500 mr-2">✓</span>}
                {line.text}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
              { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
              { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-indigo-500' },
              { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-blue-400' },
              { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-emerald-500' },
              { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-400' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to See Your Project Come to Life?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's start building your next big idea with our modern development stack and proven methodologies.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold px-8 py-4 rounded-2xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;