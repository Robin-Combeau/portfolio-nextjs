"use client";

import React, { useEffect, useState } from 'react';
import { skills } from "@/lib/data";

import { Roboto_Mono } from 'next/font/google';
import LanguageSelector from '../CodeLanguageSelector';
import Section from '../Section';
import Skill from '../Skill';
import MotionSection from '../MotionSection';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
const code = Roboto_Mono({ subsets: ['latin'] });

export default function Skills() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Compétences");
    }
  }, [inView, setActiveSection]);
  
  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  const levels = skills.map((level) => level.value);
  const items = skills.map((level) => level.list);

  const generateCodeBlock = (language: string) => {
    const classLevels = levels.map((level, index) => {
      const limitedSkillList = items[index].slice(0, 3).map((skill) => `"${skill}"`);
      const skillListWithEllipsis = items[index].length > 3 ? [...limitedSkillList, '...'] : limitedSkillList;
      const codeLine = language === 'javascript'
        ? `this.${level.toLowerCase()} = [${skillListWithEllipsis.join(', ')}];`
        : `$this->${level.toLowerCase()} = [${skillListWithEllipsis.join(', ')}];`;
      return codeLine;
    });

    const classDeclaration = language === 'javascript'
      ? 'class Skills {\n  constructor() {\n'
      : 'class Skills {\n  public function __construct() {\n';

    return `${classDeclaration}    ${classLevels.join('\n    ')}\n  }\n}`;
  };

  return (
    <MotionSection
      id="skills"
      ref={ref}
      content={
        <>
          <Section
            title="Compétences"
            lgWidth="lg:w-[38rem]"
            xxlWidth="2xl:w-[51rem]"
            bgColor="bg-[#ECB5A3]"
            content={
              <ul className="flex flex-col">
                {skills.map((level) => (
                  <li key={level.name} className="flex mb-2 sm:mb-1">
                    <span className="font-bold text-base lg:text-lg min-w-[5.2rem] lg:min-w-[7rem]">{level.name}</span>{" "}
                    <span className="flex flex-wrap mt-[-5px]">
                      {level.list.map((skill, skillIndex) => (
                        <Skill key={skillIndex} skill={skill} />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            }
          />
          <div className="relative border-2 border-neutral-500 text-neutral-500 border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-4 rounded-xl whitespace-pre-wrap diagonal-line-pattern mx-8 lg:mx-4 w-[18rem] 2xl:w-[21rem] lg:self-stretch hidden lg:block">
            <code className={`${code.className} tracking-tighter`}>
              {selectedLanguage === 'Javascript' ? generateCodeBlock('javascript') : generateCodeBlock('php')}
            </code>
            <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
          </div>
        </>
      }
    />
  );
};

{/* <div className="border-2 border-[#161716] border-b-[8px] bg-[#ECB5A3] text-lg lg:text-xl font-medium px-6 py-4 lg:px-8 lg:py-6 rounded-xl mx-[10%] lg:mx-4 lg:w-[38rem] h-auto lg:h-[19rem]">
          <h1 className="font-bold mb-6 text-2xl">Compétences</h1>
          <ul className="flex flex-col">
            {skills.map((level) => (
              <li key={level.name} className="flex mb-2 sm:mb-1">
                <span className="font-bold text-base lg:text-lg min-w-[4.8rem] lg:min-w-[7rem]">{level.name}</span>{" "}
                <span className="flex flex-wrap">
                  {level.list.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-sm lg:text-base font-base border-2 border-[#161716] border-b-[4px] bg-[#EAF0EA] px-2 py-0.5 lg:px-3 lg:py-1 m-0.5 lg:m-0.5 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div> */}