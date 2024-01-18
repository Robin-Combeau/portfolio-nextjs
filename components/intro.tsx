"use client";

import React from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';

import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Intro() {
  return (
    <section id="home" className="mb-28 sm:mb-4">
      <motion.div
        className="flex items-center justify-center mb-28 sm:mb-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <div className="border-2 border-[#161716] border-b-[8px] bg-[#EAF0EA] text-2xl font-medium px-6 py-4 pr-12 rounded-xl sm:mx-4 sm:w-[30rem] sm:h-[13rem]">
          <span>Je m'appelle </span>
          <span className="font-black text-[#6A8A5D]">Robin</span>
          <span>. Je suis </span>
          <span className="font-black text-[#6A8A5D]">développeur fullstack </span>
          <span>depuis </span>
          <span className="font-black text-[#6A8A5D]">4 ans</span>.
          <br /><br />
          Mes domaines de prédilection sont <span className="font-black text-[#6A8A5D]">PHP (Laravel)</span> et <span className="font-black text-[#6A8A5D]">Javascript (React.js)</span>.
        </div>
        <div className="border-2 border-[#161716] border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-8 rounded-xl opacity-60 whitespace-pre-wrap diagonal-line-pattern sm:mx-4 sm:w-[23rem] sm:h-[13rem] ">
          <code>
{`class Person { 
  constructor() {   
    this.name = `}
            <span className="font-bold">"Robin Combeau"</span>;
            {`
    this.languages = ["`}
            <span className="font-bold">Javascript</span>
            {`", "`}
            <span className="font-bold">PHP</span>
            {`"];
    this.age = new Date().getFullYear() - 1994
  }
}`};
          </code>
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium sm:gap-6">
        <Link href="#contact" className="border-2 border-[#161716] border-b-[6px] bg-[#EAF0EA] text-base font-bold px-7 py-3 flex items-center gap-2 rounded-xl outline-none hover:bg-[#6A8A5D] transition">
          Me contacter
        </Link>

        <a className="border-2 border-[#161716] border-b-[6px] bg-[#EAF0EA] text-base font-bold px-7 py-3 flex items-center gap-2 rounded-xl outline-none hover:bg-[#6A8A5D] transition" href="/CV.pdf" download>
          Télécharger mon CV
        </a>

        <a className="bg-black p-4 text-white flex items-center rounded-full" href="https://linkedin.com" target="_blank">
          <FaLinkedin size={24} />
        </a>

        <a className="bg-black p-4 text-white flex items-center rounded-full" href="https://github.com" target="_blank">
          <FaGithub size={24} />
        </a>

        <a className="bg-black p-4 text-white flex items-center rounded-full" href="https://github.com" target="_blank">
          <FaDribbble size={24} />
        </a>
      </div>
    </section>
  )
}
