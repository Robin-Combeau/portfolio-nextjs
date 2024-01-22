"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'

import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";

import { Roboto_Mono } from 'next/font/google';
import SocialButton from '../SocialButton';
import LinkButton from '../LinkButton';

const code = Roboto_Mono({ subsets: ['latin'] });

export default function Intro() {
  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  return (
    <section id="intro" className="mb-28 sm:mb-4">
      <motion.div
        className="flex items-center justify-center mb-28 sm:mb-8"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <div className="border-2 border-[#161716] border-b-[8px] bg-[#A8C9A0] text-2xl font-medium px-6 py-4 pr-14 rounded-xl sm:mx-4 sm:w-[31rem] sm:h-[13rem]">
          <span>Je m'appelle </span>
          <span className="font-bold">Robin</span>
          <span>. Je suis </span>
          <span className="font-bold">développeur fullstack </span>
          <span>depuis </span>
          <span className="font-bold">4 ans</span>.
          <br /><br />
          Mes domaines de prédilection sont <span className="font-bold">PHP (Laravel)</span> et <span className="font-bold">Javascript (React.js)</span>.
        </div>
        <div className="relative border-2 border-neutral-500 text-neutral-500 border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-4 rounded-xl whitespace-pre-wrap diagonal-line-pattern sm:mx-4 sm:w-[25rem] sm:h-[13rem] ">
          <code className={`${code.className} tracking-tighter`}>
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

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-base font-semibold sm:gap-6"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <LinkButton href="#contact" backgroundColor='bg-[#A8C9A0]' content="Me contacter" />
        <LinkButton href="/CV.pdf" download content="Télécharger mon CV" />

        <SocialButton href={"https://linkedin.com"} icon={<FaLinkedin />} size={24} />
        <SocialButton href={"https://github.com"} icon={<FaGithub />} size={24} />
        <SocialButton href={"https://dribbble.com"} icon={<FaDribbble />} size={24} />
      </motion.div>
    </section>
  )
}
