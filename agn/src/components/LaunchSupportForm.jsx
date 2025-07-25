import React, { useState } from "react";

const glassyCardClass =
  "rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md focus:outline-none p-14 sm:p-16 md:p-20 transition-none";
const glassyInputClass =
  "px-8 py-5 rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md text-white font-semibold text-2xl min-w-[120px] w-full focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/40 transition";
const glassyTextAreaClass =
  "px-8 py-5 rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md text-white font-semibold text-2xl w-full focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/40 transition resize-none min-h-[120px]";
const glassyButtonClass =
  "flex items-center px-8 py-5 rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md transition hover:bg-white/10 hover:border-white/40 min-w-[120px] justify-center text-2xl font-bold text-white mt-6 w-full";
const boxShadowStyle = {
  boxShadow:
    "0 8px 48px 0 rgba(255,255,255,0.10), 0 2px 16px 0 rgba(255,255,255,0.13)",
};

const LaunchSupportForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    url: "",
    support: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Here you would trigger your submission logic
  };

  return (
    <div className={`w-full flex flex-col items-center justify-center ${glassyCardClass}`} style={{...boxShadowStyle, margin: '24px'}}>
      <h2 className="text-white text-3xl font-extrabold mb-8 tracking-wide">Launch Support</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-2xl">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white/80 text-xl font-semibold">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={glassyInputClass}
            style={boxShadowStyle}
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white/80 text-xl font-semibold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={glassyInputClass}
            style={boxShadowStyle}
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="url" className="text-white/80 text-xl font-semibold">Product URL</label>
          <input
            id="url"
            name="url"
            type="text"
            className={glassyInputClass}
            style={boxShadowStyle}
            placeholder="https://yourproduct.com"
            value={form.url}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="support" className="text-white/80 text-xl font-semibold">Support Needed</label>
          <textarea
            id="support"
            name="support"
            className={glassyTextAreaClass}
            style={boxShadowStyle}
            placeholder="Describe the support you need..."
            value={form.support}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={glassyButtonClass} style={boxShadowStyle}>
          Submit
        </button>
        {sent && (
          <span className="text-green-400 text-lg mt-2 text-center">Thank you! We'll be in touch soon.</span>
        )}
      </form>
    </div>
  );
};

export default LaunchSupportForm; 