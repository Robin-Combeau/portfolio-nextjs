"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';

import { IoMdMoon } from "react-icons/io";
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection} = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div className="fixed top-0 left-1/2 h-[5rem] w-full rounded-none border-2 border-[#161716] border-b-[6px] bg-[#EAF0EA] backdrop-blur-[0.5em] sm:top-4 lg:top-6 sm:h-[3rem] lg:h-[3.6rem] sm:w-[30rem] lg:w-[40rem] sm:rounded-xl diagonal-line-pattern"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.2rem] lg:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-neutral-600 text-base sm:text-sm lg:text-base sm:w-[initial] sm:flex-nowrap sm:gap-[0.1em] lg:gap-[0.35em] ">
          {links.map((link) =>
            <motion.li
              className="h-3/4 flex items-center justify-center relative font-semibold whitespace-nowrap"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx("flex w-full items-center justify-center mx-1 px-1 lg:mx-2 lg:px-2 my-1 py-1 lg:py-1.5 hover:text-[#161716] transition",
                  {
                    "text-[#161716] border-2 border-[#161716] border-b-[4px] rounded-xl bg-[#EAF0EA]": activeSection === link.name
                  }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
              </Link>
            </motion.li>
          )}
        </ul>
      </nav>
      {/* hidden pour le moment sur mobile */}
      <motion.div
        className="flex fixed top-[0.15rem] right-3 lg:right-20 py-2 sm:top-[1.2rem] lg:sm:top-[1.7rem] sm:py-0 lg:flex-row hidden sm:block lg:flex"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        {/* à dev : traduction et night mode */}
        {/* <button className="flex items-center justify-center h-8 w-8 lg:h-10 lg:w-10 sm:mx-2 mx-0.5 p-1.5 transition text-sm lg:text-base font-bold border-2 border-[#161716] rounded-full mb-1 lg:mb-2 bg-[#EAF0EA]">EN</button> */}
        {/* <button className="flex items-center justify-center h-8 w-8 lg:h-10 lg:w-10 sm:mx-2 mx-0.5 p-1.5 transition text-sm lg:text-base font-bold border-2 border-[#161716] rounded-full bg-[#EAF0EA]"><IoMdMoon size={24} /></button> */}
      </motion.div>
    </header>
  )
}
