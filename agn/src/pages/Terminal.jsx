import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState('~');
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const teamMembers = {
    samarth: {
      name: 'Samarth Srivastava',
      role: 'Full-Stack & Blockchain Developer',
      email: 'samarthsrivastava897@gmail.com',
      college: 'IIIT Sonepat',
      skills: ['Blockchain', 'MERN', 'NestJS', 'EVM', 'Solana'],
      twitter: '@SamarthS_1101',
      linkedin: 'samarth-srivastava'
    },
    sarthak: {
      name: 'Sarthak Harsh',
      role: 'Flutter & Blockchain Developer',
      email: 'sarthakit12412004@iiitsonepat.ac.in',
      college: 'IIIT Sonepat',
      skills: ['Flutter', 'Blockchain', 'Mobile Development', 'Dart', 'Web3'],
      twitter: '@Sarthak_WB3',
      linkedin: 'sarthak-harsh'
    },
    anurag: {
      name: 'Anurag Patel',
      role: 'AI/ML Engineer',
      email: 'anurag@buildmydream.com',
      college: 'IIT Kanpur',
      skills: ['AI/ML', 'Python', 'TensorFlow', 'PyTorch', 'Data Science'],
      twitter: '@anurag_ai',
      linkedin: 'anurag-patel'
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    let output = [];

    switch (command) {
      case 'help':
        output = [
          { text: "Available commands:", type: "info" },
          { text: "  help          - Show this help message", type: "text" },
          { text: "  cd <name>     - Navigate to team member (samarth, sarthak, anurag)", type: "text" },
          { text: "  cd reach      - Navigate to contact forms", type: "text" },
          { text: "  ping <name>   - Open team member's social profile", type: "text" },
          { text: "  clear         - Clear terminal", type: "text" },
          { text: "  whoami        - Show current user", type: "text" },
          { text: "  pwd           - Show current directory", type: "text" },
          { text: "  ls            - List available directories", type: "text" }
        ];
        break;

      case 'cd':
        if (args.length === 0) {
          output = [{ text: "cd: missing operand", type: "error" }];
        } else if (args[0] === 'reach') {
          setCurrentPath('~/reach');
          scrollToSection('contact');
          output = [{ text: "Navigated to contact forms section", type: "success" }];
        } else if (teamMembers[args[0]]) {
          setCurrentPath(`~/${args[0]}`);
          const member = teamMembers[args[0]];
          output = [
            { text: `\n${member.name}`, type: "header" },
            { text: `Role: ${member.role}`, type: "info" },
            { text: `Email: ${member.email}`, type: "text" },
            { text: `College: ${member.college}`, type: "text" },
            { text: `Skills: ${member.skills.join(', ')}`, type: "text" },
            { text: `Twitter: ${member.twitter}`, type: "text" },
            { text: `LinkedIn: ${member.linkedin}`, type: "text" }
          ];
        } else {
          output = [{ text: `cd: ${args[0]}: No such file or directory`, type: "error" }];
        }
        break;

      case 'ping':
        if (args.length === 0) {
          output = [{ text: "ping: missing operand", type: "error" }];
        } else if (teamMembers[args[0]]) {
          const member = teamMembers[args[0]];
          output = [
            { text: `Opening ${member.name}'s Twitter profile...`, type: "info" },
            { text: `Twitter: https://twitter.com/${member.twitter.replace('@', '')}`, type: "link" }
          ];
          // In a real app, you'd open the link
          window.open(`https://twitter.com/${member.twitter.replace('@', '')}`, '_blank');
        } else {
          output = [{ text: `ping: ${args[0]}: Name not found`, type: "error" }];
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'whoami':
        output = [{ text: "buildmydream", type: "text" }];
        break;

      case 'pwd':
        output = [{ text: currentPath, type: "text" }];
        break;

      case 'ls':
        output = [
          { text: "Available directories:", type: "info" },
          { text: "samarth/  sarthak/  anurag/  reach/", type: "text" }
        ];
        break;

      case '':
        return;

      default:
        output = [{ text: `${command}: command not found. Type 'help' for available commands.`, type: "error" }];
    }

    setHistory(prev => [...prev, { command: cmd, output, timestamp: new Date() }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (command.trim()) {
        executeCommand(command);
        setCommand('');
      }
    }
  };

  const getLineStyle = (type) => {
    switch (type) {
      case 'header':
        return 'text-emerald-400 font-bold text-lg';
      case 'info':
        return 'text-blue-400';
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'link':
        return 'text-cyan-400 underline cursor-pointer';
      case 'text':
        return 'text-gray-300';
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
            Experience our interactive terminal. Type commands to explore our team, navigate sections, and discover our capabilities.
          </p>
        </div>

        {/* Interactive Terminal Window */}
        <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800/50 px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">buildmydream@terminal:{currentPath}$</div>
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="p-8 font-mono text-sm leading-relaxed min-h-[500px] max-h-[600px] overflow-y-auto"
          >
            {/* Welcome Message */}
            {isVisible && (
              <div className="mb-4">
                <div className="text-emerald-400 font-bold text-lg mb-2">Welcome to BuildMyDream Terminal</div>
                <div className="text-blue-400 mb-2">Interactive terminal for exploring our team and services.</div>
                <div className="text-gray-400 mb-4">Type 'help' to see available commands.</div>
              </div>
            )}

            {/* Command History */}
            {history.map((entry, index) => (
              <div key={index} className="mb-4">
                <div className="text-cyan-400 mb-1">
                  buildmydream@terminal:{currentPath}$ {entry.command}
                </div>
                {entry.output.map((line, lineIndex) => (
                  <div key={lineIndex} className={`${getLineStyle(line.type)} mb-1`}>
                    {line.text}
                  </div>
                ))}
              </div>
            ))}

            {/* Current Input Line */}
            <div className="flex items-center">
              <span className="text-cyan-400 mr-2">
                buildmydream@terminal:{currentPath}$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent text-white outline-none flex-1 font-mono"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="text-white animate-pulse">_</span>
            </div>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { 
                name: 'React', 
                color: 'from-blue-400 to-indigo-400',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12.765c.486 0 .88-.394.88-.88s-.394-.88-.88-.88-.88.394-.88.88.394.88.88.88z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                )
              },
              { 
                name: 'Node.js', 
                color: 'from-green-400 to-emerald-400',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                )
              },
              { 
                name: 'TypeScript', 
                color: 'from-blue-500 to-indigo-500',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.417.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 8.804 8.804 0 0 0-1.01-.462 6.718 6.718 0 0 1-.926-.416 4.957 4.957 0 0 1-.963-.75 2.765 2.765 0 0 1-.614-.957c-.142-.359-.214-.776-.214-1.253 0-.657.125-1.21.373-1.656a3.033 3.033 0 0 1 1.012-1.085 4.38 4.38 0 0 1 1.487-.596c.566-.12 1.163-.18 1.79-.18.62 0 1.21.06 1.75.18.54.12 1.01.304 1.41.553.4.248.71.556.93.923.22.367.33.79.33 1.27H18.488zm-15.113.188h9.563v2.25H8.6v9.563H5.8v-9.563H3.375z"/>
                  </svg>
                )
              },
              { 
                name: 'Tailwind', 
                color: 'from-cyan-400 to-blue-400',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                )
              },
              { 
                name: 'MongoDB', 
                color: 'from-green-500 to-emerald-500',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.193 9.555c-1.491-1.112-2.106-2.133-2.106-3.089 0-1.658 1.324-2.955 2.324-3.89C19.24 1.2 20.4 0 20.4 0s.9 1.8 0 3.6c-.9 1.8-1.8 3.6-1.8 3.6s-.9-1.8-1.8-3.6c0 0 .9 1.8 0 3.6z"/>
                    <path d="M12 12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    <path d="M12 12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  </svg>
                )
              },
              { 
                name: 'AWS', 
                color: 'from-orange-400 to-yellow-400',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.763 17.564c.8 0 1.4-.3 1.9-.8.4-.4.7-.9.8-1.5.1-.6 0-1.2-.3-1.7-.3-.5-.7-.9-1.2-1.2-.5-.3-1-.4-1.6-.4-.3 0-.6.1-.9.2-.3.1-.5.3-.7.5-.2.2-.3.5-.4.8-.1.3-.1.6 0 .9.1.3.2.6.4.8.2.2.4.4.7.5.3.1.6.2.9.2zm0-2.4c-.2 0-.4 0-.6-.1-.2-.1-.3-.2-.4-.4-.1-.2-.1-.4-.1-.6 0-.2.1-.4.2-.6.1-.2.3-.3.5-.4.2-.1.4-.1.6-.1.2 0 .4 0 .6.1.2.1.3.2.4.4.1.2.1.4.1.6 0 .2-.1.4-.2.6-.1.2-.3.3-.5.4-.2.1-.4.1-.6.1z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                )
              }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className="text-white">
                    {tech.logo}
                  </div>
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