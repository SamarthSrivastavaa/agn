import React, { useState, useEffect } from 'react';
import Landing from './pages/landing';
import OurTeam from './pages/OurTeam';
import ReachOut from './pages/ReachOut';
import Terminal from './pages/Terminal';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Landing Section */}
      <section id="landing">
        <Landing />
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-emerald-400 text-sm font-medium">ABOUT US</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
              Who We
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Are</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                We are a passionate team of developers, designers, and digital marketing strategists committed to delivering smart, scalable, and reliable software solutions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our mission is to transform your ideas into powerful digital experiences that drive business growth and exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold px-8 py-4 rounded-2xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  See How We Work
                </button>
                <button className="border-2 border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  Our Process
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                    <div className="text-gray-300">Projects</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">96%</div>
                    <div className="text-gray-300">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
                    <div className="text-gray-300">Years</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-emerald-400 text-sm font-medium">OUR SERVICES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
              What We
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Do</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom web applications built with modern technologies and best practices.',
                icon: '🌐',
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
                icon: '📱',
                color: 'from-emerald-500 to-cyan-500'
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences.',
                icon: '🎨',
                color: 'from-pink-500 to-rose-500'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
                icon: '☁️',
                color: 'from-orange-500 to-yellow-500'
              },
              {
                title: 'E-commerce',
                description: 'Complete e-commerce solutions with payment integration and inventory management.',
                icon: '🛒',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Consulting',
                description: 'Strategic technology consulting to help you make informed decisions.',
                icon: '💡',
                color: 'from-violet-500 to-purple-500'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
        <OurTeam />
      </section>

      {/* Terminal Section */}
      <section id="terminal">
        <Terminal />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ReachOut />
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold p-4 rounded-full shadow-2xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;