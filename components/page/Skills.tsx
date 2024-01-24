"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'

import { FaRegStar } from "react-icons/fa";
import { skills } from "@/lib/data";

import { Roboto_Mono } from 'next/font/google';
const code = Roboto_Mono({ subsets: ['latin'] });

const Skills = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  const levels = skills.map((level) => level.value);
  const items = skills.map((level) => level.list);

  // Function to generate the class summary
  const generateCodeBlock = () => {
    const classLevels = levels.map((level, index) => {
      const skillList = items[index].map((skill) => `"${skill}"`);
      return `this.${level.toLowerCase()} = [${skillList.join(', ')}];`;
    });

    return `class Skills {  \n  constructor() {    \n    ${classLevels.join('\n    ')}  \n  }\n}`;
  };

  return (
    <section id="skills">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="border-2 border-[#161716] border-b-[8px] bg-[#ECB5A3] text-lg lg:text-xl font-medium px-8 py-6 pr-14 rounded-xl mx-[10%] lg:mx-4 lg:w-[38rem] h-auto lg:h-[20rem]">
          <h1 className="font-bold mb-6 text-2xl">Compétences</h1>
          <ul className="flex flex-col">
            {skills.map((level) => (
              <motion.li
                key={level.name}
                className="flex mb-2 sm:mb-1"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <span className="font-bold text-base min-w-[7rem] lg:min-w-[10rem]">{level.name}</span>{" "}
                <span className="flex flex-wrap">
                  {level.list.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-sm font-base border-2 border-[#161716] border-b-[4px] bg-[#EAF0EA] px-3 py-1 lg:px-2 lg:py-0.5 m-0.5 lg:m-0.5 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="relative border-2 border-neutral-500 text-neutral-500 border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-4 rounded-xl whitespace-pre-wrap diagonal-line-pattern mx-8 lg:mx-4 w-[18rem] lg:h-[20rem] hidden lg:block">
          <code className={`${code.className} tracking-tighter`}>
            {generateCodeBlock()}
          </code>
          <div className="absolute bottom-2 right-2">
            <button className={`px-1 py-1 mx-0.5 hover:text-[#161716] transition ${selectedLanguage === 'Javascript' ? 'selected underline' : ''}`} onClick={() => handleLanguageChange('Javascript')}>
              Javascript
            </button>
            <button className={`px-2 py-1 mx-0.5 hover:text-[#161716] transition ${selectedLanguage === 'PHP' ? 'selected underline' : ''}`} onClick={() => handleLanguageChange('PHP')}>
              PHP
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;