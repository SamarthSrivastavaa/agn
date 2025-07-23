import React, { useState, useRef, useEffect } from "react";

const TEAM = {
  samarth: {
    name: "Samarth Srivastava",
    education: "IIIT Sonepat",
    portfolio: "https://samarthsrivastava.com/",
    summary: "Web developer, product builder, loves clean code.",
    email: "samarthsrivastava897@gmail.com",
    x: "https://x.com/SamarthS_1101",
  },
  sarthak: {
    name: "Sarthak Harsh",
    education: "IIIT Sonepat",
    portfolio: "https://sarthakharsh.com/",
    summary: "App developer, design enthusiast, ships fast.",
    email: "sarthakreigns247@gmail.com",
    x: "https://x.com/SarthakHarsh",
  },
  anurag: {
    name: "Anurag Patel",
    education: "IIT Kanpur",
    portfolio: "https://anuragpatel.com/",
    summary: "AI/ML engineer, data wizard, curious mind.",
    email: "anuragpatel1101@gmail.com",
    x: "https://x.com/AnuragX",
  },
};

const MISSION = `We don’t just build projects..we build them like they’re our own. Every line of code is intentional, every design decision deliberate. With a sharp eye for detail and a bias for action, we move fast without breaking what matters. You bring the idea, we’ll make sure it’s done right.`;

const COMMANDS = [
  "help",
  "cd [name]",
  "ping [name]",
  "ls team",
  "whoami",
  "cat mission",
  "sudo hire",
  "clear",
  "exit",
];

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to dev.infra — terminal access granted" },
    { type: "system", text: "Type `help` to get started." },
  ]);
  const [input, setInput] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);
  const [blink, setBlink] = useState(true);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [showPrompt]);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [history, showPrompt]);

  const handleCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    let out = null;
    if (cmd === "help") {
      out = (
        <div>
          <div className="text-yellow-400">Available commands:</div>
          <ul className="pl-4 mt-1 space-y-1">
            {COMMANDS.map((c) => (
              <li key={c} className="text-white font-mono">{c}</li>
            ))}
          </ul>
        </div>
      );
    } else if (cmd.startsWith("cd ")) {
      const name = cmd.split(" ")[1];
      if (TEAM[name]) {
        const dev = TEAM[name];
        out = (
          <div className="text-white">
            <div className="font-bold text-2xl text-yellow-400">{dev.name}</div>
            <div className="text-gray-300">Education: <span className="text-white">{dev.education}</span></div>
            <div className="text-gray-300">Portfolio: <a href={dev.portfolio} className="underline text-yellow-400" target="_blank" rel="noopener noreferrer">{dev.portfolio}</a></div>
            <div className="text-gray-300">Know Me: <span className="text-white">{dev.summary}</span></div>
            <div className="text-gray-300">Email: <span className="text-white">{dev.email}</span></div>
          </div>
        );
      } else {
        out = <span className="text-red-400">No such team member: {name}</span>;
      }
    } else if (cmd.startsWith("ping ")) {
      const name = cmd.split(" ")[1];
      if (TEAM[name]) {
        window.open(TEAM[name].x, "_blank");
        out = <span className="text-green-400">Pinging {name}... opened X profile.</span>;
      } else {
        out = <span className="text-red-400">No such team member: {name}</span>;
      }
    } else if (cmd === "ls team") {
      out = (
        <div className="text-white">{Object.values(TEAM).map((dev) => dev.name).join(", ")}</div>
      );
    } else if (cmd === "whoami") {
      out = <span className="text-yellow-400">You are a curious visitor. Welcome!</span>;
    } else if (cmd === "cat mission") {
      out = <span className="text-white whitespace-pre-line">{MISSION}</span>;
    } else if (cmd === "sudo hire") {
      window.location.href = "mailto:samarthsrivastava897@gmail.com?subject=Let's work together!";
      out = <span className="text-green-400">Opening mail client...</span>;
    } else if (cmd === "clear") {
      setHistory([]);
      return;
    } else if (cmd === "exit") {
      setShowPrompt(false);
      out = <span className="text-gray-400">Session closed. Refresh to restart.</span>;
    } else {
      out = <span className="text-red-400">Unknown command: {raw}</span>;
    }
    setHistory((h) => [...h, { type: "input", text: raw }, { type: "output", text: out }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  if (!showPrompt) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="text-gray-400 text-xl">Session closed. Refresh the page to restart the terminal.</div>
      </div>
    );
  }

  return (
    <div className="w-full px-6 flex-1">
      <div className="relative w-full h-full bg-black overflow-hidden">
        <div className="flex flex-col justify-start items-start p-16 ml-10 mt-12">
          <h1 className="text-white font-bold font-poppins text-[7rem] leading-none tracking-[0.165em]">Quick</h1>
          <h1 className="text-white font-bold font-poppins text-[7rem] leading-none tracking-[0.165em]">Terminal</h1>
          <div className="mt-4 w-64 h-3 bg-white rounded-full"></div>
          <span className="text-gray-400 text-[2rem] mt-12 mb-1">use the 'help' command to list all commands</span>
        </div>
        
        <div className="w-full px-24 max-w-full">
          <div className="bg-neutral-900 rounded-xl shadow-2xl border border-yellow-400 p-4 md:p-8 flex flex-col min-h-[24rem]">
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto font-mono text-lg text-white space-y-2 mb-2 pr-2 custom-scrollbar"
              style={{ minHeight: 300, maxHeight: 400 }}
            >
              {history.map((item, i) => (
                <div key={i}>
                  {item.type === "input" ? (
                    <span className="text-yellow-400">$ {item.text}</span>
                  ) : item.type === "system" ? (
                    <span className="text-gray-400">{item.text}</span>
                  ) : (
                    item.text
                  )}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-yellow-400 font-mono text-lg">$</span>
              <input
                ref={inputRef}
                className="bg-transparent outline-none border-none text-white font-mono text-lg flex-1 ml-2 caret-yellow-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                autoComplete="off"
                spellCheck={false}
                style={{ minWidth: 0 }}
              />
              <span className={`ml-1 w-2 h-6 ${blink ? "bg-yellow-400" : "bg-transparent"} animate-blink`}></span>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; background: #222; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #facc15; border-radius: 6px; }
        @media (max-width: 900px) {
          .px-24 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }
        @media (max-width: 600px) {
          .max-w-2xl { max-width: 98vw !important; }
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s steps(1) infinite; }
      `}</style>
    </div>
  );
};

export default Terminal; 
