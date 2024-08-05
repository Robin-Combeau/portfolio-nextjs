"use client";

import React, { useEffect, useState } from 'react';

import { Roboto_Mono } from 'next/font/google';
import LanguageSelector from '../CodeLanguageSelector';
import Section from '../Section';
import CodeBlock from '../CodeBlock';
import CodeWrapper from '../CodeWrapper';
import MotionSection from '../MotionSection';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
const code = Roboto_Mono({ subsets: ['latin'] });

export default function About() {
  const { ref, inView } = useInView({
    threshold: 1
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("À propos");
    }
  }, [inView, setActiveSection]);

  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  return (
    <MotionSection
      id="about"
      ref={ref}
      content={
        <>
          <CodeWrapper
            width="18rem"
            xxlWidth="21rem"
            content={
              <>
                <CodeBlock className='About' selectedLanguage={selectedLanguage} />
                <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
              </>
            }
          />

          <Section
            title="À propos"
            lgWidth="lg:w-[38rem]"
            xxlWidth="2xl:w-[51rem]"
            bgColor="bg-[#A8C9A0]"
            content={
              <div className="flex flex-col text-sm break-words text-justify">
                <span className="mb-3">Après mon diplôme d'ingénieur en agronomie spécialisé dans les nouvelles technologies, j'ai décidé de poursuivre ma passion grandissante pour la programmation. Cela fait { new Date().getFullYear() - 2019 } ans aujourd'hui que j'exerce ce métier.</span>
                <span className="mb-3">Ce que j'apprécie dans la programmation c'est la résolution de problème et de toujours essayer de trouver la solution la plus optimale. Mes langages de prédilection sont PHP (Laravel) et Javascript (ReactJS). J'ai aussi pu travailler sur de nombreux autres frameworks et technologies comme Vue, Symfony, Svelte, Java ... etc.</span>
                <span className="mb-3">En dehors du code, j'ai d'autres passions comme le volley-ball, la musique et les jeux en tout genre. Même dans ma vie personnelle, je souhaite toujours apprendre et découvrir de nouvelles choses.</span>
              </div>
            }
          />
        </>
      }
    />
  );
};

{/* <div className="border-2 border-[#161716] border-b-[8px] bg-[#A8C9A0] text-lg lg:text-xl font-medium px-6 py-4 lg:px-8 lg:py-6 rounded-xl mx-[10%] lg:mx-4 lg:w-[38rem] h-auto lg:h-[21rem]">
          <h1 className="font-bold mb-6 text-2xl">À propos</h1>
          <div className="flex flex-col text-sm break-words">
            <span className="mb-3 break-words">Après mon diplôme d'ingénieur en agronomie spécialisé dans les nouvelles technologies, j'ai décidé de poursuivre ma passion grandissante pour la programmation. Après une POEI, j'ai commencé à développeur fullstack et cela fait plus de 4 ans aujourd'hui.</span>
            <span className="mb-3">Ce que j'apprécie dans la programmation c'est la résolution de problème et de toujours essayer de trouver la solution la plus optimale. Aujourd'hui, mes frameworks de prédilection sont Laravel et ReactJS/NextJS. J'ai aussi pu travailler sur de nombreuses autres technos comme du PHP natif, jQuery, Node.JS, du Java, du C# et bien d'autres.</span>
            <span className="mb-3">En dehors du code, j'ai d'autres passions comme le volley-ball, la musique et les jeux-vidéos. Même dans ma vie personnelle, je souhaite toujours apprendre des nouvelles choses.</span>
          </div>
        </div> */}