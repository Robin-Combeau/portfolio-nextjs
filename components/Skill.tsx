import React from 'react';

interface SkillProps {
  skill: string;
  lgTextSize?: string; // Optional prop for text size
}

const Skill: React.FC<SkillProps> = ({ skill, lgTextSize = "lg:text-base" }) => {
  return (
    <span className={`text-sm ${lgTextSize} font-base border-2 border-[#161716] border-b-[4px] bg-[#EAF0EA] px-3 py-[0.23rem] lg:px-3 lg:py-1 m-0.5 lg:m-0.5 rounded-lg`}>
      {skill}
    </span>
  );
};

export default Skill;
