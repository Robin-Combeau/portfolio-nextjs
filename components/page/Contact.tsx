"use client";

import React, { useEffect, useState } from 'react';

import { Roboto_Mono } from 'next/font/google';
import LanguageSelector from '../CodeLanguageSelector';
import Section from '../Section';
import CodeWrapper from '../CodeWrapper';
import CodeBlock from '../CodeBlock';
import MotionSection from '../MotionSection';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { sendEmail } from "@/actions/sendEmail"
import { useFormStatus } from 'react-dom';
const code = Roboto_Mono({ subsets: ['latin'] });

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 1
  });
  const { setActiveSection } = useActiveSectionContext();
  const { pending } = useFormStatus();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);
  
  const [selectedLanguage, setSelectedLanguage] = useState<'Javascript' | 'PHP'>('Javascript');

  const handleLanguageChange = (language: 'Javascript' | 'PHP') => {
    setSelectedLanguage(language);
  };

  return (
    <MotionSection
      id="contact"
      ref={ref}
      content={
        <>
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
              <form
              className="flex flex-col text-base"
              action={(formData) =>{
                sendEmail(formData);

              }}
              >
                <input
                  className="h-14 border-2 border-[#161716] bg-[#EAF0EA] border-b-[6px] px-5 py-3 rounded-xl my-2 focus:outline-none"
                  name="email"
                  type="email"
                  title="Renseignez votre adresse mail."
                  required
                  maxLength={500}
                  placeholder="Votre adresse mail"
                />
                <textarea
                  className="h-44 border-2 border-[#161716] bg-[#EAF0EA] border-b-[6px] px-5 py-3 rounded-xl my-2 resize-none	focus:outline-none"
                  name="message"
                  title="Ecrivez votre message."
                  placeholder="Votre message"
                  required
                  maxLength={4000}
                />
                <button
                  className="border-2 border-[#161716] bg-[#EAF0EA] border-b-[6px] px-3 py-3 rounded-xl my-2 focus:outline-none flex items-center justify-center gap-2 h-[3rem] w-[7rem] hover:bg-[#C48976] transition self-end font-semibold"
                  type="submit"
                  title="Envoyer">
                  Envoyer
                </button>
              </form>
            }
          />
        </>
      }
    />
  );
};