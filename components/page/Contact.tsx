"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'

import { FaPaperPlane, FaRegStar } from "react-icons/fa";
import { skills } from "@/lib/data";

import { Roboto_Mono } from 'next/font/google';
import LanguageSelector from '../CodeLanguageSelector';
import Section from '../Section';
import CodeWrapper from '../CodeWrapper';
import CodeBlock from '../CodeBlock';
const code = Roboto_Mono({ subsets: ['latin'] });

const Contact = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  return (
    <section id="contact">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <CodeWrapper
          width="18rem"
          xxlWidth="21rem"
          content={
            <>
              <CodeBlock className='Contact' selectedLanguage={selectedLanguage} />
              <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
            </>
          }
        />
      
        <Section
          title="Contact"
          lgWidth="lg:w-[38rem]"
          xxlWidth="2xl:w-[51rem]"
          bgColor="bg-[#ECB5A3]"
          content={
            <form className="flex flex-col text-base">
              <input
                className="h-14 border-2 border-[#161716] bg-[#EAF0EA] border-b-[6px] px-5 py-3 rounded-xl my-2 focus:outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Votre adresse mail"
              />
              <textarea
                className="h-44 border-2 border-[#161716] bg-[#EAF0EA] border-b-[6px] px-5 py-3 rounded-xl my-2 resize-none	focus:outline-none"
                name="message"
                placeholder="Votre message"
                required
                maxLength={4000}
              />
              <button type="submit" className="border-2 border-[#161716] bg-[#EAF0EA] border-b-[6px] px-3 py-3 rounded-xl my-2 focus:outline-none flex items-center justify-center gap-2 h-[3rem] w-[7rem] hover:bg-[#C48976] transition self-end">
                Envoyer
              </button>
            </form>
          }
        />
      </motion.div>
    </section>
  );
};

export default Contact;