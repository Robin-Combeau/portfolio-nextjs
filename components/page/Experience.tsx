"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { experiences } from "@/lib/data";

import Section from '../Section';

const Experience = () => {
  return (
    <section id="experience">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Section
          title="Expériences"
          lgWidth="lg:w-[38rem]"
          bgColor="bg-[#A8C9A0]"
          content={
            <ul className="flex flex-col">
              {experiences.map((experience) => (
                <li key={experience.year} className="flex mb-2 sm:mb-1">
                  <span className="font-bold text-base lg:text-lg min-w-[3.6rem] lg:min-w-[5rem]">{experience.year}</span>{" "}
                  <div className="flex flex-wrap flex-col">
                    <p className="font-bold">{experience.name}</p>
                    <p className="text-base">{experience.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          }
        />
        <Section
          title="Contact"
          lgWidth="lg:w-[18rem]"
          bgColor="bg-[#A8C9A0]"
          content={
            ""
          }
        />
      </motion.div>
    </section>
  );
};

export default Experience;