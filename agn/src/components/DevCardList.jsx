import React from 'react';
import InfoCard from './InfoCard';

const DevCardList = () => {
  const developers = [
    {
      name: 'Samarth Srivastava',
      jobTitle: 'Full-Stack & Blockchain Developer',
      email: 'samarthsrivastava897@gmail.com',
      twitter: '@samarth_dev',
      college: 'IIIT Sonepat',
      role: 'Developer',
      status: 'Available',
      owner: 'BuildMyDream',
      linkedin: 'samarth-srivastava-dev',
      skills: ['Blockchain', 'MERN Stack', 'NestJS', 'EVM', 'Solana']
    },
    {
      name: 'Sarthak Harsh',
      jobTitle: 'Flutter & Blockchain Developer',
      email: 'sarthakit12412004@iiitsonepat.ac.in',
      twitter: '@Sarthak_WB3',
      college: 'IIIT Sonepat',
      role: 'App Dev & Blockchain',
      status: 'Available',
      owner: 'BuildMyDream',
      linkedin: 'sarthak-harsh-dev',
      skills: ['Flutter', 'Blockchain', 'Mobile Development', 'Dart', 'Web3']
    },
    {
      name: 'Anurag Patel',
      jobTitle: 'AI/ML Engineer',
      email: 'anurag@buildmydream.com',
      twitter: '@anurag_ai',
      college: 'IIT Kanpur',
      role: 'AI/ML Specialist',
      status: 'Available',
      owner: 'BuildMyDream',
      linkedin: 'anurag-patel-ai',
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch', 'Computer Vision']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {developers.map((dev, index) => (
        <InfoCard key={index} dev={dev} />
      ))}
    </div>
  );
};

export default DevCardList;