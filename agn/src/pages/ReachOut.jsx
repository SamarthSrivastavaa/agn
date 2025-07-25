import React, { useState } from "react";
import GeneralInquiryForm from "../components/GeneralInquiryForm";
import ProjectConsultationForm from "../components/ProjectConsultationForm";
import JoinOurTeamForm from "../components/JoinOurTeamForm";
import LaunchSupportForm from "../components/LaunchSupportForm";

const cardData = [
  {
    key: "general",
    icon: "💬",
    title: "General Inquiry",
    desc: "We’re just a message away—let’s talk.",
  },
  {
    key: "consultation",
    icon: "📈",
    title: "Project Consultation",
    desc: "Get a free consultation with our dev experts.",
  },
  {
    key: "join",
    icon: "🧑‍💻",
    title: "Join Our Team",
    desc: "Collaborate with us on a project.",
  },
  {
    key: "launch",
    icon: "🚀",
    title: "Launch Support",
    desc: "We’ll back your product from MVP to market.",
  },
];

const ReachOut = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full px-6 flex-1 font-sans pb-3" style={{fontFamily: 'Inter, Space Grotesk, sans-serif'}}>
      <div className="relative w-full min-h-[110vh] bg-black overflow-hidden flex flex-col">
        <div className="flex flex-col justify-start items-start p-16 ml-10 mt-24">
          <h1 className="text-white font-bold font-poppins text-[7rem] leading-none tracking-[0.165em]">Reach</h1>
          <h1 className="text-white font-bold font-poppins text-[7rem] leading-none tracking-[0.165em]">Out</h1>
          <div className="mt-4 w-64 h-3 bg-white rounded-full"></div>
        </div>
        <div className={`flex justify-center items-center w-full transition-all duration-500 ${selected ? 'opacity-100 translate-y-0 mt-0 mb-6' : 'opacity-0 -translate-y-10 h-0 m-0 pointer-events-none'}`}
          style={{minHeight: selected ? '40vh' : 0}}>
          {selected === "general" && (
            <div className="w-[60%] h-[60%] flex items-center justify-center">
              <GeneralInquiryForm />
            </div>
          )}
          {selected === "consultation" && (
            <div className="w-[60%] h-[60%] flex items-center justify-center">
              <ProjectConsultationForm />
            </div>
          )}
          {selected === "join" && (
            <div className="w-[60%] h-[60%] flex items-center justify-center">
              <JoinOurTeamForm />
            </div>
          )}
          {selected === "launch" && (
            <div className="w-[60%] h-[60%] flex items-center justify-center">
              <LaunchSupportForm />
            </div>
          )}
        </div>
        <div className={`w-full flex justify-center items-center transition-all duration-500 ${selected ? 'mt-0' : 'mt-20'} mb-10`}>
          <div className={`${selected ? 'grid grid-cols-2 gap-6 w-[60%]' : 'grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-6xl'} px-4 transition-all duration-500`}>
            {cardData.map((card) => (
              <button
                key={card.key}
                onClick={() => setSelected(card.key)}
                className={`relative ${selected ? 'rounded-2xl p-6 min-h-[110px] text-lg' : 'rounded-3xl p-12 min-h-[260px] text-2xl'} border border-white/20 shadow-2xl bg-black/70 backdrop-blur-md flex flex-col transition-all duration-300 hover:scale-105 hover:backdrop-blur-xl hover:bg-white/10 hover:border-white/40 group focus:outline-none items-center justify-center`}
                style={{boxShadow: '0 8px 48px 0 rgba(255,255,255,0.10), 0 2px 16px 0 rgba(255,255,255,0.13)', width: selected ? '100%' : undefined, maxWidth: selected ? 'none' : undefined}}
                tabIndex={0}
              >
                <span className={`select-none ${selected ? 'text-2xl mb-1' : 'text-5xl absolute top-8 left-8'}`}>{card.icon}</span>
                <h3 className={`font-bold text-white ${selected ? 'text-lg mt-2 mb-1' : 'text-4xl mt-16 mb-4'} font-sans`} style={{fontFamily: 'Inter, sans-serif'}}>{card.title}</h3>
                <p className={`text-white/70 ${selected ? 'text-xs' : 'text-xl'} font-sans text-center`} style={{fontFamily: 'Inter, sans-serif'}}>{card.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut; 