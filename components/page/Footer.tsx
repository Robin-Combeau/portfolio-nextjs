"use client";

import { motion } from 'framer-motion'
import React from 'react'
import { FaCopyright } from 'react-icons/fa'

export default function Footer() {
  return (
    <section id="footer">
      <motion.div
        className="flex flex-col items-center justify-center text-sm mb-2"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
      >
        <div className="flex items-center">
          <span>Fait avec </span>
          <a href="https://nextjs.org/" className="ml-1">
            Next.js
          </a>
        </div>
        <div className="flex items-center">
          <FaCopyright className="mr-0.5" size={12} />
          {new Date().getFullYear()} - Robin Combeau
        </div>
      </motion.div>
    </section >
  )
}