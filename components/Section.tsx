import React from 'react';

interface SectionProps {
  title: string;
  content: React.ReactNode;
  lgWidth?: string;
  lgHeight?: string;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, lgWidth = 'lg:w-[38rem]', lgHeight = 'lg:h-[21rem]', bgColor = 'bg-[#EAF0EA]' }) => {
  return (
    <div className={`border-2 border-[#161716] border-b-[8px] ${bgColor} text-lg lg:text-xl font-medium px-6 py-4 lg:px-8 lg:py-6 rounded-xl mx-[10%] lg:mx-4 ${lgWidth} h-auto ${lgHeight}`}>
      <h1 className="font-bold mb-6 text-2xl">{title}</h1>
      {content}
    </div>
  );
};

export default Section;