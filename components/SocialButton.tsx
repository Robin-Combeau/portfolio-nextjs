import React from 'react';

interface SocialButtonProps {
  href: string;
  icon: React.ReactElement;
  size: number;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, size, backgroundColor = 'bg-[#161716]', textColor = 'text-[#EAF0EA]', hoverTextColor = 'hover:text-[#6A8A5D]' }) => {
  return (
    <a
      className={`${backgroundColor} p-4 ${textColor} flex items-center rounded-full ${hoverTextColor}`}
      href={href}
      target="_blank"
    >
      {React.cloneElement(icon, { size })}
    </a>
  );
};

export default SocialButton;
