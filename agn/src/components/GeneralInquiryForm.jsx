import React, { useState } from "react";

const XLogo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle mr-2">
    <rect width="24" height="24" rx="6" fill="#222"/>
    <path d="M16.5 7.5L7.5 16.5M7.5 7.5L16.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const glassyCardClass =
  "rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md transition hover:bg-white/10 hover:border-white/40 group focus:outline-none";
const glassyButtonClass =
  "flex items-center px-8 py-5 rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md transition hover:bg-white/10 hover:border-white/40 min-w-[120px] justify-center text-2xl font-bold text-white";
const glassyInputClass =
  "px-8 py-5 rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md text-white font-semibold text-2xl min-w-[120px] w-full focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/40 transition";
const boxShadowStyle = {
  boxShadow:
    "0 8px 48px 0 rgba(255,255,255,0.10), 0 2px 16px 0 rgba(255,255,255,0.13)",
};

const GeneralInquiryForm = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSent(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return;
    setSent(true);
    // Here you would trigger your email logic
  };

  return (
    <div className="w-full flex flex-row gap-8 items-stretch justify-center p-8" style={{minHeight: 320}}>
      {/* Twitter Box */}
      <div className={`flex flex-col items-center justify-center w-[40%] ${glassyCardClass}`} style={{...boxShadowStyle, minHeight: 260}}>
        <a
          href="https://x.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-6 rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition text-white text-2xl font-bold"
          style={boxShadowStyle}
        >
          <XLogo />
          <span>twitter</span>
        </a>
      </div>
      {/* Mail Us Box */}
      <div className={`flex flex-col items-center justify-center w-[60%] ${glassyCardClass} p-8`} style={{...boxShadowStyle, minHeight: 260}}>
        <h2 className="text-white text-3xl font-extrabold mb-8 tracking-wide">Mail Us</h2>
        <form onSubmit={handleSend} className="flex flex-col items-center w-full">
          <div className="flex flex-row w-full gap-4 items-center mb-2">
            <input
              type="email"
              className={glassyInputClass}
              style={boxShadowStyle}
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button
              type="submit"
              className={`${glassyButtonClass} !text-white`}
              style={boxShadowStyle}
              disabled={!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)}
            >
              Send
            </button>
          </div>
          {email && !sent && (
            <span className="text-white/80 text-lg mt-4 mb-2 text-center w-full">Our team will connect with you in a while...</span>
          )}
          {sent && (
            <span className="text-green-400 text-lg mt-4">Thank you! We'll be in touch soon.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default GeneralInquiryForm; 