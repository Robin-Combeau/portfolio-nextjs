"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'

import { FaRegStar } from "react-icons/fa";
import { skills } from "@/lib/data";

import { Roboto_Mono } from 'next/font/google';
import LanguageSelector from '../CodeLanguageSelector';
import Section from '../Section';
const code = Roboto_Mono({ subsets: ['latin'] });

const About = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  return (
    <section id="about">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="relative border-2 border-neutral-500 text-neutral-500 border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-4 rounded-xl whitespace-pre-wrap diagonal-line-pattern mx-8 lg:mx-4 w-[18rem] lg:self-stretch 2xl:w-[23rem] hidden lg:block">
          <code className={`${code.className} tracking-tighter`}>
            {selectedLanguage === 'Javascript' ? (
              <span>
                {/* class About {'{'}
                {'\n  '}constructor() {'{'}
                {'\n    '}this.education = "Ingénieur";
                {'\n    '}this.hobbies = ["Code", "Volley-ball", "Musique", "Jeux"];
                {'\n  '}{'}'}
                {'\n'}{'}'} */}
              </span>
            ) : (
              <span>
                {/* class About {'{'}
                {'\n  '}public function __construct() {'{'}
                {'\n    '}$this-{'>'}education = "Ingénieur";
                {'\n    '}$this-{'>'}hobbies = ["Code", "Volley-ball", "Musique", "Jeux"];
                {'\n  '}{'}'}
                {'\n'}{'}'} */}
              </span>
            )}
          </code>
          {/* <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} /> */}
        </div>

        <Section
          title="Contact"
          lgWidth="lg:w-[38rem]"
          xxlWidth="2xl:w-[49rem]"
          bgColor="bg-[#ECB5A3]"
          content={
            ""
          }
        />
      </motion.div>
    </section>
  );
};

export default About;