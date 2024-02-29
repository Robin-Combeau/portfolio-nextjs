"use client";

import React, { useState } from 'react';
import { experiences } from "@/lib/data";

import Section from '../Section';
import LanguageSelector from '../CodeLanguageSelector';
import { Roboto_Mono } from 'next/font/google'
import CodeBlock from '../CodeBlock';
import CodeWrapper from '../CodeWrapper';
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from "react-icons/md";
import MotionSection from '../MotionSection';
const code = Roboto_Mono({ subsets: ['latin'] });


export default function Experience() {
  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  return (<>
    <MotionSection
      id="experience"
      content={
        <>
          <Section
            title="Expériences"
            lgWidth="lg:w-[38rem]"
            xxlWidth="2xl:w-[51rem]"
            bgColor="bg-[#A8C9A0]"
            content={<ul className="flex flex-col">
              {experiences.map((experience) => (
                <li key={experience.name} className="flex mb-2 sm:mb-1">
                  {experience.category === 'school' ? (
                    <FaGraduationCap size={38} className="mx-[0.1rem] my-[-0.40rem] lg:mx-[0.25rem] lg:my-[-0.30rem] opacity-45 absolute" />
                  ) : (
                    <MdWork size={38} className="mx-[0.1rem] my-[-0.50rem] lg:mx-[0.25rem] lg:my-[-0.35rem] opacity-45 absolute" />
                  )}
                  <span className="font-bold text-base lg:text-lg min-w-[3.6rem] lg:min-w-[5rem]">{experience.year}</span>{" "}
                  <div className="flex flex-wrap flex-col">
                    <p className="font-bold">{experience.name}</p>
                    <p className="text-sm lg:text-base">{experience.description}</p>
                  </div>
                </li>
              ))}
            </ul>}
          />
          <CodeWrapper
            width="18rem"
            xxlWidth="21rem"
            content={
              <>
                <CodeBlock className='Experiences' selectedLanguage={selectedLanguage} />
                <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
              </>
            }
          />
        </>
      }

    />
  </>
  );
};