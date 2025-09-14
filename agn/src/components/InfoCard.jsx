import React from 'react';

const InfoCard = ({ dev }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-2xl">
      {/* Avatar and Name */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">{dev.name.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-xl">{dev.name}</h3>
          <p className="text-gray-400 text-sm">{dev.jobTitle}</p>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mb-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          dev.status === 'Available' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
        }`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${
            dev.status === 'Available' ? 'bg-green-400' : 'bg-yellow-400'
          }`}></div>
          {dev.status}
        </span>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 gap-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Email:</span>
          <span className="text-white">{dev.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Twitter:</span>
          <span className="text-white">{dev.twitter}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">College:</span>
          <span className="text-white">{dev.college}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Role:</span>
          <span className="text-white">{dev.role}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Owner:</span>
          <span className="text-white">{dev.owner}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">LinkedIn:</span>
          <span className="text-white">{dev.linkedin}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h4 className="text-white font-semibold text-sm mb-3">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {dev.skills?.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;