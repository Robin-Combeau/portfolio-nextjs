import React, { FC, useState } from 'react'
import { Roboto_Mono } from 'next/font/google';
import LanguageSelector from './CodeLanguageSelector';
import { codeBlocks } from "@/lib/data";

const code = Roboto_Mono({ subsets: ['latin'] });

interface CodeBlockProps {
  selectedLanguage: 'Javascript' | 'PHP';
  className: string
}
const CodeBlock: FC<CodeBlockProps> = ({ className, selectedLanguage }) => {
  const selectedBlock = codeBlocks.find((block) =>block.className === className);

  if (!selectedBlock) {
    return <span></span>;
  }

  return (
      <code className={`${code.className} tracking-tighter`}>
        {selectedLanguage === 'Javascript' ? (
          <span>
            class {className} {'{'}
            {'\n  '}constructor() {'{'}
            {Object.entries(selectedBlock)
            .filter(([key]) => key !== 'className')
            .map(([key, value]) => (
              <span key={key}>
                {'\n    '}this.{key} = {key === 'date' || key === 'age' || key === 'yearsOfExperience' ? `new Date().getFullYear() - ${value}` : value};
              </span>
            ))}
            {'\n  '}{'}'}
            {'\n'}{'}'}
          </span>
        ) : (
          <span>
            class {className} {'{'}
            {'\n  '}public function __construct() {'{'}
            {Object.entries(selectedBlock)
            .filter(([key]) => key !== 'className')
            .map(([key, value]) => (
              <span key={key}>
                {'\n    '}this-{'>'}{key} = {key === 'date' || key === 'age' ? `date("Y") - ${value}` : value};
              </span>
            ))}
            {'\n  '}{'}'}
            {'\n'}{'}'}
          </span>
        )}
      </code>
  )
}

export default CodeBlock