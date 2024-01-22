"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from "@/lib/data";
import Link from 'next/link';

import { IoMdMoon } from "react-icons/io";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div className="fixed top-0 left-1/2 h-[6rem] w-full rounded-none border-2 border-[#161716] border-b-[6px] bg-[#EAF0EA] backdrop-blur-[0.5em] sm:top-6 sm:h-[3.6rem] sm:w-[40rem] sm:rounded-xl"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-base sm:w-[initial] sm:flex-nowrap sm:gap-[0.35em]">
          {links.map((link) =>
            <motion.li
              className="h-3/4 flex items-center justify-center relative font-semibold whitespace-nowrap text-base"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-4 py-3 hover:text-[#6A8A5D] transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          )}
        </ul>
      </nav>
      <motion.div
        className="flex fixed top-[0.15rem] right-20 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <button className="flex w-full items-center justify-center mx-2 p-1.5 py-1.5 transition font-bold border-2 border-[#161716] rounded-full">EN</button>
        <button className="flex w-full items-center justify-center mx-2 px-1.5 py-1.5 transition font-bold border-2 border-[#161716] rounded-full"><IoMdMoon size={24} /></button>
      </motion.div>
    </header>
  )
}
