"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";

import { Roboto_Mono } from 'next/font/google';
import SocialButton from '../SocialButton';
import LinkButton from '../LinkButton';
import LanguageSelector from '../CodeLanguageSelector';
import CodeBlock from '../CodeBlock';
import CodeWrapper from '../CodeWrapper';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

const code = Roboto_Mono({ subsets: ['latin'] });

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 1
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Accueil");
    }
  }, [inView, setActiveSection]);

  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  return (
    <section id="home" className="scroll-mt-40">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        ref={ref}>
        <div className="border-2 border-[#161716] border-b-[8px] bg-[#A8C9A0] text-xl lg:text-2xl font-medium px-6 py-4 pr-14 rounded-xl mx-[10%] w-4/5 lg:mx-4 lg:w-[31rem] h-auto lg:self-stretch 2xl:w-[42rem]">
          <span>Je m'appelle </span>
          <span className="font-bold">Robin</span>
          <span>. Je suis </span>
          <span className="font-bold">développeur fullstack </span>
          <span>depuis </span>
          <span className="font-bold">{ new Date().getFullYear() - 2020 } ans</span>.
          <br /><br />
          Mes domaines de prédilection sont <span className="font-bold">PHP (Laravel)</span> et <span className="font-bold">Javascript (React.js)</span>.
        </div>
        <CodeWrapper
          width="25rem"
          xxlWidth="30rem"
          content={
            <>
              <CodeBlock className='Person' selectedLanguage={selectedLanguage} />
              <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
            </>
          }
        />
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-2 px-4 mb-10 text-base font-semibold sm:gap-6"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <div className="flex gap-6 my-1 sm:my-0 m:gap-6">
          <LinkButton href="#contact" backgroundColor='bg-[#A8C9A0]' content="Me contacter" />
          <LinkButton href="/files/CV-2023.pdf" backgroundColor='bg-[#ECB5A3]' hoverBackgroundColor='hover:bg-[#C48976]' download content="Télécharger mon CV" />
        </div>

        <div className="flex gap-4 my-1 sm:my-0 sm:gap-6">
          <SocialButton href={"https://www.linkedin.com/in/robin-combeau"} icon={<FaLinkedin />} size={24} />
          <SocialButton href={"https://github.com/Robin-Combeau"} icon={<FaGithub />} size={24} />
          <SocialButton href={"https://dribbble.com/robin-combeau"} icon={<FaDribbble />} size={24} />
        </div>
      </motion.div>
    </section>
  )
}


{/* <code className={`${code.className} tracking-tighter`}>
            {selectedLanguage === 'Javascript' ? (
              <span>
                class Person {'{'}
                {'\n  '}constructor() {'{'}
                {'\n    '}this.name = "<span className="font-bold underline">Robin Combeau</span>";
                {'\n    '}this.languages = ["<span className="font-bold underline">Javascript</span>", "<span className="font-bold underline">PHP</span>"];
                {'\n    '}this.age = new Date().getFullYear() - 1994;
                {'\n  '}{'}'}
                {'\n'}{'}'}
              </span>
            ) : (
              <span>
                class Person {'{'}
                {'\n  '}public function __construct() {'{'}
                {'\n    '}$this-{'>'}name = "<span className="font-bold underline">Robin Combeau</span>";
                {'\n    '}$this-{'>'}languages = ["<span className="font-bold underline">Javascript</span>", "<span className="font-bold underline">PHP</span>"];
                {'\n    '}$this-{'>'}age = date("Y") - 1994;
                {'\n  '}{'}'}
                {'\n'}{'}'}
              </span>
            )}
          </code> */}