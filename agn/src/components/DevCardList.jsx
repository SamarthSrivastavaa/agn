import React from 'react';
import InfoCard from './InfoCard';

const DevCardList = () => {
  const developers = [
    {
      name: 'Alex Johnson',
      jobTitle: 'Senior Full-Stack Developer',
      email: 'alex@techneon.com',
      twitter: '@alexj_dev',
      college: 'MIT Computer Science',
      role: 'Lead Developer',
      status: 'Available',
      owner: 'TechNeon',
      linkedin: 'alex-johnson-dev',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
    },
    {
      name: 'Sarah Chen',
      jobTitle: 'UI/UX Designer',
      email: 'sarah@techneon.com',
      twitter: '@sarah_designs',
      college: 'Stanford Design',
      role: 'Design Lead',
      status: 'Available',
      owner: 'TechNeon',
      linkedin: 'sarah-chen-design',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research']
    },
    {
      name: 'Mike Rodriguez',
      jobTitle: 'DevOps Engineer',
      email: 'mike@techneon.com',
      twitter: '@mike_devops',
      college: 'Carnegie Mellon',
      role: 'Infrastructure Lead',
      status: 'Busy',
      owner: 'TechNeon',
      linkedin: 'mike-rodriguez-devops',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Monitoring']
    },
    {
      name: 'Emily Watson',
      jobTitle: 'Frontend Developer',
      email: 'emily@techneon.com',
      twitter: '@emily_frontend',
      college: 'UC Berkeley',
      role: 'Frontend Specialist',
      status: 'Available',
      owner: 'TechNeon',
      linkedin: 'emily-watson-frontend',
      skills: ['React', 'Vue.js', 'JavaScript', 'CSS', 'Webpack']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {developers.map((dev, index) => (
        <InfoCard key={index} dev={dev} />
      ))}
    </div>
  );
};

export default DevCardList;