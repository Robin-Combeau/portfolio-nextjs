"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { experiences } from "@/lib/data";

import Section from '../Section';
import LanguageSelector from '../CodeLanguageSelector';
import { Roboto_Mono } from 'next/font/google'
import CodeBlock from '../CodeBlock';
import CodeWrapper from '../CodeWrapper';
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from "react-icons/md";
const code = Roboto_Mono({ subsets: ['latin'] });


const Experience = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  return (
    <section id="experience">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Section
          title="Expériences"
          lgWidth="lg:w-[38rem]"
          xxlWidth="2xl:w-[51rem]"
          bgColor="bg-[#A8C9A0]"
          content={
            <ul className="flex flex-col">
              {experiences.map((experience) => (
                <li key={experience.year} className="flex mb-2 sm:mb-1">
                  {experience.category === 'school' ? (
                    <FaGraduationCap size={38} className="mx-[0.25rem] my-[-0.30rem] opacity-45 absolute" />
                  ) : (
                    <MdWork size={38} className=" mx-[0.25rem] my-[-0.35rem] opacity-45 absolute" />
                  )}
                  <span className="font-bold text-base lg:text-lg min-w-[3.6rem] lg:min-w-[5rem]">{experience.year}</span>{" "}
                  <div className="flex flex-wrap flex-col">
                    <p className="font-bold">{experience.name}</p>
                    <p className="text-sm lg:text-base">{experience.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          }
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
      </motion.div>
    </section>
  );
};

export default Experience;