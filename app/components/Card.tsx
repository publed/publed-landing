// components/Card.tsx
import Image from 'next/image';
import React from 'react';

interface CardProps {
  icon: React.ReactNode | string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="rounded-lg bg-[#294968] p-6 text-white shadow-lg">
      <div className="mb-4 flex items-center space-x-4">
        <div className="rounded-full border border-[#445E78] bg-[#1E3A4C] p-2">
          {typeof icon === 'string' ? (
            <Image src={icon} alt={title} width={40} height={40} />
          ) : (
            icon
          )}
        </div>
      </div>
      <div className="mb-4 flex items-center space-x-4">
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
