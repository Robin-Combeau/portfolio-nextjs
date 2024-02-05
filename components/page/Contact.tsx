"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'

import { FaPaperPlane, FaRegStar } from "react-icons/fa";
import { skills } from "@/lib/data";

import { Roboto_Mono } from 'next/font/google';
import LanguageSelector from '../CodeLanguageSelector';
import Section from '../Section';
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
        <div className="relative border-2 border-neutral-500 text-neutral-500 border-b-[8px] bg-[#EAF0EA] text-sm font-medium px-4 py-4 pr-4 rounded-xl whitespace-pre-wrap diagonal-line-pattern mx-8 lg:mx-4 w-[18rem] lg:self-stretch 2xl:w-[23rem] hidden lg:block">
          <code className={`${code.className} tracking-tighter`}>
            {selectedLanguage === 'Javascript' ? (
              <span>
                class Mail {'{'}
                {'\n  '}constructor() {'{'}
                {'\n    '}this.emailInput = "";
                {'\n    '}this.messageTextArea = "";
                {'\n  '}{'}'}
                {'\n  '}validateEmail(email) {'{'}
                {'\n    '}{'...'}
                {'\n  '}{'}'}
                {'\n  '}sendMessage(email, message) {'{'}
                {'\n    '}{'...'}
                {'\n  '}{'}'}
                {'\n'}{'}'}
              </span>
            ) : (
              <span>
                class Mail {'{'}
                {'\n  '}public $emailInput;
                {'\n  '}public $messageTextArea;
                {'\n'}
                {'\n  '}public function __construct() {'{'}
                {'\n    '}$this-{'>'}emailInput = "";
                {'\n    '}$this-{'>'}messageTextArea = "";
                {'\n  '}{'}'}
                {'\n  '}public function validateEmail($email) {'{'}
                {'\n    '}{'...'}
                {'\n  '}{'}'}
                {'\n  '}public function ($email, $message) {'{'}
                {'\n    '}{'...'}
                {'\n  '}{'}'}
                {'\n'}{'}'}
              </span>
            )}
          </code>
          <LanguageSelector selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
        </div>

        <Section
          title="Contact"
          lgWidth="lg:w-[38rem]"
          xxlWidth="2xl:w-[49rem]"
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
              <button type="submit" className="border-2 border-[#161716] bg-[#EAF0EA] border-b-[6px] px-3 py-3 rounded-xl my-2 focus:outline-none flex items-center justify-center gap-2 h-[3rem] w-[8rem] self-end">
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