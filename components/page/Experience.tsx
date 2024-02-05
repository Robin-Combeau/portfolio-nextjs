"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { experiences } from "@/lib/data";

import Section from '../Section';
import LanguageSelector from '../CodeLanguageSelector';
import { Roboto_Mono } from 'next/font/google'
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
        
        <div className="relative border-2 border-neutral-500 text-neutral-500 border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-4 rounded-xl whitespace-pre-wrap diagonal-line-pattern mx-8 lg:mx-4 w-[18rem] lg:self-stretch 2xl:w-[21rem] hidden lg:block">
          <code className={`${code.className} tracking-tighter`}>
            {selectedLanguage === 'Javascript' ? (
              <span>
                class Experiences {'{'}
                {'\n  '}constructor() {'{'}
                {'\n    '}this.education = ["Montpellier SupAgro", "IUT de la Réunion"];
                {'\n    '}this.companies = ["Septeo", "Sopra Steria", "Hiphen"];
                {'\n    '}this.experienceAsDeveloper = new Date().getFullYear() - 2019;
                {'\n  '}{'}'}
                {'\n'}{'}'}
              </span>
            ) : (
              <span>
                class Experiences {'{'}
                {'\n  '}public function __construct() {'{'}
                {'\n    '}$this-{'>'}education = ["Montpellier SupAgro", "IUT de la Réunion"];
                {'\n    '}$this-{'>'}companies = ["Septeo", "Sopra Steria", "Hiphen"];
                {'\n    '}$this-{'>'}experienceAsDeveloper = date("Y") - 2019;
                {'\n  '}{'}'}
                {'\n'}{'}'}
              </span>
            )}
          </code>
          <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;