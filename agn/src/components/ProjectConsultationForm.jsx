import React, { useState } from 'react';

const ProjectConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project consultation form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Project Consultation</h2>
        <p className="text-gray-400">Ready to start your next big project? Let's talk.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
            placeholder="Your company name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 [&>option]:bg-gray-800 [&>option]:text-white"
            >
              <option value="" className="bg-gray-800 text-white">Select project type</option>
              <option value="web-app" className="bg-gray-800 text-white">Web Application</option>
              <option value="mobile-app" className="bg-gray-800 text-white">Mobile Application</option>
              <option value="e-commerce" className="bg-gray-800 text-white">E-commerce Platform</option>
              <option value="api" className="bg-gray-800 text-white">API Development</option>
              <option value="other" className="bg-gray-800 text-white">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 [&>option]:bg-gray-800 [&>option]:text-white"
            >
              <option value="" className="bg-gray-800 text-white">Select budget range</option>
              <option value="under-10k" className="bg-gray-800 text-white">Under $10,000</option>
              <option value="10k-25k" className="bg-gray-800 text-white">$10,000 - $25,000</option>
              <option value="25k-50k" className="bg-gray-800 text-white">$25,000 - $50,000</option>
              <option value="50k-100k" className="bg-gray-800 text-white">$50,000 - $100,000</option>
              <option value="over-100k" className="bg-gray-800 text-white">Over $100,000</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 [&>option]:bg-gray-800 [&>option]:text-white"
          >
            <option value="" className="bg-gray-800 text-white">Select timeline</option>
            <option value="asap" className="bg-gray-800 text-white">ASAP</option>
            <option value="1-month" className="bg-gray-800 text-white">1 Month</option>
            <option value="2-3-months" className="bg-gray-800 text-white">2-3 Months</option>
            <option value="3-6-months" className="bg-gray-800 text-white">3-6 Months</option>
            <option value="6-months-plus" className="bg-gray-800 text-white">6+ Months</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell us about your project requirements, goals, and any specific features you need..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold py-4 px-8 rounded-xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Request Consultation
        </button>
      </form>
    </div>
  );
};

export default ProjectConsultationForm;