import React from 'react';
import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  download?: boolean;
  content: any;
  borderColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, download, content, borderColor = 'border-[#161716]', backgroundColor = 'bg-[#EAF0EA]', hoverBackgroundColor = 'hover:bg-[#6A8A5D]', }) => {
  const buttonClassName = `border-2 ${borderColor} border-b-[6px] ${backgroundColor} px-7 py-3 flex items-center text-center gap-2 rounded-xl outline-none ${hoverBackgroundColor} transition`;

  if (download) {
    return (
      <a className={buttonClassName} href={href} download>
        {content}
      </a>
    );
  }

  return (
    <Link className={buttonClassName} href={href}>
      {content}
    </Link>
  );
};

export default LinkButton;