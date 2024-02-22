import React, { ReactNode } from 'react'

interface CodeWrapperProps {
  content: ReactNode,
  width: string,
  xxlWidth: string
}

const CodeWrapper: React.FC<CodeWrapperProps> = ({ content, width, xxlWidth }) => {
  return (
    <div className={`relative border-2 border-neutral-500 text-neutral-500 border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-4 rounded-xl whitespace-pre-wrap diagonal-line-pattern mx-8 lg:mx-4 w-[${width}] lg:self-stretch 2xl:w-[${xxlWidth}] hidden lg:block`}>
      {content}
    </div>
  );
};

export default CodeWrapper;
