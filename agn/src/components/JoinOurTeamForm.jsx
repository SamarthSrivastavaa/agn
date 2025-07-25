import React, { useState } from "react";

const glassyCardClass =
  "rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md focus:outline-none p-14 sm:p-16 md:p-20 transition-none";
const glassyInputClass =
  "px-8 py-5 rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md text-white font-semibold text-2xl min-w-[120px] w-full focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/40 transition";
const glassyFileClass =
  "file:mr-4 file:py-3 file:px-6 file:rounded-3xl file:border-0 file:text-lg file:font-semibold file:bg-white/10 file:text-white file:backdrop-blur-md file:shadow-2xl file:transition file:hover:bg-white/20 file:hover:text-black px-8 py-5 rounded-3xl border border-white/20 shadow-2xl bg-black/70 text-white w-full focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/40 transition";
const glassyButtonClass =
  "flex items-center px-8 py-5 rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md transition hover:bg-white/10 hover:border-white/40 min-w-[120px] justify-center text-2xl font-bold text-white mt-6 w-full";
const boxShadowStyle = {
  boxShadow:
    "0 8px 48px 0 rgba(255,255,255,0.10), 0 2px 16px 0 rgba(255,255,255,0.13)",
};

const JoinOurTeamForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    resume: null,
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Here you would trigger your submission logic
  };

  return (
    <div className={`w-full flex flex-col items-center justify-center ${glassyCardClass}`} style={{...boxShadowStyle, margin: '24px'}}>
      <h2 className="text-white text-3xl font-extrabold mb-8 tracking-wide">Join Our Team</h2>
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
          <label htmlFor="role" className="text-white/80 text-xl font-semibold">Role</label>
          <input
            id="role"
            name="role"
            type="text"
            className={glassyInputClass}
            style={boxShadowStyle}
            placeholder="e.g. Frontend Developer"
            value={form.role}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="portfolio" className="text-white/80 text-xl font-semibold">GitHub/Portfolio</label>
          <input
            id="portfolio"
            name="portfolio"
            type="text"
            className={glassyInputClass}
            style={boxShadowStyle}
            placeholder="Link to your GitHub or portfolio"
            value={form.portfolio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="resume" className="text-white/80 text-xl font-semibold">Resume Upload</label>
          <input
            id="resume"
            name="resume"
            type="file"
            className={glassyFileClass}
            style={boxShadowStyle}
            accept=".pdf,.doc,.docx"
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

export default JoinOurTeamForm; 