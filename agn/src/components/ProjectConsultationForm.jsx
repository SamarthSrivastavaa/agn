import React, { useState } from "react";

const glassyCardClass =
  "rounded-3xl border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md transition hover:bg-white/10 hover:border-white/40 group focus:outline-none";
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

const ProjectConsultationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    idea: "",
    timeline: "",
    budget: "",
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
  };

  return (
    <div className={`w-full flex flex-col items-center justify-center p-12 ${glassyCardClass}`} style={boxShadowStyle}>
      <h2 className="text-white text-3xl font-extrabold mb-8 tracking-wide">Project Consultation</h2>
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
          <label htmlFor="idea" className="text-white/80 text-xl font-semibold">Idea Summary</label>
          <textarea
            id="idea"
            name="idea"
            className={glassyTextAreaClass}
            style={boxShadowStyle}
            placeholder="Describe your idea..."
            value={form.idea}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="timeline" className="text-white/80 text-xl font-semibold">Timeline</label>
            <input
              id="timeline"
              name="timeline"
              type="text"
              className={glassyInputClass}
              style={boxShadowStyle}
              placeholder="e.g. 2 months"
              value={form.timeline}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="budget" className="text-white/80 text-xl font-semibold">Budget</label>
            <input
              id="budget"
              name="budget"
              type="text"
              className={glassyInputClass}
              style={boxShadowStyle}
              placeholder="e.g. $5000"
              value={form.budget}
              onChange={handleChange}
              required
            />
          </div>
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

export default ProjectConsultationForm; 