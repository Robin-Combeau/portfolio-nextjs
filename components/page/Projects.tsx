"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Section from '../Section'
import Skill from '../Skill'
import hearthdleLogo from '../../public/images/hearthdle_logo.webp';
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Section
          title="Projets"
          lgWidth="lg:w-[58rem]"
          bgColor="bg-[#ECB5A3]"
          content={
            <div className="flex flex-wrap justify-center">

              <div className="border-2 border-[#161716] border-b-[6px] w-full lg:w-[46%] h-auto lg:h-[14rem] mb-4 lg:mr-5 bg-[#EAF0EA] p-4 px-6 rounded-xl flex flex-col lg:flex-row relative overflow-hidden">
                <div className="lg:w-[auto] relative z-10">
                  <div className="flex items-center mb-2">
                    <h2 className="font-bold mb-2 mr-2 text-xl">Hearthdle</h2>
                    <a className="text-[#161716] hover:text-[#ECB5A3] mx-1 mb-[8px]" href="http://github.com" target="_blank">
                      <FaGithub size={24} className='' />
                    </a>
                    <a className="text-[#161716] hover:text-[#ECB5A3] mx-1 mb-[8px]" href="http://github.com" target="_blank">
                      <FiExternalLink size={24} className='' />
                    </a>
                  </div>

                  <div className="flex flex-col text-sm break-words">
                    <p className="mb-3 break-words">Jeu de devinettes basé sur le jeu de carte Hearthstone.</p>
                  </div>

                  <div className="flex flex-wrap bottom-0 absolute">
                    <Skill skill="Laravel" lgTextSize="lg:text-sm" />
                    <Skill skill="React.js" lgTextSize="lg:text-sm" />
                    <Skill skill="Tailwind" lgTextSize="lg:text-sm" />
                  </div>
                </div>
              </div>

              <div className="border-2 border-[#161716] border-b-[6px] w-full lg:w-[46%] h-auto lg:h-[14rem] mb-4 lg:ml-5 bg-[#EAF0EA] p-4 px-6 rounded-xl flex flex-col lg:flex-row relative overflow-hidden">
                <div className="lg:w-[auto] relative z-10">
                  <div className="flex items-center mb-2">
                    <h2 className="font-bold mb-2 mr-2 text-xl">Ce portfolio</h2>
                    <a className="text-[#161716] hover:text-[#ECB5A3] mx-1 mb-[8px]" href="http://github.com" target="_blank">
                      <FaGithub size={24} className='' />
                    </a>
                  </div>

                  <div className="flex flex-col text-sm break-words">
                    <p className="mb-3 break-words">Le site web sur lequel vous êtes actuellement.</p>
                  </div>

                  <div className="flex flex-wrap bottom-0 absolute">
                    <Skill skill="Next.js" lgTextSize="lg:text-sm" />
                    <Skill skill="Tailwind" lgTextSize="lg:text-sm" />
                    <Skill skill="Typescript" lgTextSize="lg:text-sm" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </motion.div>
    </section>
  )
}

export default Projects