import React, { useState } from 'react';

const JoinOurTeamForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    skills: '',
    portfolio: '',
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
    console.log('Join team form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
        <p className="text-gray-400">Want to work with us? We're always looking for talent.</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
              Position Interested In *
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 [&>option]:bg-gray-800 [&>option]:text-white"
            >
              <option value="" className="bg-gray-800 text-white">Select position</option>
              <option value="frontend" className="bg-gray-800 text-white">Frontend Developer</option>
              <option value="backend" className="bg-gray-800 text-white">Backend Developer</option>
              <option value="fullstack" className="bg-gray-800 text-white">Full-Stack Developer</option>
              <option value="ui-ux" className="bg-gray-800 text-white">UI/UX Designer</option>
              <option value="devops" className="bg-gray-800 text-white">DevOps Engineer</option>
              <option value="project-manager" className="bg-gray-800 text-white">Project Manager</option>
              <option value="other" className="bg-gray-800 text-white">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
            Years of Experience *
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 [&>option]:bg-gray-800 [&>option]:text-white"
          >
            <option value="" className="bg-gray-800 text-white">Select experience level</option>
            <option value="0-1" className="bg-gray-800 text-white">0-1 years</option>
            <option value="1-3" className="bg-gray-800 text-white">1-3 years</option>
            <option value="3-5" className="bg-gray-800 text-white">3-5 years</option>
            <option value="5-10" className="bg-gray-800 text-white">5-10 years</option>
            <option value="10+" className="bg-gray-800 text-white">10+ years</option>
          </select>
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-300 mb-2">
            Technical Skills *
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="List your technical skills, programming languages, frameworks, tools, etc."
          />
        </div>

        <div>
          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
            Portfolio/Website
          </label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
            placeholder="https://yourportfolio.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Cover Letter *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell us about yourself, why you want to join our team, and what you can bring to the table..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold py-4 px-8 rounded-xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JoinOurTeamForm;