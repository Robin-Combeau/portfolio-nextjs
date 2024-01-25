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

  const levels = skills.map((level) => level.value);
  const items = skills.map((level) => level.list);

  return (
    <section id="about">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="relative border-2 border-neutral-500 text-neutral-500 border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-4 rounded-xl whitespace-pre-wrap diagonal-line-pattern mx-8 lg:mx-4 w-[18rem] lg:h-[21rem] hidden lg:block">
          <code className={`${code.className} tracking-tighter`}>
            {selectedLanguage === 'Javascript' ? (
              <span>
                class About {'{'}
                {'\n  '}constructor() {'{'}
                {'\n    '}this.education = "Ingénieur";
                {'\n    '}this.hobbies = ["Code", "Volley-ball", "Musique", "Jeux"];
                {'\n  '}{'}'}
                {'\n'}{'}'}
              </span>
            ) : (
              <span>
                class About {'{'}
                {'\n  '}public function __construct() {'{'}
                {'\n    '}$this-{'>'}education = "Ingénieur";
                {'\n    '}$this-{'>'}hobbies = ["Code", "Volley-ball", "Musique", "Jeux"];
                {'\n  '}{'}'}
                {'\n'}{'}'}
              </span>
            )}
          </code>
          <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
        </div>

        <Section
          title="À propos"
          lgWidth="lg:w-[38rem]"
          lgHeight="lg:h-[21rem]"
          bgColor="bg-[#A8C9A0]"
          content={
            <div className="flex flex-col text-sm break-words">
              <span className="mb-3 break-words">Après mon diplôme d'ingénieur en agronomie spécialisé dans les nouvelles technologies, j'ai décidé de poursuivre ma passion grandissante pour la programmation. Après une POEI, j'ai commencé à développeur fullstack et cela fait plus de 4 ans aujourd'hui.</span>
              <span className="mb-3">Ce que j'apprécie dans la programmation c'est la résolution de problème et de toujours essayer de trouver la solution la plus optimale. Aujourd'hui, mes frameworks de prédilection sont Laravel et ReactJS/NextJS. J'ai aussi pu travailler sur de nombreuses autres technos comme du PHP natif, jQuery, Node.JS, du Java, du C# et bien d'autres.</span>
              <span className="mb-3">En dehors du code, j'ai d'autres passions comme le volley-ball, la musique et les jeux-vidéos. Même dans ma vie personnelle, je souhaite toujours apprendre des nouvelles choses.</span>
            </div>
          }
        />
      </motion.div>
    </section>
  );
};

export default About;

{/* <div className="border-2 border-[#161716] border-b-[8px] bg-[#A8C9A0] text-lg lg:text-xl font-medium px-6 py-4 lg:px-8 lg:py-6 rounded-xl mx-[10%] lg:mx-4 lg:w-[38rem] h-auto lg:h-[21rem]">
          <h1 className="font-bold mb-6 text-2xl">À propos</h1>
          <div className="flex flex-col text-sm break-words">
            <span className="mb-3 break-words">Après mon diplôme d'ingénieur en agronomie spécialisé dans les nouvelles technologies, j'ai décidé de poursuivre ma passion grandissante pour la programmation. Après une POEI, j'ai commencé à développeur fullstack et cela fait plus de 4 ans aujourd'hui.</span>
            <span className="mb-3">Ce que j'apprécie dans la programmation c'est la résolution de problème et de toujours essayer de trouver la solution la plus optimale. Aujourd'hui, mes frameworks de prédilection sont Laravel et ReactJS/NextJS. J'ai aussi pu travailler sur de nombreuses autres technos comme du PHP natif, jQuery, Node.JS, du Java, du C# et bien d'autres.</span>
            <span className="mb-3">En dehors du code, j'ai d'autres passions comme le volley-ball, la musique et les jeux-vidéos. Même dans ma vie personnelle, je souhaite toujours apprendre des nouvelles choses.</span>
          </div>
        </div> */}