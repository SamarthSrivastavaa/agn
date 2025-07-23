import React from "react";

const InfoCard = ({
  name = "Samarth Srivastava",
  email = "samarthsrivastava897@gmail.com",
  college = "IIIT Sonepat",
  twitter = "https://twitter.com/yourhandle",
  jobTitle = "Web dev",
  owner = "Samarth Srivastava",
  status = "Available",
  linkedin = "https://linkedin.com/in/samarthsrivastava897",
  avatar = null,
}) => (
  <div className="bg-white rounded-2xl shadow-2xl w-full h-full p-10 flex flex-col gap-6 border-4 border-yellow-400">
    {/* Header */}
    <div className="flex items-center gap-6">
      {avatar ? (
        <img src={avatar} alt={name} className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover" />
      ) : (
        <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-black text-3xl font-bold">{name[0]}</div>
      )}
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-black">{name}</span>
        <span className="text-lg text-gray-700">{name}</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold text-sm">Preview</span>
      </div>
    </div>
    {/* Info grid */}
    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-2">
      <div>
        <div className="text-gray-500 text-base font-semibold">Email Address</div>
        <div className="text-black text-lg font-bold">{email}</div>
      </div>
      <div>
        <div className="text-gray-500 text-base font-semibold">My Twitter</div>
        <a href={twitter} className="text-yellow-500 text-lg font-bold underline break-all" target="_blank" rel="noopener noreferrer">{twitter}</a>
      </div>
      <div>
        <div className="text-gray-500 text-base font-semibold">College</div>
        <div className="flex items-center gap-2 mt-1">
          <span className="inline-block w-6 h-6 bg-yellow-400 rounded-full"></span>
          <span className="text-black text-lg font-bold">{college}</span>
        </div>
      </div>
      <div>
        <div className="text-gray-500 text-base font-semibold">Job title</div>
        <div className="text-yellow-500 text-lg font-bold">{jobTitle}</div>
      </div>
      <div>
        <div className="text-gray-500 text-base font-semibold">Status</div>
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg font-semibold text-base">{status}</span>
      </div>
      <div>
        <div className="text-gray-500 text-base font-semibold">Owner</div>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">{owner[0]}</div>
          <span className="text-black text-lg font-bold">{owner}</span>
        </div>
      </div>
      <div className="col-span-2">
        <div className="text-gray-500 text-base font-semibold">LinkedIn profile</div>
        <a href={linkedin} className="text-yellow-500 text-lg font-bold underline break-all" target="_blank" rel="noopener noreferrer">{linkedin}</a>
      </div>
    </div>
  </div>
);

export default InfoCard; 